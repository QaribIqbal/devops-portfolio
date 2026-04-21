"use client";

type EventValue = string | number | boolean | undefined;

type EventProperties = Record<string, EventValue>;

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: EventProperties }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, properties?: EventProperties) {
  if (typeof window === "undefined") {
    return;
  }

  // Setup note:
  // - Plausible: load script globally and use window.plausible.
  // - GA4: initialize gtag globally and this helper will send events to window.gtag.
  // - Custom: listen for "site:track" events on window.
  const cleanProps = Object.fromEntries(
    Object.entries(properties ?? {}).filter(([, value]) => value !== undefined),
  );

  try {
    window.plausible?.(eventName, { props: cleanProps });
  } catch {
    // Analytics should never block user actions.
  }

  try {
    window.gtag?.("event", eventName, cleanProps);
  } catch {
    // Analytics should never block user actions.
  }

  try {
    window.dispatchEvent(
      new CustomEvent("site:track", {
        detail: {
          event: eventName,
          properties: cleanProps,
          timestamp: Date.now(),
        },
      }),
    );
  } catch {
    // Custom listeners are optional.
  }
}

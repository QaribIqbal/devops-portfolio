"use client";

/*
  Analytics setup
  TODO: Add your Plausible or GA4 tracking ID in <head>
  TODO: Add your Plausible or GA4 tracking ID below
  For Plausible: Add <script defer data-domain="qaribiqbal.netlify.app" src="https://plausible.io/js/script.js"></script> to <head>
  For GA4: Add your gtag script to <head> and replace 'GA_MEASUREMENT_ID' below
*/
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

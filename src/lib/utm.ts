"use client";

const UTM_STORAGE_KEY = "site-utm-params";

const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "li_fat_id",
] as const;

type TrackingKey = (typeof TRACKING_KEYS)[number];

export type UtmValues = Partial<Record<TrackingKey, string>>;

function isSupportedStorage() {
  return typeof window !== "undefined" && typeof window.sessionStorage !== "undefined";
}

export function readTrackingParams(searchParams: URLSearchParams): UtmValues {
  const values: UtmValues = {};

  for (const key of TRACKING_KEYS) {
    const value = searchParams.get(key);
    if (value) {
      values[key] = value;
    }
  }

  return values;
}

export function persistUtmParams(values: UtmValues) {
  if (!isSupportedStorage()) {
    return;
  }

  const existing = getStoredUtmParams();
  const merged = { ...existing, ...values };

  if (Object.keys(merged).length === 0) {
    return;
  }

  window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged));
}

export function getStoredUtmParams(): UtmValues {
  if (!isSupportedStorage()) {
    return {};
  }

  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw) as UtmValues;
    return parsed ?? {};
  } catch {
    return {};
  }
}

export function captureCurrentUtmParams() {
  if (typeof window === "undefined") {
    return;
  }

  const current = readTrackingParams(new URLSearchParams(window.location.search));
  if (Object.keys(current).length > 0) {
    persistUtmParams(current);
  }
}

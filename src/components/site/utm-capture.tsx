"use client";

import { useEffect } from "react";

import { captureCurrentUtmParams } from "@/lib/utm";

export function UtmCapture() {
  useEffect(() => {
    captureCurrentUtmParams();
  }, []);

  return null;
}

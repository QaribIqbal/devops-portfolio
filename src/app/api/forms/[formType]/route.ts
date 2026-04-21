import { NextResponse } from "next/server";

type FormType = "checklist" | "audit";

// TODO: Replace YOUR_FORM_ID with your real Formspree form ID
const checklistFallback = "https://formspree.io/f/YOUR_FORM_ID";
// TODO: Replace YOUR_AUDIT_FORM_ID with your real Formspree audit form ID
const auditFallback = "https://formspree.io/f/YOUR_AUDIT_FORM_ID";

const sharedEndpoint = process.env.FORMS_ENDPOINT ?? process.env.NEXT_PUBLIC_FORMS_ENDPOINT;

const endpointByType: Record<FormType, string | undefined> = {
  checklist:
    process.env.CHECKLIST_FORM_ENDPOINT ??
    process.env.NEXT_PUBLIC_CHECKLIST_FORM_ENDPOINT ??
    sharedEndpoint ??
    checklistFallback,
  audit:
    process.env.AUDIT_FORM_ENDPOINT ??
    process.env.NEXT_PUBLIC_AUDIT_FORM_ENDPOINT ??
    sharedEndpoint ??
    auditFallback,
};

function toFormBody(payload: unknown) {
  const formData = new URLSearchParams();
  if (!payload || typeof payload !== "object") {
    return formData;
  }

  for (const [key, value] of Object.entries(payload)) {
    if (value === undefined || value === null) {
      continue;
    }

    if (typeof value === "object") {
      formData.append(key, JSON.stringify(value));
      continue;
    }

    formData.append(key, String(value));
  }

  return formData;
}

export async function POST(
  request: Request,
  context: { params: Promise<{ formType: string }> },
) {
  const { formType } = await context.params;

  if (formType !== "checklist" && formType !== "audit") {
    return NextResponse.json({ error: "Invalid form type" }, { status: 404 });
  }

  const endpoint = endpointByType[formType as FormType];
  if (!endpoint || endpoint.includes("YOUR_FORM_ID") || endpoint.includes("YOUR_AUDIT_FORM_ID")) {
    // Owner setup note: point this to Formspree, Basin, Tally, Airtable automation,
    // Supabase edge function, or your own endpoint in env variables.
    return NextResponse.json(
      {
        error:
          "Form endpoint is not configured. Set CHECKLIST_FORM_ENDPOINT and AUDIT_FORM_ENDPOINT, or set FORMS_ENDPOINT.",
      },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const submitMode = process.env.FORM_SUBMIT_CONTENT_TYPE === "form" ? "form" : "json";
  const upstreamResponse = await fetch(
    endpoint,
    submitMode === "json"
      ? {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
          cache: "no-store",
        }
      : {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
          body: toFormBody(payload).toString(),
          cache: "no-store",
        },
  );

  if (!upstreamResponse.ok) {
    const errorText = await upstreamResponse.text();
    return NextResponse.json(
      {
        error: "Failed to submit form",
        details: errorText || `Upstream responded with ${upstreamResponse.status}`,
      },
      { status: upstreamResponse.status },
    );
  }

  return NextResponse.json({ ok: true });
}

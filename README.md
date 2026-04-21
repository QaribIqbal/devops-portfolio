# AI Portfolio - Conversion-Focused Agency Landing Site

This is a Next.js site for Qarib Iqbal, positioned as an AI Automation Specialist for lean marketing agencies.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Form endpoint setup (required)

The site submits both forms through a local relay route:
- `POST /api/forms/checklist`
- `POST /api/forms/audit`

Those relay routes forward to your real form backend (Formspree, Basin, Tally webhook, Airtable automation webhook, Supabase function, etc.).

### 1. Create local env file

```bash
cp .env.local.example .env.local
```

### 2. Set endpoints in `.env.local`

Option A: separate endpoints per form

```bash
CHECKLIST_FORM_ENDPOINT=https://your-provider.example/checklist
AUDIT_FORM_ENDPOINT=https://your-provider.example/audit
```

Option B: one shared endpoint for both forms

```bash
FORMS_ENDPOINT=https://your-provider.example/forms
```

Optional payload mode:

```bash
# json (default) or form
FORM_SUBMIT_CONTENT_TYPE=json
```

### 3. Restart dev server

```bash
npm run dev
```

## Form payload fields

Checklist form sends:
- `name`
- `email`
- `agencySize`
- `biggestBottleneck`
- `formType=checklist`
- `submittedAt`
- `pagePath`
- `utm` (object)

Audit form sends:
- `name`
- `email`
- `agencySize`
- `primaryServices`
- `biggestPain`
- `timeline`
- `formType=audit`
- `submittedAt`
- `pagePath`
- `utm` (object)

## Tracking events

The frontend emits events through `src/lib/analytics.ts` and fails silently if analytics is not installed.

Primary events:
- `hero_checklist_click`
- `hero_audit_click`
- `checklist_form_start`
- `checklist_form_submit`
- `audit_form_start`
- `audit_form_submit`
- `calendly_click`
- `linkedin_outbound_click`

## Build

```bash
npm run build
```

import { Linkedin } from "lucide-react";

import { ButtonLink } from "@/components/site/button-link";
import { siteConfig } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="section-frame border-t border-[color:var(--line)] pb-10 pt-14">
      <div className="shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <p className="section-eyebrow">For Lean Marketing Agencies</p>
          <h2 className="max-w-xl text-[clamp(1.8rem,2.8vw,2.7rem)] font-semibold tracking-[-0.045em] text-[color:var(--text-main)]">
            Cleaner systems beat more software.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--text-muted)]">
            Start with the checklist to identify your highest-value bottleneck, then move to an
            audit when you are ready to fix it.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/checklist" trackingEvent="footer_checklist_click">{siteConfig.primaryCta}</ButtonLink>
            <ButtonLink href="/contact" variant="secondary" trackingEvent="footer_audit_click">
              {siteConfig.secondaryCta}
            </ButtonLink>
          </div>
        </div>

        <div className="subtle-card space-y-4">
          <p className="text-sm text-[color:var(--text-muted)]">{siteConfig.email}</p>
          <ButtonLink href={siteConfig.linkedin} variant="ghost" trackingEvent="linkedin_footer_click">
            <span className="inline-flex items-center gap-2">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </span>
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
}

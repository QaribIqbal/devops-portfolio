import { CheckCircle2 } from "lucide-react";

import { ButtonLink } from "@/components/site/button-link";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { articles, beliefs, siteConfig } from "@/lib/site-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn why Qarib Iqbal focuses on AI automation for marketing agencies and how he approaches operational systems, workflow bottlenecks, and reliable implementation.",
});

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh]">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About"
          title="Why this work is focused on marketing agencies."
          description="Agencies stay manual longer than they should because client work always feels more urgent than fixing the systems behind it. The result is slow follow-up, repetitive reporting work, messy onboarding, and too much admin being absorbed by small teams."
          primaryCta={{ href: "/checklist", label: siteConfig.primaryCta }}
          secondaryCta={{ href: "/contact", label: siteConfig.secondaryCta }}
        />

        <section className="page-section pt-0">
          <div className="shell grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="panel">
              <p className="section-eyebrow">Perspective</p>
              <h2 className="text-[clamp(1.85rem,3vw,3rem)] font-semibold tracking-[-0.045em] text-[color:var(--text-main)]">
                Diagnose before prescribing. Build systems that work in the real world.
              </h2>
              <p className="mt-4 text-[1rem] leading-7 text-[color:var(--text-muted)]">
                Qarib approaches AI automation as an operational fix, not a novelty project. The
                work starts with understanding where manual effort is creating friction and then
                designing a simpler, more dependable workflow around that bottleneck.
              </p>
              <div className="mt-6 space-y-3">
                {beliefs.map((belief) => (
                  <div key={belief} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent)]"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-7 text-[color:var(--text-muted)]">{belief}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel">
              <p className="section-eyebrow">Approach</p>
              <h2 className="text-[clamp(1.85rem,3vw,3rem)] font-semibold tracking-[-0.045em] text-[color:var(--text-main)]">
                Simple, reliable, outcome-first systems for lean teams still doing too much manually.
              </h2>
              <p className="mt-4 text-[1rem] leading-7 text-[color:var(--text-muted)]">
                The value here is not being a generic full-stack engineer or infrastructure
                consultant. It is understanding the messy reality of agency operations and then
                implementing clean integrations, sensible workflows, and reliable handoffs around
                that reality.
              </p>
              <p className="mt-4 text-[1rem] leading-7 text-[color:var(--text-muted)]">
                Built with reliable implementation and clean integrations. Technical depth is there
                to make systems dependable, but the work stays centered on faster follow-up, cleaner
                reporting, smoother onboarding, and less repetitive admin work.
              </p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-subtle)]">
                Qarib works hands-on because small teams do not need prettier diagrams. They need
                workflows that hold up in day-to-day use.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact">{siteConfig.secondaryCta}</ButtonLink>
              </div>
            </article>
          </div>
        </section>

        <section className="page-section">
          <div className="shell">
            <article className="panel">
              <p className="section-eyebrow">Planned Articles</p>
              <h2 className="text-[clamp(1.8rem,2.8vw,2.7rem)] font-semibold tracking-[-0.045em] text-[color:var(--text-main)]">
                Useful reads that support the same point of view.
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {articles.map((article) => (
                  <div key={article.title} className="subtle-card">
                    <h3 className="text-lg font-medium text-[color:var(--text-main)]">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">
                      {article.blurb}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

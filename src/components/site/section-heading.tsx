import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-[58rem]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="text-balance font-[family:var(--font-display)] text-[clamp(2.2rem,4vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[color:var(--text-main)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-[64ch] text-[1.02rem] leading-8 text-[color:var(--text-muted)] sm:text-[1.08rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

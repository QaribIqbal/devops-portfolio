import Link from "next/link";
import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonLinkProps) {
  const isExternal = external || /^https?:\/\//.test(href);
  const style =
    variant === "primary"
      ? ({
          "--button-bg": "var(--accent)",
          "--button-border": "var(--accent)",
          "--button-fg": "var(--bg-strong)",
          "--button-shadow":
            "0 18px 32px -26px color-mix(in oklch, var(--accent) 78%, transparent)",
        } as CSSProperties)
      : variant === "secondary"
        ? ({
            "--button-bg": "var(--panel-soft)",
            "--button-border": "var(--line-strong)",
            "--button-fg": "var(--text-main)",
          } as CSSProperties)
        : ({
            "--button-bg": "transparent",
            "--button-border": "transparent",
            "--button-fg": "var(--text-muted)",
          } as CSSProperties);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      style={style}
      className={cn(
        "button-link",
        variant === "primary" && "button-link-primary",
        variant === "secondary" && "button-link-secondary",
        variant === "ghost" && "button-link-ghost",
        className,
      )}
    >
      <span>{children}</span>
    </Link>
  );
}

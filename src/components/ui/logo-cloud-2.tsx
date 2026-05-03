import * as React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export default function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-white/10 md:grid-cols-4",
        className
      )}
      {...props}
    >
      {/* TOP GRID LINE */}
      <div className="absolute left-1/2 w-screen -translate-x-1/2 -top-px border-t border-white/10 pointer-events-none" />

      {/* 1 */}
      <LogoCard
        className="relative border-r border-b border-white/10 bg-secondary dark:bg-secondary/10"
        logo={{
          src: "https://svgl.app/library/nvidia-wordmark-light.svg",
          alt: "Nvidia Logo",
        }}
      >
        <PlusIcon className="absolute -right-[12.5px] -bottom-[12.5px] size-6 z-10 text-white/50" strokeWidth={1} />
      </LogoCard>

      {/* 2 */}
      <LogoCard
        className="border-b border-white/10 md:border-r"
        logo={{
          src: "https://svgl.app/library/supabase_wordmark_light.svg",
          alt: "Supabase Logo",
        }}
      />

      {/* 3 */}
      <LogoCard
        className="relative border-r border-b border-white/10 md:bg-secondary dark:md:bg-secondary/30"
        logo={{
          src: "https://svgl.app/library/github_wordmark_light.svg",
          alt: "GitHub Logo",
        }}
      >
        <PlusIcon className="absolute -right-[12.5px] -bottom-[12.5px] size-6 z-10 text-white/50" strokeWidth={1} />
        <PlusIcon className="absolute -left-[12.5px] -bottom-[12.5px] size-6 z-10 hidden md:block text-white/50" strokeWidth={1} />
      </LogoCard>

      {/* 4 */}
      <LogoCard
        className="relative border-b border-white/10 bg-secondary md:bg-background dark:bg-secondary/10 md:dark:bg-background"
        logo={{
          src: "https://svgl.app/library/openai_wordmark_light.svg",
          alt: "OpenAI Logo",
        }}
      />

      {/* 5 */}
      <LogoCard
        className="relative border-r border-b border-white/10 bg-secondary md:border-b-0 md:bg-background dark:bg-secondary/10 md:dark:bg-background"
        logo={{
          src: "https://svgl.app/library/turso-wordmark-light.svg",
          alt: "Turso Logo",
        }}
      />

      {/* 6 */}
      <LogoCard
        className="border-b border-white/10 md:border-r md:border-b-0 md:bg-secondary dark:md:bg-secondary/30"
        logo={{
          src: "https://svgl.app/library/clerk-wordmark-light.svg",
          alt: "Clerk Logo",
        }}
      />

      {/* 7 */}
      <LogoCard
        className="border-r border-white/10"
        logo={{
          src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
          alt: "Claude AI Logo",
        }}
      />

      {/* 8 */}
      <LogoCard
        className="bg-secondary dark:bg-secondary/10"
        logo={{
          src: "https://svgl.app/library/vercel_wordmark.svg",
          alt: "Vercel Logo",
        }}
      />

      {/* BOTTOM GRID LINE */}
      <div className="absolute left-1/2 w-screen -translate-x-1/2 -bottom-px border-b border-white/10 pointer-events-none" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-8",
        "transition-colors duration-300 hover:bg-white/[0.04]",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        src={logo.src}
        className="pointer-events-none select-none h-4 md:h-5 brightness-0 invert"
      />
      {children}
    </div>
  );
}
type HeroTitleRevealProps = {
  text: string;
};

export function HeroTitleReveal({ text }: HeroTitleRevealProps) {
  return (
    <h1 className="text-fluid-hero font-black leading-[1.25] tracking-normal text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] sm:tracking-[0.04em]">
      {text}
    </h1>
  );
}

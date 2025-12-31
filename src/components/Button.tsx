export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-3 py-2 text-sm font-medium shadow-[0_0_12px_#8c45ff]">
      {/* Border overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute inset-0 rounded-lg border border-white/50 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_10px_rgba(140,69,255,0.7)]" />
      </div>

      <span className="relative z-10">{props.children}</span>
    </button>
  );
};

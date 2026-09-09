const items = [
  "Presencia Digital",
  "Ecommerce",
  "Sistemas de Gestión",
  "Automatización",
  "Desarrollo Web",
  "Integraciones",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[var(--line)] bg-white py-5">
      <div
        className="flex w-max whitespace-nowrap"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="h-display inline-flex items-center gap-[30px] px-[30px] text-2xl text-[var(--muted-2)]"
          >
            {item}
            <span className="text-sm text-[var(--violet)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

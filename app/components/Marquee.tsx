/**
 * Ink strip above the nav. Carries exactly two messages:
 * one selling (gold) and one recruiting (paper). Duplicated
 * once so the -50% translate loops seamlessly.
 */
const messages = [
  { text: "Next show — For All the Hogs · April 24, 2026 · Klarman Auditorium · $5", gold: true },
  { text: "Auditions September 17 & 18 · 4:30–6:30 · Uris Hall G01", gold: false },
];

export function Marquee() {
  return (
    <div className="overflow-hidden bg-[var(--color-ink)] py-2.5">
      <div className="hu-marquee-track">
        {[...messages, ...messages].map((m, i) => (
          <span
            key={i}
            className={`hu-label px-6 ${
              m.gold ? "text-[var(--color-marquee)]" : "text-[var(--color-paper)]"
            }`}
          >
            {m.text}
          </span>
        ))}
      </div>
    </div>
  );
}

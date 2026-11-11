/**
 * Ink strip above the nav. Carries exactly two messages:
 * one headline (gold) and one with the details (paper). Duplicated
 * once so the -50% translate loops seamlessly.
 */
const messages = [
  { text: "Next show — I'm Supposed to Be Attracted to This? · $5 on Venmo", gold: true },
  { text: "Thursday, November 13 · 7 PM & 9 PM · Klarman Hall Auditorium KG70", gold: false },
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

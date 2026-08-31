import Image from "next/image";
import Link from "next/link";

type Alumni = {
  name: string;
  year: string;
  currentRole?: string;
  company?: string;
  bio?: string;
  headshot?: string;
  linkedin?: string;
};

const featuredAlumni: Alumni[] = [
  {
    name: "Praise Makinde",
    year: "2025",
    currentRole: "NBC Page",
    company: "NBC",
    bio: "After HumorUs!, Praise went on to work for NBC as a page.",
    headshot: "/images/people/praise_makinde.jpg",
    linkedin: "https://www.linkedin.com/in/praise-makinde/",
  },
  {
    name: "Noah Diamond",
    year: "2025",
    currentRole: "Statistics Auditor at the NBA",
    company: "NBA",
    bio: "Noah credits HumorUs! with teaching him how to pitch ideas and work collaboratively.",
    headshot: "/images/people/noah_diamond.jpg",
    linkedin: "https://www.linkedin.com/in/noah-diamond-14715822b/",
  },
];

const allAlumni: Record<string, string[]> = {
  "2025": ["Melissa Chu", "Noah Diamond", "Praise Makinde", "Marc Scocca"],
  "2024": ["Noah Leety", "Amelia Rajakumar", "Sowmya Venkatachalam"],
  "2023": ["Alexander Izvolsky", "Amanda Glik", "Phoebe McKinley"],
  "2022": ["Ishini Gammanpila", "Emily Augustyniak", "Liam Butler"],
  "2021": ["Katherine Gray", "Darien Fiorino"],
};

export default function AlumniPage() {
  const years = Object.entries(allAlumni).sort((a, b) => b[0].localeCompare(a[0]));

  return (
    <>
      <section className="px-6 pt-16 md:px-10">
        <div className="mx-auto max-w-[1100px]">
          <h1 className="hu-h1 m-0 text-[clamp(56px,10vw,100px)]">HumorUs! Alumni</h1>
          <p className="hu-body mt-7 max-w-[68ch] !text-xl">
            Our alumni have gone on to amazing things - from writers&apos; rooms to boardrooms,
            they&apos;re making the world laugh one joke at a time.
          </p>
        </div>
      </section>

      {/* ---------- Featured ---------- */}
      <section className="px-6 py-13 md:px-10">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="hu-h2 mb-6 text-[clamp(32px,4.5vw,42px)]">Featured Alumni</h2>
          <div className="grid gap-7 md:grid-cols-2">
            {featuredAlumni.map((alum) => (
              <article key={alum.name} className="hu-card hu-shadow-ink p-7">
                <div className="flex items-start gap-5">
                  {alum.headshot && (
                    <div className="hu-frame relative h-[104px] w-[104px] shrink-0 overflow-hidden">
                      <Image
                        src={alum.headshot}
                        alt={`${alum.name} headshot`}
                        fill
                        className="object-cover"
                        sizes="104px"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="hu-h3 m-0 text-2xl">{alum.name}</h3>
                    <div className="hu-label mt-2 !text-[12px] !tracking-[0.16em] text-[var(--color-curtain)]">
                      Class of {alum.year}
                    </div>
                    {alum.currentRole && (
                      <div className="mt-2 text-base text-[var(--color-soot)]">
                        {alum.currentRole}
                        {alum.company && alum.currentRole.includes(alum.company)
                          ? ""
                          : alum.company && ` at ${alum.company}`}
                      </div>
                    )}
                  </div>
                </div>

                {alum.bio && (
                  <p className="mt-5 text-[17px] leading-relaxed text-[var(--color-soot)]">
                    {alum.bio}
                  </p>
                )}

                {alum.linkedin && (
                  <a
                    href={alum.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-[18px] inline-block border-b-[3px] border-[var(--color-curtain)] pb-[3px] font-[family-name:var(--font-label)] text-[13px] uppercase tracking-[0.14em] !text-[var(--color-ink)] hover:!text-[var(--color-curtain)]"
                  >
                    Connect on LinkedIn →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- All alumni ---------- */}
      <section className="px-6 pb-14 md:px-10">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="hu-h2 mb-6 text-[clamp(32px,4.5vw,42px)]">All Alumni by Year</h2>
          <div className="border-t-[3px] border-[var(--color-ink)]">
            {years.map(([year, names], i) => (
              <div
                key={year}
                className={`grid gap-7 py-[22px] md:grid-cols-[180px_1fr] ${
                  i === years.length - 1
                    ? "border-b-[3px] border-[var(--color-ink)]"
                    : "border-b border-[var(--color-ink)]/20"
                }`}
              >
                <span className="hu-h3 text-[22px] text-[var(--color-curtain)]">
                  Class of {year}
                </span>
                <span className="text-lg leading-relaxed text-[var(--color-soot)]">
                  {names.join(" · ")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Stay connected ---------- */}
      <section className="px-6 pb-[72px] md:px-10">
        <div className="mx-auto max-w-[1100px] border-[3px] border-[var(--color-ink)] bg-[var(--color-ink)] p-13 text-center shadow-[10px_10px_0_var(--color-marquee)]">
          <h2 className="hu-h2 m-0 text-[clamp(36px,5.5vw,52px)] text-[var(--color-paper)]">
            Stay Connected!
          </h2>
          <p className="mx-auto mt-5 mb-8 max-w-[56ch] text-[19px] leading-relaxed text-[var(--color-paper)]/80">
            Once HumorUs!, always HumorUs! We love hearing from our alumni and keeping you updated on
            shows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:humoruscomedy@gmail.com?subject=Alumni Update"
              className="hu-btn hu-btn-primary !border-[var(--color-paper)]"
              style={{ boxShadow: "5px 5px 0 var(--color-marquee)" }}
            >
              Update Your Info
            </a>
            <Link href="/shows" className="hu-btn hu-btn-ghost-inv">
              See Current Shows
            </Link>
          </div>
          <p className="hu-label mt-7 !tracking-[0.16em] text-[var(--color-ash)]">
            Alumni get special discounts on show tickets! Email us for the code.
          </p>
        </div>
      </section>
    </>
  );
}

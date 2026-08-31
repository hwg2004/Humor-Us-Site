import Image from "next/image";

type Person = {
  name: string;
  role?: string;
  year?: string;
  major?: string;
  hometown?: string;
  headshot?: string;
};

const people: Person[] = [
  { name: "Izzy Falchuk", role: "President", year: "2026", major: "Performing and Media Arts", hometown: "Los Angeles, CA", headshot: "/images/people/izzy_headshot.jpg" },
  { name: "Amanda Roth", role: "Vice President", year: "2027", major: "Human Development", hometown: "Great Neck, NY", headshot: "/images/people/amanda_headshot.jpg" },
  { name: "Harry Gallen", role: "Treasurer", year: "2027", major: "Computer Science", hometown: "New York, NY", headshot: "/images/people/harry_headshot.jpg" },
  { name: "Jared Miller", role: "Secretary", year: "2028", major: "Communications", hometown: "Brooklyn, NY", headshot: "/images/people/jared_headshot.jpg" },
  { name: "Raquel Sweet", role: "Social Chair", year: "2027", major: "Mechanical Engineering", hometown: "San Francisco, CA", headshot: "/images/people/raquel_headshot.jpg" },
  { name: "James Mars", role: "Social Chair", year: "2026", major: "Economics and Sociology", hometown: "Ignacio, CO", headshot: "/images/people/james_headshot.jpg" },
  { name: 'Conner "Big Dawg" Whalen', role: "Social Media Chair", year: "2028", major: "Information Science", hometown: "Nyack, NY", headshot: "/images/people/conner_headshot.jpg" },
  { name: "Jordan Vogel", role: "Social Media Chair", year: "2027", major: "Mechanical Engineering", hometown: "Franklin Square, NY", headshot: "/images/people/jordan_headshot.jpg" },
  { name: "Rene Cabrera", role: "Diversity, Equity, and Inclusion Chair", year: "2027", major: "Industrial and Labor Relations", hometown: "Topeka, KS", headshot: "/images/people/rene_headshot.jpg" },
  { name: "Eli Feldman", role: "Alumni Relations Chair", year: "2026", major: "Applied Economics and Management", hometown: "Lower Merion, PA", headshot: "/images/people/eli_headshot.jpg" },
];

export default function PeoplePage() {
  return (
    <>
      <section className="border-b-4 border-[var(--color-ink)] px-6 pt-16 pb-12 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="hu-label mb-4 !tracking-[0.26em] text-[var(--color-curtain)]">
            2026 Board · {people.length} members
          </div>
          <h1 className="hu-h1 m-0 text-[clamp(56px,10vw,100px)]">Meet the Cast!</h1>
        </div>
      </section>

      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {people.map((p) => (
            <article key={p.name} className="hu-card hu-lift">
              {p.headshot && (
                <div className="relative aspect-[4/5] overflow-hidden border-b-[3px] border-[var(--color-ink)]">
                  <Image
                    src={p.headshot}
                    alt={`${p.name} headshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 280px"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="hu-h3 m-0 text-lg">{p.name}</h3>
                {(p.role || p.year) && (
                  <div className="hu-label mt-1.5 !text-[11px] !tracking-[0.14em] text-[var(--color-curtain)]">
                    {p.role}
                    {p.role && p.year ? " · " : ""}
                    {p.year}
                  </div>
                )}
                <div className="mt-2.5 text-sm leading-relaxed text-[var(--color-soot)]">
                  {p.major}
                  {p.major && p.hometown && <br />}
                  {p.hometown}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

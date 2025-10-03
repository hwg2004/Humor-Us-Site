import Image from "next/image";

type Person = {
  name: string; role?: string; year?: string; major?: string; hometown?: string; headshot?: string;
};

const people: Person[] = [
  // drop real names here:
  { name: "Izzy Falchuk", role: "President", year: "2026", major: "Performing and Media Arts", hometown: "Los Angeles, CA", headshot: "/images/people/izzy_headshot.jpg" },
  { name: "Amanda Falchuk", role: "Vice President", year: "2027", major: "Human Development", hometown: "Great Neck, NY", headshot: "/images/people/amanda_headshot.jpg" },
  { name: "Harry Gallen", role: "Treasurer", year: "2027", major: "Computer Science", hometown: "New York, NY", headshot: "/images/people/harry_headshot.jpg" },
  { name: "Jared Miller", role: "Secretary", year: "2028", major: "Communications", hometown: "Brooklyn, NY", headshot: "/images/people/jared_headshot.jpg" },
  { name: "Raquel Sweet", role: "Social Chair", year: "2027", major: "Mechanical Engineering", hometown: "San Francisco, CA", headshot: "/images/people/raquel_headshot.jpg" },
  { name: "James Mars", role: "Social Chair", year: "2026", major: "Economics and Sociology", hometown: "Ignacio, CO", headshot: "/images/people/james_headshot.jpg" },
  { name: "Conner \"Big Dawg\" Whalen", role: "Social Media Chair", year: "2028", major: "Information Science", hometown: "Nyack, NY", headshot: "/images/people/conner_headshot.jpg" },
  { name: "Jordan Vogel", role: "Social Media Chair", year: "2027", major: "Mechanical Engineering", hometown: "Franklin Square, NY", headshot: "/images/people/jordan_headshot.jpg" },
  { name: "Rene Cabrera", role: "Diversity, Equity, and Inclusion Chair", year: "2027", major: "Industrial and Labor Relations", hometown: "Topeka, KS", headshot: "/images/people/rene_headshot.jpg" },
  { name: "Eli Feldman", role: "Alumni Relations Chair", year: "2026", major: "Applied Economics and Management", hometown: "Lower Merion, PA", headshot: "/images/people/eli_headshot.jpg" }
];

export default function PeoplePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Meet the Cast!</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {people.map(p => (
          <article key={p.name} className="rounded-lg border p-4">
            {p.headshot && (
              <Image
                src={p.headshot}
                alt={`${p.name} headshot`}
                width={600} height={750}
                className="w-full h-auto rounded-md"
              />
            )}
            <h3 className="mt-3 font-semibold">{p.name}</h3>
            {p.role && <p className="text-sm">{p.role}</p>}
            <p className="text-sm text-black/70 dark:text-white/70">
              {[p.year && `Year: ${p.year}`, p.major && `Major: ${p.major}`, p.hometown && `Hometown: ${p.hometown}`]
                .filter(Boolean).join(" • ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
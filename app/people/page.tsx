import Image from "next/image";

type Person = {
  name: string; role?: string; year?: string; major?: string; hometown?: string; headshot?: string;
};

const people: Person[] = [
  // drop real names here:
  { name: "Harry Gallen", role: "Treasurer", year: "2027", major: "Computer Science", hometown: "NY, NY", headshot: "/images/people/harry.jpg" },
  // { name: "Izzy Falchuk", role: "President", headshot: "/images/people/izzy.jpg" },
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
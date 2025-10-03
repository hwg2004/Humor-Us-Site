import Image from "next/image";
import Link from "next/link";

type Show = {
  slug: string; title: string; date: string; venue: string; city: string; poster?: string; ticketsUrl?: string;
};

const shows: Show[] = [
  {
    slug: "2025-11-08-fall",
    title: "Fall Show",
    date: "2025-11-08",
    venue: "Schwartz Center (Black Box)",
    city: "Ithaca, NY",
    poster: "/images/shows/2025-11-08-fall-poster.jpg",
    ticketsUrl: "https://www.eventbrite.com/...",
  },
];

export default function ShowsPage() {
  const now = new Date();
  const upcoming = shows.filter(s => new Date(s.date) >= now);
  const past = shows.filter(s => new Date(s.date) < now);

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Shows</h1>

      <h2 className="text-xl font-semibold">Upcoming</h2>
      {upcoming.length === 0 ? <p>No upcoming shows yet.</p> : (
        <div className="grid gap-6 sm:grid-cols-2">
          {upcoming.map(s => (
            <article key={s.slug} className="rounded-lg border overflow-hidden">
              {s.poster && (
                <Image src={s.poster} alt={`${s.title} poster`} width={1200} height={700} className="w-full h-auto" />
              )}
              <div className="p-4 space-y-2">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-black/70 dark:text-white/70">
                  {new Date(s.date).toLocaleDateString()} — {s.venue}, {s.city}
                </p>
                <div className="flex gap-2">
                  <Link href={`/shows/${s.slug}`} className="border rounded-md px-3 py-1">Details</Link>
                  {s.ticketsUrl && <a href={s.ticketsUrl} target="_blank" className="border rounded-md px-3 py-1">Tickets</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <h2 className="text-xl font-semibold pt-2">Archive</h2>
      {past.length === 0 ? <p>No past shows yet.</p> : (
        <ul className="list-disc pl-5">
          {past.map(s => (
            <li key={s.slug}><Link href={`/shows/${s.slug}`}>{s.title}</Link> — {new Date(s.date).toLocaleDateString()}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
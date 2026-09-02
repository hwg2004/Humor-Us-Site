import Image from "next/image";
import Link from "next/link";

type Show = {
  slug: string;
  title: string;
  date: string;
  venue: string;
  poster?: string;
  favorite?: boolean;
  videoUrl?: string;
};

// Add your past shows here - newest first
const pastShows: Show[] = [
  {
    slug: "2026-04-24-spring",
    title: "Humor Us Presents: Probably Our Hardest Beat Yet",
    date: "2026-04-24",
    venue: "Rockefeller Auditorium",
    poster: "/images/shows/SP26Poster.jpg",
    favorite: true,
  },
  {
    slug: "2025-11-14-fall",
    title: "Humor Us Presents: Side Effects May Include...",
    date: "2025-11-14",
    venue: "Rockefeller Auditorium",
    poster: "/images/shows/FA25Poster.jpg",
    favorite: true,
    videoUrl: "https://www.youtube.com/playlist?list=PLQHtzx1MTEo_YwNL-TKyTe6zCV4Y5zRZ8",
  },
  {
    slug: "2025-04-18-spring",
    title: "Humor Us Presents: Nothing. Cuz of Woke",
    date: "2025-04-18",
    venue: "Klarman Auditorium",
    poster: "/images/shows/SP25Poster.jpg",
    favorite: true,
    videoUrl: "https://www.youtube.com/watch?v=nj6qqzFEGaU&list=PLQHtzx1MTEo8i8f1KlxGfXxpjZqnMsyeM",
  },
  {
    slug: "2024-11-14-fall",
    title: "Humor Us Presents: The Erectoral College",
    date: "2024-11-14",
    venue: "Rockefeller Hall",
    poster: "/images/shows/FA24Poster.jpg",
    videoUrl: "https://www.youtube.com/watch?v=yDMNgAkArE0&list=PLQHtzx1MTEo9GZp_LI4w1HN4WbTux3lPm",
  },
  {
    slug: "2024-05-04-spring",
    title: "Humor Us Presents: Fully Clothed and Afraid",
    date: "2024-05-04",
    venue: "Klarman Auditorium",
    poster: "/images/shows/SP24Poster.jpg",
    videoUrl: "https://www.youtube.com/watch?v=grYWzfQGIGQ&list=PLQHtzx1MTEo_CSRvvXKIbXHZErhqrjZNk",
  },
  {
    slug: "2023-11-14-fall",
    title: "Humor Us Presents: Welcome to the Afterlife",
    date: "2023-11-14",
    venue: "Klarman Auditorium",
    poster: "/images/shows/FA23Poster.jpg",
  },
  {
    slug: "2023-04-21-spring",
    title: "Humor Us Presents: A Reason to Pregame",
    date: "2023-04-21",
    venue: "Klarman Auditorium",
    poster: "/images/shows/SP23Poster.jpg",
  },
  {
    slug: "2022-11-05-fall",
    title: "Humor Us Presents: We Started a Podcast",
    date: "2022-11-05",
    venue: "Klarman Auditorium",
    poster: "/images/shows/FA22Poster.jpg",
  },
  {
    slug: "2022-04-22-spring",
    title: "Humor Us Presents: Jeffin' on my Bezos",
    date: "2022-04-22",
    venue: "Klarman Auditorium",
    poster: "/images/shows/SP22Poster.jpg",
  },
  {
    slug: "2021-11-19-fall",
    title: "Humor Us Presents: HumorUs The Musical: The Musical: The Series",
    date: "2021-11-19",
    venue: "Klarman Auditorium",
    poster: "/images/shows/FA21Poster.jpg",
  },
  {
    slug: "2021-05-07-spring",
    title: "Humor Us Presents: We've Got Ant Bodies",
    date: "2021-05-07",
    venue: "Klarman Auditorium",
  },
];

const fullDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const shortDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" });

export default function PastShowsPage() {
  const showsByYear = pastShows.reduce((acc, show) => {
    const year = new Date(show.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(show);
    return acc;
  }, {} as Record<number, Show[]>);

  const favoriteShows = pastShows.filter((s) => s.favorite);

  return (
    <>
      {/* ---------- Masthead ---------- */}
      <section className="border-b-4 border-[var(--color-ink)] bg-[var(--color-ink)] px-6 py-16 text-[var(--color-paper)] md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="hu-label mb-5 !tracking-[0.26em] text-[var(--color-marquee)]">
            {pastShows.length} shows · 2021–2025
          </div>
          <h1 className="hu-h1 m-0 text-[clamp(52px,9vw,92px)]">Past Shows Archive</h1>
          <p className="mt-6 max-w-[64ch] text-xl leading-relaxed text-[var(--color-paper)]/[0.78]">
            Relive the laughs! See below for a list of our past shows, complete with posters, dates,
            venues, and links to videos where available.
          </p>
        </div>
      </section>

      {/* ---------- Recent shows ---------- */}
      {favoriteShows.length > 0 && (
        <section className="border-b-2 border-[var(--color-ink)]/20 px-6 py-16 md:px-10">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="hu-h2 mb-7 text-[clamp(30px,4vw,38px)]">Recent Shows</h2>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {favoriteShows.map((show) => (
                <Link
                  key={show.slug}
                  href={`/shows/${show.slug}`}
                  className="hu-card hu-lift block !text-[var(--color-ink)]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden border-b-[3px] border-[var(--color-ink)]">
                    {show.poster ? (
                      <Image
                        src={show.poster}
                        alt={`${show.title} poster`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 360px"
                      />
                    ) : (
                      <div className="hu-label flex h-full items-center justify-center bg-[var(--color-curtain)] text-center text-[var(--color-card)]">
                        Poster Coming Soon
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="hu-label !tracking-[0.18em] !text-[11px] text-[var(--color-ash)]">
                      {fullDate(show.date)}
                    </div>
                    <h3 className="hu-h3 my-2.5 text-[21px]">{show.title}</h3>
                    <div className="hu-label !text-[12px] !tracking-[0.12em] text-[var(--color-curtain)]">
                      {show.venue}
                    </div>
                    {show.videoUrl && (
                      <span className="hu-tag hu-tag-gold mt-3.5">Video available</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- Complete archive ---------- */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="hu-h2 mb-8 text-[clamp(30px,4vw,38px)]">Complete Archive</h2>

          {Object.entries(showsByYear)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, shows], i, arr) => (
              <div
                key={year}
                className={`grid gap-8 py-6 md:grid-cols-[120px_1fr] ${
                  i === 0 ? "border-t-[3px] border-[var(--color-ink)]" : "border-t-2 border-[var(--color-ink)]/20"
                } ${i === arr.length - 1 ? "border-b-[3px] border-b-[var(--color-ink)]" : ""}`}
              >
                <div className="font-[family-name:var(--font-display)] text-[44px] leading-[0.9] text-[var(--color-curtain)]">
                  {year}
                </div>
                <div className="grid gap-3.5">
                  {shows.map((show) => (
                    <Link
                      key={show.slug}
                      href={`/shows/${show.slug}`}
                      className="hu-card flex items-center justify-between gap-5 px-5 py-4 !text-[var(--color-ink)] transition-colors hover:bg-[var(--color-marquee)]"
                    >
                      <div>
                        <div className="hu-h3 text-[17px]">{show.title}</div>
                        <div className="hu-meta mt-1.5 !tracking-[0.1em]">
                          {shortDate(show.date)} · {show.venue}
                        </div>
                      </div>
                      {show.videoUrl && <span className="hu-tag">Video</span>}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

          {/* ---------- CTA ---------- */}
          <div className="hu-frame hu-shadow-ink mt-14 flex flex-wrap items-center justify-between gap-7 bg-[var(--color-marquee)] p-11">
            <div>
              <div className="hu-label text-[var(--color-curtain-dark)]">
                Want to be part of our next show?
              </div>
              <div className="hu-h2 mt-3 text-[clamp(32px,4.5vw,44px)]">Join HumorUs!</div>
            </div>
            <Link
              href="/join"
              className="hu-btn bg-[var(--color-ink)] text-[var(--color-paper)] hover:!bg-[var(--color-curtain)] hover:!text-[var(--color-card)]"
            >
              Audition Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

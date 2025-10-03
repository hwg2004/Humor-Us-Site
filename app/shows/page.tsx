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
    slug: "2025-04-18-spring",
    title: "Humor Us Presents: Nothing. Cuz of Woke",
    date: "2025-04-18",
    venue: "Klarman Auditorium",
    poster: "/images/shows/SP25Poster.jpg",
    favorite: true,
    videoUrl: "https://www.youtube.com/watch?v=nj6qqzFEGaU&list=PLQHtzx1MTEo8i8f1KlxGfXxpjZqnMsyeM&pp=0gcJCWUEOCosWNin"
  },
  {
    slug: "2024-11-14-fall",
    title: "Humor Us Presents: The Erectoral College",
    date:  "2024-11-14",
    venue: "Rockefeller Hall",
    poster: "/images/shows/FA24Poster.jpg",
    favorite: true,
    videoUrl: "https://www.youtube.com/watch?v=yDMNgAkArE0&list=PLQHtzx1MTEo9GZp_LI4w1HN4WbTux3lPm"
  }, 
  {
    slug: "2024-05-04-spring",
    title: "Humor Us Presents: Fully Clothed and Afraid",
    date: "2024-05-04",
    venue: "Klarman Auditorium",
    poster: "/images/shows/SP24Poster.jpg",
    videoUrl: "https://www.youtube.com/watch?v=grYWzfQGIGQ&list=PLQHtzx1MTEo_CSRvvXKIbXHZErhqrjZNk"
  },
  {
    slug: "2023-11-14-fall",
    title: "Humor Us Presents: Welcome to the Afterlife",
    date: "2023-11-14",
    venue: "Klarman Auditorium",
    poster: "/images/shows/FA23Poster.jpg",
    videoUrl: "https://www.youtube.com/watch?v=VXdHLJ1tMBU&list=PLQHtzx1MTEo9PUWfL_-zV-zcaSqZjcny6"
  }

  // Add more shows as needed
];

export default function PastShowsPage() {
  const showsByYear = pastShows.reduce((acc, show) => {
    const year = new Date(show.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(show);
    return acc;
  }, {} as Record<number, Show[]>);

  const favoriteShows = pastShows.filter(show => show.favorite);

  return (
    <section className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] bg-clip-text text-transparent">
          Past Shows Archive
        </h1>
        <p className="text-lg mt-4 text-black/70 dark:text-white/70">
          Relive the laughs! Browse through our collection of past shows, featuring original sketches 
          about everything from dining hall disasters to prelim panic.
        </p>
      </div>

      {/* Featured/Favorite Shows */}
      {favoriteShows.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span>⭐</span> Fan Favorites
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {favoriteShows.map(show => (
              <Link 
                key={show.slug}
                href={`/shows/${show.slug}`}
                className="group rounded-xl border-2 border-[var(--color-accent-light)] overflow-hidden hover:border-[var(--color-accent)] hover:shadow-xl transition-all"
              >
                {show.poster ? (
                  <div className="aspect-[3/4] relative bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)]">
                    <Image 
                      src={show.poster} 
                      alt={`${show.title} poster`} 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-[var(--color-highlight)] text-black px-2 py-1 rounded-full text-sm font-bold">
                      ⭐ Favorite
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[3/4] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <span className="text-6xl">🎭</span>
                      <p className="mt-2 font-bold">Poster Coming Soon</p>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-lg group-hover:text-[var(--color-accent)] transition-colors">
                    {show.title}
                  </h3>
                  <p className="text-sm text-black/60 dark:text-white/60">
                    {new Date(show.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                  <p className="text-sm text-[var(--color-accent)]">{show.venue}</p>
                  {show.videoUrl && (
                    <p className="text-sm mt-2 text-[var(--color-highlight)]">📹 Video available!</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Shows by Year */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Complete Archive</h2>
        {Object.entries(showsByYear)
          .sort(([a], [b]) => Number(b) - Number(a))
          .map(([year, shows]) => (
            <div key={year} className="space-y-4">
              <h3 className="text-xl font-bold text-[var(--color-accent)] border-b-2 border-[var(--color-accent-light)] pb-2">
                {year}
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {shows.map(show => (
                  <Link
                    key={show.slug}
                    href={`/shows/${show.slug}`}
                    className="group rounded-lg border p-4 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl group-hover:scale-110 transition-transform">🎬</div>
                      <div className="flex-1">
                        <h4 className="font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                          {show.title}
                        </h4>
                        <p className="text-sm text-black/60 dark:text-white/60">
                          {new Date(show.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })} • {show.venue}
                        </p>
                        {show.videoUrl && (
                          <span className="inline-block mt-1 text-xs bg-[var(--color-highlight)]/20 text-[var(--color-highlight)] px-2 py-0.5 rounded-full">
                            Video
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Fun Stats */}
      <div className="rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">By The Numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold">{pastShows.length}</div>
            <div className="text-sm opacity-90">Total Shows</div>
          </div>
          <div>
            <div className="text-3xl font-bold">
              {Object.keys(showsByYear).length}
            </div>
            <div className="text-sm opacity-90">Years of Comedy</div>
          </div>
          <div>
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm opacity-90">Original Sketches</div>
          </div>
          <div>
            <div className="text-3xl font-bold">∞</div>
            <div className="text-sm opacity-90">Laughs Generated</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-8 space-y-4">
        <p className="text-lg text-black/70 dark:text-white/70">
          Want to be part of our next show?
        </p>
        <Link 
          href="/join" 
          className="inline-block px-8 py-3 bg-[var(--color-highlight)] text-black rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
        >
          Join HumorUs! 🎭
        </Link>
      </div>
    </section>
  );
}
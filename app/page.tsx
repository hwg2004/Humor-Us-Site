// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-10">
      {/* Hero */}
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold">HumorUs</h1>
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl">
          Welcome to HumorUs Sketch Comedy! We’re Cornell University’s premier sketch comedy group.
          We write and perform a new show every semester. Explore the site to meet the cast,
          watch sketches, and learn how to join.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/shows" className="rounded-md border px-4 py-2">Get Tickets / Shows</Link>
          <Link href="/people" className="rounded-md border px-4 py-2">Meet the Cast</Link>
          <Link href="/join" className="rounded-md border px-4 py-2">Join Us</Link>
        </div>
      </div>

      {/* Quick links matching your Google Sites menu */}
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        <Link href="/people" className="rounded-md border px-4 py-3 hover:bg-black/5 dark:hover:bg-white/10">
          Meet the Cast →
        </Link>
        <Link href="/about" className="rounded-md border px-4 py-3 hover:bg-black/5 dark:hover:bg-white/10">
          About →
        </Link>
        <Link href="/alumni" className="rounded-md border px-4 py-3 hover:bg-black/5 dark:hover:bg-white/10">
          Alumni →
        </Link>
        <Link href="/join" className="rounded-md border px-4 py-3 hover:bg-black/5 dark:hover:bg-white/10">
          Join Us →
        </Link>
        <Link href="/shows" className="rounded-md border px-4 py-3 hover:bg-black/5 dark:hover:bg-white/10">
          Past Shows / Upcoming →
        </Link>
        <Link href="/sketches" className="rounded-md border px-4 py-3 hover:bg-black/5 dark:hover:bg-white/10">
          Sketches (videos) →
        </Link>
      </div>

      {/* Optional: highlight an upcoming show card (delete if not needed) */}
      <div className="rounded-lg border p-5">
        <h2 className="text-xl font-semibold mb-2">Next Show</h2>
        <p className="text-black/70 dark:text-white/70">
          Date • Venue • Ithaca, NY
        </p>
        <div className="mt-3 flex gap-3">
          <Link href="/shows" className="rounded-md border px-4 py-2">Details</Link>
          <a href="https://www.eventbrite.com/" target="_blank" className="rounded-md border px-4 py-2">
            Tickets
          </a>
        </div>
      </div>
    </section>
  );
}
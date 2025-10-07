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

// Add real alumni here - this is sample data
const featuredAlumni: Alumni[] = [
  {
    name: "Praise Makinde",
    year: "2025",
    currentRole: "NBC Page",
    company: "NBC",
    bio: "After HumorUs!, Praise went on to write for several comedy shows and perform stand-up across NYC.",
    headshot: "/images/alumni/jane.jpg",
    linkedin: "https://linkedin.com/in/janedoe"
  },
  {
    name: "Noah Diamond",
    year: "2025",
    currentRole: "NBC Page",
    company: "NBC",
    bio: "John credits HumorUs! with teaching him how to pitch ideas and work collaboratively in comedy.",
    headshot: "/images/alumni/john.jpg"
  },
];

// List of all alumni by year
const allAlumni = {
  "2025": ["Praise Makinde", "Noah Diamond", "Melissa Chu", "Marc Scocca"],
  "2024": ["Noah Leety", "Jessica Liu", "Ryan Patel"],
  "2023": ["Amanda White", "Chris Brown", "Taylor Green"],
  "2022": ["Alex Martinez", "Sam Wilson", "Jordan Lee"],
  "2021": ["Morgan Davis", "Jamie Taylor", "Casey Anderson"],
  // Add more years and names as needed
};

export default function AlumniPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent">
          HumorUs! Alumni
        </h1>
        <p className="text-lg mt-4 text-black/70 dark:text-white/70">
          {"Our alumni have gone on to amazing things - from writers' rooms to boardrooms, they're making the world laugh one joke at a time."}
        </p>
      </div>

      {/* Featured Alumni Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Featured Alumni</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredAlumni.map((alum) => (
            <article key={alum.name} className="rounded-lg border-2 border-[var(--color-accent-light)] overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex gap-4">
                  {alum.headshot && (
                    <Image
                      src={alum.headshot}
                      alt={`${alum.name} headshot`}
                      width={100}
                      height={100}
                      className="rounded-full object-cover w-24 h-24"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold text-xl">{alum.name}</h3>
                    <p className="text-[var(--color-accent)] font-medium">Class of {alum.year}</p>
                    {alum.currentRole && (
                      <p className="text-sm mt-1">
                        {alum.currentRole} {alum.company && `at ${alum.company}`}
                      </p>
                    )}
                  </div>
                </div>
                {alum.bio && (
                  <p className="mt-4 text-black/70 dark:text-white/70">{alum.bio}</p>
                )}
                {alum.linkedin && (
                  <a 
                    href={alum.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[var(--color-accent)] hover:text-[var(--color-highlight)] transition-colors"
                  >
                    Connect on LinkedIn →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Where Are They Now Section */}
      <div className="rounded-lg bg-[var(--color-accent-light)]/10 border-2 border-[var(--color-accent-light)] p-6">
        <h2 className="text-2xl font-bold mb-4">Where Are They Now?</h2>
        <p className="mb-4">Our alumni have landed in some pretty amazing places:</p>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div className="text-center p-3">
            <div className="text-3xl mb-2">📺</div>
            <p className="font-medium">TV Writing</p>
            <p className="text-sm text-black/60 dark:text-white/60">SNL, Late Night, Comedy Central</p>
          </div>
          <div className="text-center p-3">
            <div className="text-3xl mb-2">🎭</div>
            <p className="font-medium">Stand-Up Comedy</p>
            <p className="text-sm text-black/60 dark:text-white/60">NYC, LA, Chicago scenes</p>
          </div>
          <div className="text-center p-3">
            <div className="text-3xl mb-2">🎬</div>
            <p className="font-medium">Film & Digital</p>
            <p className="text-sm text-black/60 dark:text-white/60">YouTube, TikTok, Film Production</p>
          </div>
          <div className="text-center p-3">
            <div className="text-3xl mb-2">💼</div>
            <p className="font-medium">Marketing & Advertising</p>
            <p className="text-sm text-black/60 dark:text-white/60">Creative Directors, Copywriters</p>
          </div>
          <div className="text-center p-3">
            <div className="text-3xl mb-2">🚀</div>
            <p className="font-medium">Tech & Startups</p>
            <p className="text-sm text-black/60 dark:text-white/60">Product Managers, Engineers</p>
          </div>
          <div className="text-center p-3">
            <div className="text-3xl mb-2">📚</div>
            <p className="font-medium">Academia & Law</p>
            <p className="text-sm text-black/60 dark:text-white/60">Professors, Lawyers, Researchers</p>
          </div>
        </div>
      </div>

      {/* Complete Alumni List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">All Alumni by Year</h2>
        <div className="rounded-lg border p-6">
          {Object.entries(allAlumni).sort((a, b) => b[0].localeCompare(a[0])).map(([year, names]) => (
            <div key={year} className="mb-4 pb-4 border-b last:border-b-0">
              <h3 className="font-bold text-lg text-[var(--color-accent)] mb-2">Class of {year}</h3>
              <p className="text-black/70 dark:text-white/70">
                {names.join(" • ")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stay Connected Section */}
      <div className="rounded-lg bg-[var(--color-highlight)]/20 border-2 border-[var(--color-highlight)] p-6 text-center">
        <h2 className="text-2xl font-bold mb-3">Stay Connected!</h2>
        <p className="mb-4">
          Once HumorUs!, always HumorUs! We love hearing from our alumni and keeping you updated on shows.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="mailto:humoruscomedy@gmail.com?subject=Alumni Update" 
            className="rounded-md bg-[var(--color-accent)] text-white px-6 py-2 hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Update Your Info
          </a>
          <Link 
            href="/shows" 
            className="rounded-md border-2 border-[var(--color-accent)] px-6 py-2 hover:bg-[var(--color-accent)]/10 transition-colors"
          >
            See Current Shows
          </Link>
        </div>
        <p className="text-sm mt-4 text-black/60 dark:text-white/60">
          Alumni get special discounts on show tickets! Email us for the code.
        </p>
      </div>
    </section>
  );
}
import Link from "next/link";
import Image from "next/image";
import Gallery from "./components/Gallery";

const auditions = {
  label: "Now Casting",
  title: "Auditions Are Open!",
  deck: "Want to join Cornell's premier sketch comedy group? No experience needed — come audition this September!",
  formUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScYapA0lETw0BO8-ZuKRAKdle_F8aHmh9Zjll_kfZeoG_uWQQ/viewform",
  photo: "/images/gallery/HumorUsSp26-0917.jpg",
  details: [
    { label: "Auditions", value: "Sept 16 & 17 · 4:30-6:30 PM" },
    { label: "Location", value: "Uris Hall G01" },
    { label: "Experience", value: "None needed!", gold: true },
  ],
};

const recentPhotos = [
  { src: "/images/gallery/HumorUsSp26-0273.jpg", alt: "HumorUs Spring 2026 show" },
  { src: "/images/gallery/HumorUsSp26-0376.jpg", alt: "HumorUs Spring 2026 show" },
  { src: "/images/gallery/HumorUsSp26-0498.jpg", alt: "HumorUs Spring 2026 show" },
  { src: "/images/gallery/HumorUsSp26-0643.jpg", alt: "HumorUs Spring 2026 show" },
  { src: "/images/gallery/HumorUsSp26-0774.jpg", alt: "HumorUs Spring 2026 show" },
  { src: "/images/gallery/HumorUsSp26-0917.jpg", alt: "HumorUs Spring 2026 show" },
];

const socials = [
  { href: "https://www.instagram.com/humorussketchcomedy/", icon: "/logos/instagram.svg", label: "Instagram", invert: true, w: 22, h: 22 },
  { href: "https://www.youtube.com/@HumorUsComedy", icon: "/logos/youtube.svg", label: "YouTube", invert: false, w: 26, h: 18 },
  { href: "mailto:humorussketchcomedy@cornell.edu", icon: "/logos/gmail.svg", label: "Email", invert: false, w: 22, h: 22 },
  { href: "https://venmo.com/u/harrygallen", icon: "/logos/venmo-icon.svg", label: "Venmo", invert: false, w: 22, h: 22 },
];

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative border-b-4 border-[var(--color-ink)]">
        <div className="relative h-[76vh] min-h-[540px] overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="HumorUs cast on stage kicking in sync"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_35%]"
          />
          <div className="absolute inset-0 bg-[var(--color-ink)]/[0.52]" />

          <div className="relative z-10 flex h-full items-center px-6 md:px-10">
            <div className="mx-auto w-full max-w-[1200px]">
              <div className="max-w-[760px]">
                <div className="hu-label hu-frame mb-6 inline-block bg-[var(--color-marquee)] px-3.5 py-2 text-[var(--color-ink)]">
                  Cornell&apos;s premier sketch comedy group since &apos;06
                </div>

                <h1 className="hu-h1 m-0 text-[clamp(64px,11vw,132px)] text-[var(--color-paper)]">
                  Humor
                  <br />
                  Us!
                </h1>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href={auditions.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hu-btn hu-btn-primary !text-base"
                    style={{ boxShadow: "5px 5px 0 var(--color-marquee)" }}
                  >
                    Audition Now
                  </a>
                  <Link href="/join" className="hu-btn hu-btn-paper !text-base">
                    Join Us!
                  </Link>
                </div>

                <div className="mt-8 flex gap-2.5">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-[46px] w-[46px] items-center justify-center border-[3px] border-[var(--color-paper)] hover:bg-[var(--color-paper)]"
                    >
                      <Image
                        src={s.icon}
                        alt={s.label}
                        width={s.w}
                        height={s.h}
                        className={s.invert ? "brightness-0 invert" : ""}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Auditions ---------- */}
      <section className="border-b-4 border-[var(--color-ink)] bg-[var(--color-ink)] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-7 flex items-center gap-3">
            <span className="hu-blink inline-block h-3 w-3 rounded-full bg-[var(--color-curtain)]" />
            <h2 className="hu-label m-0 font-bold !tracking-[0.28em] text-[var(--color-marquee)]">
              {auditions.label}
            </h2>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h3 className="hu-h2 m-0 text-[clamp(44px,6vw,76px)] text-[var(--color-paper)]">
                {auditions.title}
              </h3>
              <p className="mt-5 max-w-[36ch] text-[21px] leading-relaxed text-[var(--color-paper)]/[0.78]">
                {auditions.deck}
              </p>

              <dl className="mt-8 border-t-2 border-[var(--color-paper)]/[0.28]">
                {auditions.details.map((d) => (
                  <div
                    key={d.label}
                    className="grid grid-cols-[110px_1fr] gap-4 border-b border-[var(--color-paper)]/[0.18] py-3.5 font-[family-name:var(--font-label)] text-sm uppercase tracking-[0.08em] md:grid-cols-[130px_1fr]"
                  >
                    <dt className="text-[var(--color-ash)]">{d.label}</dt>
                    <dd
                      className={`m-0 ${d.gold ? "text-[var(--color-marquee)]" : "text-[var(--color-paper)]"}`}
                    >
                      {d.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={auditions.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hu-btn hu-btn-primary !border-[var(--color-paper)]"
                  style={{ boxShadow: "5px 5px 0 var(--color-marquee)" }}
                >
                  Sign Up to Audition
                </a>
                <Link href="/join" className="hu-btn hu-btn-ghost-inv">
                  Audition Info
                </Link>
              </div>
            </div>

            <div className="border-[3px] border-[var(--color-paper)] shadow-[10px_10px_0_var(--color-curtain)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={auditions.photo}
                  alt="HumorUs cast performing on stage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Recent photos ---------- */}
      <section className="border-b-4 border-[var(--color-ink)] px-6 py-[72px] md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="hu-h2 m-0 text-[clamp(36px,5vw,54px)]">Recent Photos</h2>
            <span className="hu-label text-[var(--color-ash)] !tracking-[0.2em]">
              Fall 2024 – Spring 2026
            </span>
          </div>
          <Gallery images={recentPhotos} ratio="3/2" columns={3} />
        </div>
      </section>

      {/* ---------- Testimonial ---------- */}
      <section className="border-b-4 border-[var(--color-ink)] bg-[var(--color-curtain)] px-6 py-20 text-center text-[var(--color-card)] md:px-10">
        <div className="mx-auto max-w-[900px]">
          <p className="hu-h2 m-0 text-[clamp(40px,7vw,68px)] italic">&ldquo;HumorUs rules.&rdquo;</p>
          <p className="hu-label mt-6 !tracking-[0.24em] opacity-85">
            — Every HumorUs Member Ever
          </p>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="hu-h2 m-0 text-[clamp(38px,5.5vw,60px)]">Ready to Laugh?</h2>
            <p className="hu-body mt-4 max-w-[44ch] !text-xl">
              Join us for a night of sketch comedy you won&apos;t forget!
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={auditions.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hu-btn hu-btn-primary"
            >
              Audition Now
            </a>
            <Link href="/about" className="hu-btn hu-btn-ghost">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

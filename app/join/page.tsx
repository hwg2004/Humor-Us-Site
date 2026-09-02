"use client";
import { useState } from "react";

const importantDates = [
  { label: "Club Fest", value: "Saturday, September 5 · 12:00–1:30 PM — come find our table!" },
  { label: "O-Week Show", value: "September 5 & 6" },
  { label: "Auditions", value: "September 9 & 10 · 4:30–6:30 PM" },
  { label: "Callbacks", value: "September 12" },
];

const faqs = [
  {
    q: "When are auditions?",
    a: "Auditions will be Wednesday, September 9 and Thursday, September 10 from 4:30-6:30. We offer 2 different sessions (of which you only have to attend one), that way you are sure to find one that fits your schedule.",
  },
  {
    q: "Do I need experience in theatre/drama/comedy to audition?",
    a: "No, anyone can audition regardless of experience levels. In fact, many Humor Us cast members had no comedy experience before joining.",
  },
  {
    q: "What should I bring to auditions?",
    a: "Nothing! Just bring yourself and a good attitude. We will provide all other necessary materials for the audition.",
  },
  {
    q: "What's the time commitment?",
    a: "Humor Us! is not a huge time commitment during most of the semester, but around show times, rehearsals can become time consuming. Aside from that, we meet twice a week, like many other clubs, to share sketches and write together.",
  },
];

const otherWays = [
  { n: "01", title: "Come to Shows", body: "Best way to support us! Bring friends, laugh loudly." },
  { n: "02", title: "Follow Us", body: "@humorussketchcomedy on Instagram for updates and clips." },
  { n: "03", title: "Donate!", body: "Just give us money! Money is awesome." },
];

export default function JoinPage() {
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);

  return (
    <>
      <section className="px-6 pt-16 md:px-10">
        <div className="mx-auto max-w-[1000px]">
          <h1 className="hu-h1 m-0 text-[clamp(56px,10vw,104px)]">Join HumorUs!</h1>
          <p className="hu-body mt-8 max-w-[70ch] !text-[21px] !leading-[1.55]">
            Auditions to join Humor Us are held in early September. Join us on Wednesday, September
            9 OR Thursday, September 10 from 4:30 - 6:30pm in Uris Hall G01! Anyone can audition
            even if you have no experience - neither did we! Auditions are a super fun way to get to
            know the current members and see if Humor Us is right for you!
          </p>
        </div>
      </section>

      {/* ---------- Auditions ---------- */}
      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="hu-h2 mb-6 text-[clamp(32px,4.5vw,42px)]">Auditions</h2>
          <div className="hu-frame hu-shadow-ink bg-[var(--color-marquee)] p-9">
            <div className="hu-label mb-5 !tracking-[0.24em] text-[var(--color-curtain-dark)]">
              Important Dates
            </div>
            <dl className="border-t-2 border-[var(--color-ink)]">
              {importantDates.map((d, i) => (
                <div
                  key={d.label}
                  className={`grid gap-5 py-3.5 md:grid-cols-[200px_1fr] ${
                    i === importantDates.length - 1
                      ? "border-b-2 border-[var(--color-ink)]"
                      : "border-b border-[var(--color-ink)]/30"
                  }`}
                >
                  <dt className="hu-h3 text-[15px]">{d.label}</dt>
                  <dd className="m-0 text-[17px]">{d.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 font-[family-name:var(--font-label)] text-[13px] leading-relaxed text-[var(--color-soot)]">
              Can&apos;t make auditions? Email us at humoruscomedy@gmail.com - we can work something
              out!
            </p>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="px-6 pb-14 md:px-10">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="hu-h2 mb-6 text-[clamp(32px,4.5vw,42px)]">Frequently Asked Questions</h2>
          <div className="grid gap-3.5">
            {faqs.map((faq, index) => {
              const open = selectedFAQ === index;
              return (
                <div key={faq.q} className="hu-card">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setSelectedFAQ(open ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors hover:bg-[var(--color-marquee)]"
                  >
                    <span className="hu-h3 text-lg">{faq.q}</span>
                    <span className="font-[family-name:var(--font-display)] text-[26px] leading-none text-[var(--color-curtain)]">
                      {open ? "–" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="border-t-2 border-[var(--color-ink)]/15 px-6 pt-[18px] pb-[22px] text-[17px] leading-relaxed text-[var(--color-soot)]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Other ways ---------- */}
      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="hu-h2 mb-3 text-[clamp(32px,4.5vw,42px)]">
            Can&apos;t Commit to Membership?
          </h2>
          <p className="hu-body mb-7">No worries! There are other ways to support HumorUs:</p>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {otherWays.map((w) => (
              <div key={w.n} className="hu-card p-6">
                <div className="hu-label !text-[11px] !tracking-[0.2em] text-[var(--color-curtain)]">
                  {w.n}
                </div>
                <h3 className="hu-h3 my-2.5 text-xl">{w.title}</h3>
                <p className="m-0 text-base leading-relaxed text-[var(--color-soot)]">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t-4 border-[var(--color-ink)] bg-[var(--color-curtain)] px-6 py-20 text-center text-[var(--color-card)] md:px-10">
        <div className="mx-auto max-w-[900px]">
          <h2 className="hu-h2 m-0 text-[clamp(40px,6vw,64px)]">Ready to Make Cornell Laugh?</h2>
          <p className="mt-6 mb-9 text-xl">
            Don&apos;t overthink it - if you&apos;ve read this far, you should audition!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/humorussketchcomedy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hu-btn hu-btn-paper"
            >
              Follow for Updates
            </a>
            <a
              href="mailto:humoruscomedy@gmail.com?subject=Interested in Joining!"
              className="hu-btn hu-btn-ghost-inv hover:!text-[var(--color-curtain)]"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

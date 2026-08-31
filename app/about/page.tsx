import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Writing",
    body: "For the first half of a semester, HumorUs meets every week to read through and give notes on sketches that members have written. With this feedback, members are able to revise their sketches and gain ideas for new ones.",
    image: "/images/about/jared_being_cutie.jpg",
    alt: "Writing session",
    shadow: "hu-shadow-ink",
  },
  {
    n: "02",
    title: "Rehearsing",
    body: "Once the writing period is over and the group decides on the sketches they want to perform, the rehearsal period begins. Over the course of 2 weeks, Humor Us! meets every weekday to rehearse the chosen sketches and refine their performances.",
    image: "/images/about/marc_hotdog.jpg",
    alt: "Rehearsal session",
    shadow: "hu-shadow-gold",
    flip: true,
  },
  {
    n: "03",
    title: "Performing",
    body: "Each semester, Humor Us! holds one big show that is the culmination of all of the hard work the members have put into writing and rehearsing. Typically, the Fall show is in early November, and the Spring show is in the middle of April.",
    image: "/images/general/DSC_0449.jpg",
    alt: "Performing on stage",
    shadow: "hu-shadow-ink",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pt-16 md:px-10">
        <div className="mx-auto max-w-[960px]">
          <h1 className="hu-h1 m-0 text-[clamp(56px,10vw,100px)]">About HumorUs!</h1>
          <p className="hu-h3 mt-8 text-[26px] !leading-tight text-[var(--color-curtain)]">
            Cornell&apos;s Premier Sketch Comedy Group!
          </p>
          <p className="hu-body mt-5 max-w-[66ch]">
            Humor Us! was founded as a sketch comedy group at Cornell University in 2006, and every
            year since, new generations of Cornellians have come together to write and perform
            sketches!
          </p>
        </div>
      </section>

      <section className="px-6 pt-12 md:px-10">
        <div className="mx-auto max-w-[1200px] border-[3px] border-[var(--color-ink)] shadow-[10px_10px_0_var(--color-curtain)]">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/images/about/audience_pic.jpg"
              alt="HumorUs cast group photo"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-[72px] md:px-10">
        <div className="mx-auto max-w-[960px]">
          <h2 className="hu-h2 mb-6 text-[clamp(34px,5vw,46px)]">Our Shows</h2>
          <p className="hu-body mb-4 max-w-[66ch]">
            Every semester, we produce a brand-new show featuring 15-20 original sketches written,
            directed, and performed by our members. Our shows typically run for about 75 minutes at
            venues like Klarman Auditorium and the Rockefeller Hall Auditorium.
          </p>
          <p className="hu-body max-w-[66ch]">
            Past shows have included &ldquo;The Erectoral College,&rdquo; &ldquo;Nothing. Cuz of
            Woke,&rdquo; and &ldquo;Fully Clothed and Afraid&rdquo;. Each show is unique, reflecting
            the talent and creativity of our current members.
          </p>
        </div>
      </section>

      <section className="px-6 pb-[72px] md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="hu-h2 mb-9 text-[clamp(34px,5vw,46px)]">Our Process</h2>
          <div className="grid gap-10">
            {steps.map((s) => (
              <div key={s.n} className="grid items-center gap-10 md:grid-cols-2">
                <div className={s.flip ? "md:order-2" : ""}>
                  <div className="hu-label !tracking-[0.24em] text-[var(--color-curtain)]">
                    Step {s.n}
                  </div>
                  <h3 className="hu-h3 mt-2.5 mb-4 text-4xl">{s.title}</h3>
                  <p className="hu-body !text-lg">{s.body}</p>
                </div>
                <div className={`hu-frame ${s.shadow} ${s.flip ? "md:order-1" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 560px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-4 border-[var(--color-ink)] bg-[var(--color-ink)] px-6 py-20 text-center md:px-10">
        <div className="mx-auto max-w-[900px]">
          <p className="hu-h2 m-0 text-[clamp(32px,5vw,52px)] italic text-[var(--color-paper)]">
            &ldquo;HumorUs has definitely been my favorite experience at Cornell.&rdquo;
          </p>
          <p className="hu-label mt-6 !tracking-[0.24em] text-[var(--color-marquee)]">
            — Every member
          </p>
        </div>
      </section>
    </>
  );
}

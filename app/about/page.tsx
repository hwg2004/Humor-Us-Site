import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="space-y-12 max-w-4xl">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent">
        About HumorUs!
      </h1>
      
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="font-medium text-xl">
            {"Cornell's Premier Sketch Comedy Group!"}
          </p>
          
          <p className="text-lg">
            {"Humor Us! was founded as a sketch comedy group at Cornell University in 2006, and every year since, new generations of Cornellians have come together to write and perform sketches!"}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/about/audience_pic.jpg"
            alt="HumorUs cast group photo"
            fill
            className="object-cover"
          />
        </div>

        {/* Our Shows Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Shows</h2>
            <div className="space-y-3 text-lg">
              <p>
                Every semester, we produce a brand-new show featuring 15-20 original sketches written, 
                directed, and performed by our members. Our shows typically run for about 75 minutes 
                at venues like Klarman Auditorium and the Rockefeller Hall Auditorium.
              </p>
              <p>
                {'Past shows have included "The Erectoral College," "Nothing. Cuz of Woke," and "Fully Clothed and Afraid". Each show is unique, reflecting the talent and creativity of our current members.'}
              </p>
            </div>
          </div>
        </div>

        {/* Our Process Section with integrated images */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Our Process</h2>
          
          {/* Writing Section with Image */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Writing</h3>
              <p className="text-lg">
                For the first half of a semester, HumorUs meets every week to read 
                through and give notes on sketches that members have written. With this feedback, members are able 
                to revise their sketches and gain ideas for new ones.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/jared_being_cutie.jpg"
                alt="Writing session"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Rehearsing Section with Image */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg md:order-1">
              <Image
                src="/images/about/marc_hotdog.jpg"
                alt="Rehearsal session"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3 md:order-2">
              <h3 className="text-xl font-semibold">Rehearsing</h3>
              <p className="text-lg">
                Once the writing period is over and the group decides on the sketches they want to perform, 
                the rehearsal period begins. Over the course of 2 weeks, Humor Us! meets every weekday to rehearse the chosen sketches 
                and refine their performances.
              </p>
            </div>
          </div>

          {/* Performing Section */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Performing</h3>
              <p className="text-lg">
                Each semester, Humor Us! holds one big show that is the culmination of all of the hard work 
                the members have put into writing and rehearsing. Typically, the Fall show is in early November, and the Spring show is 
                in the middle of April. 
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/general/DSC_0449.jpg"
                  alt="Writing session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
        </div>

        {/* Quote Section */}
        <div className="text-center py-8 px-6 bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-accent-light)]/5 rounded-2xl">
          <p className="text-2xl font-medium italic mb-3">
            {'"HumorUs has definitely been my favorite experience at Cornell."'}
          </p>
          <p className="text-lg opacity-75">- Every member</p>
        </div>
      </div>
    </section>
  );
}
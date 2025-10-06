import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="space-y-8 max-w-4xl">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent">
        About HumorUs!
      </h1>
      
      <div className="space-y-6 text-lg">
        <p className="font-medium text-xl">
          Cornell's Premier Sketch Comedy Group!
        </p>
        
        <p>
          Humor Us! was founded as a sketch comedy group at Cornell University in 2006, and every year since, new generations of Cornellians have come together to write and perform sketches!
        </p>

         {/* Image #1 */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/about/audience_pic.jpg"
            alt="HumorUs cast group photo"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Shows</h2>
          <p>
            Every semester, we produce a brand-new show featuring 15-20 original sketches written, 
            directed, and performed by our members. Our shows typically run for about 75 minutes 
            at venues like Klarman Auditorium and the Rockefeller Hall Auditorium.
          </p>
          <p>
            Past shows have included "The Erectoral College," "Nothing. Cuz of Woke," and "Fully Clothed and Afriad". 
            Each show is unique, reflecting the talent and creativity of our current members.
          </p>
        </div>

          {/* Image #2 */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/about/jared_being_cutie.jpg"
            alt="Show night performance"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Process</h2>
          <p>
            <strong>Writing:</strong> For the first half of a semester, Humor Us! meets every week to read 
            through and give notes on sketches that members have written. With this feedback, members are able 
            to revise their sketches and gain ideas for new ones.
          </p>

           {/* Image #3 */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/about/marc_hotdog.jpg"
            alt="Rehearsal session"
            fill
            className="object-cover"
          />
        </div>
          <p>
            <strong>Rehearsing:</strong> Once the writing period is over and the group decides on the sketches they want to perform, 
            the rehearsal period begins. Over the course of 2 weeks, Humor Us! meets every weekday to rehearse the chosen sketches 
            and refine their performances.
          </p>
           <p>
            <strong>Performing:</strong> Each semester, Humor Us! holds one big show that is the culmination of all of the hard work 
            the members have put into writing and rehearsing. Typically, the Fall show is in early November, and the Spring show is 
            in the middle of April. 
          </p>
        </div>

        <div className="text-center py-6">
          <p className="text-xl font-medium italic">
            "HumorUs has definitely been my favorite experience at Cornell."
          </p>
          <p className="text-base mt-2">- Every member</p>
        </div>
      </div>
    </section>
  );
}
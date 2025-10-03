export default function AboutPage() {
  return (
    <section className="space-y-8 max-w-4xl">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent">
        About HumorUs!
      </h1>
      
      <div className="space-y-6 text-lg">
        <p className="font-medium text-xl">
          Cornell's premier sketch comedy troupe, making campus laugh since 2006! 🎭
        </p>
        
        <p>
          HumorUs! is more than just a comedy group – we're a tight-knit community of writers, performers, 
          and comedy lovers who come together every week to create original sketch comedy that reflects 
          the Cornell experience and beyond. From prelim panic to dining hall disasters, from existential 
          crises to TikTok trends, nothing is off-limits for our sketches.
        </p>

        <div className="rounded-lg border-2 border-[var(--color-accent-light)] bg-[var(--color-accent-light)]/10 p-6">
          <h2 className="text-2xl font-bold mb-4">What We Do</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-[var(--color-accent)]">✍️ Write</h3>
              <p className="text-base">Original sketches every week at our pitch meetings</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-accent)]">🎬 Direct</h3>
              <p className="text-base">Members direct their own sketches and collaborate on vision</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-accent)]">🎭 Perform</h3>
              <p className="text-base">Live shows each semester in venues across campus</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-accent)]">🎥 Film</h3>
              <p className="text-base">Video sketches for our YouTube and social media</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Shows</h2>
          <p>
            Every semester, we produce a brand-new show featuring 10-15 original sketches written, 
            directed, and performed by our members. Our shows typically run for about 90 minutes 
            of non-stop laughs at venues like Klarman Auditorium and the Schwartz Center Black Box.
          </p>
          <p>
            Past show themes have included "Brokeback Slope," "The Gorge-ous Life," and "Prelim Season: 
            A Comedy of Errors." Each show is unique, reflecting the creativity and humor of our current members.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Process</h2>
          <p>
            <strong>Weekly Meetings:</strong> Every week, we gather for pitch meetings where members 
            present new sketch ideas. Through collaborative workshops, table reads, and rehearsals, 
            we refine our material until it's show-ready.
          </p>
          <p>
            <strong>Community First:</strong> While we love making people laugh, what we love even 
            more is the community we've built. HumorUs! is a place where you can fail spectacularly, 
            succeed brilliantly, and always find support from your fellow comedians.
          </p>
        </div>

        <div className="rounded-lg bg-[var(--color-highlight)]/20 border-2 border-[var(--color-highlight)] p-6">
          <h2 className="text-2xl font-bold mb-3">Fun Facts</h2>
          <ul className="space-y-2">
            <li>📍 Founded in 2006, making us almost old enough to vote!</li>
            <li>🎭 We've performed over 50 original shows</li>
            <li>👥 Alumni have gone on to write for TV shows, perform stand-up professionally, and more</li>
            <li>🏆 We're one of three major comedy groups at Cornell (alongside The Whistling Shrimp and The Skitsophrenics)</li>
            <li>🎟️ Our shows typically sell out – get tickets early!</li>
          </ul>
        </div>

        <div className="text-center py-6">
          <p className="text-xl font-medium italic">
            "HumorUs has definitely been my favorite experience at Cornell."
          </p>
          <p className="text-base mt-2">– Every member, probably</p>
        </div>
      </div>
    </section>
  );
}
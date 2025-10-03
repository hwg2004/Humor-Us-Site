"use client";
import { useState } from "react";

export default function JoinPage() {
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do I need comedy experience?",
      a: "Absolutely not! We're looking for enthusiasm and creativity. Some of our best members had never done comedy before joining. We'll teach you everything you need to know about sketch writing and performing."
    },
    {
      q: "What's the time commitment?",
      a: "We meet weekly for 2-3 hours for pitch meetings and workshops. Leading up to shows (twice a year), we have additional rehearsals. It's flexible – we understand Cornell is demanding!"
    },
    {
      q: "Can I just write? Or just perform?",
      a: "While we encourage everyone to try both, you can definitely focus on your strengths! Some members primarily write, others love being on stage. You'll find your niche."
    },
    {
      q: "What happens at auditions?",
      a: "Auditions are fun and low-pressure! You'll perform a short prepared piece (can be anything – stand-up, character, storytelling), participate in some improv games, and have a casual chat with current members."
    },
    {
      q: "How competitive is it?",
      a: "We typically accept 5-8 new members each semester. While spots are limited, we're looking for people who vibe with our group culture as much as talent. Be yourself!"
    },
    {
      q: "When are auditions?",
      a: "Fall auditions happen during the second week of classes. Spring auditions are in early February. Follow our Instagram @humorussketchcomedy for exact dates!"
    }
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] bg-clip-text text-transparent">
          Join HumorUs!
        </h1>
        <p className="text-xl mt-4 font-medium">
          Think you're funny? Know you're funny? Not sure but willing to find out? 
          <br />We want YOU! 🎭
        </p>
      </div>

      {/* Why Join Section */}
      <div className="rounded-lg bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-light)]/10 border-2 border-[var(--color-accent-light)] p-6">
        <h2 className="text-2xl font-bold mb-4">Why Join HumorUs?</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-2xl">🎭</span>
              <div>
                <h3 className="font-semibold">Find Your People</h3>
                <p className="text-sm text-black/70 dark:text-white/70">
                  Join a supportive community of comedy lovers who'll become your closest friends at Cornell
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">✍️</span>
              <div>
                <h3 className="font-semibold">Create Original Content</h3>
                <p className="text-sm text-black/70 dark:text-white/70">
                  Write and perform your own sketches – see your ideas come to life on stage
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🎬</span>
              <div>
                <h3 className="font-semibold">Learn New Skills</h3>
                <p className="text-sm text-black/70 dark:text-white/70">
                  Comedy writing, directing, performing, video production – we do it all
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-2xl">🎪</span>
              <div>
                <h3 className="font-semibold">Perform for Real Audiences</h3>
                <p className="text-sm text-black/70 dark:text-white/70">
                  Our shows regularly sell out venues across campus – experience the rush of live comedy
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🚀</span>
              <div>
                <h3 className="font-semibold">Build Your Resume</h3>
                <p className="text-sm text-black/70 dark:text-white/70">
                  Leadership roles, creative portfolio, teamwork experience – valuable for any career path
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">😂</span>
              <div>
                <h3 className="font-semibold">Have Fun!</h3>
                <p className="text-sm text-black/70 dark:text-white/70">
                  Weekly meetings are the highlight of our week – guaranteed laughs and good vibes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audition Process */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">The Audition Process</h2>
        
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border-2 border-[var(--color-highlight)] p-4">
            <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">Step 1</div>
            <h3 className="font-semibold mb-2">Come to Our Show!</h3>
            <p className="text-sm text-black/70 dark:text-white/70">
              Get a feel for what we do. Shows are announced on our Instagram and are usually free or $5.
            </p>
          </div>
          
          <div className="rounded-lg border-2 border-[var(--color-highlight)] p-4">
            <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">Step 2</div>
            <h3 className="font-semibold mb-2">Sign Up for Auditions</h3>
            <p className="text-sm text-black/70 dark:text-white/70">
              Sign-ups open the first week of each semester. Follow @humorussketchcomedy for the link.
            </p>
          </div>
          
          <div className="rounded-lg border-2 border-[var(--color-highlight)] p-4">
            <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">Step 3</div>
            <h3 className="font-semibold mb-2">Show Us What You Got!</h3>
            <p className="text-sm text-black/70 dark:text-white/70">
              Prepare 2-3 minutes of comedy content and come ready to play some improv games!
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--color-highlight)]/20 border-2 border-[var(--color-highlight)] p-6">
          <h3 className="font-bold text-lg mb-3">📅 Important Dates</h3>
          <div className="space-y-2">
            <p><strong>Fall 2025 Auditions:</strong> September 8-12 (Second week of classes)</p>
            <p><strong>Spring 2026 Auditions:</strong> February 3-7</p>
            <p className="text-sm text-black/70 dark:text-white/70 mt-3">
              Can't make auditions? Email us at humoruscomedy@gmail.com – we can work something out!
            </p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-lg border overflow-hidden transition-all hover:border-[var(--color-accent-light)]"
            >
              <button
                onClick={() => setSelectedFAQ(selectedFAQ === index ? null : index)}
                className="w-full text-left p-4 flex justify-between items-center hover:bg-[var(--color-accent)]/5 transition-colors"
              >
                <span className="font-medium">{faq.q}</span>
                <span className="text-2xl transition-transform" style={{
                  transform: selectedFAQ === index ? 'rotate(45deg)' : 'rotate(0deg)'
                }}>
                  +
                </span>
              </button>
              {selectedFAQ === index && (
                <div className="px-4 pb-4 text-black/70 dark:text-white/70">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Other Ways to Get Involved */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Can't Commit to Membership?</h2>
        <p>No worries! There are other ways to support HumorUs:</p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">🎟️ Come to Shows</h3>
            <p className="text-sm text-black/70 dark:text-white/70">
              Best way to support us! Bring friends, laugh loudly.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">📱 Follow Us</h3>
            <p className="text-sm text-black/70 dark:text-white/70">
              @humorussketchcomedy on Instagram for updates and clips.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">🎥 Tech Crew</h3>
            <p className="text-sm text-black/70 dark:text-white/70">
              Help with lights, sound, or video for shows.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make Cornell Laugh?</h2>
        <p className="text-lg mb-6">
          Don't overthink it – if you've read this far, you should audition!
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="https://www.instagram.com/humorussketchcomedy/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[var(--color-accent)] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Follow for Updates
          </a>
          <a 
            href="mailto:humoruscomedy@gmail.com?subject=Interested in Joining!" 
            className="bg-white/20 border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white/30 transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
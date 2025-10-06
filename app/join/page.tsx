"use client";
import { useState } from "react";

export default function JoinPage() {
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      q: "When are auditions?",
      a: "Auditions will be Wednesday, September 17 and Thursday, September 18 from 4:30-6:30. We offer 2 different sessions (of which you only have to attend one), that way you are sure to find one that fits your schedule."
    },
    {
      q: "Do I need experience in theatre/drama/comedy to audition?",
      a: "No, anyone can audition regardless of experience levels. In fact, many Humor Us cast members had no comedy experience before joining."
    },
    {
      q: "What should I bring to auditions?",
      a: "Nothing! Just bring yourself and a good attitude. We will provide all other necessary materials for the audition."
    },
    {
      q: "What's the time commitment?",
      a: "Humor Us! is not a huge time commitment during most of the semester, but around show times, rehearsals can become time consuming. Aside from that, we meet twice a week, like many other clubs, to share sketches and write together."
    }
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] bg-clip-text text-transparent">
          Join HumorUs!
        </h1>
        <p className="text-xl mt-4 font-medium">
          Auditions to join Humor Us are held in early September. Join us on Wednesday, September 17 OR Thursday, September 18 from  4:30 - 6:30pm in Uris Hall G01! Anyone can audition even if you have no experience - neither did we! Auditions are a super fun way to get to know the current members and see if Humor Us is right for you!
        </p>
      </div>

      {/* Audition Process */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Auditions</h2>
        
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
            <p><strong>Club Fest:</strong> September 13 (Second week of classes)</p>
            <p><strong>O-Week Show:</strong> September 13</p>
            <p><strong>Auditions:</strong> September 17, 18</p>
            <p><strong>Callbacks:</strong> September 20</p>
            <p className="text-sm text-black/70 dark:text-white/70 mt-3">
              Can't make auditions? Email us at humoruscomedy@gmail.com - we can work something out!
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
            <h3 className="font-semibold mb-2">🤑 Donate!</h3>
            <p className="text-sm text-black/70 dark:text-white/70">
              Just give us money! Money is awesome.
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
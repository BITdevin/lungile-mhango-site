
import React from 'react';
import FadeInSection from './FadeInSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Lungile Mhango smiling warmly"
                className="rounded-lg shadow-2xl object-cover w-full h-full aspect-[4/5]"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-6 leading-tight">The Voice of <span className="text-accent">Mpumalanga</span></h2>
              <p className="mb-8 text-lg text-gray-text dark:text-dark-text/80 leading-relaxed">
                Lungile Mhango, affectionately known as Sbukubukwana, is more than just a voice on the radio; she's a beacon of hope and inspiration across Mpumalanga. As the host of "Tfokomala Nami" on Ligwalagwala FM, airing weekdays from 9 am to 12 pm, she brings warmth and motivation to thousands of listeners every day.
              </p>
              <div className="p-6 border-l-4 border-accent bg-base dark:bg-dark-bg/50 rounded-r-lg shadow-inner">
                <h3 className="font-bold text-xl mb-2 text-charcoal dark:text-white">The Story of a Scar</h3>
                <p className="italic text-gray-text dark:text-dark-text/70 leading-relaxed">
                  "Growing up, I had a prominent scar on my face from a childhood accident. For years, it was a source of insecurity. But one day, I looked in the mirror and decided this scar wasn't a flaw; it was a map of my journey. It told a story of survival, resilience, and the strength that comes from embracing your imperfections. Today, I wear it with pride, a reminder that our deepest wounds can become our greatest strengths."
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;

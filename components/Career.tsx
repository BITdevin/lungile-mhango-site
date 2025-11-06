
import React from 'react';
import FadeInSection from './FadeInSection';
import { RadioIcon, MicIcon, StarIcon, RocketIcon } from './icons/Icons';

const Career: React.FC = () => {
  const timelineEvents = [
    {
      year: '2006',
      title: 'The Journey Begins',
      description: 'Lungile takes her first steps into broadcasting at Barberton Community Radio, honing her skills and finding her voice.',
      icon: <RadioIcon />,
    },
    {
      year: 'Present',
      title: 'Ligwalagwala FM Host',
      description: 'Becomes the beloved host of "Tfokomala Nami", a cornerstone of weekday morning radio in Mpumalanga.',
      icon: <MicIcon />,
    },
    {
      year: 'Ongoing',
      title: 'Vodacom Ambassador',
      description: 'Represents Vodacom in Mpumalanga, connecting with communities and championing digital inclusion.',
      icon: <StarIcon />,
    },
    {
      year: '2025 & Beyond',
      title: 'Future Aspirations',
      description: 'Expanding her motivational speaking engagements and growing the foundation\'s reach to empower more young people.',
      icon: <RocketIcon />,
    },
  ];

  return (
    <section id="career" className="py-20 md:py-32 bg-base dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-charcoal dark:text-white mb-20">Career <span className="text-accent">Milestones</span></h2>
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="absolute border-2 border-accent/20 h-full" style={{ left: '50%' }}></div>
            {timelineEvents.map((event, index) => (
              <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-accent shadow-xl w-14 h-14 rounded-full">
                  <span className="mx-auto text-charcoal">{event.icon}</span>
                </div>
                <div className="order-1 bg-white dark:bg-charcoal rounded-lg shadow-xl w-5/12 px-6 py-4 transform transition-transform hover:scale-105">
                  <p className="text-sm font-semibold text-accent mb-1">{event.year}</p>
                  <h3 className="mb-2 font-bold text-charcoal dark:text-white text-xl">{event.title}</h3>
                  <p className="text-sm leading-relaxed tracking-wide text-gray-text dark:text-dark-text/80">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Career;

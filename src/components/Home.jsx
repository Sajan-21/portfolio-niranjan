// import React from 'react'
// import Nav from './nav/Nav'
// import Profile from './profile/Profile'
// import Overview from './overview/Overview'
// import Certifications from './certifications/Certifications'
// import Awards from './awards/Awards'
// import Educations from './education/Educations'
// import Contact from './contact/Contact'
// import Achievemnts from './achievements/Achievemnts'
// import SkillRatings from './skillRatings/SkillRatings'

// const Home = () => {
//   return (
//     <div className='bg-black'>
//         <Nav />
//         <Profile />
//         <Overview />
//         <Achievemnts />
//         <SkillRatings />
//         <div className='flex max-md:flex-col justify-center text-white md:divide-x md:divide-yellow-950 max-md:divide-y max-md:divide-yellow-950 md:p-10 '>
//           <Certifications />
//           <Awards />
//         </div>
//         <Educations />
//         <Contact />
//     </div>
//   )
// }

// export default Home

import React, { useRef } from 'react';
import Nav from './nav/Nav';
import Profile from './profile/Profile';
import Overview from './overview/Overview';
import Certifications from './certifications/Certifications';
import Awards from './awards/Awards';
import Educations from './education/Educations';
import Contact from './contact/Contact';
import Achievements from './achievements/Achievemnts';
import SkillRatings from './skillRatings/SkillRatings';

const Home = () => {
  // Refs for each section
  const profileRef = useRef(null);
  const overviewRef = useRef(null);
  const achievementsRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const awardsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white">
      <Nav
        onProfileClick={() => scrollToSection(profileRef)}
        onOverviewClick={() => scrollToSection(overviewRef)}
        onAchievementsClick={() => scrollToSection(achievementsRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onCertificationsClick={() => scrollToSection(certificationsRef)}
        onAwardsClick={() => scrollToSection(awardsRef)}
        onEducationClick={() => scrollToSection(educationRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      <div ref={profileRef}><Profile /></div>
      <div ref={overviewRef}><Overview /></div>
      <div ref={achievementsRef}><Achievements /></div>
      <div ref={skillsRef}><SkillRatings /></div>

      <div
        className="flex max-md:flex-col justify-center md:divide-x md:divide-yellow-950 max-md:divide-y max-md:divide-yellow-950 md:p-10"
      >
        <div ref={certificationsRef}><Certifications /></div>
        <div ref={awardsRef}><Awards /></div>
      </div>

      <div ref={educationRef}><Educations /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
};

export default Home;

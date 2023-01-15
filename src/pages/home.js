
import React from 'react';
import FirstSection from '../components/Home/FirstSection/FirstSection.js';
import SecondSection from '../components/Home/SecondSection/SecondSection.js';
import ThirdSection from '../components/Home/ThirdSection/ThirdSection.js';
import FourthSection from '../components/Home/FourthSection/FourthSection.js';
import FifthSection from '../components/Home/FifthSection.js';

function Home() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  );
}

export default Home;
import React from 'react';
import FirstSection from '../components/Home/FirstSection/FirstSection';
import SecondSection from '../components/Home/SecondSection/SecondSection';
import ThirdSection from '../components/Home/ThirdSection/ThirdSection';
import FourthSection from '../components/Home/FourthSection/FourthSection';
import FifthSection from '../components/Home/FifthSection';

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

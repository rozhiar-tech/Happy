import React, { useState } from 'react';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../firebase/firebaseinit';
import technologyBlog from './technology_blog.svg';
import traumaBlog from './trauma_blog.svg';
import anxietyBlog from './anxiety_blog.svg';
import subscribe from '../../components/Footer/subscribe.svg';
import Gratitude from '../../components/Gratitude';

function Resources() {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState(null);

  async function handleSubscription() {
    const newsletterRef = doc(db, 'newsletter', 'subscribers');
    try {
      await updateDoc(newsletterRef, {
        emails: arrayUnion(email),
      });
      setSubStatus(() => 'Success');
    } catch (error) {
      setSubStatus(() => 'error');
    }
  }

  let props = {
    title: 'Thank You for subscribing!',
    message:
      'Your request has been sent. You are now subscribed to our newsletter.',
    btnValue: 'Go Back To Resources',
    onHandleClick: () => {
      setEmail(() => '');
      setSubStatus(() => null);
    },
  };

  if (subStatus === 'error') {
    props = {
      ...props,
      title: 'Error!',
      message:
        'An error has occured. Your email was not sent. Please try again.',
    };
  }

  return (
    <div className="w-screen">
      {subStatus ? (
        <Gratitude {...props} />
      ) : (
        <div className="px-4 sm:px-16 lg:px-[10.25rem] py-20 break-words w-screen">
          <img
            src={technologyBlog}
            alt="A person meditating while holding a device"
            className="rounded-3xl mx-auto mb-20 object-contain object-center w-[69.75rem]"
          />
          <div className="mb-16">
            <h1 className="mb-8 text-[3.12rem] leading-[4.7rem]">
              Mental Health and Technology
            </h1>
            <p className="text-xl leading-8 font-light">
              Technology and mental well-being might seem like profoundly
              antagonistic terms. However, there are excellent digital tools to
              help you reach mindfulness and to practice meditation. You can
              even use smartphone apps, virtual reality solutions and digital
              devices as a form of relieving stressing and achieving digital
              detox – as, after a while, you will be able to practice all types
              of anti-anxiety skills on your own. So, let The Medical Futurist
              show you how you can enhance your mental and emotional health with
              the help of technology.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-[2rem] leading-[3rem] mb-4">
              The need for taking care of our emotional health
            </h2>
            <p className="text-xl leading-8 font-light mb-4">
              “Just as we observe physical hygiene to stay well, we need to
              cultivate a kind of emotional hygiene too,” wrote the Dalai Lama
              on his Twitter-feed. There are three crucial points around His
              Holiness’ statement. First and foremost, the popularity of
              health-enhancing, physically active lifestyle is soaring
              worldwide. Nevertheless, there’s always room for improvement: the
              WHO says that globally, 23 percent of adults and 81 percent of
              school-going adolescents are not active enough. According to the
              organization, adults aged 18-64 should do at least 150 minutes of
              moderately intense physical activity each week, which is not
              unaccomplishable. Moreover, the numerically and statistically
              driven 21st-century mind could take a great inspiration and power
              from the various fitness trackers and wearables.
            </p>
            <p className="text-xl leading-8 font-light mb-4">
              Secondly, emotional hygiene seems to be thrown into the shade
              nowadays. Somehow, the culture of busyness prevents us from
              squeezing some time for mental health into our packed schedules.
              Information is pouring on us from millions of communication
              channels; we are connecting with hundreds of ‘friends’ on social
              media, we are obsessed with data due to the fear of missing out
              and time management slices up our days into meetings and
              to-do-lists.
            </p>
            <p className="text-xl leading-8 font-light">
              The pressure to perform and the stress to achieve is the air every
              busy-bee is breathing. However, turbulent lifestyle comes with a
              price. No wonder so many people have mental health issues. In the
              US, that means one in five adults – more than 40 million
              Americans! On the old continent, 27 percent of the population has
              to cope with mental disorders, which means 83 million struggling
              Europeans. In Asia, the prevalence of depression is 20 percent in
              Thailand, 19.9 percent in Taiwan, 19.4 percent in Korea, 17.5 in
              Malaysia and 16.5 percent in China.
            </p>
          </div>
          <div className="mb-40">
            <h2 className="text-[2rem] leading-[3rem] mb-1.5">
              Sign up for The Healing blog
            </h2>
            <p className="text-xl leading-8 font-light mb-10">
              A weekly, ad-free Blog that helps you stay in the know.
            </p>
            <div className="flex border-2 rounded border-pale-spring-bud w-full md:w-fit">
              <input
                type="text"
                className="text-xl pl-4 focus:outline-lavender-indigo w-[calc(100%-60px)]"
                placeholder="Enter your e-mail"
                value={email}
                onChange={(event) => setEmail(() => event.target.value)}
              />
              <div className="flex justify-center items-center cursor-pointer bg-vodka border-l-2 border-pale-spring-bud w-[60px] h-[60px]">
                <button type="button" onClick={handleSubscription}>
                  <img
                    src={subscribe}
                    alt="Subscribe button"
                    className="cursor-pointer"
                  />
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[2rem] leading-[3rem] mb-4">
              Recommended for you
            </h2>
            <div className="flex flex-wrap gap-4">
              <img
                src={traumaBlog}
                alt="Abstract illustration of a girl"
                className="cursor-pointer hover:scale-105 focus:scale-105 ease-in-out duration-300"
              />
              <img
                src={anxietyBlog}
                alt="An anxious person"
                className="cursor-pointer hover:scale-105 focus:scale-105 ease-in-out duration-300"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Resources;

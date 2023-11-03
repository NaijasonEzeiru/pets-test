import Link from 'next/link';

const AboutUs = () => {
  return (
    <main className='min-h-[calc(100vh-30rem)] md:min-h-[calc(100vh-15rem)]flex gap-11 flex-col '>
      <header className='m-auto py-8 bg-secondaryBg pt-28 w-full md:px-16 px-3'>
        <h1 className='text-2xl font-semibold mb-4 text-center mx-3 md:mx-16 lg:mx-32'>
          About Pet Matchup
        </h1>
      </header>
      <div className='flex gap-2 flex-col text-justify my-8 mx-3 md:mx-16 lg:mx-32'>
        <p className='first-letter:uppercase first-letter:text-7xl first-letter:font-bold first-line:tracking-widest first-letter:text-ctaColor first-letter:mr-3 first-letter:float-left first-letter:leading-[4rem]'>
          Welcome to Pets Matchup, where love knows no species! We understand
          the special place your furry, feathered, or scaly companions hold in
          your heart. That&apos;s why we&apos;re dedicated to bringing pet
          owners and their beloved animals together in the most delightful way
          possible.
        </p>
        <p>
          At Pets Matchup, we know that finding the perfect mate for your pet
          can be a challenging and time-consuming task. Whether you&apos;re
          looking for a playmate, a soulmate, or a mate for your little critter,
          we&apos;re here to make the process as easy and enjoyable as possible.
        </p>
        <h3 className='text-2xl font-semibold mt-3'>Our Mission</h3>
        <p>
          Our mission is simple yet profound: to connect pets with their ideal
          companions. We firmly believe that every pet deserves happiness and
          companionship, just as humans do. We&apos;re here to make sure your
          pets find their perfect match, whether it&apos;s for playdates, walks
          in the park, or a lifelong partnership.
        </p>
        <h3 className='text-2xl font-semibold mt-3'>What We Do</h3>
        <ul className='list-inside flex list-disc flex-col gap-2'>
          <li>
            <h5 className='text-lg font-semibold inline'>
              Matchmaking Expertise:
            </h5>{' '}
            <p className='inline'>
              Our team of experienced pet lovers and matchmakers are committed
              to helping you find the right playmate or partner for your pet. We
              take into account your pet&apos;s personality, preferences, and
              unique needs to ensure the perfect match.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>
              Diverse Pet Community:
            </h5>{' '}
            <p className='inline'>
              Pets Matchup is an inclusive platform that caters to all types of
              pets, from dogs and cats to birds, reptiles, and small critters.
              Whatever your pet&apos;s species, we&apos;re here to help them
              find a friend or a mate.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>
              User-Friendly Interface:
            </h5>{' '}
            <p className='inline'>
              Our website is designed to be intuitive and user-friendly. Simply
              create a profile for your pet, browse through potential matches,
              and start connecting with other pet owners in your area.
            </p>
          </li>{' '}
          <li>
            <h5 className='text-lg font-semibold inline'>Safety First:</h5>{' '}
            <p className='inline'>
              We prioritize the safety and well-being of your pets. Our thorough
              vetting process ensures that all members are genuine pet lovers,
              and we provide tips and guidelines to help you and your pets have
              safe, enjoyable interactions.
            </p>
          </li>
        </ul>
        <h3 className='text-2xl font-semibold mt-3'>Why Pets Matchup?</h3>
        <ul className='list-inside flex list-disc flex-col gap-2 mb-6'>
          <li>
            <h5 className='text-lg font-semibold inline'>
              Unconditional Love:
            </h5>{' '}
            <p className='inline'>
              Pets enrich our lives with love, joy, and loyalty. We believe that
              every pet deserves the chance to experience companionship and
              happiness.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>Community:</h5>{' '}
            <p className='inline'>
              We&apos;ve built a welcoming and supportive community of pet
              owners who share the same love for their animals. Here, you can
              make friends for both you and your pets.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>
              Simplify Pet Ownership:
            </h5>{' '}
            <p className='inline'>
              Whether you&apos;re a seasoned pet owner or new to the world of
              animal companionship, Pets Matchup simplifies the process of
              finding mates for your pets. We take the hassle out of searching
              for that perfect playmate or partner.
            </p>
          </li>{' '}
          <li>
            <h5 className='text-lg font-semibold inline'>
              Fun and Fulfillment:
            </h5>{' '}
            <p className='inline'>
              Watching your pet form bonds and enjoy the company of a new friend
              is a heartwarming and fulfilling experience. Pets Matchup adds an
              extra layer of joy to your pet ownership journey.
            </p>
          </li>
        </ul>
        <p>
          Thank you for choosing Pets Matchup. We&apos;re excited to join you on
          this heartwarming adventure to help your pets find the companionship
          they deserve. Join our community today, and let the tail-wagging,
          purring, and chirping bonds begin!
        </p>
      </div>
    </main>
  );
};

export default AboutUs;

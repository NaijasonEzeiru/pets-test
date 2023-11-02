import Link from 'next/link';

const Disclaimer = () => {
  return (
    <main className='flex gap-11 flex-col '>
      <header className='m-auto py-8 bg-secondaryBg pt-28 w-full md:px-16 px-3'>
        <h1 className='text-2xl font-semibold mb-4 text-center mx-3 md:mx-16 lg:mx-32'>
          Disclaimer for PetsMatchup Website
        </h1>
      </header>
      <div className='flex gap-2 flex-col text-justify my-8 mx-3 md:mx-16 lg:mx-32'>
        {/* <h3 className='text-2xl font-semibold mt-3'>Introduction</h3> */}
        <p className='first-letter:uppercase first-letter:text-7xl first-letter:font-bold first-line:tracking-widest first-letter:text-ctaColor first-letter:mr-3 first-letter:float-left first-letter:leading-[4rem] mb-6'>
          Welcome to Pets Matchup, a platform dedicated to helping individuals
          find compatible mates for their beloved pets. Before you proceed to
          use our services, it is essential to understand the terms and
          conditions, as well as the limitations associated with our platform.
          Please read this disclaimer carefully, as it outlines important
          information about our website&apos;s services and responsibilities.
        </p>
        <ul className='list-inside flex list-decimal flex-col gap-2 mb-6'>
          <li>
            <h5 className='text-lg font-semibold inline'>
              No Guarantee of Compatibility:
            </h5>{' '}
            <p className='inline'>
              While we strive to provide a platform where pet owners can connect
              and find suitable mates for their pets, we cannot guarantee the
              compatibility of any given match. Compatibility depends on various
              factors including the pets&apos; personalities, behaviors, and
              other variables beyond our control. We strongly recommend that you
              consult with a veterinarian or professional pet behaviorist before
              introducing any new pets to each other.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>
              User Responsibility:
            </h5>{' '}
            <p className='inline'>
              Users of our platform are responsible for making informed
              decisions about potential matches for their pets. It is essential
              to take your time, ask questions, and gather all relevant
              information about the pets and their owners before proceeding with
              a match. Ensure that all necessary precautions are taken to ensure
              the safety and well-being of your pets.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>Verification:</h5>{' '}
            <p className='inline'>
              We strive to verify the authenticity of users and the information
              they provide. However, we cannot guarantee the accuracy of the
              information provided by users. We advise users to exercise
              caution, verify the details, and meet potential matches in a safe
              and public place.
            </p>
          </li>{' '}
          <li>
            <h5 className='text-lg font-semibold inline'>Conduct:</h5>{' '}
            <p className='inline'>
              We do not tolerate any form of harassment, offensive behavior, or
              inappropriate content on our platform. Users who engage in such
              activities may be banned from our website. We are not responsible
              for the actions or behavior of other users on our platform.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>Liability:</h5>{' '}
            <p className='inline'>
              Pets Matchup is not liable for any damages, injuries, or losses
              that may occur as a result of using our platform. Users agree to
              use our services at their own risk and to release us from any
              liability in this regard.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>Privacy:</h5>{' '}
            <p className='inline'>
              We take your privacy seriously and have implemented security
              measures to protect your personal information. However, we are not
              responsible for any breaches of privacy or data security that may
              occur.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>Modifications:</h5>{' '}
            <p className='inline'>
              We reserve the right to update, change, or modify our website and
              services without prior notice. It is the responsibility of users
              to stay informed about any changes in our policies.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>Jurisdiction:</h5>{' '}
            <p className='inline'>
              This disclaimer is governed by the laws of [Your Jurisdiction].
              Any disputes arising from the use of our platform will be subject
              to the jurisdiction of the courts in [Your Jurisdiction].
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>Use of Cookies:</h5>{' '}
            <p className='inline'>
              Our Website may use cookies to enhance your browsing experience.
              By using our Website and agreeing to this disclaimer, you consent
              to our use of cookies in accordance with the terms of our Privacy
              Policy.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>
              Copyright and Trademarks:
            </h5>{' '}
            <p className='inline'>
              All content on this Website, including but not limited to text,
              graphics, logos, images, audio clips, and software, is the
              property of [Your Company Name] and is protected by copyright and
              trademark laws. Any unauthorized use of this content may violate
              copyright, trademark, and other laws.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>
              Changes to the Disclaimer:
            </h5>{' '}
            <p className='inline'>
              We reserve the right to modify or update this disclaimer at any
              time without notice. It is your responsibility to review this
              disclaimer periodically for any changes. Your continued use of the
              Website following the posting of changes to this disclaimer will
              be considered your acceptance of those changes.
            </p>
          </li>
        </ul>
        <p>
          By using Pets Matchup, you acknowledge that you have read and
          understood this disclaimer. It is essential to use our platform with
          caution and make informed decisions when matching pets. If you do not
          agree with any part of this disclaimer, we recommend refraining from
          using our services. We hope you have a positive experience finding
          compatible mates for your pets and fostering lasting friendships.
        </p>
        <i className='text-right text-sm opacity-70'>
          Last updated: 19/10/2023
        </i>
      </div>
    </main>
  );
};

export default Disclaimer;

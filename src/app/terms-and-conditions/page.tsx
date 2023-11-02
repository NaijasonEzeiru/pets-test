import Link from 'next/link';

const TandC = () => {
  return (
    <main className='flex gap-4 flex-col '>
      <header className='m-auto py-8 bg-secondaryBg pt-28 w-full md:px-16 px-3'>
        <h1 className='text-2xl font-semibold mb-2 text-center'>
          Terms and Conditions for PetMatchup
        </h1>
      </header>
      <i className='mx-3 md:mx-16 lg:mx-32 text-sm opacity-70'>19/10/2023</i>
      <div className='flex gap-2 flex-col text-justify my-8 mx-3 md:mx-16 lg:mx-32'>
        <p className='first-letter:uppercase first-letter:text-7xl first-letter:font-bold first-line:tracking-widest first-letter:text-ctaColor first-letter:mr-3 first-letter:float-left first-letter:leading-[4rem] mb-6'>
          Welcome to PetMatchup! Please read these Terms and Conditions
          carefully before using our website and services. These Terms are a
          legal agreement between you and PetMatchup. By using our website and
          services, you agree to comply with and be bound by these Terms. If you
          do not agree to these Terms, please do not use our website or
          services.
        </p>
        <ul className='list-inside flex list-decimal flex-col gap-2 mb-6'>
          <li>
            <h5 className='text-lg font-semibold inline'>
              Acceptance of Terms:
            </h5>
            <p className='inline'>
              By using our website, you confirm that you are at least 18 years
              old and have the legal capacity to enter into this agreement. You
              also acknowledge that you have read, understood, and agree to be
              bound by these Terms. If you are using PetMatchup on behalf of a
              business or organization, you also represent and warrant that you
              have the authority to legally bind that business or organization
              to these Terms.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>
              Services and Description:
            </h5>
            <p className='inline'>
              PetMatchup offers a platform for individuals to find mates for
              their pets. We provide tools and resources to connect pet owners
              and potential pet mates through profiles and matchmaking
              algorithms. Our services include, but are not limited to:
            </p>
            <ul className='list-disc list-inside ml-3'>
              <li>Creating and managing pet profiles.</li>
              <li>Searching for potential mates for your pet.</li>
              <li>Communicating with other users.</li>
              <li>Receiving recommendations for pet mates.</li>
            </ul>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>User Obligations</h5>
            <ul className='list-disc list-inside ml-3'>
              <li>
                You must provide accurate and complete information when creating
                a pet profile.
              </li>
              <li>
                You are responsible for the content you post on our website and
                any interactions with other users.
              </li>
              <li>You must treat other users with respect and kindness.</li>
              <li>
                You agree not to engage in any illegal or harmful activities on
                our platform.
              </li>
              <li>
                You are solely responsible for your pets&apos; health and
                well-being and must follow all relevant laws and regulations.
              </li>
            </ul>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>Privacy:</h5>
            <p className='inline'>
              We take your privacy seriously. Please review our Privacy Policy
              to understand how we collect, use, and protect your personal
              information. By using PetMatchup, you agree to the terms of our
              Privacy Policy.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>User Content:</h5>
            <p className='inline'>
              You retain ownership of the content you post on our platform.
              However, by posting content, you grant us a non-exclusive,
              worldwide, royalty-free license to use, reproduce, and distribute
              that content in connection with our services.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>Privacy:</h5>
            <p className='inline'>
              We take your privacy seriously and have implemented security
              measures to protect your personal information. However, we are not
              responsible for any breaches of privacy or data security that may
              occur.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>
              Prohibited Content:
            </h5>
            <p className='inline'>You agree not to post content that is:</p>
            <ul className='list-disc list-inside ml-3'>
              <li>Inappropriate, offensive, or harmful</li>
              <li>False, misleading, or fraudulent.</li>
              <li>
                In violation of any third-party rights, including copyright,
                trademark, or privacy rights.
              </li>
              <li>Violating any applicable laws or regulations.</li>
            </ul>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>Termination:</h5>
            <p className='inline'>
              We may, at our discretion, suspend or terminate your account if
              you violate these Terms or engage in any activities that are
              harmful to our community.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>Disclaimers:</h5>
            <p className='inline'>
              PetMatchup does not guarantee the compatibility or safety of pet
              mates found through our platform. Users are responsible for
              assessing and ensuring the suitability of potential pet mates.
              Check our{' '}
              <Link href={'/disclaimer'} className='text-ctaColor'>
                disclaimer page
              </Link>
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>
              Limitation of Liability:
            </h5>
            <p className='inline'>
              To the extent permitted by law, PetMatchup is not liable for any
              direct, indirect, incidental, special, or consequential damages
              resulting from your use of our services.
            </p>
          </li>
          <li>
            <h5 className='text-lg font-semibold inline'>Changes to Terms:</h5>
            <p className='inline'>
              We reserve the right to modify these Terms at any time. We will
              notify users of significant changes, and your continued use of our
              platform constitutes your acceptance of the modified Terms.
            </p>
          </li>
        </ul>
        <div>
          <i className='text-right text-sm block'>signed</i>
          <p className='text-right text-sm'>PetMatchup Team</p>
          <i className='text-right text-sm opacity-70 block'>19/10/2023</i>
        </div>
      </div>
    </main>
  );
};

export default TandC;

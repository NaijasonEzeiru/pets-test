import Link from 'next/link';

const TandC = () => {
  return (
    <main className='flex gap-4 flex-col '>
      <header className='m-auto py-8 bg-secondaryBg pt-28 w-full md:px-16 px-3'>
        <h1 className='text-2xl font-semibold mb-2 text-center'>
          Privacy Policy for PetMatchup
        </h1>
      </header>
      <i className='mx-3 md:mx-16 lg:mx-32 text-sm opacity-70'>19/10/2023</i>
      <div className='flex gap-2 flex-col text-justify my-8 mx-3 md:mx-16 lg:mx-32'>
        <p className='first-letter:uppercase first-letter:text-7xl first-letter:font-bold first-line:tracking-widest first-letter:text-ctaColor first-letter:mr-3 first-letter:float-left first-letter:leading-[4rem] mb-6'>
          At PetsMatchup, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines our practices and policies regarding the collection,
          use, and sharing of your information when you use our website or
          services to help individuals find mates for their pets. By accessing
          or using our services, you agree to the terms of this Privacy Policy.
        </p>
        <h3 className='text-lg font-semibold text-ctaColor'>
          Information We Collect:
        </h3>
        <p>We collect information from you in the following ways:</p>
        <ul className='list-inside flex list-decimal flex-col gap-2 mb-6'>
          <li className='text-lg font-semibold'>Information You Provide</li>
          <ul className='list-inside list-disc marker:text-ctaColor marker:mr-1'>
            <li>
              <h5 className='font-semibold inline'>
                Registration Information:
              </h5>
              <p className='inline ml-2'>
                When you create an account, you provide us with personal
                information, such as your name, email address, and other
                optional profile information.
              </p>
            </li>
            <li>
              <h5 className='font-semibold inline'>Listing Information:</h5>
              <p className='inline ml-2'>
                When you list your pet for mating, you provide details about
                your pet, including name, breed, age, gender, and other relevant
                information.
              </p>
            </li>
            <li>
              <h5 className='font-semibold inline'>Communication:</h5>
              <p className='inline ml-2'>
                We collect the content of messages and communications between
                you and other users of our platform.
              </p>
            </li>
          </ul>
          <li className='text-lg font-semibold'>
            Information We Collect Automatically
          </li>
          <ul className='list-inside list-disc marker:text-ctaColor marker:mr-1'>
            <li>
              <h5 className='font-semibold inline'>Log Data:</h5>
              <p className='inline ml-2'>
                Like most websites, we collect information that your browser
                sends whenever you visit our website. This may include your IP
                address, browser type, device information, and the pages you
                visit.
              </p>
            </li>
            <li>
              <h5 className='font-semibold inline'>Cookies:</h5>
              <p className='inline ml-2'>
                We use cookies to enhance your experience on our platform. These
                are small data files stored on your computer or device. You can
                manage your cookie preferences through your browser settings.
              </p>
            </li>
          </ul>
        </ul>
        <h3 className='text-lg font-semibold text-ctaColor'>
          How We Use Your Information
        </h3>
        <p>
          We use the information we collect for various purposes, including:
        </p>
        <ul className='list-inside list-disc marker:text-ctaColor marker:mr-1'>
          <li>
            <h5 className='font-semibold inline'>Connecting Pet Owners:</h5>
            <p className='inline ml-2'>
              To help you find potential mates for your pet, we share relevant
              information with other users based on your preferences and
              criteria.
            </p>
          </li>
          <li>
            <h5 className='font-semibold inline'>Communication:</h5>
            <p className='inline ml-2'>
              We use your information to facilitate communication between users
              interested in pet mating.
            </p>
          </li>
          <li>
            <h5 className='font-semibold inline'>Improving Our Services:</h5>
            <p className='inline ml-2'>
              We analyze data to improve the functionality and user experience
              of our website and services.
            </p>
          </li>
          <li>
            <h5 className='font-semibold inline'>Security and Compliance:</h5>
            <p className='inline ml-2'>
              We use your information to ensure the security of our platform and
              to comply with legal obligations.
            </p>
          </li>
        </ul>
        <h3 className='text-lg font-semibold text-ctaColor'>
          Sharing of Your Information
        </h3>
        <p>We may share your information in the following circumstances:</p>
        <ul className='list-inside list-disc marker:text-ctaColor marker:mr-1'>
          <li>
            <h5 className='font-semibold inline'>With Other Users:</h5>
            <p className='inline ml-2'>
              Your information, such as your pet&apos;s details and your
              communication history, may be shared with other users interested
              in mating their pets with yours.
            </p>
          </li>
          <li>
            <h5 className='font-semibold inline'>Service Providers:</h5>
            <p className='inline ml-2'>
              We may share your information with service providers who assist us
              in providing our services.
            </p>
          </li>
          <li>
            <h5 className='font-semibold inline'>Legal Compliance:</h5>
            <p className='inline ml-2'>
              We may disclose your information to comply with legal obligations
              or respond to lawful requests from authorities.
            </p>
          </li>
        </ul>
        <h3 className='text-lg font-semibold text-ctaColor'>Your Choices</h3>
        <p>You have the following choices regarding your information:</p>
        <ul className='list-inside list-disc marker:text-ctaColor marker:mr-1'>
          <li>
            <h5 className='font-semibold inline'>Account Information:</h5>
            <p className='inline ml-2'>
              You can review and update your account information at any time.
            </p>
          </li>
          <li>
            <h5 className='font-semibold inline'>Cookies:</h5>
            <p className='inline ml-2'>
              You can manage your cookie preferences through your browser
              settings.
            </p>
          </li>
          <li>
            <h5 className='font-semibold inline'>Communication Preferences:</h5>
            <p className='inline ml-2'>
              You can manage your communication preferences in your account
              settings.
            </p>
          </li>
        </ul>
        <h3 className='text-lg font-semibold text-ctaColor'>Security</h3>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access or disclosure. However, no method of transmission
          over the internet or electronic storage is entirely secure, and we
          cannot guarantee absolute security.
        </p>
        <h3 className='text-lg font-semibold text-ctaColor'>
          Children&apos;s Privacy
        </h3>
        <p>
          Our services are not intended for users under the age of 18, and we do
          not knowingly collect information from children. If you are a parent
          or guardian and believe we may have collected information from a
          child, please contact us.
        </p>
        <h3 className='text-lg font-semibold text-ctaColor'>
          Changes to this Privacy Policy
        </h3>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will notify you of any significant changes through the
          website or via email.
        </p>
        <h3 className='text-lg font-semibold text-ctaColor'>Contact Us</h3>
        <p>
          If you have questions or concerns about this Privacy Policy or your
          data privacy, please contact us at [Your Contact Information].
        </p>

        <p>
          By using our website and services, you agree to the terms of this
          Privacy Policy. Please read it carefully and make sure you understand
          it. Your continued use of our platform after any changes to this
          Privacy Policy signifies your acceptance of those changes.
        </p>

        <i>
          Thank you for using PetsMatchup to help find mates for your beloved
          pets!
        </i>
      </div>
    </main>
  );
};

export default TandC;

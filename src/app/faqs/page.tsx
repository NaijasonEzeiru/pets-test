import { HeaderAndTextAccordions } from '@/components/helpers/Accordions';

const FAQs = () => {
  return (
    <main className='min-h-[calc(100vh-30rem)] md:min-h-[calc(100vh-15rem)]flex gap-11 flex-col mb-16'>
      <header className='m-auto py-8 bg-secondaryBg pt-28 w-full md:px-16 px-3'>
        <h1 className='text-2xl font-semibold mb-4 text-center mx-3 md:mx-16 lg:mx-32'>
          Frequently Asked Questions
        </h1>
      </header>
      <div className='flex md:gap-2 flex-col text-justify my-8 mx-3 md:mx-16 lg:mx-32'>
        <HeaderAndTextAccordions
          header='What is PetsMatchup?'
          text='PetsMatchup is a platform dedicated to helping individuals find suitable mates for their pets. Whether you have a dog, cat, rabbit, or any other pet, we aim to connect pet owners to facilitate breeding, companionship, or playdates for their furry friends.'
        />
        <hr className='dark:opacity-30' />
        <HeaderAndTextAccordions
          header='How does PetsMatchup work?'
          text="PetsMatchup works by providing a user-friendly interface where pet owners can create profiles for their pets. These profiles include details about the pet's breed, age, personality, and more. Users can then browse through these profiles to find potential mates or playmates for their pets. Once a match is found, users can communicate with each other through our platform to arrange meet-ups or breeding arrangements."
        />
        <hr className='dark:opacity-30' />
        <HeaderAndTextAccordions
          header='Is PetsMatchup only for breeding purposes?'
          text='No, PetsMatchup is not just for breeding. While some users may be interested in finding mates for breeding, many others use our platform to find companions for their pets. This can include playdates, walks, or simply socializing with other pets. We aim to cater to a variety of needs.'
        />
        <hr className='dark:opacity-30' />
        <HeaderAndTextAccordions
          header='Is it free to use PetsMatchup?'
          text="Yes, basic usage of PetsMatchup is free. You can create profiles for your pets, search for potential mates, and initiate conversations with other pet owners at no cost. However, we also offer premium features and subscriptions that provide additional benefits and enhanced visibility for your pet's profile."
        />
        <hr className='dark:opacity-30' />
        <HeaderAndTextAccordions
          header='How do I create a profile for my pet?'
          text="To create a profile for your pet, simply sign up on PetsMatchup, and you will find an option to add a new pet profile in your account. You can provide details such as your pet's name, breed, age, photos, and a short description."
        />
        <hr className='dark:opacity-30' />
        <HeaderAndTextAccordions
          header='Can I trust the other pet owners on PetsMatchup?'
          text="We prioritize safety and encourage users to communicate and meet in public places. We also offer user reviews and ratings to help build trust within the community. While we make every effort to create a safe environment, it's important for users to use their best judgment and prioritize their pet's safety."
        />
        <hr className='dark:opacity-30' />
        <HeaderAndTextAccordions
          header='How can I contact other pet owners on PetsMatchup?'
          text='You can contact other pet owners by sending them a message through our secure messaging system. This system allows you to communicate with potential matches and arrange meet-ups or breeding arrangements.'
        />
        <hr className='dark:opacity-30' />
        <HeaderAndTextAccordions
          header="Can I delete my pet's profile if I no longer want to use the service?"
          text="Yes, you can delete your pet's profile at any time. Simply log in to your account, go to your pet's profile, and select the option to delete the profile. Please note that this action is irreversible."
        />
        <hr className='dark:opacity-30' />
        <HeaderAndTextAccordions
          header='How do I report inappropriate content or behavior on PetsMatchup?'
          text='If you encounter any inappropriate content or behavior on the platform, please report it to our support team through the provided reporting mechanisms. We take all reports seriously and will investigate and take appropriate actions as necessary.'
        />
        <hr className='dark:opacity-30' />
        <HeaderAndTextAccordions
          header='I have a suggestion for improving PetsMatchup. How can I share it with you?'
          text='We welcome user feedback and suggestions. Please feel free to contact our support team or use the feedback option on the platform to share your ideas and recommendations. We value your input and are continuously working to enhance the user experience.'
        />
        <hr className='dark:opacity-30' />
        <p className='mt-11'>
          We welcome user feedback and suggestions. Please feel free to contact
          our support team or use the feedback option on the platform to share
          your ideas and recommendations. We value your input and are
          continuously working to enhance the user experience.
        </p>
      </div>
    </main>
  );
};

export default FAQs;

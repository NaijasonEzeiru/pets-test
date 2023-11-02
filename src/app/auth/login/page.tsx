'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { ImSpinner } from 'react-icons/im';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { AiOutlineMail } from 'react-icons/ai';
import { BiShow, BiHide } from 'react-icons/bi';
import { signIn } from 'next-auth/react';
import { LoginSchema, LoginSchemaType } from '../../../utils/schemas';

const Login = () => {
  //   const { user, authChecking }: any = useContext(AuthContext);

  const router = useRouter();
  const [showPassword, setShowPassWord] = useState(false);

  //   useEffect(() => {
  //     // TODO: Display "You are already logged in"
  //     user && router.push('/');
  //   }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginSchemaType>({
    mode: 'all',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(LoginSchema)
  });

  console.log(errors);

  // const signIn = async ({ email, password }: LoginSchemaType) => {
  // const res = await fetch(`${apiAddress}/auth/register`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     email,
  //     password
  //   })
  // });
  // const data = await res.json();
  // if (res.ok) {
  //   router.push('/login');
  // } else if (data.message == 'This email address is already taken') {
  //   setError('email', {
  //     type: 'server',
  //     message: data.message
  //   });
  // } else {
  //   alert(data?.message);
  // }
  // signIn("credentials", {{email, password}, redirect: false})
  // };

  const logIn = async ({ email, password }: LoginSchemaType) => {
    await signIn('credentials', { redirect: false, email, password })
      .then((res) => {
        if (res?.ok) {
          router.push('/?alert=Log in successful');
        } else {
          alert('invalid login details');
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <main className='min-h-[75vh] rounded-lg shadow-md text-center pb-12 mt-28 my-8 px-3 m-3 flex items-center dark:bg-secondaryBg md:mx-14 md:px-16 lg:mx-32'>
      <div className='flex gap-11 flex-col w-full m-auto max-w-sm'>
        <h2 className='text-secondary text-3xl mt-4 font-medium'>
          Sign in to PetMatchup
        </h2>
        <button className='flex gap-4 px-5 py-2 border rounded-xl w-max m-auto items-center'>
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 16 16'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'></path>
          </svg>
          <p>Log in with Github</p>
        </button>
        <div className='flex w-full justify-center items-center'>
          <div className='h-[1px] mx-3 flex-1 grd'></div>
          <p>OR</p>
          <div className='h-[1px] mx-3 flex-1 rotate-180 grd'></div>
        </div>
        <form
          onSubmit={handleSubmit(logIn)}
          className='flex flex-col gap-7 dark:text-gray-100'>
          <div className='relative'>
            <span className='absolute right-0 top-1'>
              <AiOutlineMail />
            </span>
            <input
              type='email'
              {...register('email')}
              placeholder='Email'
              className='w-full focus-visible:outline-0 border-b-2 border-gray-400  pr-7focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-orange-500 bg-transparent'
            />
            <span className='text-red-400 dark:text-red-300 text-xs'>
              {' '}
              {errors.email?.message}
            </span>
          </div>
          <div className='relative'>
            <span
              className='absolute right-0 top-1'
              onClick={() => setShowPassWord(!showPassword)}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              placeholder='Password'
              name='password'
              className='w-full focus-visible:outline-0 border-b-2 border-gray-400  pr-7focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-orange-500 bg-transparent'
            />
            <span className='text-red-400 dark:text-red-300 text-xs'>
              {' '}
              {errors.password?.message}
            </span>
          </div>
          <button disabled={isSubmitting} className='btn'>
            <span
              className={`animate-spin text-ctaColor px-4 ${
                isSubmitting ? 'block' : 'hidden'
              }`}>
              <ImSpinner />
            </span>
            <p className={`${isSubmitting && 'opacity-40'}`}>Sign Up</p>
          </button>
        </form>
        <p className='text-sm'>
          Need a new account?
          <Link
            href='/auth/register'
            className='text-secondary ml-2 px-2 rounded-md border'>
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;

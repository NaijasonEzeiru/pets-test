'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { places, cat, agesArr } from '@/utils/jsons';
import { AddPetSchema, AddPetSchemaType } from '../../../utils/schemas';
import {
  SelectInput,
  DescriptionInput,
  DefaultInput
} from '@/components/helpers/InputFields';
import { useSession } from 'next-auth/react';
import { apiAddress } from '@/utils/variables';

const AddPets = () => {
  const router = useRouter();
  const auth = useSession();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting }
  } = useForm<AddPetSchemaType>({
    defaultValues: {
      country: '',
      imgs: [{ value: undefined }],
      age: '',
      breed: '',
      city: '',
      state: -1,
      description: '',
      purebred: '',
      category: -1,
      gender: ''
    },
    mode: 'onChange',
    resolver: zodResolver(AddPetSchema)
  });

  const fields = watch();
  // console.log(fields);

  let place: string[] = [];
  if (places?.[fields.state]?.cities) {
    place = places?.[fields.state]?.cities;
  }

  let breeds: string[] = [];
  if (cat?.[fields.category]?.breeds) {
    breeds = cat?.[fields.category]?.breeds.sort();
  }

  let urlArray: string[] = [];
  watch('imgs')?.map((value: { value: [Blob] }, index: number) => {
    if (value?.value?.[0]) {
      const newURL = URL.createObjectURL(value?.value?.[0]);
      urlArray[index] = newURL;
      return () => URL.revokeObjectURL(newURL);
    }
  });

  const {
    fields: imgsFields,
    append: appendImgField,
    remove: removeImgField
  } = useFieldArray({
    name: 'imgs',
    control
  });

  const submit = async ({
    age,
    breed,
    category,
    city,
    country,
    description,
    gender,
    imgs,
    petName,
    purebred,
    state
  }: AddPetSchemaType) => {
    const imgObjects = await Promise.all(
      imgs.map(async (v) => {
        const formInput = new FormData();
        formInput.append('file', v.value[0]);
        formInput.append('upload_preset', 'pets_matchup');
        const res = fetch(
          'https://api.cloudinary.com/v1_1/naijason/image/upload',
          {
            method: 'POST',
            body: formInput
          }
        );
        return (await res).json();
      })
    );
    console.log({ imgobj: imgObjects });
    const imgUrls = imgObjects.map((a) => a.secure_url);
    console.log({ imgUrls: imgUrls });
    const res = await fetch(`${apiAddress}/api/pets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // send the userID
      body: JSON.stringify({
        age,
        breed,
        category: cat[category].name,
        city,
        country,
        description,
        gender,
        imgs: imgUrls,
        petName,
        purebred,
        state: places[state].name,
        userEmail: auth.data?.user?.email
      })
    });
    const response = await res.json();
    console.log(response);
    if (res.ok) {
      router.push('/?alert=Pet uploaded successfully');
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <main>
      <header className='m-auto py-8 bg-secondaryBg pt-28 md:px-16 px-3'>
        <h1 className='text-2xl font-semibold mb-4 text-center'>
          Find Mates for Your Pet
        </h1>
      </header>
      <form
        onSubmit={handleSubmit(submit)}
        autoComplete='off'
        className='flex flex-col gap-7 text-black dark:text-white my-8 mx-3 md:mx-16 lg:mx-32'>
        <DefaultInput
          errors={errors.petName?.message}
          placeholder="pet's name"
          register={register('petName')}
          fields={fields.petName?.length > 0}
          type='text'
        />
        <SelectInput
          top={cat}
          register={register('category')}
          errors={errors.category?.message}
          fields={fields.category > -1}
          placeholder='select category'
        />

        {fields.category > -1 && (
          <SelectInput
            items={breeds}
            register={register('breed')}
            errors={errors.breed?.message}
            fields={fields?.breed?.length > 0}
            placeholder='select breed'
          />
        )}

        <SelectInput
          items={['Yes', 'No']}
          errors={errors.purebred?.message}
          fields={fields?.purebred?.length > 0}
          placeholder='Purebred?'
          register={register('purebred')}
        />
        <SelectInput
          items={agesArr}
          errors={errors.age?.message}
          fields={fields?.age?.length > 0}
          placeholder='age'
          register={register('age')}
        />
        <SelectInput
          items={['Male', 'Female']}
          errors={errors.gender?.message}
          fields={fields?.gender?.length > 0}
          placeholder='gender'
          register={register('gender')}
        />

        <SelectInput
          items={['Nigeria']}
          register={register('country')}
          errors={errors.country?.message}
          fields={+fields?.country.length > 0}
          placeholder='select country'
        />
        <SelectInput
          top={places}
          register={register('state')}
          errors={errors.state?.message}
          fields={+fields?.state > -1}
          placeholder='select state'
        />

        {+fields?.state > -1 && (
          <SelectInput
            items={place}
            register={register('city')}
            errors={errors.city?.message}
            fields={fields?.city?.length > 0}
            placeholder='select City'
          />
        )}

        <div className='text-left leading-3'>
          Add Images:
          <div className='overflow-x-auto overflow-y-hidden'>
            <div className='flex items-center gap-2'>
              <div className='flex w-fit gap-2 items-start'>
                {imgsFields.map((field, index) => (
                  <div key={field.id} className='relative mb-2'>
                    <label className='mt-2 grid items-center w-[198px] h-[132px] border-dashed rounded-lg border-2 dark:border-[1px]'>
                      {!urlArray?.[index] ? (
                        <span className=''>
                          {/* <TbCloudUpload /> */}
                          <p className='m-5 text-center leading-5'>
                            Click here to add an image
                          </p>
                        </span>
                      ) : (
                        <span className='w-[198px] h-[132px]'>
                          <Image
                            src={urlArray?.[index]}
                            alt=''
                            className='h-full w-full object-cover rounded-lg'
                            width={198}
                            height={132}
                          />
                        </span>
                      )}
                      <input
                        accept='image/*'
                        type='file'
                        hidden
                        {...register(`imgs.${index}.value`)}
                      />
                    </label>
                    <span className='text-red-400 dark:text-red-300 text-xs'>
                      {' '}
                      {errors?.imgs?.[index]?.root?.message as string}
                    </span>
                    {index > 0 && (
                      <span
                        onClick={() => removeImgField(index)}
                        className='absolute font-bold text-xl left-[180px] top-2 text-red-400'>
                        X
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div
                className='text-6xl font-light'
                onClick={() => appendImgField({ value: undefined })}>
                +
              </div>
            </div>
          </div>
        </div>
        <DescriptionInput
          errors={errors.description?.message}
          fields={fields.description.length > 0}
          placeholder='Additional Details'
          register={register('description')}
        />
        <i className='relative bottom-7 text-sm'>
          Disclose all neccesary details such as health defects, your terms and
          conditions...
        </i>
        <button type='submit' disabled={isSubmitting} className='btn'>
          Submit
        </button>
      </form>
    </main>
  );
};

export default AddPets;

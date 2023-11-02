'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { places, cat } from '@/utils/jsons';
import { FilterPetSchema, FilterPetSchemaType } from '../utils/schemas';
import { SelectInput } from '@/components/helpers/InputFields';

function PetsFilter() {
  const [showFilter, setShowFilter] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<FilterPetSchemaType>({
    mode: 'all',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(FilterPetSchema),
    defaultValues: {
      country: '',
      // age: '',
      breed: '',
      city: '',
      state: -1,
      category: -1,
      gender: ''
    }
  });

  const fields = watch();
  console.log(fields);

  console.log(errors);

  let place: string[] = [];

  if (fields.state && places?.[fields?.state]?.cities) {
    place = places?.[fields.state]?.cities;
  }

  let breeds: string[] = [];
  if (fields.category && cat?.[fields.category]?.breeds) {
    breeds = cat?.[fields.category]?.breeds;
  }

  console.log(errors);

  const filterPets = async ({}) => {};

  return (
    <div className='md:border-r border-opacity-60 md:pr-6 py-11 md:sticky'>
      <div
        className={`grid transition-all ${
          showFilter ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] md:grid-rows-[1fr]'
        }`}>
        <form
          className='md:w-72 flex gap-6 flex-col overflow-hidden'
          aria-hidden={showFilter}>
          <SelectInput
            required={false}
            top={cat}
            register={register('category')}
            errors={errors.category?.message}
            fields={fields.category! > -1}
            placeholder='select category'
          />
          <SelectInput
            required={false}
            disabled={!(fields.category! > -1)}
            items={breeds}
            register={register('breed')}
            errors={errors.breed?.message}
            fields={fields?.breed?.length! > 0}
            placeholder='select breed'
          />
          <SelectInput
            required={false}
            items={['male', 'female']}
            register={register('gender')}
            errors={errors.gender?.message}
            fields={fields?.gender?.length! > 0}
            placeholder='select gender'
          />
          <SelectInput
            required={false}
            items={['Nigeria']}
            register={register('country')}
            errors={errors.country?.message}
            fields={fields?.country?.length! > 0}
            placeholder='select country'
          />
          <SelectInput
            required={false}
            top={places}
            register={register('state')}
            errors={errors.state?.message}
            fields={+fields?.state! > -1}
            placeholder='select state'
          />
          <SelectInput
            required={false}
            disabled={!(+fields?.state! > -1)}
            items={place}
            register={register('city')}
            errors={errors.city?.message}
            fields={fields?.city?.length! > 0}
            placeholder='select City'
          />
          <button type='submit' disabled={isSubmitting} className='btn'>
            Filter
          </button>
        </form>
      </div>
      <button
        className={`text-2xl border-2 w-10 h-10 flex items-center justify-center absolute right-3 md:hidden ${
          !showFilter && 'rotate-180'
        }`}
        onClick={() => setShowFilter(!showFilter)}>
        &uarr;
      </button>
    </div>
  );
}

export default PetsFilter;

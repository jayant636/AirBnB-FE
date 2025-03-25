import React from 'react';
import { useForm } from 'react-hook-form';
import LocationInput from './LocationInput';
import DateSelectInput from './DateSelectInput';
import Occupancy_Input from './Occupancy_Input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

const Search = () => {
  const form = useForm({
    defaultValues: {
      city: '',
    },
  });

  function onSubmitHandler(data) {
    console.log('Searched Data', data);
  }

  return (
    <>
      <section className="container">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitHandler)}
            className="flex flex-col gap-1 p-1 bg-yellow-500 lg:flex-row lg:items-center rounded h-14"
          >
            <LocationInput form={form} />
            <DateSelectInput form={form} />
            <Occupancy_Input form={form} />
            <Button type="submit" className="text-lg h-full">
              Search
            </Button>
          </form>
        </Form>
      </section>
    </>
  );
};

export default Search;

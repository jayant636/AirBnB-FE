import React, { useState } from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const SignIn = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const [showpassword, setshowPassword] = useState(false);

  function handleHidePassword(e) {
    e.preventDefault();
    setshowPassword((prev) => !prev);
  }

  function onSubmitHandler(data) {
    console.log('Got the Data', data);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitHandler)}
          className="w-full mt-8 space-y-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    className="h-10 rounded"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display Email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="flex ">
                    <Input
                      type={showpassword ? 'text' : 'password'}
                      placeholder="Enter Password"
                      className="h-10 rounded"
                      {...field}
                    />
                    <Button onClick={() => handleHidePassword()}>
                      <Icon icon="eye" />
                    </Button>
                  </div>
                </FormControl>
                <FormDescription>
                  This is your public display Password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-10 "
            aria-label="Create a new Account"
          >
            Log In
          </Button>
        </form>
      </Form>
      <div className="flex items-center justify-center mt-6">
        <span className="text-sm text-primary">Doesn't have an account?</span>
        {/* Todo Replace with Link tag  */}
        <a href="" className="text-sm text-primary hover:underline">
          Register Yourself
        </a>
      </div>
    </>
  );
};

export default SignIn;

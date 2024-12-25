import React from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import AuthHeaer from "../header";
import AuthFooter from "../footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useAuthSignInFeatures from "./features";
import LoadingSpinner from "@/tools/spinner";

const SignInPageComponent: React.FC = () => {
  const { loading, error, form, onFormSubmit } = useAuthSignInFeatures();

  return (
    <div className='grid place-content-center h-screen relative'>
      <AuthHeaer />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onFormSubmit)}
          className='space-y-4 w-[80vw] sm:w-[500px]'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Enter your email' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder='Enter your password' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {error && error}

          <Button
            type='submit'
            className='w-full bg-[#168156] hover:bg-[#168156] dark:bg-white'
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : "Sign In"}
          </Button>
        </form>
      </Form>

      <AuthFooter />
    </div>
  );
};

export default SignInPageComponent;

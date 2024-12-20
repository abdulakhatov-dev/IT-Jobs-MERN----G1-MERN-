import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import AuthHeaer from "../header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authSignUpSchema } from "@/validations/auth";
import AuthFooter from "../footer";

const SignUpPageComponent: React.FC = () => {
  const form = useForm<z.infer<typeof authSignUpSchema>>({
    resolver: zodResolver(authSignUpSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
  });

  function onFormSubmit(values: z.infer<typeof authSignUpSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className='grid place-content-center h-screen'>
      <AuthHeaer />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onFormSubmit)}
          className='space-y-4 w-[80vw] sm:w-[500px]'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter your name' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='surname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Surname</FormLabel>
                <FormControl>
                  <Input placeholder='Enter your surname' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

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

          <Button
            type='submit'
            className='w-full bg-[#168156] hover:bg-[#168156]'
          >
            Sign Up
          </Button>
        </form>
      </Form>

      <AuthFooter />
    </div>
  );
};

export default SignUpPageComponent;

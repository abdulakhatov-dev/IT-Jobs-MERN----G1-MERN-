
import { z } from "zod";
import axios from 'axios'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import useSignIn from 'react-auth-kit/hooks/useSignIn';


import { authSignInSchema } from "@/validations/auth";

const useAuthSignInFeatures = () => {
    const navigate = useNavigate()
    const signIn = useSignIn();

     // state
      const [state, setState] = useState({
        loading: false,
        error:  null
      })
    
      const form = useForm<z.infer<typeof authSignInSchema>>({
        resolver: zodResolver(authSignInSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      });

      async function onFormSubmit(values: z.infer<typeof authSignInSchema>) {
        try {
          setState((prev) => ({...prev, loading: true}))
    
          const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/auth/sign-in`, values);
    
          if(response?.data?.success) {
            signIn({
              auth: {
                token:response?.data?.data?.token,
                type: "Bearer"
              },
              userState: response?.data?.data?.user
            })
    
            setState((prev) => ({...prev, loading: false}))
            navigate("/")
          }
        } catch (error) {
          if(axios.isAxiosError(error)) {
            setState((prev) => ({...prev, loading: false, error: error.response?.data?.message}))
          }
        }
      }
    
  return {
    loading: state.loading,
    error: state.error,
    form,
    onFormSubmit,
  }
};

export default useAuthSignInFeatures;

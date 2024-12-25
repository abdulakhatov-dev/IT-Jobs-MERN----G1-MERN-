
import { z } from "zod";
import axios from 'axios'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import useSignIn from 'react-auth-kit/hooks/useSignIn';


import { authSignUpSchema } from "@/validations/auth";

const useAuthSignUpFeatures = () => {
    const navigate = useNavigate()
    const signIn = useSignIn();

     // state
      const [state, setState] = useState({
        loading: false,
        error:  null
      })
    
      const form = useForm<z.infer<typeof authSignUpSchema>>({
        resolver: zodResolver(authSignUpSchema),
        defaultValues: {
          name: "",
          surname: "",
          email: "",
          password: "",
        },
      });

      async function onFormSubmit(values: z.infer<typeof authSignUpSchema>) {
        try {
          setState((prev) => ({...prev, loading: true}))
    
          const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/auth/sign-up`, values);
    
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

export default useAuthSignUpFeatures;

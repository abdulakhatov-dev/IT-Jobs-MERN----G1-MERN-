import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobSchema } from "@/validations/job";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJobsService } from "@/services/jobs";

const useAddJobFeatures = () => {
  const navigate = useNavigate();
  const { addJob } = useJobsService();

  // state
  const [state, setState] = useState({
    loading: false,
    error: null,
  });

  const form = useForm<z.infer<typeof jobSchema>>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: "",
      category: "",
      location: "",
      description: "",
      salary: "",
      companyName: "",
      companyDescription: "",
      contactEmail: "",
      contactPhone: "",
    },
  });

  async function onFormSubmit(values: z.infer<typeof jobSchema>) {
    try {
      setState((prev) => ({ ...prev, loading: true }));

      const newJob = {
        title: values.title,
        category: values.category,
        location: values.location,
        description: values.description,
        salary: values.salary,
        company: {
          name: values.companyName,
          description: values.companyDescription,
          contactEmail: values.contactEmail,
          contactPhone: values.contactPhone,
        },
      };

      await addJob.mutateAsync(newJob);

      setState((prev) => ({ ...prev, loading: false }));

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return {
    loading: state.loading,
    error: state.error,
    form,
    onFormSubmit,
  };
};

export default useAddJobFeatures;

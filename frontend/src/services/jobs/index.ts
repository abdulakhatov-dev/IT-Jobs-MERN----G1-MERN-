import useAxiosInstance from "@/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export interface IJob {
  title: string;
  category: string;
  location: string;
  description: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}

export const useJobsService = () => {
  const $axios = useAxiosInstance();
  const queryClient = useQueryClient();

  const getAllJobs = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await $axios.get("/jobs");

      return response?.data?.data;
    },
  });

  const addJob = useMutation({
    mutationFn: async (body: IJob) => {
      const response = await $axios.post("/jobs/add", body);

      return response?.data?.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
  });

  const deleteJob = useMutation({
    mutationFn: async (jobId: string) => {
      await $axios.delete(`/jobs/${jobId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
  })

  return {
    getAllJobs,
    addJob,
    deleteJob
  };
};

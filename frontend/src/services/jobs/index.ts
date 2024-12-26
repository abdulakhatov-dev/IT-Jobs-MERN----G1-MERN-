import useAxiosInstance from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useJobsService = () => {
  const $axios = useAxiosInstance();

  const getAllJobs = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await $axios.get("/jobs");

      return response?.data?.data;
    },
  });

  return {
    getAllJobs,
  };
};

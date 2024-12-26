import { IJob } from "@/interface/job";
import { useJobsService } from "@/services/jobs";
import React from "react";
import Card from "./card";

const BrowseJobs:React.FC = () => {
    const { getAllJobs } = useJobsService();

    const { data, isLoading, isError } = getAllJobs

    console.log(data, isLoading, isError)

    if(isLoading) {
      return <p>Loading...</p>
    }

  return <section id='browse-jobs'>
    <div className="container">
        {data?.map((job: IJob) => (
          <Card key={job?._id} job={job} />
        ))}
    </div>
  </section>;
};

export default BrowseJobs;

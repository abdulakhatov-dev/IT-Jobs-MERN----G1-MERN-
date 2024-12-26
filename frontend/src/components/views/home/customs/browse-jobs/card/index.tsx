import React from "react";
import { IJob } from "@/interface/job";
import { Link } from "react-router-dom";

const Card: React.FC<{job: IJob}> = ({ job }) => {
  return <div className="bg-white rounded-xl shadow-md relative">
  <div className="p-4">
      <div className="mb-6">
          <div className="text-gray-600 my-2">{ job?.category }</div>
          <h3 className="text-xl font-bold">{ job?.title }</h3>
      </div>

      <div className="mb-5">
          <div>
              {job?.description}
          </div>
      </div>

      <h3 className="text-green-500 mb-2">{ job?.salary } / Year</h3>

      <div className="border border-gray-100 mb-5" />

      <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
              <i className="pi pi-map-marker text-orange-700"></i>
              { job?.location }
          </div>
          <Link to="'/jobs/' + job?.id"
              className="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">
              Read More
          </Link>
      </div>
  </div>
</div>
};

export default Card;

import React from "react";
import { type FC, Suspense } from "react";
import LoadingSpinner from "../spinner";

const Loader: React.FC = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <LoadingSpinner size='lg' />
    </div>
  );
};


type SuspenseWrapperPropT = {
  children: React.ReactNode;
};

const SuspenseWrapper: FC<SuspenseWrapperPropT> = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default SuspenseWrapper;
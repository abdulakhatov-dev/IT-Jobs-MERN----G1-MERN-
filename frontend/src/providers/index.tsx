import React from "react";

interface PropsI {
    children: React.ReactNode;
}

const AppProvider: React.FC<PropsI> = ({ children }) => {
  return <>{children}</>;
};

export default AppProvider;

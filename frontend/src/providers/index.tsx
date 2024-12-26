import React from "react";
import AuthProvider from "react-auth-kit";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { authStore } from "@/config/auth";

interface PropsI {
  children: React.ReactNode;
}

const AppProvider: React.FC<PropsI> = ({ children }) => {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <AuthProvider store={authStore}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default AppProvider;

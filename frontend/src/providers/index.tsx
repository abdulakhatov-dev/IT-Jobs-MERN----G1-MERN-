import React from "react";
import AuthProvider from 'react-auth-kit';

import { authStore } from '@/config/auth'

interface PropsI {
    children: React.ReactNode;
}

const AppProvider: React.FC<PropsI> = ({ children }) => {
  return <AuthProvider store={authStore}>
    {children}
    </AuthProvider>;
};

export default AppProvider;

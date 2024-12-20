import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUpPage from "@/pages/auth/sign-up";
import SignInPage from "@/pages/auth/sign-in";

const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home Page</h1>,
    },
    {
        path: "/auth/sign-in",
        element: <SignInPage />,
    },
    {
        path: "/auth/sign-up",
        element: <SignUpPage />,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;

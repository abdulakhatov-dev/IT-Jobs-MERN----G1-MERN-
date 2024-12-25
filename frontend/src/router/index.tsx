import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUpPage from "@/pages/auth/sign-up";
import SignInPage from "@/pages/auth/sign-in";
import RequireAuth from "./require-auth";
import SuspenseWrapper from "@/tools/suspense";

const HomePage = lazy(() => import('@/pages/home'))

const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth fallbackPath={"/auth/sign-in"}>
          <SuspenseWrapper >
            <HomePage />
          </SuspenseWrapper>
        </RequireAuth>
      ),
    },
    {
      path: "/auth/sign-in",
      element: <SignInPage />,
    },
    {
      path: "/auth/sign-up",
      element: <SignUpPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;

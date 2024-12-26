import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUpPage from "@/pages/auth/sign-up";
import SignInPage from "@/pages/auth/sign-in";
import RequireAuth from "./require-auth";
import SuspenseWrapper from "@/tools/suspense";
import MainLayout from "@/components/layout";

const HomePage = lazy(() => import("@/pages/home"));

const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <SuspenseWrapper>
          <MainLayout>
            <HomePage />
          </MainLayout>
        </SuspenseWrapper>
      ),
    },
    {
      path: "/jobs",
      element: (
        <RequireAuth fallbackPath={"/auth/sign-in"}>
          <SuspenseWrapper>
            <MainLayout>
              <h1>Jobs Page</h1>
            </MainLayout>
          </SuspenseWrapper>
        </RequireAuth>
      ),
    },
    {
      path: "/jobs/add",
      element: (
        <RequireAuth fallbackPath={"/auth/sign-in"}>
          <SuspenseWrapper>
            <MainLayout>
              <h1>Add Job</h1>
            </MainLayout>
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

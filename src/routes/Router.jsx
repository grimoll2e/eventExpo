import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import VeanuePage from "../pages/VeanuePage";
import EventPage from "../pages/EventPage";
import ContactPage from "../pages/ContactPage";
import SettingPage from "../pages/SettingPage";
import AuthLayout from "../layouts/AuthLayout";
import RedirectIfAuthenticate from "../features/auth/RedirectifAuthenticate";
import ProtectedRoute from "../features/auth/ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/veanue",
        element: <VeanuePage />,
      },
      {
        path: "/event",
        element: <EventPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/login",
        element: (
          <RedirectIfAuthenticate>
            <LoginPage />
          </RedirectIfAuthenticate>
        )
      },
      {
        path: "/signup",
        element: (
          <RedirectIfAuthenticate>
            <SignupPage />
          </RedirectIfAuthenticate>
        ),
      },
      {
        path: "/setting",
        element: (
          <ProtectedRoute>
            <SettingPage />
          </ProtectedRoute>
        ),
      },
    ]
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

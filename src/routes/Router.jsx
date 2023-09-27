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

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
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
    ]
  },
  {
    path: "/setting",
    element: <SettingPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

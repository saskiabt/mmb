import Register from "../components/register/Register";
import Login from "../components/login/Login";
import Dashboard from "../components/user-dashboard/Dashboard";
import ErrorPage from "./error-page/ErrorPage";

import App from "../App/App";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/landing-page/LandingPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage></LandingPage> },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;

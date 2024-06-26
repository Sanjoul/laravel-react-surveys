import { Navigate, createBrowserRouter } from "react-router-dom";

import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Surveys from "./views/Surveys";
import GuestLayyout from "./components/GuestLayyout";
import DefaultLayout from "./components/DefaultLayout";
import SurveyView from "./views/SurveyView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/surveys",
        element: <Surveys />,
      },
      {
        path: "/surveys/create",
        element: <SurveyView />,
      },
    ],
  },

  {
    path: "/",
    element: <GuestLayyout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);
export default router;

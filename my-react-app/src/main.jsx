import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import HomePage from "./pages/home.jsx";
import ProjectPage from "./pages/project.jsx";
import ContactPage from "./pages/contact.jsx";
import ProjectDetail from "./components/Project/projectDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
  {
    path: "/home",
    element: <HomePage/>,
  },
  {
    path: "/project",
    element: <ProjectPage/>,
  },
  {
    path: "/project/:id",
    element: <ProjectDetail/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

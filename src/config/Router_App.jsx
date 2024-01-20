import React from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Signup />} />
       <Route path="login" element={<Login />} />
     <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};
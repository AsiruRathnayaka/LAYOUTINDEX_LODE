import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AlertDialogSlide from "./MainComponents/Dialog";
import AddDevice from "./Screens/AddDeviceScreen";
import AddLocation from "./Screens/AddLocationScreen";
import Dashboard from "./Screens/Dashboard";
import LandingScreen from "./Screens/LandingScreen";
import LocationOverviewScreen from "./Screens/LocationOverviewScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingScreen />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/AddLocation",
    element: <AddLocation />,
  },
  {
    path: "/AddDevice/:LocationID",
    element: <AddDevice />,
  },
  {
    path: "/LocationOverview/:id",
    element: <LocationOverviewScreen />,
  }, 
]);

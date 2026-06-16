import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import Browsepage from "../pages/Browsepage";
import ShowDetailpage from "../pages/ShowDetailpage";
import MyListPage from "../pages/MyListPage";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import OnlyNavLayout from "../layouts/OnlyNavLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        element: <Homepage />,
        path: '/',
      },
      {
        element: <Browsepage />,
        path: '/shows',
      },
      {
        element: <ShowDetailpage />,
        path: '/shows/:id',
      },
      {
        element: <MyListPage />,
        path: '/my-list',
      },
    ],
  },
  {
    element: <OnlyNavLayout />,
    children: [
      {
        element: <Login />,
        path: '/login',
      },
      {
        element: <NotFound />,
        path: '*',
      },
    ],
  },
])
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../shared/layouts/MainLayout'
import HomePage from '../pages/home/HomePage'
import Login from '../pages/login/Login'
import NotFound from '../pages/error/NotFound'
import OnlyNavLayout from '../shared/layouts/OnlyNavLayout'
import ProtectedRoute from '../shared/ui/ProtectedRoute'
import MyListPage from '../pages/list/MyListPage'
import BrowsePage from '../pages/browse/BrowsePage'
import ShowDetailPage from '../pages/detail/ShowDetailPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        element: <HomePage />,
        path: '/',
      },
      {
        element: <BrowsePage />,
        path: '/shows',
      },
      {
        element: <ShowDetailPage />,
        path: '/shows/:id',
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <MyListPage />,
            path: '/my-list',
          },
        ],
      },
    ],
  },
  {
    element: <OnlyNavLayout />,
    children: [
      {
        element: <NotFound />,
        path: '*',
      },
    ],
  },
  {
    element: <Login />,
    path: '/login',
  },
])

import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Layout from '@/layout'
import {
  Home,
  Test,
} from './dynamic-components'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        meta: {
          title: 'Home',
        },
        element: <Navigate to="/home" replace />,
      },
      {
        path: '/home',
        element: <Home />,
        meta: {
          title: 'Home',
        },
      },
      {
        path: '/test',
        element: <Test />,
        meta: {
          title: 'Test',
        },
      },
      {
        path: '*',
        meta: {
          title: '404',
        },
        element: <Navigate to="" replace />,
      },
    ],
  },
]

const Routes = () => {
  const element = useRoutes(routes)
  return element
}


export default Routes

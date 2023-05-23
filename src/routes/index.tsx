import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Layout from '@/layout'
import {
  Home,
  Test,
  DplDemo,
} from './dynamic-components'

// TODO - delect dpl
const companyDplDemoRoute = {
  path: '/dplDemo',
  element: <DplDemo />,
  meta: {
    title: 'DplDemo',
  },
}

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
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
      companyDplDemoRoute,
      {
        path: '*',
        meta: {
          title: '404',
        },
        element: <Navigate to="/" replace />,
      },
    ],
  },
  {
    path: '',
    element: <Navigate to="/dplDemo" replace />,
  },
]

const Routes = () => {
  const element = useRoutes(routes)
  return element
}


export default Routes

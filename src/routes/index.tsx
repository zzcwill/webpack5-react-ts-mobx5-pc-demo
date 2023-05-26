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
      companyDplDemoRoute,
      {
        path: '',
        meta: {
          title: 'Home',
        },
        element: <Navigate to="/dplDemo" replace />,
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
        element: <Navigate to="/dplDemo" replace />,
      },
    ],
  },
]

const Routes = () => {
  const element = useRoutes(routes)
  return element
}


export default Routes

import { suspended } from './suspended'

// 需要通过异步的方式引入的页面，需要在这里使用 suspended 包裹
export const Home = suspended(() => import('@/views/home'))

export const Test = suspended(() => import('@/views/test'))

export const DplDemo = suspended(() => import('@/views/dpl-demo'))

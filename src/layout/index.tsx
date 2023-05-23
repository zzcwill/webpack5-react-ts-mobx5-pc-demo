import React, { useEffect } from 'react'
import {
  Outlet,
} from 'react-router-dom'
import {
  observer,
} from 'mobx-react-lite'
import { useStore } from '@/hooks'

import './index.less'

export default observer(() => {
  const [{ appStore }] = useStore()

  useEffect(() => {
    appStore.initAppData()
  }, [])

  if (appStore.appLoading) {
    return (
      <div className='layout-loading'>
        <div>layout-loading</div>
      </div>
    )
  }

  return (
    <Outlet />
  )
})

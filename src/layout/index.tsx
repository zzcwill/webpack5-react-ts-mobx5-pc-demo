import React, { useEffect } from 'react'
import {
  Outlet,
} from 'react-router-dom'
import {
  observer,
} from 'mobx-react-lite'
import { useStore } from '@/hooks'

export default observer(() => {
  const [{ appStore }] = useStore()

  useEffect(() => {
    appStore.initAppData()
  }, [])

  if (appStore.appLoading) {
    return (
      <div>loading</div>
    )
  }

  return (
    <Outlet />
  )
})

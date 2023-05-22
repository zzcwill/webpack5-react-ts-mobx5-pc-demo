import React from 'react'
import {
  useLocation,
  // useNavigate,
} from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'
import { urlWay } from '@/utils/url-way'

const Test = observer(() => {
  const routerLocation  = useLocation()
  console.info(urlWay.formatSearchString(routerLocation.search))

  return (
    <div className={classNames('test')}>
      test
    </div>
  )
})

export default Test

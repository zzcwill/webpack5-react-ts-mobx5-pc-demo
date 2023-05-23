import React from 'react'
import {
  useLocation,
  // useNavigate,
} from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'

import { Button } from 'dpl-react'
// import Table from 'react-better-table';


import { urlWay } from '@/utils/url-way'

import 'dpl-react/dist/dpl.css'
import 'react-better-table/dist/index.css'

const DplDemo = observer(() => {
  const routerLocation  = useLocation()
  console.info(urlWay.formatSearchString(routerLocation.search))

  return (
    <div className={classNames('test')}>
      <Button>default</Button>
    </div>
  )
})

export default DplDemo

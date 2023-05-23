import React, { useState } from 'react'
import { Tabs } from 'dpl-react'

import {
  useLocation,
  // useNavigate,
} from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'

import { urlWay } from '@/utils/url-way'
import {
  Demo1,
  Demo2,
} from './components'

import 'dpl-react/dist/dpl.css'
import 'react-better-table/dist/index.css'
import './index.scss'

const { TabPane } = Tabs

const DplDemo = observer(() => {
  const routerLocation  = useLocation()
  console.info(urlWay.formatSearchString(routerLocation.search))

  const arrTab = [
    {
      name: 'react-better-table',
      key: '0',
      component: Demo1,
    },
    {
      name: 'Select',
      key: '1',
      component: Demo2,
    },
  ]
  const [tabKey, setTabKey] = useState<string>('0')

  const changeTab = (_tabKey) => {
    setTabKey(_tabKey)
  }

  return (
    <div className={classNames('dpl-demo')}>
      <Tabs activeKey={tabKey} onChange={changeTab} className="demo-list">
        {
          arrTab.map((item) => {
            return (
              <TabPane tab={item.name} key={item.key}>
                <item.component />
              </TabPane>
            )
          })
        }
      </Tabs>
    </div>
  )
})

export default DplDemo

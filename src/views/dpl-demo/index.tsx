import React, { useState } from 'react'
import { Tabs } from 'dpl-react'

import { observer } from 'mobx-react-lite'
import classNames from 'classnames'

import {
  Demo1,
  Demo2,
} from './components'

import 'dpl-react/dist/dpl.css'
import 'react-better-table/dist/index.css'
import './index.scss'

const TabsBox: any = Tabs
const TabPane: any = Tabs.TabPane

const DplDemo = observer(() => {

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
      <TabsBox activeKey={tabKey} onChange={changeTab} className="demo-list">
        {
          arrTab.map((item) => {
            return (
              <TabPane tab={item.name} key={item.key}>
                <item.component />
              </TabPane>
            )
          })
        }
      </TabsBox>
    </div>
  )
})

export default DplDemo

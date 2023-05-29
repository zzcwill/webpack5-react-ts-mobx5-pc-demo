import React, { useState } from 'react'
import { Tabs } from 'dpl-react'

import { observer } from 'mobx-react-lite'
import classNames from 'classnames'

import { configDependentComponents } from 'react-better-table'
import { Checkbox, Radio, Dropdown, Pagination, Popover, ConfigProvider } from 'dpl-react'

import {
  Demo1,
  Demo2,
} from './components'

import 'dpl-react/dist/dpl.css'
import 'react-better-table/dist/index.css'
import './index.scss'

const TabsBox: any = Tabs
const TabPane: any = Tabs.TabPane

configDependentComponents({
  Checkbox,
  Radio,
  Dropdown,
  Pagination,
  Popover,
  ConfigProvider,
})

export const arrTab = [
  {
    name: 'react-better-table',
    key: 'demo1',
    component: Demo1,
  },
  {
    name: 'Select',
    key: 'demo2',
    component: Demo2,
  },
]

const DplDemo = observer(() => {

  const [tabKey, setTabKey] = useState<string>('demo1')

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
                <item.component tabKey={tabKey} />
              </TabPane>
            )
          })
        }
      </TabsBox>
    </div>
  )
})

export default DplDemo

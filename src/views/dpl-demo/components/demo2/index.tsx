/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'

import Table from 'react-better-table'
import {
  Modal,
  Checkbox,
  Radio,
  Dropdown,
  Pagination,
  Popover,
  Select,
  Input,
  Menu,
  Icon,
  Drawer,
  Button,
} from 'dpl-react'

import { useStore } from '@/hooks'
import { renderBusinessLabelMoadl } from './business-label-moadl'

import './index.scss'

const Option = Select.Option

export default (props) => {
  const [{ dplStore }] = useStore()
  const [open, setOpen] = useState(false)
  const [personArr, setPersonArr] = useState([
    {
      name: 'zzc',
      value: 'zzc',
    },
  ])

  const subMenu = (
    <Menu>
      <Menu.Item
        key={1}
        onClick={() => {
          renderBusinessLabelMoadl({
            userInfo: dplStore.userInfo,
            onCallBack: () => {},
          })
        }}
      >
        业务标签设置
      </Menu.Item>
    </Menu>
  )

  useEffect(() => {
    // setPersonArr([])
  }, [])

  return (
    <div className="demo2">
      <Dropdown.Button type='primary-bordered' overlay={subMenu}>
        添加业务标签
      </Dropdown.Button>
      <div className='w1 h1 mt10 mb10'></div>

      <Select
        open={open}
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        allowClear
        onDropdownVisibleChange={(open) => {
          setOpen(open)
        }}
        dropdownRender={(menu) => {
          // if (!personArr.length) {
          //   return (
          //     <div>
          //       <div className='p8 text-c'>暂无人员</div>
          //       <div
          //         className='p8 cursor-p text-c'
          //         onClick={() => {
          //           setOpen(false)
          //         }}
          //       >
          //         批量导入人员
          //       </div>
          //     </div>
          //   )
          // }

          return (
            <div>
              {menu}
              <div onClick={() => {
                setOpen(false)
              }} style={{
                padding: '8px',
                cursor: 'pointer',
              }}>批量导入人员</div>
            </div>
          )
        }}
        showTip
        tipContent={'lucy'}
        dropdownMatchSelectWidth={false}
        dropdownStyle={{
          width: '200px',
        }}
        notFoundContent={(
          <div className='p8 text-c'>暂无人员</div>
        )}
      >
        {
          personArr.map((item) => {
            return (
              <Option value={item.value}>{item.name}</Option>
            )
          })
        }
      </Select>
    </div>
  )
}

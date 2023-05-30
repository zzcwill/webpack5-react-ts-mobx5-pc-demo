/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

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
  Alert,
} from 'dpl-react'

import './index.scss'

const BusinessLabelMoadl = ({
  userInfo,
  onCallBack,
  onClose,
}) => {
  return (
    <div className='business-label-moadl'>
      <Alert
        message="添加业务标签后，后续可以根据这些标签进行统计分析查询"
        type="info"
        showIcon
      />
    </div>
  )
}

export const renderBusinessLabelMoadl = ({
  userInfo,
  onCallBack,
}) => {

  let modal: any = Modal.open({
    title: '添加业务标签',
    content: (
      <BusinessLabelMoadl
        userInfo={userInfo}
        onCallBack={onCallBack}
        onClose={() => {
          Modal.destroy(modal)
          modal = null
        }}
      />
    ),
    width: 718,
    footer: null,
  })
}

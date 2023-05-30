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

import { useStore } from '@/hooks'

import './index.less'

import './index.scss'

export default (props) => {
  const [{ appStore }] = useStore()
  console.info(props)

  return (
    <div className="demo">demo</div>
  )
}

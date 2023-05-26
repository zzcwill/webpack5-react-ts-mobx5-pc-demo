import React, { useEffect } from 'react'

import {
  invoiceSignQueryInvoiceSignList,
} from '@/views/dpl-demo/api'

import './index.scss'

export default () => {
  const getData = async () => {
    const resData = await invoiceSignQueryInvoiceSignList()
    console.info(resData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="demo1">demo1</div>
  )
}

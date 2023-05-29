import React, { useEffect, useState } from 'react'
import { getIsUndefinedNullEmptyString } from '@/views/dpl-demo/utils/object'

import Table from 'react-better-table'

import {
  invoiceSignQueryInvoiceSignList,
} from '@/views/dpl-demo/api'
import {
  arrTab,
} from '@/views/dpl-demo'


import './index.scss'

const noDataTxt = '--'

export default (props) => {
  const [tableData, setTableData] = useState([])

  const scroll = () => {
    const height = 200

    return {
      height: `calc(100vh - ${height}px)`,
    }
  }

  const columns: any = () => {
    return [
      {
        title: '发票号码',
        dataIndex: 'invoiceNumber',
        align: 'left',
        width: 145,
        sortable: 'custom',
        sortOrders: ['ascending', 'descending'],
        fixed: 'left',
        headerAlign: 'left',
      },
      {
        title: '签收状态',
        dataIndex: 'signStatus',
        ellipsis: true,
        width: 90,
        align: 'left',
        headerAlign: 'left',
        render: (value) => {
          const isUndefinedNullEmptyString = getIsUndefinedNullEmptyString(value)
          if (isUndefinedNullEmptyString) {
            return noDataTxt
          }

          return value
        },
      },
    ]
  }

  const getData = async () => {
    const resData: any = await invoiceSignQueryInvoiceSignList()
    setTableData(resData.body)
  }


  useEffect(() => {
    if (props.tabKey === arrTab[0].key) {
      getData()
    }
  }, [props.tabKey])

  return (
    <div className="demo1">
      <Table
        className='demo-table'
        rowHoverEffectEnabled={false}
        data={tableData}
        scroll={scroll()}
        columns={columns()}
      />
    </div>
  )
}

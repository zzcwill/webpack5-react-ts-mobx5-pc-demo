import React from 'react'
import {
  // useLocation,
  useNavigate,
} from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'
import copyToClipboard from 'copy-to-clipboard'
import { Demo1 } from '@/components'

import logo from '@/assets/images/logo.png'


import './index.css'
import './index.less'
import './index.scss'
import styles from './index.module.less'

const Home = observer(() => {
  const navigate = useNavigate()

  return (
    <div className={classNames('p10', 'home')}>
      <div className="info">info</div>
      <div className="txt-scss">txt-scss</div>
      <div
        className={classNames('txt', styles.bule)}
        onClick={() => {
          navigate({ pathname: '/test', search: '?name=1' })
        }}
      >
        to-test-url
      </div>
      <img src={logo} onClick={() => { copyToClipboard('logo') }} />
      <br />
      <Demo1 />
    </div>
  )
})

export default Home

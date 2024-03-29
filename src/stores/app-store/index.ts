/* eslint-disable */
import { observable, action } from 'mobx'

import { testApi } from '@/api'
import { sleep } from '@/utils/sleep'
import { urlWay } from '@/utils/url-way'
import { numWay } from '@/utils/num-way'

import { BaseStore } from '../base-store'
/* eslint-enable */

export class AppStore extends BaseStore {
  @observable token = 'token'
  @observable appLoading = false

  @observable userInfo: any = {
    userName: '',
    phone: '',
  }

  @action.bound
  async getUserInfo() {
    // await sleep(2000)
    this.userInfo = {
      userName: 'zzc',
      phone: '1804243',
    }
  }

  @action.bound
  async getTestApi() {
    const paramData = {
      page: 1,
      tab: 'good',
      limit: 10,
    }
    const resData = await testApi(paramData)
    console.info(resData)
    console.info(urlWay.formatSearchString('?name=zzc&phone=180'))
    console.info(numWay.add(1.22, 2.55))
    console.info(this.rootStore)
  }

  @action.bound
  async initAppData() {
    this.appLoading = true
    await this.getUserInfo()
    // await this.getTestApi()
    this.appLoading = false
  }
}

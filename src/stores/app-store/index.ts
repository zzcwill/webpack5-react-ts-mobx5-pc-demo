import { observable, action } from 'mobx'
import { BaseStore } from '../base-store'
import { testApi } from '@/api'
import { sleep } from '@/utils/sleep'

export class AppStore extends BaseStore {
  @observable token = 'token'
  @observable appLoading = false

  @observable userInfo: any = {
    userName: '',
    phone: '',
  }

  @action.bound
  async getUserInfo() {
    await sleep(5000)
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
  }

  @action.bound
  async initAppData() {
    // console.log('NODE_ENV', process.env.NODE_ENV)
    // console.log('BASE_ENV', process.env.BASE_ENV)

    this.appLoading = true
    await this.getUserInfo()
    await this.getTestApi()
    this.appLoading = false
  }
}

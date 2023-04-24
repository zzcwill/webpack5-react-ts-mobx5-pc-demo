import { AppStore } from './app-store'

export class Store {
  appStore = new AppStore(this)
}

export const store = new Store()

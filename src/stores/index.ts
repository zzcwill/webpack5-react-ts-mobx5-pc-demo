import { AppStore } from './app-store'
import { HomeStore } from './home-store'

export class Store {
  appStore = new AppStore(this)
  homeStore = new HomeStore(this)
}

export const store = new Store()

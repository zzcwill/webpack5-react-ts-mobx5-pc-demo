import { AppStore } from './app-store';
import { DplStore } from './dpl-store';
import { HomeStore } from './home-store';

export class Store {
  appStore = new AppStore(this);
  homeStore = new HomeStore(this);
  dplStore = new DplStore(this);
}

export const store = new Store();

import {
  observable // action
} from 'mobx';

import { BaseStore } from '../base-store';

export class HomeStore extends BaseStore {
  @observable name = 'HomeStore';
}

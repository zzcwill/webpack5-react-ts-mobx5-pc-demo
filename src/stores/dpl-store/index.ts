import {
  observable // action
} from 'mobx';

import { BaseStore } from '../base-store';

const mockUserInfo = {
  addedType: '1',
  addedTaxCode: '',
  addedTaxSsdId: '',
  areaCode: '130000',
  companyId: '',
  customerId: '8156385560790159',
  nsrmc: '一月河北兴晶商贸有限公司',
  period: '202304',
  periodBegin: '',
  periodEnd: '',
  taxNo: '91130131MA07KCJG74',
  djxh: '',
  accountId: '20190530007393210018010000000',
  periodDate: '2023-03-31T16:00:00.000Z',
  fullName: 'rehusj',
  avatar: 'https://servu-acc.oss-cn-hangzhou.aliyuncs.com/avatar/default/ad7b77ea1f0b492f909e8e98d270727c.png',
  tel: '15958040216',
  accessToken: 'AP6j1an5r008100280010000',
  sex: '\u0000',
  locationCode: null,
  mobile: '15958040216',
  birthday: null,
  clientLocationCode: '130000',
  companyName: '一月河北兴晶商贸有限公司'
};

export class DplStore extends BaseStore {
  @observable name = 'DplStore';

  @observable userInfo: any = mockUserInfo;
}

import Decimal from 'decimal.js';

// import isNumber from 'lodash/isNumber'

class NumWay {
  toNum(resNum: any) {
    return resNum.toNumber();
  }

  add(num1: number, num2: number) {
    let resNum: any = null;
    resNum = new Decimal(num1).add(new Decimal(num2));
    return this.toNum(resNum);
  }

  sub(num1: number, num2: number) {
    let resNum: any = null;
    resNum = new Decimal(num1).sub(new Decimal(num2));
    return this.toNum(resNum);
  }

  mul(num1: number, num2: number) {
    let resNum: any = null;
    resNum = new Decimal(num1).mul(new Decimal(num2));
    return this.toNum(resNum);
  }

  div(num1: number, num2: number) {
    let resNum: any = null;
    resNum = new Decimal(num1).div(new Decimal(num2));
    return this.toNum(resNum);
  }
}

export const numWay = new NumWay();

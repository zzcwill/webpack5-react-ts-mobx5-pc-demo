import Decimal from 'decimal.js'
// import isNumber from 'lodash/isNumber'

class NumWay {
  toNum (resNum: any, decimalNum: number) {
    return resNum.toSignificantDigits(decimalNum).toNumber()
  }

  add (num1: number, num2: number, decimalNum = 4) {
    let resNum: any = null
    resNum = new Decimal(num1).add(new Decimal(num1))
    return this.toNum(resNum, decimalNum)
  }

  sub (num1: number, num2: number, decimalNum = 4) {
    let resNum: any = null
    resNum = new Decimal(num1).sub(new Decimal(num2))
    return this.toNum(resNum, decimalNum)
  }

  mul (num1: number, num2: number, decimalNum = 4) {
    let resNum: any = null
    resNum = new Decimal(num1).mul(new Decimal(num2))
    return this.toNum(resNum, decimalNum)
  }

  div (num1: number, num2: number, decimalNum = 4) {
    let resNum: any = null
    resNum = new Decimal(num1).div(new Decimal(num2))
    return this.toNum(resNum, decimalNum)
  }
}

export const numWay = new NumWay()

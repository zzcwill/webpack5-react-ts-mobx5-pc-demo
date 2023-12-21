import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

const Performance = observer(() => {

  function testa() {
    testb()
  }
  function testb() {
    let total = 0
    for (let i = 0; i < 100 * 10000 * 10000; i++) {
      total += i
    }
    console.log('testb', total)
  }

  function testc() {
    testd()
  }
  function testd() {
    let total = 0
    for (let i = 0; i < 10 * 10000 * 10000; i++) {
      total += i
    }
    console.log('testd', total)
  }


  useEffect(() => {
    testa()
    testc()
  }, [])

  return (
    <div>
      Performance
    </div>
  )
})

export {
  Performance,
}

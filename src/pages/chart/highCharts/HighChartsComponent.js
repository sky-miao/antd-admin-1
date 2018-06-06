import React from 'react'

import HighstockComponent from './HighstockComponent'
import HighmapsComponent from './HighmapsComponent'
import HighMoreComponent from './HighMoreComponent'
import MemAllocsComponent from './MemAllocsComponent'


const HighChartsComponent = ({ type }) => {
  let Comp = ['Highstock', 'Highmaps', 'HighMore', 'MemAllocs' ]
  Comp = Comp.filter(i => {
    if(type.indexOf(i) < 0) {
      return false
    }else {
      return true
    }
  })
  return (
    <div>
      {
        Comp.map((i, n) => {
          if (/Highstock/.test(i)){
            return (<HighstockComponent key={n} />)
          } else if (/Highmaps/.test(i)){
            return (<HighmapsComponent key={n} />)
          } else if (/HighMore/.test(i)){
            return (<HighMoreComponent key={n} />)
          } else {
            return (<MemAllocsComponent key={n} />)
          }
        })
      }
    </div>
  )
}

export default HighChartsComponent

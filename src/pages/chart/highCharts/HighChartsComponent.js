import React from 'react'
import HighstockComponent from './HighstockComponent'
import HighmapsComponent from './HighmapsComponent'
import HighMoreComponent from './HighMoreComponent'
import MemAllocsComponent from './MemAllocsComponent'


const HighChartsComponent = ({ type }) => {
  if (type === 'Highmaps') return (<HighmapsComponent />)
  if (type === 'HighMore') return (<HighMoreComponent />)
  if (type === 'MemAllocs') return (<MemAllocsComponent />)
  return (<HighstockComponent />)
}

export default HighChartsComponent

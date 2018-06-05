import React from 'react'
import PropTypes from 'prop-types'

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

HighChartsComponent.propTypes = {
  type: PropTypes.string,
}

export default HighChartsComponent

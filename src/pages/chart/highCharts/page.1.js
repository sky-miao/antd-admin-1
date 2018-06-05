import React from 'react'
import { Radio } from 'antd'
import { Page } from 'components'
import HighChartsComponent from './HighChartsComponent'
import styles from './page.less'

const RadioGroup = Radio.Group

const chartList = [
  {
    label: 'Highstock',
    value: 'Highstock',
  },
  {
    label: 'Highmaps',
    value: 'Highmaps',
  },
  {
    label: 'HighMore',
    value: 'HighMore',
  },
  {
    label: 'MemAllocs',
    value: 'MemAllocs',
  },
]

class Chart extends React.Component {
  constructor () {
    super()
    this.state = {
      type: 'MemAllocs',
    }
    this.handleRadioGroupChange = this.handleRadioGroupChange.bind(this)
  }
  handleRadioGroupChange (e) {
    this.setState({
      type: e.target.value,
    })
  }
  render () {
    return (<Page inner>
      <RadioGroup options={chartList} defaultValue="MemAllocs" onChange={this.handleRadioGroupChange} />
      <div className={styles.chart}>
        <HighChartsComponent type={this.state.type} />
      </div>
    </Page>)
  }
}


export default Chart

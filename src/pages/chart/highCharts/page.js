import React from 'react'
import { Checkbox } from 'antd'
import { Page } from 'components'
import HighChartsComponent from './HighChartsComponent'
import styles from './page.less'

const CheckboxGroup = Checkbox.Group

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
      type: ['MemAllocs'],
    }
    this.handleRadioGroupChange = this.handleRadioGroupChange.bind(this)
  }
  handleRadioGroupChange (e) {
    console.log(e, 963022)
    this.setState({
      type: e,
    })
  }
  render () {
    return (<Page inner>
      <CheckboxGroup options={chartList} defaultValue={['MemAllocs']} onChange={this.handleRadioGroupChange} />
      <div className={styles.chart}>
        <HighChartsComponent type={this.state.type} />
      </div>
    </Page>)
  }
}


export default Chart

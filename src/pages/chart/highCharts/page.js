import React from 'react'
import { Checkbox, Select } from 'antd'
import { connect } from 'dva'
import { Page } from 'components'
import HighChartsComponent from './HighChartsComponent'
import styles from './page.less'

const CheckboxGroup = Checkbox.Group
const Option = Select.Option

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
    this.handleCheckGroupChange = this.handleCheckGroupChange.bind(this)
  }
  handleCheckGroupChange (e) {
    this.setState({
      type: e,
    })
  }
  changeSel (key) {
    this.props.getMemAllocs({
      sql: `SELECT count("value") FROM "runtime.memory.allocs.gauge" WHERE time >= now() - 5m GROUP BY time(${key}), "coinbase", "networkid", "nodename" fill(null)`, // 把key拼串
    })
  }
  render () {
    return (<Page inner>
      <CheckboxGroup options={chartList} defaultValue={['MemAllocs']} onChange={this.handleCheckGroupChange} />
      <Select
        onChange={this.changeSel.bind(this)}
        defaultValue={['10s']}
      >
        <Option key={'10s'}>第一个</Option>
        <Option key={'20s'}>第二个</Option>
      </Select>
      <div className={styles.chart}>
        <HighChartsComponent type={this.state.type} />
      </div>
    </Page>)
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMemAllocs (payload) {
      dispatch({ type: 'MemAllocs/getMemAllocs', payload })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)

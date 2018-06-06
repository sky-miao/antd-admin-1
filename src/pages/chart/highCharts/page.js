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
    this.props.querySh({
      key,
    })
  }
  render () {
    return (<Page inner>
      <CheckboxGroup options={chartList} defaultValue={['MemAllocs']} onChange={this.handleCheckGroupChange} />
      <Select
        onChange={this.changeSel.bind(this)}
        defaultValue={["1"]}
      >
        <Option key="1">第一个</Option>
        <Option key="2">第二个</Option>
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
    querySh (payload) {
      console.log(`query something and data = ${JSON.stringify(payload)}`)
      // dispatch({ type: 'query/query', payload })
      console.log(dispatch)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)

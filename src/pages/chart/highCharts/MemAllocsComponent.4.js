import React from 'react'
import { connect } from 'dva'
import ReactEcharts from 'echarts-for-react'

class MemAllocsComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
    }
  }
  componentDidMount () {
    this.props.getMemAllocs(123)
  }

  getOption () {
    const option = {
      title: {
        text: 'Seele Metrics: runtime.memory.allocs.gauge',
      },
      tooltip: {
        trigger: 'axis',
      },
      // legend: {
      //   data: ['最新成交价', '预购队列'],
      // },
      toolbox: {
        feature: {
          dataView: { readOnly: false },
          dataZoom: {
            yAxisIndex: 'none',
          },          
          restore: {},
          magicType: {
            type: ['line', 'bar'],
          },          
          saveAsImage: {},
        },
      },
      grid: {
        top: 60,
        left: 30,
        right: 60,
        bottom: 30,
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        data: this.props.MemAllocs.MemAllocsData ? this.props.MemAllocs.MemAllocsData : [],
        type: 'line',
      }],
    }
    return option
  }

  render () {
    return (
      <div className="examples">
        <div className="parent">
          <ReactEcharts
            ref={(e) => {
              this.echarts_react = e
            }} 
            option={this.getOption()}
            style={{ height: 400 }}
          />
        </div>
      </div>
    )
  }
}
const mapStateProps = (state) => {
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
export default connect(mapStateProps, mapDispatchToProps)(MemAllocsComponent)
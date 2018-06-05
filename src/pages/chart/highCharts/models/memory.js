/* global window */
import modelExtend from 'dva-model-extend'
import { queryMemAllocs } from '../services/memory'

export default modelExtend({
  namespace: 'MemAllocs',

  state: {
    MemAllocsData: [],
  },

  subscriptions: {
  },

  effects: {

    * getMemAllocs ({payload}, { put, call }) {
      let data = yield call(queryMemAllocs, payload)
      yield put({ type: 'MemAllocs', payload: data })
    },
    
  },

  reducers: {
    MemAllocs (state, { payload }) {
      console.log(payload, 9630)
      return {
        ...state,
        MemAllocsData: payload,
      }
    },
  },
})

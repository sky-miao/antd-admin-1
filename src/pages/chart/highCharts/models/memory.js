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

    * getMemAllocs (payload, { put, call }) {
      let data = yield call(queryMemAllocs, payload.payload)
      yield put({ type: 'MemAllocs', payload: data })
    },

    // * getMemAllocss (payload, { put }) {
    //   console.log(payload.payload, 45)
    //   yield put({ type: 'MemAllocs', payload: [[1220832000000, 22.56], [1220918400000, 21.67], [1221004800000, 21.66], [1221091200000, 21.81], [1221177600000, 21.28]] })
    // },
  },

  reducers: {
    MemAllocs (state, { payload }) {
      return {
        ...state,
        MemAllocsData: payload,
      }
    },
  },
})

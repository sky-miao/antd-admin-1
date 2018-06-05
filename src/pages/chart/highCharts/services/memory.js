import { request, config } from 'utils'

const { api } = config
const { querySqls } = api

export function queryMemAllocs (params) {
  console.log(`${querySqls}?sql=${params}`, 96)
  return request({
    url: `${querySqls}?sql=${params}`,
    method: 'get',
  })
}

export function queryMemFrees (params) {
  return request({
    url: querySqls,
    method: 'get',
    data: params,
  })
}

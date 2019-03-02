import { DateTime } from 'luxon'

import {
  SET_CURRENCY,
  SET_BASE_AMOUNT,
  SET_RATES,
  SET_HISTORY_RATES,
  SET_PERIOD
} from '../actions'

import { getLatest, getHistory } from '../api'

export const setCurrency = payload => dispatch => {
  dispatch({
    type: SET_CURRENCY,
    payload
  })

  const debounceGetRace = false
  dispatch(getRates(debounceGetRace))
}

export const setBaseAmount = payload => ({
  type: SET_BASE_AMOUNT,
  payload
})

export const setHistory = payload => ({
  type: SET_HISTORY_RATES,
  payload
})

export const setPeriod = payload => dispatch => {
  dispatch({
    type: SET_PERIOD,
    payload
  })

  dispatch(getHistoryRate())
}

export const getHistoryRate = () => (dispatch, getStore) => {
  const {
    currencies: {
      selected: { from, to },
      chosenPeriod
    }
  } = getStore()

  const periodEnd = DateTime.local()
  const periodStart = periodEnd.minus({
    months: chosenPeriod
  })

  getHistory(from, [to], periodStart.toISODate(), periodEnd.toISODate())
    .then(response => {
      if (response.status === 200) {
        console.log(response)
        dispatch(setHistory(response.data.rates))
      }
    })
    .catch(err => {
      console.log(err)
    })
}

export const getRates = (debounced = true) => {
  const thunk = (dispatch, getStore) => {
    const {
      currencies: {
        list,
        selected: { from }
      }
    } = getStore()

    const preparedList = [...list]
    preparedList.splice(preparedList.indexOf(from), 1)

    getLatest(from, preparedList)
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: SET_RATES,
            payload: response.data.rates
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  thunk.meta = {
    debounce: {
      time: debounced ? 500 : 0,
      key: 'GET_CURRENCY_RATE'
    }
  }

  return thunk
}

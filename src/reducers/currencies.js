import {
  SET_CURRENCY,
  SET_BASE_AMOUNT,
  SET_RATES,
  SET_HISTORY_RATES,
  SET_PERIOD
} from '../actions'

const inititalState = {
  list: ['ILS', 'USD', 'EUR', 'GBP', 'CAD', 'MXN', 'JPY'],
  selected: {
    from: 'USD',
    to: 'ILS',
    amount: 1000.0
  },
  rates: null,
  historyRate: null,
  period: [1, 3, 6, 12],
  chosenPeriod: 1
}

export default function currencies(state = inititalState, { type, payload }) {
  switch (type) {
    case SET_PERIOD: {
      return {
        ...state,
        chosenPeriod: payload
      }
    }
    case SET_CURRENCY: {
      const selected = {
        ...state.selected
      }

      selected[payload.name] = payload.value
      return {
        ...state,
        selected
      }
    }
    case SET_BASE_AMOUNT: {
      const selected = {
        ...state.selected
      }

      selected.amount = payload.value
      return {
        ...state,
        selected
      }
    }
    case SET_RATES: {
      return {
        ...state,
        rates: payload
      }
    }
    case SET_HISTORY_RATES: {
      return {
        ...state,
        historyRate: payload
      }
    }
    default:
      return state
  }
}

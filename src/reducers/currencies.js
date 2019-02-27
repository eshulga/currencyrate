import { SET_CURRENCY } from '../actions/actionTypes'

const inititalState = {
  defaultValues: {
    from: 'USD',
    to: 'ILS',
    amount: 1000
  },
  list: ['ILS', 'USD', 'EUR', 'GBP', 'CAD', 'MXN', 'JPY'],
  selected: {
    from: '',
    to: ''
  }
}

export default function currencies(state = inititalState, { type, payload }) {
  switch (type) {
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
    default:
      return state
  }
}

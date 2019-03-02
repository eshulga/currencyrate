import axios from 'axios'

export const getLatest = (base = 'USD', symbols = ['ILS']) =>
  axios.get('https://api.exchangeratesapi.io/latest', {
    params: {
      base,
      symbols: symbols.join(',')
    }
  })

export const getHistory = (base = 'USD', symbols = ['ILS'], start, end) =>
  axios.get('https://api.exchangeratesapi.io/history', {
    params: {
      base,
      symbols: symbols.join(','),
      start_at: start,
      end_at: end
    }
  })

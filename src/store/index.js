import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from '../reducers'

const debouncer = createDebounce()

const middleware = [debouncer, thunk]

const enchancer = composeWithDevTools(applyMiddleware(...middleware))

const store = createStore(reducers, enchancer)

export default store

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from '../reducers'

const middleware = [thunk]

const enchancer = composeWithDevTools(applyMiddleware(...middleware))

const store = createStore(reducers, enchancer)

export default store

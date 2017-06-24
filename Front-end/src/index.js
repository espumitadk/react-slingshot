import 'bootstrap/dist/css/bootstrap.css';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combinedReducers from './reducers/combinedReducers'
import App from './containers/App'

const store = createStore(combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

export default store;
//store.dispatch({ type: "SEND_MOVEMENT", cells: [45]});
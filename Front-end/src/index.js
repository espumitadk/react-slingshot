// Set up your application entry point here...
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import combinedReducers from './reducers/combinedReducers'
import App from './containers/App'


let store = createStore(combinedReducers)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

store.subscribe(() =>{
  console.log("Store changed", store.getState())
})

store.dispatch({type: "CHANGE_AGE", value: 22})
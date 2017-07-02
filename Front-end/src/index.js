import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combinedReducers from './reducers/combinedReducers'
import App from './containers/App'
import serverMovementAction from './actions/serverMovementAction'

const store = createStore(combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

store.subscribe(() => {
    if(store.getState().controls.gameControls.gameTurn == "SERVER"){
      store.dispatch(serverMovementAction());
    }
});

export default store;

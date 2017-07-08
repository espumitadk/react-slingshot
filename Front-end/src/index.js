import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'
import serverMovementAction from './actions/serverMovementAction'

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)



store.subscribe(() => {
    if (store.getState().controls.gameControls.gameTurn == "SERVER"){
      store.dispatch(serverMovementAction());
    }
});

export default store;

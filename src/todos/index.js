import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app'
import todoApp from './reducers'

let store = createStore(todoApp)

function start(rootElement) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
}

export { start }

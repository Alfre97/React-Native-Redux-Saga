import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/redux/configureStore'
import Navigator from './src/components/app/navigator'

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

export default App

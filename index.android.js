/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './app/configureStore'
import Root from './app/Root'

const store = configureStore({})

import { AppRegistry } from 'react-native'

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
)

AppRegistry.registerComponent('Todo', () => App)

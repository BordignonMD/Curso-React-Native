import React from 'react'
import { Provider } from 'react-redux'
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import axios from 'axios'
import { DEFAULT_BASE_URL } from '@env'

import storeConfig from './src/store/storeConfig'

axios.defaults.baseURL = DEFAULT_BASE_URL

const store = storeConfig()
const Redux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => Redux);

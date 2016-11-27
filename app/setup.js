'use strict';

import App from './App'
// import FacebookSDK from 'FacebookSDK';
import Parse from 'parse/react-native';
import React, { Component } from 'react';
import Relay from 'react-relay';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// import { serverURL } from './env';
let serverURL = 'http://localhost:8080';

function setup() {
  console.disableYellowBox = true;
  Parse.initialize('oss-f8-app-2016');
  Parse.serverURL = `${serverURL}/parse`;

  // FacebookSDK.init();
  // Parse.FacebookUtils.init();
  Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer(`${serverURL}/graphql`, {
      fetchTimeout: 30000,
      retryDelays: [5000, 10000],
    })
  );

  class Root extends Component {
    state: {
      isLoading: boolean;
      store: any;
    };

    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({isLoading: false})),
      };
    }

    render() {
      if (this.state.isLoading) {
        return null;
      }

      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
}

global.LOG = (...args) => {
  console.log('/------------------------------\\');
  console.log(...args);
  console.log('\\------------------------------/');
  return args[args.length - 1];
};

module.exports = setup;

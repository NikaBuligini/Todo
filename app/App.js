'use strict'

import React, { Component } from 'react'
import Provider from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  DrawerLayoutAndroid
} from 'react-native'

import Navigation from './containers/Navigation'
import Todo from './containers/Todo'

type State = { animating: boolean; }
type Timer = number

export default class Root extends Component {
  state: State;
  _timer: Timer;

  constructor(props) {
    super(props);
    this.state = {
      animating: true,
    };
  }

  componentDidMount() {
    this.setToggleTimeout()
  }

  componentWillUnmount() {
    clearTimeout(this._timer)
  }

  setToggleTimeout() {
    this._timer = setTimeout(() => {
      // this.setState({animating: !this.state.animating});
      // this.setToggleTimeout();
    }, 2000)
  }

  render () {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Navigation />}>

        <Todo />

        {/* <View style={styles.container}>
          <ActivityIndicator
            animating={this.state.animating}
            style={[styles.centering, {height: 80}]}
            size="large"
          />
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View> */}
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

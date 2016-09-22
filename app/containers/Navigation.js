import React, { Component } from 'react'
import { connect } from 'react-redux'

import { StyleSheet, Text, View } from 'react-native'

class Navigation extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.drawer}>I'm in the Drawer!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  drawer: {
    fontSize: 15,
    textAlign: 'left',
    margin: 10
  }
})

function mapStateToProps (state, ownProps) {
  // const { preloaded } = state
  // const { isFetching } = state.process.repos
  // const { repos } = state.entities
  // return {
  //   preloaded,
  //   isFetching,
  //   repos
  // }
  return {}
}

export default connect(mapStateToProps, {

})(Navigation)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  StyleSheet,
  View,
  Text
} from 'react-native'

class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  render () {
    const { todo } = this.state
    const { text } = this.props

    return (
      <View style={styles.todoItem}>
        <Text>{text}</Text>
      </View>
    )
  }
}

const size = 50

const styles = StyleSheet.create({
  todoItem: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 16
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

})(TodoItem)

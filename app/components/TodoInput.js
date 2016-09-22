import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  StyleSheet,
  View,
  TextInput
} from 'react-native'

class TodoInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  onSubmit () {
    // if (!this.state.todo) return;
    // store.addTodo(this.state.todo, this.state.starred);
    // this.setState({ todo: '', starred: false });
  }

  render () {
    const { todo } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <TextInput
            style={styles.title}
            placeholder={'Add a to-do...'}
            placeholderTextColor={'white'}
            value={todo}
            onChangeText={todo => this.setState({ todo })}
            returnKeyType={'done'}
            onSubmitEditing={this.onSubmit.bind(this)}
          />
        </View>
      </View>
    )
  }
}

const size = 50

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(88,141,100,0.8)',
    borderRadius: 2,
    marginBottom: 5,
    height: size,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  placeholder: {
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    height: size,
    lineHeight: size,
    fontSize: 18,
    backgroundColor: 'transparent'
  },
  wrap: {
    flex: 1,
    justifyContent: 'center'
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

})(TodoInput)

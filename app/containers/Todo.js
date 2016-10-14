import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import TodoInput from '../components/TodoInput'
import TodoItem from '../components/TodoItem'

class Todo extends Component {
  render () {
    var temporaryTodo = [
      {
        id: '1',
        text: 'first todo'
      },
      {
        id: '2',
        text: 'second todo'
      }
    ]

    return (
      <View style={style.container}>
        <TodoInput />
        <ScrollView
          automaticallyAdjustContentInsets={false}
          >
          {temporaryTodo.map(todo => {
            return <TodoItem key={todo.id} text={todo.text} />
          })}
        </ScrollView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  title: {
    color: 'white',
    fontSize: 20
  }
})

export default Todo

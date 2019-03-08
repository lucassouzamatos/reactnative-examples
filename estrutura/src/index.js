import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  state = {
    todos: [
      { id: Math.random(), message: `todo ${Math.random()}` }
    ]
  }

  addTodo() {
    this.setState({ 
      todos: [ ... this.state.todos, { 
        id: Math.random(), 
        message: `todo ${Math.random()}` 
      }]
    })
  }

  render() {
    return (
      <View style={styles.container}>

        {this.state.todos.map(todo => (
          <Todo key={todo.id} message={todo.message} />
        ))}

        <Button onPress={() => this.addTodo()} title="Adicionar"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
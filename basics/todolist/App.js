import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
          <Text key={todo.id} style={styles.welcome}>{todo.message}</Text>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
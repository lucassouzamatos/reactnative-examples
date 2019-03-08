import React, { Component } from 'react';

import { Text } from 'react-native';

import styles from './styles';

export default class Todo extends Component {
  render() {
    return <Text style={styles.text}>{this.props.message}</Text>;
  }
}

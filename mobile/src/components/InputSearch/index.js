import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default class InputSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

 render(){
  return (
    <View style={styles.containerInput}>
      <Ionicons name="search-outline" size={22} color='#999' style={styles.iconInput}/>
      <TextInput
        style={styles.input}
        onChangeText={text => this.setState({text})}
        placeholder='Qual matéria deseja aprender?'
      />
    </View>
   );
 }
}
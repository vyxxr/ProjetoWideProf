import React, {Component} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class SiginUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      senha: null,
      confirmSenha: null,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Bem-Vindo</Text>
          <Text>Digite as informações abaixo para criar sua conta.</Text>
        </View>

        <TextInput 
          style={styles.input}
          value={this.state.email}
          keyboardType={'email-address'}
          placeholder={'Endereço de email'}
          onChangeText={(email) => {
            this.setState({email: email})
          }}
        />

        <TextInput 
          value={this.state.senha}
          placeholder={'Digite sua senha...'}
          onChangeText={(senha) => {
            this.setState({senha: senha})
          }}
        />
        
        <TextInput 
          value={this.state.confirmSenha}
          placeholder={'Digite sua senha novamente...'}
          onChangeText={(confirmSenha) => {
            this.setState({confirmSenha: confirmSenha})
          }}
        />
      </View>
    );
  }
}


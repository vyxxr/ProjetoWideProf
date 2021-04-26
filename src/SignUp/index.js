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
        <View style={styles.containerWelcome}>
          <Text style={styles.textRegisterWelcome}>Bem-Vindo</Text>
          <Text style={styles.textRegister}>Digite as informações abaixo para criar sua conta.</Text>
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
          style={styles.input}
          value={this.state.senha}
          placeholder={'Digite sua senha...'}
          secureTextEntry={true}
          onChangeText={(senha) => {
            this.setState({senha: senha})
          }}
        />
        
        <TextInput 
          style={styles.input}
          value={this.state.confirmSenha}
          placeholder={'Digite sua senha novamente...'}
          secureTextEntry={true}
          onChangeText={(confirmSenha) => {
            this.setState({confirmSenha: confirmSenha})
          }}
        />

        <View style={styles.botaoVoltarContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack()
            }}
          >
            <Text style={styles.textBotaoVoltar}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerBotaoRegistro}>
          <TouchableOpacity 
            onPress={() => {}}
            style={styles.botaoRegistro}
          >
            <Text style={styles.textoBotaoRegistro}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


import React, {Component} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      senha: null,
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.containerWelcome}>
          <Text style={styles.textWelcome}>Bem-Vindo ao <Text style={styles.secondTextWelcome}>WideProf</Text></Text>
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

        <View style={styles.signUpContainer}>
          <TouchableOpacity
            onPress={() => {}}
          >
            <Text style={styles.textSignUp}>Registre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerButtonLogin}>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => {}}
          >
            <Text style={styles.buttonLoginText}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


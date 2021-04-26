import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerWelcome: {
    paddingBottom: 50
  },

  textRegisterWelcome: {
    fontSize: 30,
  },

  textRegister: {
    width: 290,
    fontSize: 15,
  },

  input: {
    height: 50,
    width: 300,
    paddingLeft: 15,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: '#c1c1c1',
    backgroundColor: '#f5f6f8',
  }, 

  botaoVoltarContainer: {
    width: 290,
    alignItems: 'flex-start'
  },

  textBotaoVoltar: {
    fontSize: 15,
    color: '#c1c1c1',
    textDecorationLine: 'underline',
  },

  containerBotaoRegistro: {
    width: 290,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  botaoRegistro: {
    height: 50,
    width: 150,
    borderRadius: 20,
    backgroundColor: '#eead2d',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textoBotaoRegistro: {
    fontSize: 20,
    color: '#fff'
  }
})
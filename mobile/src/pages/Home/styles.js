import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },

  header: {
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25
  },

  service: {
    height: 200,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },

  cards: {
    width: 130,
    padding: 15,
    justifyContent: 'space-between',
    borderRadius: 15
  },

  iconCard: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12
  },

  titleCard: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  descriptionCard: {
    fontSize: 13,
    fontWeight: 'bold',
    opacity: 0.8
  }
})
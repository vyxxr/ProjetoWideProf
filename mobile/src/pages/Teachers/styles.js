import {StyleSheet} from 'react-native';
import Contants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Contants.statusBarHeight,
    paddingHorizontal: 20
  },

  header: {
    height: 150
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2
  },

  topBar: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },

  card: {
    backgroundColor: '#f5f6f8',
    borderRadius: 10,
    padding: 20,
    height: 115,
    flexDirection: 'row'
  },

  teacherPhoto: {
    width: 75,
    height: 75,
    borderRadius: 15
  },

  cardText: {
    marginLeft: 30,
    justifyContent: 'space-between',
    flex: 1
  },

  teacherName: {
    fontSize: 17.5,
    fontWeight: 'bold'
  },

  teacherSubject: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8e939f'
  },

  cardBottom: {
    flexDirection: 'row'
  },

  cardBottomItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15
  },

  teacherTextBottom: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#8e939f'
  }
});
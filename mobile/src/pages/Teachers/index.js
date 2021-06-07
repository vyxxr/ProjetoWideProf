import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import InputSearch from '../../components/InputSearch';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

export default class Teachers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.route.params.data,
      subjects: this.props.route.params.subjects,
      teachers: this.props.route.params.teachers
    }

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    console.log(item.nome)
    return (
      <View style={styles.card}>
        <View>
          <Image source={{uri: 'http://192.168.1.13:3000' + item.foto}} style={styles.teacherPhoto} />
        </View>
        <View style={styles.cardText}>
          <View>
            <Text style={styles.teacherName}>{item.nome}</Text>
            <Text style={styles.teacherSubject}>{item.materia}</Text>
          </View>

          <View style={styles.cardBottom}>
            <View style={styles.cardBottomItem}>
              <MaterialIcons name='grade' size={18} color='#ffc300' style={{marginRight: 3}} />
              <Text style={styles.teacherTextBottom}>{item.nota}</Text>
            </View>
            <View style={styles.cardBottomItem}>
              <Ionicons name='location-outline' size={15} color='#8e939f' style={{marginRight: 3}} />
              <Text style={styles.teacherTextBottom}>{item.pais}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

 render(){
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Ionicons name='arrow-back-outline' size={40} color='#828282' style={{marginLeft: -5}}/>
            </TouchableOpacity>
            <Image source={require('../../assets/user.jpeg')} style={styles.avatar}/>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Prof. de {this.state.data}</Text>
          </View>
        </View>

        <InputSearch />

        <FlatList
          style={{backgroundColor: '#fff'}}
          data={this.state.teachers.filter((obj) => obj.materia === this.state.data)}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </ScrollView>
    </View>
   );
 }
}
import React, {Component} from 'react';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import InputSearch from '../../components/InputSearch';
import styles from '../Home/styles';
import HomeAPI from '../../services/homeAPI';
import { Ionicons } from '@expo/vector-icons';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teachers: [],
      subjects: [],
      services: [
        {
          id: 'screencast',
          title: 'Screencast',
          description: 'Prático',
        },
        {
          id: 'video',
          title: 'Vídeo',
          description: 'Cara a cara',
        },
        {
          id: 'chat',
          title: 'Chat',
          description: 'Fácil e eficiente',
        },
      ]
    }

    this.loadTeachers = this.loadTeachers.bind(this);
    this.renderServices = this.renderServices.bind(this);
    this.renderSubjects = this.renderSubjects.bind(this);
    this.goToTeachersPage = this.goToTeachersPage.bind(this);
  }

  componentDidMount() {
    this.loadTeachers()
  }

  async loadTeachers() {
    let subjects = []

    HomeAPI.getAPI()
      .then(dados => {
        dados.professores.map(item => {
          if (!subjects.includes(item.materia)) {
            subjects.push(item.materia)
          }
        })

        this.setState({ teachers: dados.professores, subjects})
      })
  }

  renderServices(data) {
    switch(data.id) {
      case 'screencast':
        var icon = 'laptop-outline'
        var colors = ['#fd7373', '#fc4444']
        break;
      case 'video':
        var icon = 'videocam-outline'
        var colors = ['#40c1ff', '#00adff']
        break;
      default:
        var icon = 'chatbubble-outline'
        var colors = ['#f386df', '#ef5ed4']
        break;
    }

    return (
      <View style={{...styles.cards, backgroundColor: colors[0]}}> 
        <View style={{...styles.iconCard, backgroundColor: colors[1]}}>
          <Ionicons name={icon} size={35} color='#fff'/>
        </View>
        <View>
          <Text style={{...styles.titleCard, color: '#fff'}}>{data.title}</Text>
          <Text style={{...styles.descriptionCard, color: '#fff'}}>{data.description}</Text>
        </View>
      </View>
    )
  }

  renderSubjects(data) {
    const count = this.state.teachers.filter((obj) => obj.materia === data).length;

    return (
      <TouchableOpacity style={{...styles.cards, backgroundColor: '#f5f6f8'}} onPress={() => this.goToTeachersPage(data)}>
        <View style={{...styles.iconCard, backgroundColor: '#94C752'}}>
          <Ionicons name='book-outline' size={35} color='#fff' />
        </View>
        <View>
          <Text style={{...styles.titleCard, color: '#474747', fontSize: 17}}>{data}</Text>
          <Text style={{...styles.descriptionCard, color: '#aaafb7'}}>{count} Professor{count > 1 ? 'es' : ''}</Text>
        </View>
      </TouchableOpacity> 
    )
  }

  goToTeachersPage(data) {
    this.props.navigation.navigate('Teachers', {data: data, subjects: this.state.subjects, teachers: this.state.teachers})
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingTop: 40}}
        >
          <View style={styles.header}>
            <View>
              <Text style={{ fontSize: 24}}>Bom Dia</Text>
              <Text style={{fontSize: 28, fontWeight: 'bold'}}>Precisa de ajuda?</Text>
            </View>
            <View>
              <Image source={require('../../assets/user.jpeg')} style={styles.avatar}/>
            </View>
          </View>

          <InputSearch />
          
          <View style={styles.service}>
            <Text style={styles.title}>Nossos serviços</Text>

            <FlatList
              style={{flex: 1, flexDirection: 'row'}}
              data={this.state.services}
              renderItem={({item}) => this.renderServices(item)}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
            />
          </View>
          <View style={{ height: 200}}>
            <Text style={styles.title}>Matérias</Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.state.subjects}
              renderItem={({item}) => this.renderSubjects(item)}
              keyExtractor={item => item}
              ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
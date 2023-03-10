import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Platform,
  ScrollView,
  Alert,
  PermissionsAndroid,
} from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

import { connect } from 'react-redux'
import { addPost } from '../store/actions/posts'

const noUserMessage = 'Você precisa estar logado para adicionar imagens'

class AddPhoto extends Component {
  options = {
    includeBase64: true,
    mediaType: 'photo',
    saveToPhotos: true,
    maxWidth: 800,
    maxHeight: 600,
  }
 
  state = {
    image: null,
    comment: '',
  }
 
  componentDidUpdate = prevProps => {
    if (prevProps.loading && !this.props.loading) {
      this.setState({
        image: null,
        comment: ''
      })
      this.props.navigation.navigate('Feed')
    }
  }

  requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA, {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        )
        return granted === PermissionsAndroid.RESULTS.GRANTED
      } catch (e) {
        console.warn(e)
        return false
      }
    } else return true
  }
 
  requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        )            
        return granted === PermissionsAndroid.RESULTS.GRANTED
      } catch (e) {
        console.warn(e)
        alert('Write permission err', e)
      }
      return false
    } else return true
  }
 
  captureImage = async () => {
    const isCameraPermitted = await this.requestCameraPermission()
    const isStoragePermitted = await this.requestExternalWritePermission()

    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(this.options, (response) => {
        if (!response.didCancel) {
          this.setState({
            image: {
              uri: response.assets[0].uri, base64: response.assets[0].base64
            }
          })
        }
      });
    }
  }
 
  pickImage = () => {
    launchImageLibrary(this.options, (response) => {
      if (!response.didCancel) {
        this.setState({
          image: {
            uri: response.assets[0].uri, base64: response.assets[0].base64
          }
        })
      }
    })
  }
 
  selectType = () => {
    if (!this.props.name) {
      Alert.alert('Falha!', noUserMessage)
      return
    }

    Alert.alert('Selecione', 'Informe de onde você quer pegar a foto',
      [
        {
          text: 'Galeria',
          onPress: () => this.pickImage(),
          style: 'default',
        },
        {
          text: 'Camera',
          onPress: () => this.captureImage(),
          style: 'default',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => Alert.alert('Erro', 'Não foi possível selecionar a foto. Verifique as permissões!')
      }
    )
  }
 
  save = async () => {
    if (!this.props.name) {
      Alert.alert('Falha!', noUserMessage)
      return
    }

    this.props.onAddPost({
      id: Math.random(),
      nickname: this.props.name,
      email: this.props.email,
      image: this.state.image,
      comments: [
        {
          nickname: this.props.name,
          comment: this.state.comment,
        }
      ]
    })
  }
 
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Nova publicação</Text>
          <View style={styles.imageContainer}>
            {this.state.image ? <Image source={this.state.image} style={styles.image} /> : false}                            
          </View>
          <TouchableOpacity onPress={this.selectType} style={styles.button}>
            <Text style={styles.buttonText}>Escolha a foto</Text>
          </TouchableOpacity>
          <TextInput
            placeholder='Adicione uma descrição para a foto...'
            style={styles.input} 
            value={this.state.comment}
            onChangeText={comment => this.setState({ comment })}
            editable={!!this.props.name}
          />
          <TouchableOpacity 
            onPress={this.save}
            disabled={this.props.loading}
            style={[styles.button, this.props.loading ? styles.buttonDisabled : null]}
          >
            <Text style={styles.buttonText}>Postar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 50 : 10,
    fontWeight: 'bold'
  },
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#EEE',
    marginTop: 10
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width / 2,
    resizeMode: 'center'
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF'
  },
  input: {
    marginTop: 20,
    width: '90%'
  },
  buttonDisabled: {
    backgroundColor: '#AAA'
  }
})
 
const mapStateToProps = ({ user, posts }) => {
  return {
    email: user.email,
    name: user.name,
    loading: posts.isUploading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => dispatch(addPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)
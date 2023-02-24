import React from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { CommonActions } from '@react-navigation/native';
import { Gravatar } from 'react-native-gravatar'
import commonStyles from '../commonStyles'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
const logout = () => {
  delete axios.defaults.headers.common['Authorization']
  AsyncStorage.removeItem('userData')
  props.navigation.dispatch(
    CommonActions.reset({ index: 0, routes: [{ name: 'Auth', }], })
  )
}

  return (
    <DrawerContentScrollView>
      <View style={styles.header}>
        <View style={styles.titleContainer} >
          <Text style={styles.title}>Tasks</Text>
          <TouchableOpacity onPress={logout}>
            <View style={styles.logoutIcon}>
              <Icon name='sign-out' size={30} color='#800' />
            </View>
          </TouchableOpacity>
        </View>
        <Gravatar style={styles.avatar} options={{ email: props.email, secure: true }} />
        <View style={styles.userInfo}>
          <Text style={styles.name}> {props.name}</Text>
          <Text style={styles.email}> {props.email}</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    borderBottom: 1,
    borderColor: '#DDD',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 70 : 30,
    padding: 10,
  },
  title: {
    color: '#000',
    fontFamily: commonStyles.fontFamily,
    fontSize: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderRadius: 30,
    margin: 10,
  },
  userInfo: {
    marginLeft: 10,
  },
  name: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    color: commonStyles.colors.mainText,
    marginBottom: 5,
  },
  email: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 15,
    color: commonStyles.colors.subText,
    marginBottom: 10,
  },
  logoutIcon: {
    marginLeft: 10,
  }
})
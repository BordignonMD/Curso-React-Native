import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
 
import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';
import Splash from './screens/Splash';

const TabPrincipal = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Auth = createStackNavigator();
const SplashStack = createStackNavigator();
 
function AuthRouter() {
  return (
    <Auth.Navigator initialRouteName="Login" screenOptions={({ headerShown: false })}>
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="Register" component={Register} />
    </Auth.Navigator>
  );
}

function ProfileOrLogout() {
  return (
    <Stack.Navigator
      initialRouteName="AuthRouter"
      screenOptions={({ headerShown: false, tabBarShowLabel: false })}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AuthRouter" component={AuthRouter} />
    </Stack.Navigator>
  );
}
 
function Navigator() {
  return (
    <TabPrincipal.Navigator
      initialRouteName="Feed"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({color}) => {
          const icons = {
            Feed: 'home',
            AddPhoto: 'camera',
            ProfileOrLogout: 'user',
          };
 
          return <Icon name={icons[route.name]} size={30} color={color} />;
        },
      })}
    >
      <TabPrincipal.Screen name="Feed" component={Feed} />
      <TabPrincipal.Screen name="AddPhoto" component={AddPhoto} />
      <TabPrincipal.Screen name="ProfileOrLogout" component={ProfileOrLogout} />
    </TabPrincipal.Navigator>
  );
}
 
export default function SplashRouter() {
  return (
    <NavigationContainer>
      <SplashStack.Navigator initialRouteName="SplashStack" screenOptions={({ headerShown: false })}>
          <SplashStack.Screen name="SplashStack" component={Splash} />
          <SplashStack.Screen name="App" component={Navigator} />
      </SplashStack.Navigator>
    </NavigationContainer>
  );
}
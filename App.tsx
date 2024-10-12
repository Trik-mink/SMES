import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginOpt from './screens/LoginOpt'
import Login from './screens/Login'
import Register from './screens/Register'
import Onboard from './screens/Onboard'
import DataCollect from './screens/DataCollect'
import Home from './screens/Home'
import User from './screens/User'
import Compare from './screens/Compare'
import Settings from './screens/Settings'

import BottomTab from './screens/BottomTab'

// inner
import Persona from './screens/innerScreen/user/Persona'
import ExplorePersona from './screens/innerScreen/user/ExplorePersona'
import Search from './screens/innerScreen/home/Search'
import UniversityDetail from './screens/innerScreen/home/UniversityDetail'
import MajorDetail from './screens/innerScreen/home/MajorDetail'
import Wishlist from './screens/innerScreen/user/Wishlist'


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    // <ProviderTotal>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginOpt" component={LoginOpt} />
          <Stack.Screen name="Onboard" component={Onboard} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="DataCollect" component={DataCollect} />

          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Compare" component={Compare} />
          <Stack.Screen name="Settings" component={Settings} />

          {/* inner */}
          <Stack.Screen name="Persona" component={Persona} />
          <Stack.Screen name="ExplorePersona" component={ExplorePersona} />

          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="UniversityDetail" component={UniversityDetail} />
          <Stack.Screen name="MajorDetail" component={MajorDetail} />
          <Stack.Screen name="Wishlist" component={Wishlist} />
        </Stack.Navigator>
      </NavigationContainer>
    // </ProviderTotal>
  )
}
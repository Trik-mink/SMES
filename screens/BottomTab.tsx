import React from 'react'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Home from './Home'
import User from './User'
import Compare from './Compare'
import Settings from './Settings'
import { compareIcon, compareIconActive, homeIcon, homeIconActive, settingIcon, settingIconActive, userIcon, userIconActive } from '../assets/svgXml';
import { vh, vw } from '../assets/stylesheet';

export default function BottomTab() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            tabBar={props => <BottomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: vh(10),
                    alignContent: 'center',
                    alignItems: 'center',
                }
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? homeIconActive(vw(6), vw(6), true) : homeIcon(vw(6), vw(6), true)
                    )
                }} />
            <Tab.Screen name="User" component={User}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? userIconActive(vw(6), vw(6), true) : userIcon(vw(6), vw(6), true)
                    )
                }} />
            <Tab.Screen name="Compare" component={Compare}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? compareIconActive(vw(6), vw(6), true) : compareIcon(vw(6), vw(6), true)
                    )
                }} />
            <Tab.Screen name="Settings" component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? settingIconActive(vw(6), vw(6), true) : settingIcon(vw(6), vw(6), true)
                    )
                }} />
        </Tab.Navigator>
    )
}
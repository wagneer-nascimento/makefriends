
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from '../pages/Chats';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Message from '../pages/Message';

const Tab = createBottomTabNavigator();


export default function RoutesPrivate() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{ tabBarVisible: false }}
                name="Home" component={Home}
            ></Tab.Screen>
            <Tab.Screen
                options={{ tabBarVisible: false }}
                name="Chats" component={Chats}
            ></Tab.Screen>
            <Tab.Screen
                options={{ tabBarVisible: false }}
                name="Perfil" component={Perfil}
            ></Tab.Screen>
            <Tab.Screen
                options={{ tabBarVisible: false }}
                name="Message" component={Message}
            ></Tab.Screen>

        </Tab.Navigator>
    )
}

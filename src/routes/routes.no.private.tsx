import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Tab = createBottomTabNavigator();

export default function RoutesNoPrivate() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{ tabBarVisible: false }}
                name="SignIn" component={SignIn}
            ></Tab.Screen>
            <Tab.Screen
                options={{ tabBarVisible: false }}
                name="SignUp" component={SignUp}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

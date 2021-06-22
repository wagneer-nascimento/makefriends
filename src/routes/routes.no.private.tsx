import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

const NoPrivate = createStackNavigator();

export default function RoutesNoPrivate() {
    return (

        <NoPrivate.Navigator
            screenOptions={{
                headerShown: true,
            }}>

            <NoPrivate.Screen options={{
                headerTitle: "",
                headerTitleAlign: 'center',
                headerTitleStyle: { color: '#FFF', fontFamily: 'Roboto-Bold' },
                headerBackTitleVisible: false,
                headerTintColor: '#FFF',
                headerStyle: { backgroundColor: '#DDB0D5', },
            }} name="SignIn" component={SignIn} />

            <NoPrivate.Screen options={{
                headerTitle: "",
                headerTitleAlign: 'center',
                headerTitleStyle: { color: '#FFF', fontFamily: 'Roboto-Bold' },
                headerBackTitleVisible: false,
                headerTintColor: '#FFF',
                headerStyle: { backgroundColor: '#DDB0D5', },
            }} name="SignUp" component={SignUp} />

            <NoPrivate.Screen options={{
                headerTitle: "Esqueci minha senha",
                headerTitleAlign: 'center',
                headerTitleStyle: { color: '#FFF', fontFamily: 'Roboto-Bold' },
                headerBackTitleVisible: false,
                headerTintColor: '#FFF',
                headerStyle: { backgroundColor: '#DDB0D5', },
            }} name="ForgotPassword" component={ForgotPassword} />

        </NoPrivate.Navigator>


    )
}

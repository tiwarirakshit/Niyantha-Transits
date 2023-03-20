import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/user-registration-input/Login';
import Otp from '../screens/user-registration-input/Otp';
import Name from '../screens/user-registration-input/Name';
import Select from '../screens/user-registration-input/Select';

const Stack = createStackNavigator();

export const LoginStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'Login'} component={Login} />
                <Stack.Screen name={'Otp'} component={Otp} />
                <Stack.Screen name={'Name'} component={Name} />
                <Stack.Screen name={'Select'} component={Select} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
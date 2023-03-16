import Home from '../screens/home/Home';
import ShopRegistration from '../screens/home/ShopRegistration';
import ShopRegistrationDetails from '../screens/home/ShopRegistrationDetails';
import HomePage from '../screens/home/HomePage';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'ShopRegistration'} component={ShopRegistration} />
            <Stack.Screen name={'ShopRegistrationDetails'} component={ShopRegistrationDetails} />
            <Stack.Screen name={'HomePage'} component={HomePage} />
        </Stack.Navigator>
    );
}
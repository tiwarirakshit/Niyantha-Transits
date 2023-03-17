import { createStackNavigator } from '@react-navigation/stack';
import Category1 from '../screens/category/Category1';
import Category2 from '../screens/category/Category2';

const Stack = createStackNavigator();

export const CategoryStack = () => {
    return (
        <Stack.Navigator initialRouteName='Category1' screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'Category1'} component={Category1} />
        </Stack.Navigator>
    );
}
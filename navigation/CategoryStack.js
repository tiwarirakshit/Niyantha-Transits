import { createStackNavigator } from '@react-navigation/stack';
import SelectCategory from '../screens/categories/SelectCategory';

const Stack = createStackNavigator();

export const CategoryStack = () => {
    return (
        <Stack.Navigator initialRouteName='SelectCategory' screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'SelectCategory'} component={SelectCategory} />
        </Stack.Navigator>
    );
}
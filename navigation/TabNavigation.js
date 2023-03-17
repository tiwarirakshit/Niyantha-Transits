import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { AccountStack } from './AccountStack';
import { CartStack } from './CartStack';
import { CategoryStack } from './CategoryStack';
import { HomeStack } from './HomeStack';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'HomeStack'}
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          lazy: true,
          tabBarStyle: {
            position: 'absolute',
            elevation: 0,
            borderTopWidth: 0,
            height: 80,
            paddingHorizontal: 20,
          },
          tabBarBackground: () => (
            <View
              style={{
                backgroundColor: '#F8F8F8',
                height: '100%',
                width: '100%',
                alignSelf: 'center',
                elevation: 5,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}></View>
          ),
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={styles.tabBarIconContainer}>
                {focused ? (
                  <>
                    <Image
                      style={styles.tabBarIconImage}
                      source={require('../assets/home_active.png')}
                    />
                    <View
                      style={styles.tabBarIconDot}></View>
                  </>
                ) : (
                  <>
                    <Image
                      style={styles.tabBarIconImage}
                      source={require('../assets/home.png')}
                    />
                  </>
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="CategoryStack"
          component={CategoryStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={styles.tabBarIconContainer}>
                {focused ? (
                  <>
                    <Image
                      style={styles.tabBarIconImage}
                      source={require('../assets/category_active.png')}
                    />
                    <View
                      style={styles.tabBarIconDot}></View>
                  </>
                ) : (
                  <>
                    <Image
                      style={styles.tabBarIconImage}
                      source={require('../assets/category.png')}
                    />
                  </>
                )}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );

}
//moved common styles
const styles = StyleSheet.create({
  
  tabBarIconContainer: {
    alignItems: 'center',
    height: '90%',
    justifyContent: 'center',
  },

  tabBarIconImage: { 
    height: 30, 
    width: 30
  },

  tabBarIconDot: {
    height: 8,
    width: 8,
    backgroundColor: '#FAD202',
    borderRadius: 4,
    marginTop: 5,
  }
})

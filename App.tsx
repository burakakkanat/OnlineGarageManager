import React from 'react';
import { Image, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { WishlistContextProvider } from './src/context/WishlistContext';
import { VehicleContextProvider } from './src/context/VehicleContext';
import { GarageContextProvider } from './src/context/GarageContext';
import { NavigationContainer } from '@react-navigation/native';
import Wishlist from './src/pages/Wishlist';
import Vehicles from './src/pages/Vehicles';
import Garages from './src/pages/Garages';
import styles from './src/styles/Styles';

const Tab = createMaterialTopTabNavigator();

const JohnnyOnTheSpot = () => {
  return (
    <NavigationContainer>
      <GarageContextProvider>
        <VehicleContextProvider>
          <WishlistContextProvider>
            <View style={styles.containerHeaderMain}>
              <Image
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0
                }}
                source={require('./Images/headerBackground.png')}
                blurRadius={0}
              />
              <Text style={styles.headerMain}> Johnny-on-the-Spot  </Text>
            </View>
            <Tab.Navigator
              initialRouteName='Garages'
              screenOptions={{
                tabBarLabelStyle: { fontFamily: 'FOTNewRodin Pro B', fontSize: 12 },
                'tabBarActiveTintColor': '#FFFFFF',
                'tabBarInactiveTintColor': '#B3E5FC',
                'tabBarIndicatorStyle': { backgroundColor: '#FFFFFF' },
                'tabBarStyle': { backgroundColor: '#2D640F' },
              }}>
              <Tab.Screen name='Garages' component={Garages} />
              <Tab.Screen name='Vehicles' component={Vehicles} />
              <Tab.Screen name='Wishlist' component={Wishlist} />
            </Tab.Navigator>
          </WishlistContextProvider>
        </VehicleContextProvider>
      </GarageContextProvider>
    </NavigationContainer>
  );
};

export default JohnnyOnTheSpot;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Image, StyleSheet } from 'react-native'; // View ve Image'i import et
import { Home } from './screens/Home';
import { Profile } from './screens/Profile';
import { BackHandler } from 'react-native';

const Stack = createStackNavigator();

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://static-00.iconduck.com/assets.00/user-id-icon-512x410-6em2za3t.png' }}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    width: 40, 
    height: 40,
    marginLeft: 5,
  },
});

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="home" 
        component={Home} 
        options={{
          title: "My App",
          headerLeft: () => <Logo />,
          headerTitleStyle: {
              fontSize: 23,
          },
          headerLeftContainerStyle: { 
            marginLeft: 10, 
            marginTop: 17
          },
          headerTitleContainerStyle: { 
            marginLeft: 10, 
            marginTop: 20, 
          },
        }}
      />
      <Stack.Screen 
        name="profile" 
        component={Profile}
        options={{
            title:"Profil",
            headerShadowVisible: false,
        }}
         />
    </Stack.Navigator>
  );
};

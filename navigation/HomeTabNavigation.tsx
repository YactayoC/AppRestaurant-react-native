import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import { CartScreen, FavoritesScreen, HomeScreen, OffersScreen, ProfileScreen } from '../screens';

export type HomeTabParamList = {
  Home: undefined;
  Favorites: undefined;
  Offers: undefined;
  Cart: undefined;
  Profile: undefined;
};

const MainTab = createBottomTabNavigator<HomeTabParamList>();

export default function HomeTabNavigator() {
  return (
    <MainTab.Navigator initialRouteName="Home" screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.containerTab, { backgroundColor: focused ? 'black' : 'white', width: size + 20 }]}>
              <Foundation name="home" color={focused ? 'white' : 'black'} size={size} />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.containerTab, { backgroundColor: focused ? 'black' : 'white', width: size + 20 }]}>
              <Foundation name="heart" color={focused ? 'white' : 'black'} size={size} />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Offers"
        component={OffersScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.containerTab, { backgroundColor: focused ? 'black' : 'white', width: size + 20 }]}>
              <Foundation name="price-tag" color={focused ? 'white' : 'black'} size={size} />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.containerTab, { backgroundColor: focused ? 'black' : 'white', width: size + 20 }]}>
              <Foundation name="shopping-bag" color={focused ? 'white' : 'black'} size={size} />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.containerTab, { backgroundColor: focused ? 'black' : 'white', width: size + 20 }]}>
              <Foundation name="torso" color={focused ? 'white' : 'black'} size={size} />
            </View>
          ),
        }}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  containerTab: {
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

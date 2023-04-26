import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFa from 'react-native-vector-icons/FontAwesome5';

import { CartScreen, FavoritesScreen, HomeScreen, OffersScreen, ProfileScreen } from '../screens';

export type HomeTabParamList = {
  Home: undefined;
  Favorites: undefined;
  Offers: undefined;
  Cart: undefined;
  Profile: undefined;
};

interface ViewWithIconProps {
  focused: boolean;
  name: string;
  type: 'Material' | 'Fa';
}

const MainTab = createBottomTabNavigator<HomeTabParamList>();

function ViewWithIcon({ focused, name, type }: ViewWithIconProps) {
  return (
    <View style={[styles.containerTab, { backgroundColor: focused ? 'black' : 'white' }]}>
      {type == 'Material' ? (
        <MaterialIcon name={name} color={focused ? 'white' : 'black'} size={25} />
      ) : (
        <IconFa name={'shopping-bag'} color={focused ? 'white' : 'black'} size={23} />
      )}
    </View>
  );
}

export default function HomeTabNavigation() {
  return (
    <MainTab.Navigator initialRouteName="Home" screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <ViewWithIcon focused={focused} name="home" type="Material" />,
        }}
      />
      <MainTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => <ViewWithIcon focused={focused} name="heart" type="Material" />,
        }}
      />
      <MainTab.Screen
        name="Offers"
        component={OffersScreen}
        options={{
          tabBarIcon: ({ focused }) => <ViewWithIcon focused={focused} name="sale" type="Material" />,
        }}
      />
      <MainTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => <ViewWithIcon focused={focused} name="shopping-bag" type="Fa" />,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <ViewWithIcon focused={focused} name="account" type="Material" />,
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

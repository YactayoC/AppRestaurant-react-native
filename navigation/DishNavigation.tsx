import { createStackNavigator } from '@react-navigation/stack';
import { ProductScreen, ProductsCategoryScreen } from '../screens';

export type DishStackParamList = {
  Dish: undefined;
  DishesByCategory: undefined;
};

const InternalDish = createStackNavigator();

export default function DishNavigation() {
  return (
    <InternalDish.Navigator screenOptions={{ headerShown: false }}>
      <InternalDish.Screen name="Dish" component={ProductScreen} />
      <InternalDish.Screen name="DishesByCategory" component={ProductsCategoryScreen} />
    </InternalDish.Navigator>
  );
}

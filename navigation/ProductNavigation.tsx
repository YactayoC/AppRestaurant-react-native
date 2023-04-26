import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductScreen, ProductsCategoryScreen } from '../screens';
import { Product } from '../models';

export type ProductNativeStackParamList = {
  ProductDetail: {
    product: Product;
  };
  ProductsCategory: undefined;
};

export type ProductNativeStackNavigationProps = NativeStackNavigationProp<ProductNativeStackParamList>;
const InternalProduct = createNativeStackNavigator<ProductNativeStackParamList>();

export default function ProductNavigation() {
  return (
    <InternalProduct.Navigator screenOptions={{ headerShown: false }}>
      <InternalProduct.Screen name="ProductDetail" component={ProductScreen} />
      <InternalProduct.Screen name="ProductsCategory" component={ProductsCategoryScreen} />
    </InternalProduct.Navigator>
  );
}

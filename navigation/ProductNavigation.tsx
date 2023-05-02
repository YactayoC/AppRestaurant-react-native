import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductScreen, ProductsCategoryScreen, ProductsSearchScreen } from '../screens';
import { Product } from '../models';

export type ProductNativeStackParamList = {
  ProductDetail: {
    product: Product;
  };
  ProductsCategory: {
    category: string;
  };
  ProductsSearch: {
    valueSearch: string;
  };
};

export type ProductNativeStackNavigationProps = NativeStackNavigationProp<ProductNativeStackParamList>;
const InternalProduct = createNativeStackNavigator<ProductNativeStackParamList>();

export default function ProductNavigation() {
  return (
    <InternalProduct.Navigator screenOptions={{ headerShown: false }}>
      <InternalProduct.Screen name="ProductDetail" component={ProductScreen} />
      <InternalProduct.Screen name="ProductsCategory" component={ProductsCategoryScreen} />
      <InternalProduct.Screen name="ProductsSearch" component={ProductsSearchScreen} />
    </InternalProduct.Navigator>
  );
}

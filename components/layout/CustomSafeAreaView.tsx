import { StatusBar, SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../../models';

interface Props {
  children: React.ReactNode;
  styleCustom?: ViewStyle;
}

export default function CustomSafeAreaView({ children, styleCustom }: Props) {
  return (
    <SafeAreaView style={[styles.container, styleCustom]}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.black} />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray_background,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});

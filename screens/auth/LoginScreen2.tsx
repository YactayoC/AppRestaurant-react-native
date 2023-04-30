import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { RootNativeStackParamList } from '../../navigation/RootNavigation';
import { Colors } from '../../models';
import { CustomSafeAreaView } from '../../components';

export default function LoginScreen2() {
  const navigation = useNavigation<NavigationProp<RootNativeStackParamList, 'Auth'>>();

  return (
    <CustomSafeAreaView styleCustom={{ alignItems: 'center', rowGap: 30 }}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://www.zarla.com/images/zarla-el-dente-1x1-2400x2400-20220318-4rd9m7m9hjq7t63mhp8r.png?crop=1:1,smart&width=250&dpr=2',
        }}
      />
      <KeyboardAwareScrollView style={styles.form} showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.form_group}>
          <Text style={styles.form_group_label}>Email</Text>
          <TextInput style={styles.form_group_input} placeholder="email@gmail.com" />
        </View>
        <View style={styles.form_group}>
          <Text style={styles.form_group_label}>Contraseña</Text>
          <TextInput style={styles.form_group_input} placeholder="*****" secureTextEntry={true} />
        </View>
        <TouchableOpacity style={styles.form_button}>
          <Text style={styles.form_button_text}>Ingresar</Text>
        </TouchableOpacity>
        <View style={styles.options}>
          <Text style={styles.options_text} onPress={() => navigation.navigate('Auth', { screen: 'Register' })}>
            ¿No tienes una cuenta? Registrate
          </Text>
          <Text style={styles.options_text} onPress={() => navigation.navigate('Main', { screen: 'Home' })}>
            Ingresar sin usuario
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  form: {
    flexGrow: 1,
    width: '90%',
    marginBottom: 20,
  },
  form_group: {
    rowGap: 15,
    marginBottom: 25,
  },
  form_group_label: {
    fontSize: 16,
  },
  form_group_input: {
    borderWidth: 1,
    borderColor: Colors.gray_2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  form_button: {
    backgroundColor: Colors.black,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 25,
  },
  form_button_text: {
    color: Colors.text_white,
    fontSize: 16,
  },
  options: {
    rowGap: 15,
    alignItems: 'center',
  },
  options_text: {
    color: Colors.text_gray,
    fontSize: 14,
  },
});

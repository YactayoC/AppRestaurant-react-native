import { useForm, Controller } from 'react-hook-form';
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Colors } from '../../models/theme';
import { RootNativeStackParamList } from '../../navigation/RootNavigation';

interface FormData {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp<RootNativeStackParamList, 'Auth'>>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onLogin = (data: FormData) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Image style={styles.logo} source={require('../../assets/images/auth/logo-white.png')} />
      <View style={styles.form}>
        <View style={styles.form_group}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.form_input}
                placeholder="Correo"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.email && <Text style={styles.text_error}>Este campo es requerido</Text>}
        </View>
        <View style={styles.form_group}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.form_input}
                placeholder="Contraseña"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.password && <Text style={styles.text_error}>Este campo es requerido</Text>}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onLogin)}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <View style={styles.texts_options}>
          <Text style={styles.text_option} onPress={() => navigation.navigate('Auth', { screen: 'Register' })}>
            ¿No tienes cuenta? Registrate
          </Text>
          <Text style={styles.text_option} onPress={() => navigation.navigate('Main', { screen: 'Home' })}>
            Ingresar sin usuario
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  logo: {
    position: 'absolute',
    top: '15%',
    width: 315,
    height: 146,
    marginBottom: 30,
  },
  form: {
    width: '100%',
    height: '60%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    paddingVertical: 30,
    rowGap: 50,
  },
  form_group: {
    width: '85%',
    alignItems: 'center',
    position: 'relative',
  },
  form_input: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Colors.black,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: '100%',
    fontSize: 20,
  },
  button: {
    backgroundColor: Colors.black,
    color: Colors.white,
    borderRadius: 15,
    width: '85%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  texts_options: {
    alignItems: 'center',
    rowGap: 10,
  },
  text_option: {
    color: Colors.text_gray,
    fontSize: 17,
  },
  text_error: {
    position: 'absolute',
    color: Colors.text_error,
    fontSize: 15,
    bottom: -20,
    left: 0,
  },
});

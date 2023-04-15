import { StackNavigationProp } from '@react-navigation/stack';
import { useForm, Controller } from 'react-hook-form';
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../../navigation/AuthNavigation';

type RegisterScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

interface FormData {
  fullName: string;
  email: string;
  password: string;
}

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onRegister = (data: FormData) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Image style={styles.logo} source={require('../../assets/auth/logo-white.png')} />
      <View style={styles.form}>
        <View style={styles.form_group}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="fullName"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.form_input}
                placeholder="Nombres"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.fullName && <Text style={styles.text_error}>Este campo es requerido</Text>}
        </View>
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
          {errors.password && <Text style={styles.text_error}>Este campo es requerido</Text>}
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
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onRegister)}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <View style={styles.texts_options}>
          <Text style={styles.text_option} onPress={() => navigation.navigate('Login')}>
            ¿Ya tienes cuenta? Inicia sesion
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
    backgroundColor: '#000',
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
    backgroundColor: '#FFFFFF',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    paddingVertical: 30,
    rowGap: 40,
  },
  form_group: {
    width: '85%',
    alignItems: 'center',
    position: 'relative',
  },
  form_input: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: '100%',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    borderRadius: 15,
    width: '85%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  texts_options: {
    alignItems: 'center',
    rowGap: 10,
  },
  text_option: {
    color: '#5A5A5A',
    fontSize: 17,
  },
  text_error: {
    position: 'absolute',
    color: '#FF0000',
    fontSize: 15,
    bottom: -20,
    left: 0,
  },
});

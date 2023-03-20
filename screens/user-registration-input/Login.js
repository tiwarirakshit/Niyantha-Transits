import {
  Image, Keyboard, Pressable, StyleSheet, Text,
  TextInput,
  TouchableOpacity, View
} from 'react-native';
import { PERSON_ICON_URL_WHITE } from '../../constant';

const Login = ({ navigation }) => {


  async function sendOtpHandler() {
    navigation.push('Otp');
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <View style={styles.person}>
        <Image
          style={{ height: 50, width: 50 }}
          source={{
            uri: PERSON_ICON_URL_WHITE,
          }}
        />
      </View>
      <Text style={styles.title}>
        {'We need to send OTP to authenticate your number'}
      </Text>
        <View style={styles.inputContainer}>
          <TextInput onSubmitEditing={sendOtpHandler} keyboardType={'phone-pad'} style={styles.input} />
        </View>
      <Text style={styles.enter}>{'Enter your mobile number.'}</Text>
      <TouchableOpacity onPress={sendOtpHandler} style={styles.submit}>
        <Text style={styles.submitText}>{'Send OTP'}</Text>
      </TouchableOpacity>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },

  person: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFEC89',
    top: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    position: 'absolute',
    fontFamily: 'PoppinsSemiBold', //text bolder according to the design
    fontSize: 16,
    top: '35%',
    textAlign: 'center',
    color: '#282828',
    width: '90%',
  },

  inputContainer: {
    position: 'absolute',
    top: '45%',
    borderBottomColor: '#282828',
    borderBottomWidth: 3,
    marginBottom: 30,
    width: '50%',
    borderRadius: 1,
  },

  input: {
    fontSize: 22,
    paddingHorizontal: 10,
    textAlign: 'center',
  },

  enter: {
    position: 'absolute',
    top: '50%', //spacing adjusted according to the design
    color: '#B3B1B0',
  },

  submit: {
    position: 'absolute',
    top: '80%',
    backgroundColor: '#FAD202',
    height: 60,
    width: 140,
    right: '10%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default Login;

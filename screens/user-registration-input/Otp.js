import { useRef } from 'react';
import {
  Image, Keyboard, StyleSheet, Text,
  TextInput,
  TouchableOpacity, View,
  Pressable
} from 'react-native';
import { PERSON_ICON_URL_WHITE } from '../../constant';

const Otp = ({navigation}) => {

  //all input ref variable names changed
  const otpInputOne = useRef();
  const otpInputTwo = useRef();
  const otpInputThree = useRef();
  const otpInputFour = useRef();



  async function verifyHandler(){
    navigation.push('Name');
  }

  function handleChange(value, refAhead, refPrev){
    value? refAhead.current.focus(): refPrev.current.focus();
  }

  function onSubmit(refAhead){
    refAhead.current.focus()
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
        {'Enter the OTP sent to your mobile number.'}
      </Text>
      <View style={styles.inputSettle}>
        <View style={styles.inputContainer}>
          <TextInput onSubmitEditing={() => onSubmit(otpInputTwo)} selectionColor={'black'} ref={otpInputOne} maxLength={1} keyboardType={'number-pad'} style={styles.input} onChangeText={(value) => {handleChange(value, otpInputTwo, otpInputOne)}} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput onSubmitEditing={() => onSubmit(otpInputThree)} selectionColor={'black'} ref={otpInputTwo} maxLength={1} keyboardType={'number-pad'} style={styles.input} onChangeText={(value) => {handleChange(value, otpInputThree, otpInputOne)}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput onSubmitEditing={() => onSubmit(otpInputFour)} selectionColor={'black'} ref={otpInputThree} maxLength={1} keyboardType={'number-pad'} style={styles.input} onChangeText={(value) => {handleChange(value, otpInputFour, otpInputTwo)}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput selectionColor={'black'} onSubmitEditing={verifyHandler} ref={otpInputFour} maxLength={1} keyboardType={'number-pad'} style={styles.input} onChangeText={(value) => {handleChange(value, otpInputFour, otpInputThree)}} />
        </View>
      </View>
      <Text style={styles.resend}>{'Resend OTP'}</Text>
      <TouchableOpacity onPress={verifyHandler} style={styles.submit}>
        <Text style={styles.submitText}>{'Verify'}</Text>
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

  inputSettle: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    top: '42%',
    justifyContent: 'space-evenly'
  },

  inputContainer: {
    borderBottomColor: '#282828',
    borderBottomWidth: 3,
    marginBottom: 30,
    width: '16%',
    borderRadius: 1,
  },

  input: {
    fontSize: 22,
    paddingHorizontal: 10,
    textAlign: 'center',
  },

  resend: {
    position: 'absolute',
    top: '48%', //spacing adjusted according to the design
    fontFamily: 'PoppinsBold',
    fontSize: 16
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

export default Otp;
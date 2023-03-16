import {
  Image, Keyboard, Pressable, StyleSheet, Text,
  TextInput,
  TouchableOpacity, View
} from 'react-native';
import { PERSON_ICON_URL_WHITE } from '../../constant';

const Name = ({navigation}) => {
  
  async function selectHandler(){
    navigation.push('Select');
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
        {'Your name'}
      </Text>
      <View style={styles.inputNameContainer}>
        <TextInput onSubmitEditing={selectHandler} selectionColor={'#282828'} style={styles.input}/>
      </View>
      <Text style={styles.enter}>{'Enter your name'}</Text>
      <TouchableOpacity onPress={selectHandler} style={styles.submit}>
        <Text style={styles.submitText}>{'Next'}</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF' //background adjusted
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
    fontFamily: 'PoppinsSemiBold', // font adjusted
    fontSize: 16,
    top: '35%',
    textAlign: 'center',
    color: '#282828',
    width: '90%',
  },

  inputNameContainer: {
    position: 'absolute',
    top: '43%',
    borderWidth: 1.5,
    height: 60,
    width: '60%',
    borderColor: '#E5E4E3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  input: {
    fontSize: 20,
    fontFamily: 'Poppins',
    width: '100%',
    textAlign: 'center',
  },

  enter: {
    position: 'absolute',
    fontFamily: 'PoppinsSemiBold', // font adjusted
    top: '53%', // spacing adjusted
    color: '#8D8D8D',
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

export default Name;
import { useContext, useState } from 'react';
import {
  FlatList, Image, Keyboard, Pressable, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { PERSON_ICON_URL_WHITE } from '../../constant';
import { UserContext } from '../../contexts/UserContext';

const Select = () => {

  const { setIsUserLoggedIn } = useContext(UserContext);

  const category = [
    "Fish",
    "Meat",
    "Vegetables",
    "Fruits",
    "DryFruits",
    "Dairy",
  ]

  const [selected, setSelected] = useState(category[0])

  async function nextHandler() {
    {/* todo */}

    //for testing
    setIsUserLoggedIn(true);
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
        {'Select your category'}
      </Text>
      <FlatList style={styles.list} data={category} renderItem={({ item }) =>
        <TouchableOpacity onPress={() => { setSelected(item) }} style={[styles.item, selected === item ? { backgroundColor: '#FFF4BA' } : { backgroundColor: '#FFFFFF' }]}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      } numColumns={2} />
      <TouchableOpacity onPress={nextHandler} style={styles.submit}>
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
    fontFamily: 'PoppinsSemiBold', //text adjusted
    fontSize: 16,
    top: '35%',
    textAlign: 'center',
    color: '#282828',
    width: '90%',
  },

  list: {
    position: 'absolute',
    top: '43%'
  },

  item: {
    height: 90,
    width: 120,
    backgroundColor: '#FFF4BA',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10, //border radius adjusted
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E5E4E3'
  },

  text: {
    fontFamily: 'PoppinsSemiBold', //text adjusted
  },

  submit: {
    position: 'absolute',
    top: '85%',
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
export default Select;
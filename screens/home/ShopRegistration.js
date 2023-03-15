import { useContext, useState } from 'react';
import {
  Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import Search from '../../components/SearchBar';
import Title from '../../components/Title';
import { ShopContext } from '../../contexts/ShopContext';

const ShopRegistration = ({ navigation }) => {

  const [shop, setShop] = useState({ name: '', address: '', verified: false })

  const { setShops, shops } = useContext(ShopContext)

  function verifyShopHandler(shop) {
    setShops([...shops, shop]);
    navigation.navigate('Home');
  }

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInside}>
          <Title text={'Add Shop'} />
          <Search text={'Search'} />
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.middleText}>
          {'Your shop needs to be verified to place an order'}
        </Text>
        <View style={styles.addShopForm}>
          <View style={styles.addShopBtn}>
            <Text style={styles.addShopBtnText}>{'Shop 1'}</Text>
          </View>
          <View style={[styles.modalContainer, { height: 480 }]}>
            <View style={styles.shopDetailsContainer}>
              <View style={styles.shopInputBox}>
                <Text style={styles.shopName}>{'Shop name'}</Text>
                <TextInput
                  selectionColor={'#000000'}
                  style={[styles.shopInput, { marginLeft: '5%' }]}
                  onChangeText={(value) => setShop({ ...shop, name: value })}
                />
              </View>
              <View style={styles.shopInputBox}>
                <Text style={styles.shopName}>{'Shop Address'}</Text>
                <TextInput
                  selectionColor={'#000000'}
                  style={styles.shopInput}
                  onChangeText={(value) => setShop({ ...shop, address: value })}
                />
              </View>
              <View style={styles.mapContainer}>
                <Image
                  style={{ height: '100%' }}
                  source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/7fef/240a/2471a98b4d2b5421b628a64513d7e8c8?Expires=1678060800&Signature=OfKsrXQByR1q~1KjwEbhKWxVmQhXPgfQjOEdnwBAfld0rKXSoewzkH4gsFAPGmgoxDDy14ta2zq9TkXmM-~bpi8hvhh~4XQ7BQr6ZZtPIWcoUNqJUdissI1rKAMQHSQXJJM8lP6SLP4wxByokZoakLl44JwzwwbhZ7-96QK9QxFMq1A4kjGDtT4OFHG81vcgdl638T6v-gx5O9RCk~exlho~88vY~wzKAKtxKutAO30kpjRqA1SOkHYlxJN1wzNHtDSn8GyX8yXb8KW3k4OOSO1I~SCycrjDXQap6YKyeoVKCEUS2JkzF-jTQe44K5eFzSanalLfjXwyhiEJh19UTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                  }}
                />
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => verifyShopHandler(shop)} style={styles.submit}>
                  <Text style={styles.submitText}>{'Verify'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.submit}>
                  <Text style={styles.submitText}>{'Close'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 80,
  },

  header: {
    height: 140,
    backgroundColor: '#FDDE3E',
  },

  headerInside: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: '2%',
    justifyContent: 'space-evenly',
  },

  middle: {
    backgroundColor: '#FFE560',
    marginTop: 10,
    marginHorizontal: '2%',
    borderRadius: 10,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },

  middleText: {
    fontFamily: 'Poppins',
    marginTop: 5,
    color: '#282828',
    textAlign: 'center',
  },

  modalContainer: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: -5,
  },

  addShopForm: {
    flex: 1,
  },
  addShopBtn: {
    height: 60,
    width: '30%',
    backgroundColor: '#FFFFFF',
    marginHorizontal: '5%',
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addShopBtnText: {
    fontFamily: 'Poppins',
    color: '#8D8D8D',
  },

  shopDetailsContainer: {
    marginTop: 10,
  },

  shopInputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
  },

  shopInput: {
    alignItems: 'center',
    width: '70%',
    backgroundColor: 'rgba(184, 184, 184, 0.25)',
    height: 30,
    paddingHorizontal: '2%',
    color: '#000000',
    marginTop: 5,
  },

  shopName: {
    fontFamily: 'Poppins',
    color: '#282828',
  },

  mapContainer: {
    height: 250,
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  submit: {
    backgroundColor: '#FAD202',
    height: 60,
    width: 140,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
export default ShopRegistration;

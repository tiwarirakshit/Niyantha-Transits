import { useContext } from 'react';
import {
  FlatList, Image, ScrollView, StyleSheet, Text,
  TouchableOpacity, View
} from 'react-native';
import Search from '../../components/SearchBar';
import Title from '../../components/Title';
import { ShopContext } from '../../contexts/ShopContext';

const Home = ({ navigation }) => {

  const { shops } = useContext(ShopContext)

  const items = [
    {
      name: 'x',
      uri: 'https://s3-alpha-sig.figma.com/img/a290/a326/a7fbfadc7a86a36434d6198a8c590478?Expires=1678060800&Signature=a61XVm4lkHLUWA~qXFkP95J-KS~LDKmu0BRbEBDPUFEeW~oN9o29uDbYRfz4mViPDuMfBzIA1o4Hwxq47t3dk~l1WwWsi3s78fF8KxP1mok5iQWZ3PmgRe~y6qbNi3jsg8bHwopEOJMzj-07ii~dLH1f6DJ05VO5YnGgkpQRV8UeKHgJE~IfvUQcLwIRwCZXE~YLXOtIBp8Tpa7yB6tS7237yav0o7MHUF6Vou7JkGg~WL8Z7HuMtz1QT6cI9ZOydQW4sKBSW9tlZmCsCZkDRyZvJ2z9OGoWh-7BmRgvPQ2H7vRX0ILV7ulfVAbBgsdvkSIn3E-7CKYAEq58IeqVHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'y',
      uri: 'https://s3-alpha-sig.figma.com/img/bc9a/de6b/a67e423eda834b4f7a6f7b651578be92?Expires=1678060800&Signature=HW1K7Q5RY0uC5RGpITeUFRlWLwl8~IxvGVvjkkxuS98F~45fFJcTHTZB3CMA5uM7rwG0~CcbNLOAjHjlsDOjkh86Tk0ojvc2W-2gPMwFO1z~nM9FEu5rKqp9ZphP4pr-DaZ2qmsFqFoAt-40N9bE8LKr3sfYfnmVMCZDW~tIJAvZ3R-SIo9097VTLVHPrIwNnp7~wW5knp3RiGaJrmSoejBXliXhXypsJZV1WuRx5X6cGPTFFa4SbG1nbBpviNhs7SSi9HP7q-YkQAWZSdQSy3GRQjgi~qTc~UQddIjzA7I1wxIePXLad-vYeKZ36mg51dThKE01NzJrAkGQFEo0Gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'z',
      uri: 'https://s3-alpha-sig.figma.com/img/4f01/d10a/7538c27f3de5cfff9c89996e7e06ffda?Expires=1678060800&Signature=Rc46O1K-0L9RNexWHkPH1HESyla~q7RMnmD2G4QhJ0hbLo5KCC9yREQWlOTZT5V~n4SUvm5AMk9~vptMyECeWW8T8s~g2GWQ3VvbfCt5iQGOVpGFJXgWHihfqeUjEUOKMLL6uG-WAkM2GbpJIXrROtuJnX1PopvP~Tw6HedCBT-pDwaWfRKxWjJsU1vn1fnw9Vhs7jm9Cptc4~Pfo5EcuOZx8D0d7tqgarvAFiGR3VHYNZQRKWj1cz0nLvJ1DHlxwWjVvGfW5rlBL3Q~1rBCMSSB40kFCMuHXXmVC4OXybBFNoXrUtAPxMAtFBfP--ufnooxr4p1MayblM-5cfK-eQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];


  function shopInfoHandler(name, address, verified, index) {
    navigation.navigate('ShopRegistrationDetails', {
      name: name,
      address: address,
      verified: verified,
      index: index
    })
  }


  function addShopHandler() {
    navigation.navigate('ShopRegistration');
  }

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInside}>
          <Title onPress={addShopHandler} text={'Add Shop'} />
          <Search text={'Search'} />
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.middleText}>
          {'Your shop needs to be verified to place an order'}
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {shops.map((shop, index) => (
            <TouchableOpacity onPress={() => shopInfoHandler(shop.name, shop.address, shop.verified, index + 1)} key={index} style={styles.shopStatus}>
              <Text style={styles.shopStatusText}>
                {'Shop ' + (index + 1)}{shop.verified ? ' Verified' : ' Under Verification'}
              </Text>
            </TouchableOpacity>))}
          <TouchableOpacity onPress={addShopHandler} style={styles.btnContainer}>
            <Text style={{ textAlign: 'center', fontFamily: 'Poppins' }}>{'Add Shop'}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{'Popular Items'}</Text>
        <View style={styles.footerImages}>
          <FlatList data={items} numColumns={3} renderItem={({ item }) => <TouchableOpacity style={{alignItems: 'center', marginHorizontal: '3.3%'}}><View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item.uri }} />
          </View>
        <Text style={styles.imageText}>{item.name}</Text></TouchableOpacity>} />
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

  footer: {
    borderWidth: 1,
    marginTop: 20,
    borderColor: '#989898',
    borderRadius: 5,
    marginHorizontal: '2%',
    alignItems: 'center',
  },

  footerImages: {
    flexDirection: 'row',
    marginTop: 30,
  },

  footerText: {
    fontFamily: 'Poppins',
    marginTop: 10,
    color: '#282828',
  },

  imageContainer: {
    alignItems: 'center',
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },

  imageText: {
    marginTop: 8,
    fontFamily: 'Poppins',
  },

  shopStatus: {
    backgroundColor: '#FFFFFF',
    width: 100,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 10,
    marginHorizontal: 5
  },

  shopStatusText: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    color: '#8D8D8D',
    fontSize: 12
  },

  btnContainer: {
    backgroundColor: '#FAD202',
    width: 100,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 10,
    marginHorizontal: 5,
  },
});
export default Home;

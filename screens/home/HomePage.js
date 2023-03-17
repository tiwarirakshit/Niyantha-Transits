import { useState } from 'react';
import {
  FlatList, Image, ScrollView, StyleSheet, Text,
  TouchableOpacity, View
} from 'react-native';
import HomePageModal from '../../components/HomePageModal';
import Search from '../../components/SearchBar';
import Title from '../../components/Title';

const HomePage = ({navigation, route}) => {

  const [modal, setModal] = useState(false);

  function closeModal(){
    setModal(false);
  }

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

  const statuses = ['Order Placed', 'Delivered'];

  const orders = [
    {
      status: statuses[0],
      recentlyDelivered: false,
      day: null,
      quantity: '15Kg',
      price: '5600 Rs',
      order_date: '27th Monday',
    },
    {
      status: statuses[1],
      recentlyDelivered: true,
      day: 'sunday',
      quantity: '8Kg',
      price: '3600 Rs',
      order_date: '25th Sunday',
    },
    {
      status: statuses[1],
      recentlyDelivered: false,
      day: 'friday',
      quantity: '12Kg',
      price: '5660 Rs',
      order_date: '23rd Thursday',
    },
  ];

  const Step = ({ done, stepIndex }) => {
    const steps = ['Shop registration', 'Contact details', 'Address'];

    return (
      <View style={styles.stepsContainer}>
        <View style={styles.circle}>
          <Image
            source={
              done
                ? require('../../assets/check.png')
                : require('../../assets/minus.png')
            }
            style={styles.tick}
          />
        </View>
        <Text style={styles.stepsText}>{steps[stepIndex]}</Text>
      </View>
    );
  };

  const ArrowWithDash = () => (
    <View style={styles.dashedArrow}>
      <View style={styles.dash}></View>
      <Image source={require('../../assets/right.png')} style={styles.arrow} />
    </View>
  );

  function addShopHandler() {
    navigation.navigate('Home2');
  }

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInside}>
          <Title text={'Add Shop'} />
          <Search text={'Search'} />
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.middleText}>
          {'Once we Verify below items, you can place the order'}
        </Text>
        <View style={styles.middleWrapper}>
          <View style={styles.btnVerification}>
            <Text style={styles.btnVerificationText}>
              {'Shop '+route.params.index}{route.params.verified ? ' Verified' : ' Under Verification'}
            </Text>
          </View>
          <Step done={true} stepIndex={0} />
          <ArrowWithDash />
          <Step done={false} stepIndex={1} />
          <ArrowWithDash />
          <Step done={false} stepIndex={2} />
        </View>
        <TouchableOpacity
          onPress={addShopHandler}
          style={{
            backgroundColor: '#FAD202',
            height: 40,
            width: '30%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{ fontFamily: 'Poppins', color: '#FFFFFF' }}>
            {'Add Shop'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tommorrowDeliveryContainer}>
        <Text style={styles.deliveryText}>{'Tomorrows Delivery'}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#FAD202',
            height: 40,
            width: '30%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <Text style={{ fontFamily: 'Poppins', color: '#FFFFFF' }}>
            {'Order Now'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.outstandingContainer}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceOutText}>{'Outstanding Balance:'}</Text>
          <Text style={styles.balanceText}>{'20,000 Rs'}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: '45%',
              borderRadius: 10,
              borderColor: '#FF1010',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15,
              marginHorizontal: '3%',
              borderWidth: 0.5,
            }}>
            <Text
              style={{ fontFamily: 'Poppins', color: '#B3B1B0', fontSize: 10 }}>
              {'Account Statement'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: '35%',
              borderRadius: 10,
              borderColor: '#FF1010',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15,
              marginLeft: '10%',
              borderWidth: 0.5,
              backgroundColor: '#FF4D4F',
            }}>
            <Text
              style={{ fontFamily: 'Poppins', color: '#FFFFFF', fontSize: 16 }}>
              {'Pay'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          fontFamily: 'Poppins',
          color: '#282828',
          alignSelf: 'center',
          fontSize: 14,
          marginTop: 20,
        }}>
        {'Recent Orders'}
      </Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.horizontalScrollViewStyle}>
        {orders.map((order, index) => {
          return (
            <TouchableOpacity onPress={() => setModal(true)} key={index} style={styles.orderBox}>
              <Text
                style={[
                  styles.orderStatus,
                  order.status === 'Delivered'
                    ? { color: '#50A000' }
                    : { color: '#282828' },
                ]}>
                {order.status}
              </Text>
              {order.recentlyDelivered && (
                <Text
                  style={{
                    fontFamily: 'Poppins',
                    textAlign: 'center',
                    fontSize: 12,
                    color: '#FF1010',
                  }}>
                  {'Last ' + order.day + ' order'}
                </Text>
              )}
              <Text
                style={{
                  fontFamily: 'Poppins',
                  textAlign: 'center',
                  fontSize: 12,
                  color: '#8D8D8D',
                  marginTop: 20,
                }}>
                {'Quantity: ' + order.quantity}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  textAlign: 'center',
                  fontSize: 12,
                  color: '#8D8D8D',
                  marginTop: 2,
                }}>
                {'Price: ' + order.price}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  textAlign: 'center',
                  fontSize: 8,
                  color: '#8D8D8D',
                  marginTop: 2,
                }}>
                {'Order date: '}
                <Text style={{ fontFamily: 'PoppinsSemiBold' }}>
                  {order.order_date}
                </Text>
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Text style={styles.footerText}>{'Popular Items'}</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.footer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: item.uri }} />
              <Text style={styles.imageText}>{item.name}</Text>
            </View>
          </View>
        )}
        numColumns={3}
      />
    </ScrollView>
    {modal && <HomePageModal navigation={navigation} onPress={closeModal} currentStatus={'Delivered'}/>}
    </>
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
    fontSize: 12,
    textAlign: 'center',
  },

  middleWrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },

  btnVerification: {
    backgroundColor: '#FFFFFF',
    width: '30%',
    paddingHorizontal: 5,
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnVerificationText: {
    fontFamily: 'Poppins',
    color: '#8D8D8D',
    fontSize: 12,
    textAlign: 'center',
  },

  stepsContainer: {
    alignItems: 'center',
    width: '20%',
    marginHorizontal: '1%',
  },

  stepsText: {
    fontFamily: 'Poppins',
    color: '#000000',
    fontSize: 8,
    marginTop: 5,
    textAlign: 'center',
  },

  circle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tick: {
    height: 25,
    width: 25,
  },

  dashedArrow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '5%',
  },

  dash: {
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    width: '100%',
    height: 0,
    borderStyle: 'dashed',
  },

  arrow: {
    height: 10,
    width: 10,
  },

  tommorrowDeliveryContainer: {
    alignItems: 'center',
    marginTop: 10,
    width: '95%',
    borderColor: '#FAD202',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    height: 120,
  },

  deliveryText: {
    fontFamily: 'Poppins',
    marginTop: 10,
  },

  outstandingContainer: {
    marginTop: 10,
    width: '80%',
    borderColor: '#FAD202',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    height: 120,
  },

  balanceContainer: {
    marginHorizontal: '3%',
    marginTop: 10,
    flexDirection: 'row',
  },

  balanceOutText: {
    fontFamily: 'Poppins',
    marginTop: 10,
    fontSize: 12,
  },

  balanceText: {
    marginTop: 5,
    color: '#FF4D4F',
    fontSize: 18,
    marginHorizontal: '3%',
  },

  horizontalScrollViewStyle: {
    marginHorizontal: '3%',
  },

  orderBox: {
    borderColor: '#989898',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: 130,
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
  },

  orderStatus: {
    fontFamily: 'Poppins',
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },

  footer: {
    height: 130,
    borderWidth: 0.5,
    width: '27%',
    marginTop: 20,
    borderColor: '#989898',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: '3%',
  },


  footerText: {
    fontFamily: 'Poppins',
    marginTop: 10,
    color: '#282828',
    alignSelf: 'center',
  },

  imageContainer: {
    height: 80,
    width: '80%',
    marginHorizontal: 5,
    alignItems: 'center',
    marginTop: 10
  },

  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },

  imageText: {
    marginTop: 8,
    fontFamily: 'Poppins',
  },
});

export default HomePage;

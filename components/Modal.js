import { View, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Modal = ({ object, setModal }) => {

  const [prodSel, setProdSel] = useState(object.grades[0].count);
  const max = 15;

  return (
    <>
      <Pressable
        onPress={setModal}
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(179, 177, 176, 0.9)',
          height: '100%',
          width: '100%',
        }}>
      </Pressable>
      <View
        style={{
          height: '80%',
          width: '94%',
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: '30%',
            marginHorizontal: '3%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{ height: '90%', width: '55%' }}
            source={{ uri: object.image }}
          />
          <View style={{ width: '40%', marginHorizontal: '2%' }}>
            <Text
              style={{
                fontFamily: 'Poppins',
                color: '#282828',
                fontSize: 20,
                textAlign: 'center',
              }}>
              {object.name}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins',
                color: '#989898',
                fontSize: 16,
                textAlign: 'center',
                marginTop: 2,
              }}>
              {object.desc}
            </Text>
          </View>
        </View>
        <ScrollView style={{ marginBottom: 80 }}>
          {object.grades.map((grade, index) => {

            const [_quantity, setQuantity] = useState(grade.quantity);

            function subtractQuantity() {
              setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
            }

            function addQuantity() {
              setQuantity((prev) => (prev < max ? prev + 1 : max));
            }

            if (_quantity === 0) return <View key={index}></View>;

            return (
              <View
                key={index}
                style={[{
                  width: '90%',
                  borderWidth: 0.5,
                  borderColor: '#8D8D8D',
                  alignSelf: 'center',
                  marginTop: 20,
                  borderRadius: 10,
                  paddingVertical: 10,
                  paddingHorizontal: '5%'
                }, prodSel == grade.count ? { backgroundColor: '#FDF5C6' } : {}]}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins',
                      color: '#989898',
                      fontSize: 16,
                      textAlign: 'center',
                      marginTop: 2,
                      width: '30%',
                    }}>
                    {grade.count}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '40%',
                      paddingHorizontal: '5%',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}>
                    <Image
                      source={{ uri: object.image }}
                      style={{ height: 20, width: 20, borderRadius: 5 }}
                    />
                    <Image
                      source={{ uri: object.image }}
                      style={{ height: 20, width: 20, borderRadius: 5 }}
                    />
                    <Image
                      source={{ uri: object.image }}
                      style={{ height: 20, width: 20, borderRadius: 5 }}
                    />
                  </View>
                  <Text
                    style={[
                      {
                        fontFamily: 'Poppins',
                        color: '#989898',
                        fontSize: 16,
                        marginTop: 2,
                        width: '30%',
                      },
                      grade.best
                        ? { color: '#63BD2C' }
                        : { color: '#FC1A1A' },
                    ]}>
                    {'Grade: ' + grade.grade}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10
                  }}>
                  <View
                    style={{
                      height: 35,
                      borderWidth: 1,
                      borderColor: '#8D8D8D',
                      width: '30%',
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      flexDirection: 'row',
                      marginHorizontal: '2%',
                    }}>
                    <Text onPress={subtractQuantity} style={{ fontFamily: 'Fredoka', color: '#282828', paddingHorizontal: 5 }}>
                      {'-'}
                    </Text>
                    <Text style={{ fontFamily: 'Fredoka', color: '#282828' }}>
                      {_quantity + ' Kg'}
                    </Text>
                    <Text onPress={addQuantity} style={{ fontFamily: 'Fredoka', color: '#282828', paddingHorizontal: 5 }}>
                      {'+'}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Poppins',
                      color: '#282828',
                      fontSize: 16,
                      marginTop: 2,
                      width: '30%',
                      textAlign: 'center'
                    }}>
                    {grade.price + ' Rs'}
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: '30%',
                      borderRadius: 10,
                      borderColor: '#FFE560',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 0.5,
                      backgroundColor: '#FFE560',
                      paddingVertical: 5
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins',
                        color: '#FFFFFF',
                        fontSize: 14,
                        textAlign: 'center'
                      }}>
                      {'Add to cart'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </>
  )
}


export default Modal
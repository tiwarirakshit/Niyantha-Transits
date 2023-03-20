import { View, Text, Pressable, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const HomePageModal = ({ onPress, currentStatus, navigation }) => {

    const steps = ["Order Placed", "Loaded", "Warehouse", "Delivered"]

    const orders = [
        {
            item_name: 'Prawn',
            image: 'https://s3-alpha-sig.figma.com/img/bc9a/de6b/a67e423eda834b4f7a6f7b651578be92?Expires=1678665600&Signature=FsyQSS3zgxToJXXa5b8iKWoT9ve6xgZ~Sfeg-H0Wq~VnQQ68XADMtS4fDnwPzG6XOg3OLXfoIHQAg--CUZjhFq9GK-16aJps8asnDWsx1GMb-9cMxjkdjG3n0zI~z2epbtL344c8lsm6UaAv9OvXLw4xW0RTIXZeADqUyY--QRKPsZj6wowkbQKQjhFQ4N3ViEnJMnNNBLLo92ySUYtBXzQ2T4fOFqZfrZzf-cK-~MWfyCDRsVFwja3dJ3xtb~qu1RxH4a2ys1yovHzS9JEr9isWF8S5AwuVZ82tJ6SCEbbAF00m2Flc0m5Blm-zwgF0zE4vCRSamTTJOsYlVIL3nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            quantity: '5Kg',
            amount: 'Rs 2400',
            price: 'Rs 200/Kg',
            in_cart: false,
            available: true,
        },
        {
            item_name: 'Prawn',
            image: 'https://s3-alpha-sig.figma.com/img/bc9a/de6b/a67e423eda834b4f7a6f7b651578be92?Expires=1678665600&Signature=FsyQSS3zgxToJXXa5b8iKWoT9ve6xgZ~Sfeg-H0Wq~VnQQ68XADMtS4fDnwPzG6XOg3OLXfoIHQAg--CUZjhFq9GK-16aJps8asnDWsx1GMb-9cMxjkdjG3n0zI~z2epbtL344c8lsm6UaAv9OvXLw4xW0RTIXZeADqUyY--QRKPsZj6wowkbQKQjhFQ4N3ViEnJMnNNBLLo92ySUYtBXzQ2T4fOFqZfrZzf-cK-~MWfyCDRsVFwja3dJ3xtb~qu1RxH4a2ys1yovHzS9JEr9isWF8S5AwuVZ82tJ6SCEbbAF00m2Flc0m5Blm-zwgF0zE4vCRSamTTJOsYlVIL3nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            quantity: '5Kg',
            amount: 'Rs 2400',
            price: 'Rs 200/Kg',
            in_cart: true,
            available: true,
        },
        {
            item_name: 'Prawn',
            image: 'https://s3-alpha-sig.figma.com/img/bc9a/de6b/a67e423eda834b4f7a6f7b651578be92?Expires=1678665600&Signature=FsyQSS3zgxToJXXa5b8iKWoT9ve6xgZ~Sfeg-H0Wq~VnQQ68XADMtS4fDnwPzG6XOg3OLXfoIHQAg--CUZjhFq9GK-16aJps8asnDWsx1GMb-9cMxjkdjG3n0zI~z2epbtL344c8lsm6UaAv9OvXLw4xW0RTIXZeADqUyY--QRKPsZj6wowkbQKQjhFQ4N3ViEnJMnNNBLLo92ySUYtBXzQ2T4fOFqZfrZzf-cK-~MWfyCDRsVFwja3dJ3xtb~qu1RxH4a2ys1yovHzS9JEr9isWF8S5AwuVZ82tJ6SCEbbAF00m2Flc0m5Blm-zwgF0zE4vCRSamTTJOsYlVIL3nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            quantity: '5Kg',
            amount: 'Rs 2400',
            price: 'Rs 200/Kg',
            in_cart: false,
            available: false,
        },
    ]

    return (
        <>
            <Pressable
                onPress={onPress}
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
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between', width: '85%', alignSelf: 'center' }}>
                    <View style={{ borderWidth: 1, position: 'absolute', width: '82%', height: 0, bottom: '76%', left: '11%', right: 0, borderColor: '#8D8D8D', backgroundColor: '#8D8D8D' }} />
                    {
                        steps.map((step, index) => (
                            <View key={index} style={{ alignItems: 'center' }}>
                                <View style={[{ height: 10, width: 10, backgroundColor: '#FAD202', borderRadius: 10 }, currentStatus == step ? { height: 20, width: 20 } : {}]} />
                                <Text style={[{ fontSize: 10, marginTop: 10, fontFamily: 'Poppins' }, currentStatus == step ? { color: '#8D8D8D', fontFamily: 'PoppinsSemiBold' } : {}]}>{step}</Text>
                            </View>
                        ))
                    }
                </View>
                <ScrollView style={{ flex: 1 }}>
                    {
                        orders.map((order, index) => (
                            <View key={index} style={{ borderTopWidth: 1, borderTopColor: '#8D8D8D', width: '90%', alignSelf: 'center', marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginHorizontal: '5%', marginBottom: 10 }}>
                                    <Text style={{ marginTop: 5, fontSize: 14, fontFamily: 'Poppins', color: '#8D8D8D' }}>{order.item_name}</Text>
                                    <Image source={{ uri: order.image }} style={{ height: 40, marginTop: 5, width: 40, borderRadius: 10 }} />
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'Poppins', color: '#282828' }}>{order.quantity}</Text>
                                    <Text style={{ fontFamily: 'Poppins', color: '#8D8D8D' }}>{order.amount}</Text>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <View style={{ height: 30, backgroundColor: '#FFF4BA', paddingHorizontal: 3, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                        <Text>{order.price}</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    {order.available ? <TouchableOpacity style={[{ height: 40, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }, order.in_cart ? { borderWidth: 0.5, borderColor: '#8D8D8D' } : { backgroundColor: '#FFE560' }]}>
                                        <Text style={{ fontFamily: 'Poppins', fontSize: 10 }}>{order.in_cart ? 'Added to Cart' : 'Order'}</Text>
                                    </TouchableOpacity> : <><Text style={{ color: '#FF3421', fontFamily: 'Poppins' }}>{'Not Available'}</Text></>}
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
                <ScrollView style={{ flex: 1, marginBottom: 80, marginTop: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text
                            style={{
                                fontFamily: 'Poppins',
                                marginHorizontal: '6%',
                                marginTop: 5,
                                color: '#8D8D8D',
                            }}>
                            {'Sub Total'}
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Poppins',
                                marginHorizontal: '6%',
                                marginTop: 5,
                                color: '#8D8D8D',
                            }}>
                            {'Rs 2400.00'}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text
                            style={{
                                fontFamily: 'Poppins',
                                marginHorizontal: '6%',
                                marginTop: 5,
                                color: '#000000',
                                fontSize: 16
                            }}>
                            {'Total'}
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Poppins',
                                marginHorizontal: '6%',
                                marginTop: 5,
                                color: '#000000',
                                fontSize: 16
                            }}>
                            {'Rs 2000.00'}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text
                            style={{
                                fontFamily: 'Fredoka',
                                marginHorizontal: '6%',
                                marginTop: 5,
                                color: '#8D8D8D',
                                fontSize: 14
                            }}>
                            {'Payment Status:'}
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Fredoka',
                                marginHorizontal: '6%',
                                marginTop: 5,
                                color: '#8D8D8D',
                                fontSize: 14
                            }}>
                            {'Cash on delivery'}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                        <Text
                            style={{
                                fontFamily: 'Poppins',
                                marginHorizontal: '6%',
                                marginTop: 5,
                                color: '#8D8D8D',
                                fontSize: 12
                            }}>
                            {'Delivered on 15 September'}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: '6%', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('CustomerSupport')} style={{ height: 40, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 5, backgroundColor: '#989898' }}>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 12, color: '#FFFFFF', textAlign: 'center' }}>{'Customer support'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 20, paddingHorizontal: '6%' ,alignItems: 'center', justifyContent: 'center', borderRadius: 5, backgroundColor: '#BDEA0B' }}>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 12, color: '#3E3E3E', textAlign: 'center' }}>{'Check the cart'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 5, backgroundColor: '#FFE560' }}>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 12, color: '#3E3E3E', textAlign: 'center' }}>{'Pay Online'}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default HomePageModal
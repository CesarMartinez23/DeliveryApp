import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux'
import { SelectRestaurant } from '../slices/restaurantSlice'
import { emptyCart } from '../slices/cartSlice'

export default function DeliveryScreen() {

  const restaurant = useSelector(SelectRestaurant)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const cancelOrder = () => {
    navigation.navigate('Home')
    dispatch(emptyCart())
  }
  return (
    <View className="flex-1">
      {/* Map */}
      <MapView initialRegion={{ latitude: restaurant.lat, longitude: restaurant.lng, latitudeDelta: 0.01, longitudeDelta: 0.01 }} className="flex-1" mapType='standard' >
        <Marker coordinate={{ latitude: restaurant.lat, longitude: restaurant.lng }} title={restaurant.name} description={restaurant.description} pinColor={themeColors.bgColor(1)} />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival</Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">Your Order is own its way !</Text>
          </View>
          <Image className="w-24 h-24" source={require('../assets/images/deliverygoOrden2.gif')} />
        </View>
        <View className="p-2 flex-row items-center justify-between rounded-full my-5 mx-2" style={{ backgroundColor: themeColors.bgColor(0.9) }}>
          <View className="p-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
            <Image className="h-16 w-16 rounded-full" source={require('../assets/images/deliveryGuy.png')} />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Harold Santos</Text>
            <Text className="font-semibold text-white">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity onPress={() => navigation.navigate('')} className="bg-white p-2 rounded-full">
              <Icon.Phone fill={themeColors.bgColor(1)} strokeWidth={1} stroke={themeColors.bgColor(1)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={cancelOrder} className="bg-white p-2 rounded-full">
              <Icon.X strokeWidth={5} stroke={"red"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
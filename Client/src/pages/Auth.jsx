import { useRoute } from "@react-navigation/native"
import { Button, Input } from "@rneui/themed"
import React from "react"
import { Text, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TAB_ROUTE } from "../utils/consts"
import { useState } from "react"
import { registration, login } from "../api/userApi"
import { useContext } from "react"
import { Context } from '../../App';
import * as Location from 'expo-location';
import { useEffect } from "react"
import { getCountry } from "react-native-localize"



function Auth({ navigation }) {
  const route = useRoute()
  const isRegistration = route.name === REGISTRATION_ROUTE
  const { user } = useContext(Context)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()
  const [country, setCountry] = useState('')
  const [showLocationButton, setShowLocationButton] = useState(true);

  const click = async () => {
    let candidate
    if (isRegistration) {
      candidate = await registration(email, password, name)
    } else {
      candidate = await login(email, password)
    }

    if (candidate) {
      user.setIsAuth(true)
      user.setUser(candidate)
      navigation.navigate(HOME_ROUTE)
    }
  }

  const getCountry = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.log('Please grant location permissions');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      const reverseGeocode = await Location.reverseGeocodeAsync({
        longitude: currentLocation.coords.longitude,
        latitude: currentLocation.coords.latitude,
      });

      if (reverseGeocode && reverseGeocode.length > 0) {
        setCountry(reverseGeocode[0].country);
        setShowLocationButton(false); // Скрываем кнопку после успешного получения страны
      }
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 15, height: '100%' }}>
        <Input containerStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, paddingTop: 5 }} placeholder="Enter your username or email..." onChangeText={text => setEmail(text)} />
        <Input containerStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, paddingTop: 5, marginTop: 20 }} placeholder="Enter password..." onChangeText={text => setPassword(text)} />
        {isRegistration ? <Input containerStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, paddingTop: 5, marginTop: 20 }} placeholder="Enter your name and surname..." onChangeText={text => setName(text)} /> : null}

        {showLocationButton ? (
          <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "100%", padding: 15 }}>
            <Text>Country: {country}</Text>
            <Button
              title="Get location"
              buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 15,
                marginHorizontal: 0,
                padding: 5,
              }}
              titleStyle={{ fontSize: 16 }}
              onPress={() => getCountry()}
            />
          </View>
        ) : (
          <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "100%", padding: 15 }}>
            <Text>Country: {country}</Text>
          </View>
        )}


        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 20 }}>
          <Text>{isRegistration ? "Already have an account?" : "Dont have an account?"}</Text>
          <Button title="Click here..." buttonStyle={{
            backgroundColor: 'rgba(111, 202, 186, 1)',
            borderRadius: 15,
            marginHorizontal: 20,
            padding: 10
          }} titleStyle={{ fontSize: 16 }}
            onPress={isRegistration ? () => navigation.navigate(LOGIN_ROUTE) : () => navigation.navigate(REGISTRATION_ROUTE)} />
        </View>


        <View style={{ position: 'absolute', bottom: 30, width: "90%" }}>
          <Button title={isRegistration ? "Register" : "Login"} buttonStyle={{ backgroundColor: 'rgba(111, 202, 186, 1)', borderRadius: 15, padding: 10 }} onPress={click} />
        </View>
      </View>
    </SafeAreaProvider>
  )
}

export default Auth
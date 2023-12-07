import { useRoute } from "@react-navigation/native"
import { Button, Input } from "@rneui/themed"
import React from "react"
import { Text, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TAB_ROUTE } from "../utils/consts"
import { useState } from "react"
import { registration, login } from "../api/userApi"
import { useContext } from "react"
import { Context } from "../../index"

const Auth = ({ navigation }) => {
  const route = useRoute()
  const isRegistration = route.name === REGISTRATION_ROUTE
  const { user } = useContext(Context)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()

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

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 15, height: '100%' }}>
        <Input containerStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, paddingTop: 5 }} placeholder="Enter your username or email..." onChangeText={text => setEmail(text)} />
        <Input containerStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, paddingTop: 5, marginTop: 20 }} placeholder="Enter password..." onChangeText={text => setPassword(text)} />
        {isRegistration ? <Input containerStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, paddingTop: 5, marginTop: 20 }} placeholder="Enter your name and surname..." onChangeText={text => setName(text)} /> : null}

        <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "100%", padding: 10 }}>
          <Text>Country</Text>
          <Text style={{ textDecorationLine: 'underline', color: "blue" }}>Poland</Text>
        </View>

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
    </SafeAreaProvider >
  )
}

export default Auth
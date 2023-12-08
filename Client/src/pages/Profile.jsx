import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import img from '../../assets/img.png'
import flg from '../../assets/flg.jpg'
import { Button, Image } from "react-native-elements";
import { useContext } from "react";
import { Context } from "../../index";
import { Card } from "react-native-elements"
import { ADD_RECEPT_ROUTE, LOGIN_ROUTE, RECEPT_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const Profile = observer(({ navigation }) => {
  const { recept } = useContext(Context)
  const { user } = useContext(Context)

  const pressReceptItem = (receptId) => {
    navigation.navigate(RECEPT_ROUTE, { receptId })
  }

  const click = () => {
    if (user._isAuth === true) {
      return navigation.navigate(ADD_RECEPT_ROUTE)
    }

    navigation.navigate(LOGIN_ROUTE)
  }
  return (
    <View style={{ flex: 1, padding: 30 }}>
      {user._isAuth ?
        <>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 40, borderBottomWidth: 1, paddingBottom: 20, marginBottom: 10 }}>
            <Image source={img} style={{ width: 70, height: 70 }} />
            <View style={{ marginTop: 3 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Adrianna Swistak</Text>
              <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', gap: 40 }}>
                <Text >Recepts count - 2</Text>
                <Image source={flg} style={{ width: 40, height: 30, marginTop: -2 }} />
              </View>
            </View>
          </View>

          <Button title="Add new Recept" onPress={click} />

          <ScrollView style={{ marginTop: 30 }}>
            {recept._recepts.map((recept) => (
              <TouchableOpacity key={recept.id} onPress={() => pressReceptItem(recept.id)}>
                <Card containerStyle={profileStyles.cardItem}>
                  <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <Card.Image style={profileStyles.cardImage} source={{ uri: recept.img }} />
                    <View style={{ flex: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <Text style={{ fontWeight: 'bold' }}>{recept.receptName}</Text>
                      <Text style={{ textDecorationLine: 'underline', color: '#33A6DC' }}>Click here to check information</Text>
                    </View>
                  </View>
                </Card >
              </TouchableOpacity>
            ))}
          </ScrollView >
        </>
        : <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Button title="Create account or sign in.." type="outline" onPress={() => navigation.navigate(LOGIN_ROUTE)} />
        </View>
      }
    </View >
  )
})

const profileStyles = StyleSheet.create({
  cardItem: {
    display: 'flex',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 20,
    height: 80,
    backgroundColor: '#D3D3D3'
  },

  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 20
  }
})

export default Profile
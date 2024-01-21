import { Card } from "@rneui/base";
import React, { useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Context } from '../../App';
import { observer } from "mobx-react-lite";
import { RECEPT_ROUTE } from "../utils/consts";

const Liked = observer(({ navigation }) => {
  const { recept } = useContext(Context)

  const pressReceptItem = (receptId) => {
    navigation.navigate(RECEPT_ROUTE, { receptId })
  }

  return (
    <ScrollView style={{ marginTop: 30 }}>
      {recept._liked.map((recept) => (
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


export default Liked
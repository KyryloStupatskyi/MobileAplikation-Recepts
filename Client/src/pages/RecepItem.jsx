import React, { useEffect } from "react";
import { useContext } from "react";
import { View, Text, ScrollView } from "react-native"
import { Context } from "../../index";
import { Button, Image } from "react-native-elements";
import { useState } from "react";
import Comments from "./Comments";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { observer } from "mobx-react-lite";
import { getOneRecept } from "../api/receptApi";


const RecepItem = observer(({ route }) => {
  const { recept } = useContext(Context)
  const { receptId } = route.params
  const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(false);
  const [like, setLike] = useState("heart-outline")
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    getOneRecept(receptId).then(data => {
      setData(data)
      setLoading(true)
    })
  }, [])


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Ionicons name={like} size={25} style={{ marginRight: 20 }} onPress={likeFunc} />
        )
      }
    })
  })

  const setIsLiked = () => {
    like === "heart-outline" ? setLike("heart") : setLike("heart-outline")
  }

  const likeFunc = () => {
    setIsLiked()
    recept.setLiked(data)
  }

  if (!loading || !data) {
    return <Text>Page loading..</Text>;
  }

  return (
    <ScrollView style={{ padding: 10 }}>
      <Image source={{ uri: data.img }} style={{ width: "100%", height: 250, resizeMode: 'contain', borderRadius: 20 }} />
      <Button title="Press here to check users opinions" type="outline" style={{ marginTop: 10 }} buttonStyle={{ borderRadius: 20 }} onPress={() => setModalVisible(true)} />

      <View style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, letterSpacing: 2, marginBottom: 20 }}>Ingridents</Text>
        {data.ingredients.map(({ name, amount }) => (
          <View key={name} style={{ display: 'flex', flexDirection: 'row' }}>
            <Text>{name} -</Text>
            <Text> {amount}</Text>
          </View>
        ))}
      </View>

      <View style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, letterSpacing: 2 }}>Cooking</Text>

        <View style={{ padding: 30 }}>
          {data.cooking.map(({ step, description }) => (
            <View style={{ display: 'flex', alignItems: 'center' }} key={step}>
              <Text style={{ fontWeight: 'bold', letterSpacing: 2, marginBottom: 10 }}>{step}</Text>
              <Text style={{ marginBottom: 20 }}>{description}</Text>
            </View>
          ))}
          <Comments modalVisible={modalVisible} setModalVisible={setModalVisible} receptId={receptId} />
        </View>
      </View>
    </ScrollView>
  )
}
)
export default RecepItem
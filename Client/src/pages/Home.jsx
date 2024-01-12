import { useContext, useEffect, useState } from "react"
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { Context } from "../../index"
import { Card } from "react-native-elements"
import { RECEPT_ROUTE } from "../utils/consts"
import { getRecepts } from "../api/receptApi"
import { observer } from "mobx-react-lite"

const Home = observer(({ navigation }) => {
  const { recept } = useContext(Context)

  const [receptItem, setRecept] = useState()
  const [loading, setLoading] = useState(false)

  const pressReceptItem = (receptId) => {
    navigation.navigate(RECEPT_ROUTE, { receptId })
  }

  useEffect(() => {
    getRecepts().then(data => {
      setRecept(data)
      setLoading(true);
      recept.setRemoved(false)
    })
  }, [recept._recepts.length, recept._isRemoved])

  if (!loading) {
    return (
      <Text>Loading..</Text>
    )
  }

  return (
    <ScrollView>
      {receptItem.map((recept) => (
        <TouchableOpacity key={recept.id} onPress={() => { pressReceptItem(recept.id) }}>
          <Card containerStyle={{ padding: 0, borderRadius: 20 }}>
            <Card.Image
              style={{ width: "100%", height: 250, borderRadius: 20 }}
              source={{
                uri: recept.img
              }}
            />
            <Card.Title style={homeStyles.title}>{recept.receptName}</Card.Title>
            <View style={homeStyles.overlay} />
          </Card >
        </TouchableOpacity>
      ))}
    </ScrollView >
  )
})

const homeStyles = StyleSheet.create({
  overlay: {
    width: "100%",
    height: 250,
    borderRadius: 20,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: "rgba(108, 122, 137, 0.7)"
  },

  title: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    color: 'white',
    zIndex: 2,
    fontSize: 24,
    letterSpacing: 2
  }
})

export default Home
import { useContext } from "react"
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { Context } from "../../index"
import { Card } from "react-native-elements"
import { RECEPT_ROUTE } from "../utils/consts"

const Home = ({ navigation }) => {
  const pressReceptItem = (receptId) => {
    navigation.navigate(RECEPT_ROUTE, { receptId })
  }
  const { recept } = useContext(Context)
  return (
    <ScrollView>
      {recept._recepts.map((recept) => (
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
}

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
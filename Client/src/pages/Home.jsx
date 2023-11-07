import { useContext } from "react"
import { StyleSheet, View } from "react-native"
import { Context } from "../../index"
import { Card } from "react-native-elements"

const Home = () => {
  const { recept } = useContext(Context)
  return (
    <View>
      {recept._recepts.map((recept) => (
        <Card key={recept.id} containerStyle={{ padding: 0, borderRadius: 20 }}>
          <Card.Image
            style={{ width: "100%", height: 250, borderRadius: 20 }}
            source={{
              uri: recept.img
            }}
          />
          <Card.Title style={homeStyles.title}>{recept.receptName}</Card.Title>
          <View style={homeStyles.overlay} />
        </Card >
      ))}
    </View >
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
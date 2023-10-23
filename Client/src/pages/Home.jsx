import { Button } from "react-native"
import { View, Text } from "react-native"

const Home = ({ navigation }) => {
  const loadScene = () => {
    navigation.navigate('some')
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Change ur Page" onPress={loadScene} />
    </View>
  )
}

export default Home
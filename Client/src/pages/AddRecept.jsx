import { Input } from '@rneui/themed';
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, ScrollView } from 'react-native';
import { postData } from '../api/receptApi';
import { HOME_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '../../App';

const AddRecept = observer(({ navigation }) => {
  const { user } = useContext(Context)
  const { recept } = useContext(Context)

  const [receptName, setReceptName] = useState('')
  const [url, setUrl] = useState('')
  const [data, setData] = useState({ ingredients: [] })
  const [cooking, setCooking] = useState({ cooking: [] })

  const addIngridientField = () => {
    setData((prevState) => ({
      ...prevState,
      ingredients: [...prevState.ingredients, { name: "", amount: "" }]
    }))
  }

  const addCookingField = () => {
    setCooking((prevState) => ({
      ...prevState,
      cooking: [...prevState.cooking, { step: "", description: "" }]
    }))
  }

  const addCookingData = (index, name, value) => {
    setCooking(prevState => {
      const update = [...prevState.cooking]
      update[index] = { ...update[index], [name]: value }
      return { ...prevState, cooking: update }
    })
  }

  const addIngridientsToData = (index, name, value) => {
    setData(prevState => {
      const update = [...prevState.ingredients]
      update[index] = { ...update[index], [name]: value }
      return { ...prevState, ingredients: update }
    })
  }

  const sendData = async () => {
    const receptItem = await postData(receptName, url, data, cooking, user._user.id)
    recept.addRecept(receptItem)
    navigation.navigate(HOME_ROUTE)
  }

  return (
    <View style={{ flex: 1, height: "100%", padding: 15, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <ScrollView style={{ flex: 1, height: '100%' }}>
        <Input containerStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, paddingTop: 5, marginBottom: 20 }} placeholder='Put ur recept name or recept title' onChangeText={text => setReceptName(text)} />
        <Input containerStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, paddingTop: 5, marginBottom: 20 }} placeholder='Put recept image url' onChangeText={text => setUrl(text)} />
        <Text style={{ fontSize: 20, marginBottom: 30 }}>Ingridients</Text>

        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FlatList
            data={data.ingredients}
            renderItem={({ item, index }) => (
              <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <Input containerStyle={{ width: '60%', fontSize: 10 }} placeholder='Ingridient name' onChangeText={value => addIngridientsToData(index, 'name', value)} />
                <Input containerStyle={{ width: '30%' }} placeholder='Amount' onChangeText={value => addIngridientsToData(index, 'amount', value)} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <Text style={{ fontSize: 20, marginBottom: 10 }}>Cooking</Text>

        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FlatList
            data={cooking.cooking}
            renderItem={({ item, index }) => (
              <View style={{ marginTop: 20 }}>
                <Input containerStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, paddingTop: 5, marginBottom: 20 }} placeholder='Cooking step' onChangeText={value => addCookingData(index, 'step', value)} />
                <Input containerStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, paddingTop: 5, marginBottom: 20 }} placeholder='Description' onChangeText={value => addCookingData(index, 'description', value)} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>


      <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Button title="Add Ingredient" onPress={addIngridientField} />
        <Button title="Add Cooking Field" onPress={addCookingField} />
        <Button title="Post recept" onPress={sendData} />
      </View>
    </View >
  );
})

export default AddRecept;

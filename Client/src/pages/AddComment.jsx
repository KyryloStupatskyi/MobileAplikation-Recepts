import { Input } from "@rneui/base";
import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { Context } from "../../index";
import { Button } from "@rneui/themed";
import { addComment } from "../api/userApi";
import { HOME_ROUTE } from "../utils/consts";

const AddComment = ({ route, navigation }) => {
  const { user } = useContext(Context)
  const [name, setName] = useState(user._user.name)
  const [comments, setComments] = useState('');
  const { receptId } = route.params

  const click = async () => {
    addComment(comments, receptId, user._user.id)
    navigation.navigate(HOME_ROUTE)
  }

  return (
    <View style={{ flex: 1, height: "100%", padding: 15, height: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <View>
        <Input containerStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, paddingTop: 5, marginBottom: 20 }} value={name} onChangeText={text => setName(text)} />
        <Input
          containerStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, marginBottom: 10, paddingTop: 5 }}
          value={comments}
          onChangeText={text => setComments(text)}
          placeholder="Put your comment here.."
          multiline={true}
          rows={10}
        />
      </View>
      <Button title="Add a comment" containerStyle={{ borderRadius: 10 }} onPress={click} />
    </View>
  );
}

export default AddComment;
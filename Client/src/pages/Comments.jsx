import React, { useContext, useState } from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { Context } from '../../App';
import { Ionicons } from '@expo/vector-icons';
import { Button } from "react-native-elements";
import { ADD_COMMENTS_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { getComments, userById } from "../api/userApi";

const Comments = observer(({ modalVisible, setModalVisible, receptId }) => {
  const { user } = useContext(Context)
  const navigation = useNavigation()

  const [commentsLoaded, setCommentsLoaded] = useState(false);

  useEffect(() => {
    getComments(receptId).then(data => {
      if (Array.isArray(data)) {
        user.setComments(data);
        setCommentsLoaded(true);
      }
    })
  }, [receptId])

  if (!commentsLoaded) {
    return <Text>Loading...</Text>;
  }

  const addComment = () => {
    if (user._isAuth === false) {
      setModalVisible(false)
      return navigation.navigate(LOGIN_ROUTE)
    }
    setModalVisible(false)
    navigation.navigate(ADD_COMMENTS_ROUTE, { receptId })
  }

  return (
    <Modal animationType="fade" visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)} transparent={true} >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.modalHeader} onPress={() => setModalVisible(false)}>
            <Ionicons name="arrow-back-outline" size={19} style={{ marginBottom: -3 }} />
            <Text style={{ fontSize: 17, fontWeight: 600 }}>Back</Text>
          </TouchableOpacity>

          <ScrollView>
            {user._comments.map(({ id, comments, user }) => (
              <View key={id} style={{ marginBottom: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 20, marginBottom: 10 }}>
                  <Ionicons name="person-outline" size={20} />
                  <Text style={{ fontWeight: 'bold' }}>{user.name}</Text>
                </View>
                <Text>{comments}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={{ width: '100%', marginTop: 10 }}>
            <Button title="Add a comment" type="outline" buttonStyle={{ borderRadius: 20 }} onPress={addComment} titleStyle={{ fontSize: 14 }} />
          </View>
        </View>
      </View>
    </Modal >
  )
})

const styles = StyleSheet.create({
  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    height: 20,
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#D8D8D8',
    paddingBottom: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: 600,
    width: 'calc(100% - 40px)',
  }
})

export default Comments
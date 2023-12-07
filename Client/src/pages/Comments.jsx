import React, { useContext } from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { Context } from "../../index";
import { Ionicons } from '@expo/vector-icons';
import { Button } from "react-native-elements";
import { ADD_COMMENTS_ROUTE } from "../utils/consts";
import { useNavigation } from "@react-navigation/native";

const Comments = ({ modalVisible, setModalVisible }) => {
  const { user } = useContext(Context)
  const navigation = useNavigation()
  return (
    <Modal animationType="fade" visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)} transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.modalHeader} onPress={() => setModalVisible(false)}>
            <Ionicons name="arrow-back-outline" size={19} style={{ marginBottom: -3 }} />
            <Text style={{ fontSize: 17, fontWeight: 600 }}>Back</Text>
          </TouchableOpacity>
          <ScrollView>
            {user._comments.map(({ id, comment, name }) => (
              <View key={id} style={{ marginBottom: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                  <Ionicons name="person-outline" size={20} />
                  <Text style={{ fontWeight: 'bold' }}>{name}</Text>
                </View>
                <Text>{comment}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={{ width: '100%', marginTop: 10 }}>
            <Button title="Add a comment" type="outline" buttonStyle={{ borderRadius: 20 }} onPress={() => { setModalVisible(false), navigation.navigate(ADD_COMMENTS_ROUTE) }} titleStyle={{ fontSize: 14 }} />
          </View>
        </View>
      </View>
    </Modal >
  )
}

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
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: 600
  }
})

export default Comments
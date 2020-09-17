import React, { useState } from 'react'
import { Modal, View, Image, ScrollView, ImageBackground, Alert, ActivityIndicator } from 'react-native'
import { Text, Button, CheckBox, Container, Content, Header, Title, Icon, Right, Textarea, Form, Input, Label, Left } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import { wp } from '../../../../../../common/constants/_Mixins'
import styles from './AddQuestionModalStyles'
import Item from '../../../../Home/Components/InquiryModal/Item/Item'
import { discussion as discussionActions } from '../../../../../../services/Discussion//DiscussionActions'

const AddQuestionModal = ({ visible, setVisible }) => {

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const { loading } = useSelector(state => state.discussion)
  const dispatch = useDispatch()

  const { create } = discussionActions

  const handleQuestion = () => {
    dispatch(create({ title, description }, callback))
  }

  const callback = () => {
    Alert.alert("Pregunta creada correctamente ✅", '', [{ text: "OK", onPress: () => setVisible(false) }])
    setDescription()
    setTitle()
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={{ flex: 1, backgroundColor: "#000000AA", alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ backgroundColor: "#ACE6A5", flexDirection: 'column', padding: wp(3), borderRadius: wp(5), width: wp(90) }}>
          <View style={styles.header__container}>
            <Left style={{ flex: 1 }} />
            <Text style={styles.header__title}>Crear pregunta</Text>
            <Button transparent style={{ flex: 1, justifyContent: 'flex-end' }} onPress={() => setVisible(false)}>
              <Icon name='close' style={{ color: "#555" }} />
            </Button>
          </View>
          <View>
            <View style={{ marginBottom: wp(4), backgroundColor: '#FFF', padding: wp(2), borderRadius: wp(5), elevation: 5 }}>
              <Text style={{ fontWeight: 'bold' }}>
                Título
              </Text>
              <View style={{ marginHorizontal: wp(2), marginTop: wp(2), marginBottom: wp(2) }}>
                <Form>
                  <Textarea
                    value={title}
                    onChangeText={text => setTitle(text)}
                    rowSpan={2}
                    maxLength={200}
                    style={{ backgroundColor: '#00000011', borderRadius: 5, textAlignVertical: 'center' }}
                  />
                </Form>
              </View>
            </View>
            <View style={{ marginBottom: wp(4), backgroundColor: '#FFF', padding: wp(2), borderRadius: wp(5), elevation: 5 }}>
              <Text style={{ fontWeight: 'bold' }}>
                Descripción
              </Text>
              <View style={{ marginHorizontal: wp(2), marginTop: wp(2), marginBottom: wp(2) }}>
                <Form>
                  <Textarea
                    value={description}
                    onChangeText={text => setDescription(text)}
                    rowSpan={5}
                    maxLength={300}
                    style={{ backgroundColor: '#00000011', borderRadius: 5 }}
                  />
                </Form>
              </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: wp(10) }}>
              <Button rounded success onPress={handleQuestion} >
                <Text style={{ textAlign: 'center', color: "#FFF" }}>PREGUNTAR</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
      {loading && (
        <View style={styles.loading__content}>
          <ActivityIndicator
            size="large"
            color={"#1F8209"}
            style={styles.loading}
          />
        </View>
      )}
    </Modal>
  )
}

export default AddQuestionModal

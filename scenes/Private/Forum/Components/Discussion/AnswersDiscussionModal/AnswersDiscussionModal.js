import React, { useState, useEffect } from 'react'
import { Modal, View, Image, ScrollView, ImageBackground, Alert, ActivityIndicator } from 'react-native'
import { Text, Button, ontainer, Content, Icon, Right, Textarea, Form, Container } from 'native-base'
import styles from './AnswersDiscussionModalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { wp } from '../../../../../../common/constants/_Mixins'
import userImg from '../../../../../../assets/images/user.png'
import moment from 'moment'
import user2Img from '../../../../../../assets/images/user.jpg'
import { discussion as discussionActions } from '../../../../../../services/Discussion/DiscussionActions'

const AnswersDiscussionModal = ({ visible, setVisible }) => {

  const dispatch = useDispatch()

  const [answer, setAnswer] = useState()
  const { discussion, loading } = useSelector(state => state.discussion)
  const { createAnswer, setDiscussion } = discussionActions

  const sendAnswer = () => {
    const body = { description: answer, discussion: discussion.id }
    dispatch(createAnswer(body, callback))
  }

  const callback = () => {
    setAnswer()
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Container>
        <View style={styles.header__container}>
          <Button transparent style={{ flex: 1 }} onPress={() => setVisible(false)}>
            <Icon name='arrow-back' style={{ color: "#555" }} />
          </Button>
          <Text style={styles.header__title}>Foro</Text>
          <Right style={{ flex: 1 }} />
        </View>
        <Content style={{ padding: wp(3), backgroundColor: "#E6F4EE" }}>
          <View style={{ marginBottom: wp(4), backgroundColor: '#Fafafa', padding: wp(2), borderRadius: wp(2), elevation: 5 }}>
            <View style={{ marginRight: wp(3), flexDirection: 'row' }}>
              <View style={{ marginRight: wp(3), flexDirection: 'row', alignItems: 'center' }}>
                <Image source={user2Img} style={{ width: wp(18), height: wp(18), borderRadius: wp(9) }} />
              </View>
              <View style={{ marginRight: wp(3), flexDirection: 'column', flexShrink: 1 }}>
                <Text style={{ fontWeight: 'bold', color: '#666' }}>{discussion?.user.profile.firstName}</Text>
                <Text style={{ fontSize: wp(3.8), fontWeight: 'bold' }}>
                  {discussion?.title}
                </Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-start', borderBottomWidth: 1 }}>
              <Text style={{ fontSize: wp(3.8), marginVertical: wp(1) }}>
                {discussion?.description}
              </Text>
            </View>
            <View style={{ marginLeft: wp(2), marginTop: wp(4) }}>
              {discussion?.discussionAnswers.map(answer => (
                <View style={{ flexDirection: 'row', marginBottom: wp(3), alignItems: 'center', elevation: 2, borderRadius: wp(3), padding: wp(2) }}>
                  <View style={{ marginRight: wp(3), flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={userImg} style={{ width: wp(10), height: wp(10) }} />
                  </View>
                  <View style={{ flexDirection: 'column', flexShrink: 1 }}>
                    <Text style={{ fontSize: wp(3.8), fontWeight: 'bold' }}>
                      {answer?.user.profile.firstName} {answer?.user.profile.lastName}
                    </Text>
                    <Text style={{ fontSize: wp(3.6) }}>
                      {answer?.description}
                    </Text>
                    <Text style={{ fontSize: wp(2.8), fontWeight: 'bold' }}>
                      {moment(answer?.createdAt).format('YYYY-MM-DD hh:mm')}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
            <View style={{ marginHorizontal: wp(2), marginTop: wp(2), marginBottom: wp(2) }}>
              <Form>
                <Textarea
                  value={answer}
                  onChangeText={text => setAnswer(text)}
                  rowSpan={5}
                  maxLength={300}
                  bordered
                  style={{ backgroundColor: '#F0F0F0', borderRadius: 5 }}
                />
              </Form>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: wp(2) }}>
              <Button rounded success onPress={sendAnswer} >
                <Text style={{ textAlign: 'center', color: "#FFF" }}>Comentar</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
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

export default AnswersDiscussionModal

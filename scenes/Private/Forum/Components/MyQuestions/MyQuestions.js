import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Content, Item, Input, Button, Text, Spinner, Header, Body, Title, View, Icon, Tab, Tabs } from 'native-base';
import userImg from '../../../../../assets/images/user.png'
import { Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { wp } from '../../../../../common/constants/_Mixins'
import AddQuestionModal from './AddQuestionModal/AddQuestionModal';
import moment from 'moment'
import AnswersDiscussionModal from '../Discussion/AnswersDiscussionModal/AnswersDiscussionModal';
import { discussion as discussionActions } from '../../../../../services/Discussion/DiscussionActions'

const MyQuestions = (props) => {
  const dispatch = useDispatch()

  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleAnswers, setVisibleAnswers] = useState(false)

  const { userDiscussions, loading } = useSelector(state => state.discussion)

  const { setDiscussion, getUserDiscussion } = discussionActions
  const showAnswers = (item) => {
    dispatch(setDiscussion(item))
    setVisibleAnswers(true)
  }

  return (
    <Fragment>
      <View style={{ flexDirection: 'column' }}>
        {loading && <ActivityIndicator size="large" color="#1F8209" style={{ marginTop: wp(5) }} />}
        <View style={{ backgroundColor: '#FFF' }}>
          <TouchableOpacity
            style={{ alignSelf: 'flex-end', margin: wp(2) }}
            onPress={() => setVisibleAdd(true)}
          >
            <Icon name="plus-circle-multiple-outline" type="MaterialCommunityIcons" style={{ color: 'green', fontSize: wp(8) }} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={userDiscussions}
          refreshing={false}
          onRefresh={() => {
            dispatch(getUserDiscussion())
          }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{ margin: wp(2), backgroundColor: "#FFF", flexDirection: 'row', alignItems: 'center', padding: wp(3), borderRadius: wp(2), elevation: 5 }}
              onPress={() => showAnswers(item)}
            >
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ fontSize: wp(3.8), fontWeight: 'bold' }}>
                    {item.title}
                  </Text>
                  <Text style={{ fontSize: wp(3.8) }}>
                    {item.description}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: wp(2) }}>
                  <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginRight: wp(3) }}>
                    <Text style={{ fontSize: wp(3), fontWeight: 'bold' }}>
                      {moment(item.createdAt).format('YYYY-MM-DD hh:mm')}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="card-text" type="MaterialCommunityIcons" />
                    <Text> {item.discussionAnswers?.length}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={({ id }) => id}
        />

      </View>
      <AddQuestionModal visible={visibleAdd} setVisible={setVisibleAdd} />
      <AnswersDiscussionModal visible={visibleAnswers} setVisible={setVisibleAnswers} />
    </Fragment>
  )
}

export default MyQuestions
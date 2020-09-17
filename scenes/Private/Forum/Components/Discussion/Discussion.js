import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Content, Item, Input, Button, Text, Spinner, Header, Body, Title, View, Icon, Tab, Tabs } from 'native-base';
import userImg from '../../../../../assets/images/user.png'
import { Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { wp } from '../../../../../common/constants/_Mixins'
import moment from 'moment'
import AnswersDiscussionModal from './AnswersDiscussionModal/AnswersDiscussionModal';
import { discussion as discussionActions } from '../../../../../services/Discussion/DiscussionActions'

const Discussion = (props) => {
  const dispatch = useDispatch()
  const [visibleAnswers, setVisibleAnswers] = useState(false)

  const { setDiscussion, getDiscussion } = discussionActions
  const { discussions, loading } = useSelector(state => state.discussion)

  const showAnswers = (item) => {
    dispatch(setDiscussion(item))
    setVisibleAnswers(true)
  }

  return (

    <Fragment>
      <View style={{ flexDirection: 'column' }}>
        {loading && <ActivityIndicator size="large" color="#1F8209" style={{ marginTop: wp(5) }} />}
        <FlatList
          data={discussions}
          refreshing={false}
          onRefresh={() => {
            dispatch(getDiscussion())
          }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{ margin: wp(2), backgroundColor: "#FFF", flexDirection: 'column', alignItems: 'center', padding: wp(3), borderRadius: wp(2), elevation: 5 }}
              onPress={() => showAnswers(item)}
            >
              <View style={{ marginRight: wp(3), flexDirection: 'row', flex: 1 }}>
                <View style={{ marginRight: wp(3), width: wp(18), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                  <Image source={userImg} style={{ width: wp(18), height: wp(18) }} />
                </View>
                <View style={{ marginRight: wp(3), width: wp(76), flexDirection: 'column', flexShrink: 1 }}>
                  <Text style={{ fontWeight: 'bold', color: '#666' }}>{item.user.profile.firstName}</Text>
                  <Text style={{ fontSize: wp(3.8), fontWeight: 'bold' }}>
                    {item.title}
                  </Text>
                </View>
              </View>

              <View style={{ alignItems: 'flex-start' }}>
                <Text style={{ fontSize: wp(3.8), marginTop: wp(1) }}>
                  {item.description}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: wp(2) }}>
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
      <AnswersDiscussionModal visible={visibleAnswers} setVisible={setVisibleAnswers} />
    </Fragment>
  )
}

export default Discussion
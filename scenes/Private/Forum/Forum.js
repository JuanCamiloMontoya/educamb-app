import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Content, Item, Input, Button, Text, Spinner, Header, Body, Title, View, Icon, Tab, Tabs } from 'native-base';
import userImg from '../../../assets/images/user.png'
import styles from './ForumStyles'
import { Image } from 'react-native';
import { wp } from '../../../common/constants/_Mixins';
import Discussion from './Components/Discussion/Discussion';
import MyQuestions from './Components/MyQuestions/MyQuestions';
import { discussion as discussionActions } from '../../../services/Discussion/DiscussionActions'
//import i18n from '../../../i18n/i18n'

const Forum = (props) => {
  const dispatch = useDispatch()

  const { getUserDiscussion, getDiscussion } = discussionActions

  useEffect(() => {
    dispatch(getUserDiscussion())
    dispatch(getDiscussion())
  })

  return (
    <Fragment>
      <View style={styles.header__container}>
        <Text style={styles.header__title}>Foro</Text>
      </View>
      <View style={styles.content}>
        <Tabs>
          <Tab heading="Discusión"
            tabStyle={{ backgroundColor: '#D4FAE2' }}
            textStyle={{ color: "#666", fontSize: wp(4.3) }}
            activeTextStyle={{ color: "#666", fontWeight: 'bold', fontSize: wp(4.3) }}
            activeTabStyle={{ backgroundColor: '#A3E39A' }}
          >
            <Discussion />
          </Tab>
          <Tab
            heading="Mis preguntas"
            tabStyle={{ backgroundColor: '#D4FAE2' }}
            textStyle={{ color: "#666", fontSize: wp(4.3) }}
            activeTextStyle={{ color: "#666", fontWeight: 'bold', fontSize: wp(4.3) }}
            activeTabStyle={{ backgroundColor: '#A3E39A' }}
          >
            <MyQuestions />
          </Tab>
        </Tabs>
      </View>
    </Fragment>
  )
}

export default Forum
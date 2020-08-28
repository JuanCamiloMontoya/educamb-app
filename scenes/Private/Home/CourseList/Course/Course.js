import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Text, Left, Body, DeckSwiper, Card, CardItem, Thumbnail, View, Icon, Button, ListItem, Right } from 'native-base'
import { Bar } from 'react-native-progress'

import biodiversity from '../../../../../assets/images/home/biodiversity2.png'
import { Image, TouchableOpacity, FlatList } from 'react-native'
import { paddingHorizontal, paddingVertical, wp } from '../../../../../common/constants/_Mixins'
import styles from './CourseStyles'
import { useHistory } from 'react-router-native'

const Course = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { course } = useSelector(state => state.thematic)

  return (
    <Fragment>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingVertical: wp(1) }}>
        <Button transparent style={{ flex: 1 }} onPress={() => history.goBack()}>
          <Icon name='arrow-back' style={{ color: "#555" }} />
        </Button>
        <Text style={styles.header__title}>{course.name}</Text>
        <Right style={{ flex: 1 }} />
      </View>

      <View style={styles.content}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingBottom: wp(3),
          borderBottomWidth: 1,
          paddingHorizontal: wp(25)
        }}>
          <Image style={{ width: wp(35), height: wp(35), marginRight: wp(2) }} source={{ uri: course.imageUrl }} resizeMode="cover" />
          <Text style={{ color: "#555", fontSize: wp(4), alignSelf: 'flex-start', flexGrow: 1 }}>
            {course.description}
          </Text>
        </View>
        <FlatList
          data={course?.chapters || []}
          ListFooterComponent={
            <View style={{ marginBottom: wp(5) }}>
              <Button iconLeft success style={{ width: wp(50), alignSelf: 'center', justifyContent: 'center' }}>
                <Icon name="play" type="MaterialCommunityIcons" />
                <Text style={{}}>Continuar</Text>
              </Button>
            </View>}
          renderItem={({ item, index }) => (
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: wp(1),
              paddingHorizontal: wp(5),
            }}>
              <Icon name="check-circle-outline" type="MaterialCommunityIcons" style={{ color: "#5AA831", marginRight: wp(2) }} />
              <Text style={{ marginRight: wp(7) }}>{item.name}</Text>
            </View>
          )}
          keyExtractor={({ id }) => id}
        />
      </View>
    </Fragment>
  )
}

export default Course
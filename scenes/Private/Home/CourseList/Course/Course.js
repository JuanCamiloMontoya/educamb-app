import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Text, Left, Body, DeckSwiper, Card, CardItem, Thumbnail, View, Icon, Button, ListItem, Right } from 'native-base'
import { Bar } from 'react-native-progress'
import YoutubePlayer from "react-native-youtube-iframe"
import { useHistory } from 'react-router-native'
import { Image, TouchableOpacity, FlatList } from 'react-native'

import { paddingHorizontal, paddingVertical, wp } from '../../../../../common/constants/_Mixins'
import styles from './CourseStyles'
import ChapterCard from './Components/ChapterCard'

const Course = (props) => {

  const [video, setVideo] = useState()
  const dispatch = useDispatch()
  const history = useHistory()
  const { course } = useSelector(state => state.thematic)

  return (
    <Fragment>
      <View style={styles.header__container}>
        <Button transparent style={{ flex: 1 }} onPress={() => history.goBack()}>
          <Icon name='arrow-back' style={{ color: "#555" }} />
        </Button>
        <Text style={styles.header__title}>{course.name}</Text>
        <Right style={{ flex: 1 }} />
      </View>
      <View style={styles.content}>
        {video ? (
          <View style={{}}>
            <YoutubePlayer
              height={wp(56.3)}
              width={wp(100)}
              videoId={video?.youtubeId}
              play={true}
              webViewStyle={{ backgroundColor: '#1F8209' }}
            />
            <TouchableOpacity onPress={() => setVideo()} style={{ position: 'absolute', margin: wp(1), borderRadius: wp(5), backgroundColor: '#FFFFFF55' }}>
              <Icon name="close" type="MaterialCommunityIcons" />
            </TouchableOpacity>
          </View>
        ) : (
            <View style={styles.content__top}>
              <Image style={styles.content__top__image} source={{ uri: course.imageUrl }} />
              <Text style={styles.content__top__description}>{course.description}</Text>
            </View>
          )}
        <FlatList
          data={course?.chapters || []}
          ListFooterComponent={(
            <View style={{ marginBottom: wp(5) }}>
              <Button iconLeft success style={styles.content__bottom__button}>
                <Icon name="play" type="MaterialCommunityIcons" />
                <Text>Evaluación</Text>
              </Button>
            </View>
          )}
          renderItem={({ item: chapter }) => <ChapterCard {...{ chapter, video, setVideo }} />}
          keyExtractor={({ id }) => id}
        />
      </View>
    </Fragment>
  )
}

export default Course
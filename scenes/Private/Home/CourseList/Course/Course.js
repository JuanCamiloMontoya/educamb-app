import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, Icon, Button, Right } from 'native-base'
import YoutubePlayer from "react-native-youtube-iframe"
import { useHistory, useParams, useLocation } from 'react-router-native'
import { Image, TouchableOpacity, FlatList, ActivityIndicator, ScrollView } from 'react-native'

import { wp } from '../../../../../common/constants/_Mixins'
import styles from './CourseStyles'
import ChapterCard from './Components/ChapterCard'
import { course as courseActions } from '../../../../../services/Course/CourseActions'
import { lesson as lessonActions } from '../../../../../services/Lesson/LessonActions'
import { thematic as thematicActions } from '../../../../../services/Thematic/ThematicActions'

const Course = (props) => {

  const [video, setVideo] = useState()
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const { course, loading } = useSelector(state => state.course)
  const { thematic } = useSelector(state => state.thematic)

  const { getById, getById2 } = courseActions
  const { addLessonUser } = lessonActions
  const { getAll, setThematic } = thematicActions

  const { courseId } = useParams()

  useEffect(() => {
    dispatch(getById(courseId))
  }, [])

  const handleChangeState = (event) => {
    const callback = () => {
      dispatch(getById2(courseId))
      dispatch(getAll())
    }
    event == 'playing' && dispatch(addLessonUser(video.id, callback))
  }

  return (
    <Fragment>
      <View style={styles.header__container}>
        <Button transparent style={{ flex: 1 }} onPress={() => history.goBack()}>
          <Icon name='arrow-back' style={{ color: "#555" }} />
        </Button>
        <Text style={styles.header__title}>{course?.name}</Text>
        <Right style={{ flex: 1 }} />
      </View>
      <View style={styles.content}>
        {loading && <ActivityIndicator size="large" color="#1F8209" style={{ marginTop: wp(5) }} />}
        {!loading && <View style={{}}>
          {video ? (
            <View style={{}}>
              <YoutubePlayer
                height={wp(56.3)}
                width={wp(100)}
                videoId={video?.youtubeId}
                play={true}
                onChangeState={handleChangeState}
                webViewStyle={{ backgroundColor: '#1F8209' }}
              />
              <TouchableOpacity onPress={() => setVideo()} style={{ position: 'absolute', margin: wp(1), borderRadius: wp(5), backgroundColor: '#FFFFFF55' }}>
                <Icon name="close" type="MaterialCommunityIcons" />
              </TouchableOpacity>
            </View>
          ) : (
              <View style={[styles.content__top, { maxHeight: wp(56.3), alignItems: 'center' }]}>
                <Image style={styles.content__top__image} source={{ uri: course?.imageUrl }} />
                <ScrollView >
                  <Text style={styles.content__top__description}>{course?.description}</Text>
                </ScrollView>
              </View>
            )}
        </View>}
        {!loading && <FlatList
          data={course?.chapters || []}
          style={{ paddingHorizontal: wp(2) }}
          ListFooterComponent={() => {
            let data = thematic
            const index = data?.courses?.findIndex(item => item.id == courseId)
            data.courses[index].percentage = course?.percentage
            setThematic(data)
            return (
              <View style={{ marginVertical: wp(5), marginBottom: wp(20) }}>
                {course?.percentage == '1' && course?.exams?.length > 0 && course.exams.map((exam, i) => (
                  <View style={{ marginBottom: wp(5) }}>
                    <Button
                      onPress={() => history.push(`${location.pathname}/exam/${exam.id}`)}
                      iconLeft
                      success
                      style={styles.content__bottom__button}
                    >
                      <Icon name="play" type="MaterialCommunityIcons" />
                      <Text>{`Evaluación${course.exams.length > 1 ? ` ${(i + 1)}` : ''}`}</Text>
                    </Button>
                  </View>
                ))}
              </View>
            )
          }}
          renderItem={({ item: chapter }) => <ChapterCard {...{ chapter, video, setVideo }} />}
          keyExtractor={({ id }) => id}
        />}
      </View>
    </Fragment>
  )
}

export default Course
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

const Exam = (props) => {

  const [video, setVideo] = useState()
  const dispatch = useDispatch()
  const history = useHistory()
  const { course } = useSelector(state => state.thematic)

  return (
    <Fragment>
    </Fragment>
  )
}

export default Exam
import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image, TouchableOpacity, FlatList } from 'react-native'
import { Text, Body, View, Header, Title } from 'native-base'
import { Bar } from 'react-native-progress'
import { withRouter, useHistory } from 'react-router-native'

import { thematic as thematicActions } from '../../../services/Thematic/ThematicActions'
import { wp } from '../../../common/constants/_Mixins'
import styles from './HomeStyles'

const Home = (props) => {

  const { getAll, setThematic } = thematicActions
  const { thematics } = useSelector(state => state.thematic)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(getAll())
  }, [])

  const openCourseList = (course) => {
    dispatch(setThematic(course))
    history.push('/home/course-list')
  }

  return (
    <Fragment>
      <Header style={styles.header_container}>
        <Body style={styles.header__body}>
          <Title style={styles.header__title}>
            Plan de estudio
          </Title>
        </Body>
      </Header>
      <View style={styles.content}>
        <FlatList
          data={thematics}
          numColumns={2}
          renderItem={({ item, index }) => {
            const { name, imageUrl, description } = item
            const dynamicStyles = {
              marginRight: index % 2 === 0 ? 0 : wp(3.3)
            }
            return (
              <TouchableOpacity
                onPress={() => openCourseList(item)}
                style={[styles.card__container, dynamicStyles]}
              >
                <Image style={styles.card__image} source={{ uri: imageUrl }} resizeMode="cover" />
                <Text style={styles.card__title}>{name}</Text>
                <Bar progress={0.3} width={wp(38)} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={({ id }) => id}
        />
      </View>
    </Fragment>
  )
}

export default withRouter(Home)
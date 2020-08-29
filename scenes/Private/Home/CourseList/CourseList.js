import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image, FlatList } from 'react-native'
import { Text, View, Icon, Button, Right } from 'native-base'
import { useHistory } from 'react-router-native'

import { wp } from '../../../../common/constants/_Mixins'
import { thematic as thematicActions } from '../../../../services/Thematic/ThematicActions'
import styles from './CourseListStyles'

const CourseList = (props) => {

  const { getAll, setCourse } = thematicActions
  const dispatch = useDispatch()
  const history = useHistory()
  const { thematic } = useSelector(state => state.thematic)

  const openChapterList = (course) => {
    dispatch(setCourse(course))
    history.push('/home/course')
  }

  return (
    <Fragment>
      <View style={styles.header__container}>
        <Button transparent style={{ flex: 1 }} onPress={() => history.goBack()}>
          <Icon name='arrow-back' style={{ color: "#555" }} />
        </Button>
        <Text style={styles.header__title}>{thematic.name}</Text>
        <Right style={{ flex: 1 }} />
      </View>
      <View style={styles.content}>
        <FlatList
          data={thematic?.courses || []}
          numColumns={2}
          renderItem={({ item, index }) => {
            const { name, description, chapters, imageUrl } = item
            const dynamicStyles = { marginRight: index % 2 === 0 ? 0 : wp(3.3) }
            return (
              <View style={[styles.card__container, dynamicStyles]}>
                <Image style={styles.card__image} source={{ uri: imageUrl }} />
                <Text style={styles.card__title}>{name}</Text>
                <Text style={styles.card__description}>{description}</Text>
                <View style={styles.card__bottom}>
                  <Text style={styles.card__count}>
                    {chapters.length} Capitulos
                </Text>
                  <Button success rounded onPress={() => openChapterList(item)} >
                    <Icon name='play' />
                  </Button>
                </View>
              </View>
            )
          }}
          keyExtractor={({ id }) => id}
        />
      </View>
    </Fragment>
  )
}

export default CourseList
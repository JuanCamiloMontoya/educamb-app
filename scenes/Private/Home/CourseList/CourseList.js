import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image, FlatList } from 'react-native'
import { Text, View, Icon, Button, Right } from 'native-base'
import { useHistory } from 'react-router-native'

import { wp } from '../../../../common/constants/_Mixins'
import styles from './CourseListStyles'
import { Bar } from 'react-native-progress'

const CourseList = (props) => {

  const history = useHistory()
  const { thematic } = useSelector(state => state.thematic)

  const openChapterList = (id) => {
    history.push(`/home/course-list/course/${id}`)
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
            const { id, name, description, imageUrl, percentage } = item
            const dynamicStyles = { marginRight: index % 2 === 0 ? 0 : wp(3.3) }
            return (
              <View style={[styles.card__container, dynamicStyles]}>
                <Image style={styles.card__image} source={{ uri: imageUrl }} />
                <Text style={styles.card__title}>{name}</Text>
                <Text style={styles.card__description}>{description.slice(0, 90)}...</Text>
                <View style={styles.card__bottom}>
                  <Bar progress={percentage} width={wp(25)} style={{ marginRight: wp(2) }} />
                  <Button success rounded onPress={() => openChapterList(id)} >
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
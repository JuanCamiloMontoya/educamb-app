import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, Icon, Button, Right } from 'native-base'
import { Bar } from 'react-native-progress'

import biodiversity from '../../../../assets/images/home/biodiversity2.png'
import { Image, FlatList } from 'react-native'
import { wp } from '../../../../common/constants/_Mixins'
import styles from './CourseListStyles'
import { useHistory } from 'react-router-native'
import { thematic as thematicActions } from '../../../../services/Thematic/ThematicActions'

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
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingVertical: wp(1) }}>
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
          renderItem={({ item, index }) => (
            <View style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: "#FFF",
              width: wp(45),
              elevation: 3,
              borderRadius: wp(2),
              marginVertical: wp(2),
              marginHorizontal: wp(3.3),
              marginLeft: index % 2 === 0 ? wp(3.3) : 0,
              padding: wp(2)
            }}>
              <Image style={{ width: wp(35), height: wp(35) }} source={{ uri: item.imageUrl }} resizeMode="cover" />
              <Text style={{ color: "#555", fontWeight: 'bold', fontSize: wp(4.5), alignSelf: 'flex-start' }}>
                {item.name}
              </Text>
              <Text style={{ color: "#555", fontSize: wp(3.4), alignSelf: 'flex-start', flexGrow: 1 }}>
                {item.description}
              </Text>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Text style={{ color: "#555", fontSize: wp(3.4), flexGrow: 1 }}>
                  {item.chapters.length} Capitulos
                </Text>
                <Button success rounded onPress={() => openChapterList(item)} >
                  <Icon name='play' />
                </Button>
              </View>
            </View>
          )}
          keyExtractor={({ id }) => id}
        />
      </View>
    </Fragment>
  )
}

export default CourseList
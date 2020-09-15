import React, { useEffect, Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { Text, Body, View, Header, Title, Button } from 'native-base'
import { Bar } from 'react-native-progress'
import { useHistory } from 'react-router-native'

import { thematic as thematicActions } from '../../../services/Thematic/ThematicActions'
import { user as userActions } from '../../../services/User/UserActions'
import { wp } from '../../../common/constants/_Mixins'
import styles from './HomeStyles'
import InquiryModal from './Components/InquiryModal/InquiryModal'

const Home = (props) => {

  const [visibleInquiry, setVisibleInquiry] = useState(false)

  const { getAll, setThematic } = thematicActions
  const { getInquiry, getProfile } = userActions
  const { thematics, loading } = useSelector(state => state.thematic)
  const { inquiryCount } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    thematics?.length == 0 && dispatch(getAll())
    dispatch(getInquiry())
    dispatch(getProfile())
  }, [])

  const openCourseList = (thematic) => {
    dispatch(setThematic(thematic))
    history.push('/home/course-list')
  }

  return (
    <Fragment>
      <View style={styles.header__container}>
        <Text style={styles.header__title}>Plan de estudio</Text>
      </View>
      <View style={styles.content}>
        {loading && <ActivityIndicator size="large" color="#1F8209" style={{ marginTop: wp(5) }} />}
        {!loading && <FlatList
          data={thematics}
          numColumns={2}
          ListFooterComponent={(
            <View style={{ marginBottom: wp(20), marginTop: wp(5), alignItems: 'center' }}>
              {inquiryCount == 0 && (
                <Button
                  rounded
                  success
                  style={{ width: wp(50), justifyContent: 'center' }}
                  onPress={() => setVisibleInquiry(true)}
                >
                  <Text>EVALUAR EDUCAMB</Text>
                </Button>
              )}
            </View>
          )}
          renderItem={({ item, index }) => {
            const { name, imageUrl, courses } = item
            const dynamicStyles = { marginRight: index % 2 === 0 ? 0 : wp(3.3) }

            let cont = 0
            for (const course of courses) {
              cont += course.percentage
            }

            const percentage = cont / courses.length

            return (
              <TouchableOpacity
                onPress={() => openCourseList(item)}
                style={[styles.card__container, dynamicStyles]}
              >
                <Image style={styles.card__image} source={{ uri: imageUrl }} />
                <Text style={styles.card__title}>{name}</Text>
                <Bar progress={percentage} width={wp(35)} style={{ marginRight: wp(2) }} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={({ id }) => id}
        />}
      </View>
      <InquiryModal visible={visibleInquiry} setVisible={setVisibleInquiry} />
    </Fragment>
  )
}

export default Home
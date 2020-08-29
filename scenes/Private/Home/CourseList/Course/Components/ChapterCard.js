import React, { useState, useEffect, Fragment } from 'react'
import { useHistory } from 'react-router-native'
import { View, Text, Icon, Right } from 'native-base'
import { wp } from '../../../../../../common/constants/_Mixins'
import { TouchableOpacity } from 'react-native'

const ChapterCard = ({ chapter, video, setVideo }) => {

  const [visible, setVisible] = useState(false)

  return (
    <View style={{ borderBottomWidth: 1 }}>
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: wp(5),
          paddingVertical: wp(1)
        }}>
        <Text style={{
          flexGrow: 1,
          flexBasis: 0
        }} >{chapter.name}</Text>
        <Icon name="chevron-down" type="MaterialCommunityIcons" style={{ color: "#5AA831" }} />
      </TouchableOpacity>
      {visible && chapter.lessons.map((lesson) => {
        const { url, id, name } = lesson
        const youtubeId = url.substr(-11)
        return (
          <TouchableOpacity
            onPress={() => setVideo({ youtubeId, id })}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: wp(1),
              marginHorizontal: wp(7)
            }}>
            <Icon name="check-circle-outline" type="MaterialCommunityIcons" style={{ color: "#5AA831", marginRight: wp(2) }} />
            <Text style={{ marginRight: wp(7), fontWeight: video?.id == id ? 'bold' : 'normal' }}>{name}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default ChapterCard
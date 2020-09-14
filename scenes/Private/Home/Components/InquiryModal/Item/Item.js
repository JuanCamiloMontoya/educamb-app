import React from 'react'
import { Modal, View, Image, TouchableOpacity } from 'react-native'
import { Text, Button, CheckBox, Radio } from 'native-base'
import { wp } from '../../../../../../common/constants/_Mixins'

const Item = ({ selected, description, setQ }) => {

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row' }}
      onPress={() => setQ(description)}
    >
      <Radio
        selected={selected}
        onPress={() => setQ(description)}
      />
      <Text style={{ marginLeft: wp(3) }}>{description}</Text>
    </TouchableOpacity>
  )
}

export default Item
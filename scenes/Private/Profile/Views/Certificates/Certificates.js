import React, { useState, useRef, useLinking, useEffect, Fragment } from 'react';
import { ImageBackground, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter, useHistory } from "react-router-native"
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, View, Input } from 'native-base';

import styles from './CertificatesStyles'
import { wp } from '../../../../../common/constants/_Mixins';
import { auth as AuthActions } from '../../../../../services/Auth/AuthActions'
import certImg from '../../../../../assets/images/cert.png'

const Certificates = (props) => {

  const { logout } = AuthActions
  const dispatch = useDispatch()
  const history = useHistory()

  const [certificates, setCertificates] = useState([])

  const { thematics } = useSelector(state => state.thematic)

  useEffect(() => {
    let cert = []
    for (const thematic of thematics) {
      for (const course of thematic.courses) {
        for (const exam of course.exams) {
          if (exam.examUsers.length > 0) {
            cert.push(course)
            break
          }
        }
      }
    }
    setCertificates(cert)
  }, [])

  return (
    <Fragment>
      <View style={styles.header__container}>
        <Button transparent style={{ flex: 1 }} onPress={() => history.goBack()}>
          <Icon name='arrow-back' style={{ color: "#555" }} />
        </Button>
        <Text style={styles.header__title}>Perfil</Text>
        <TouchableOpacity
          style={{ flex: 1, alignItems: 'flex-end', paddingRight: wp(2) }}
          onPress={() => { dispatch(logout()); history.push('/') }}
        >
          <Icon name="logout" type="MaterialCommunityIcons" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={{ fontSize: wp(5), fontWeight: 'bold', marginBottom: wp(5) }}>Mis certificados</Text>

        <ScrollView style={{ marginBottom: wp(3) }}>
          {certificates?.map(course => (
            <View style={{ paddingVertical: wp(3), marginBottom: wp(3), backgroundColor: '#D7FBD1', justifyContent: 'center', alignItems: 'center', elevation: 5, borderRadius: wp(2) }}>
              <Icon
                name="check-circle-outline"
                type="MaterialCommunityIcons"
                style={{ color: "#5AA831", position: 'absolute', fontSize: wp(13), top: 0, right: 0, marginRight: wp(5), marginTop: wp(2) }}
              />
              <Image source={{ uri: course.imageUrl }} style={{ width: wp(60), height: wp(40), resizeMode: 'contain' }} />
              <Text style={{ fontSize: wp(5), fontWeight: 'bold' }}>{course.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </Fragment>
  )
}

export default Certificates
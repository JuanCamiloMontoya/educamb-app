import React, { useState, useRef, useLinking, useEffect, Fragment } from 'react';
import { ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter, useHistory } from "react-router-native";
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, View } from 'native-base';

import { auth as AuthActions } from '../../../services/Auth/AuthActions'
import user_img from '../../../assets/images/user.jpg'
import styles from './ProfileSyles'
import { wp } from '../../../common/constants/_Mixins';

const Profile = (props) => {

  const { logout } = AuthActions
  const dispatch = useDispatch()
  const history = useHistory()

  const { profile } = useSelector(state => state.user)
  return (
    <Fragment>
      <View style={styles.header__container}>
        <Left style={{ flex: 1 }} />
        <Text style={styles.header__title}>Perfil</Text>
        <TouchableOpacity
          style={{ flex: 1, alignItems: 'flex-end', paddingRight: wp(2) }}
          onPress={() => { dispatch(logout()); history.push('/') }}
        >
          <Icon name="logout" type="MaterialCommunityIcons" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'flex-start',
            flex: 1,
            padding: 20,
            backgroundColor: '#E6F4EE'
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingHorizontal: 15,
              alignItems: 'center',
              justifyContent: 'flex-start',
              flex: 1,
              padding: 20,
              backgroundColor: '#E6F4EE'
            }}>
            <View>
              <Image source={user_img} style={{ width: wp(70), height: wp(70), borderRadius: wp(35) }} />
            </View>
            <Text style={{ fontSize: 35, textAlign: 'center', fontWeight: 'bold', marginBottom: '10%' }}>{profile?.firstName} {profile?.lastName}</Text>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#777" }}>
                  <Icon active name="clipboard-text" type="MaterialCommunityIcons" />
                </Button>
              </Left>
              <TouchableOpacity onPress={() => history.push('/profile/information')}>
                <Right>
                  <Text style={{ fontWeight: 'bold', color: '#777', fontSize: 20 }}>Mi información</Text>
                </Right>
              </TouchableOpacity>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#777" }}>
                  <Icon active name="clipboard-text" type="MaterialCommunityIcons" />
                </Button>
              </Left>
              <TouchableOpacity onPress={() => history.push('/profile/certificates')}>
                <Right>
                  <Text style={{ fontWeight: 'bold', color: '#777', fontSize: 20 }}>Mis certificados</Text>
                </Right>
              </TouchableOpacity>
            </ListItem>
          </View>
        </View>
      </View>
    </Fragment>
  )
}

export default Profile
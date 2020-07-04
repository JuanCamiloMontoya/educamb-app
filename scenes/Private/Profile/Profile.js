import React, { useState, useRef, useLinking, useEffect } from 'react';
import { ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-native";
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, View } from 'native-base';
import { createForm } from 'rc-form';

import i18n from '../../../i18n/i18n'
import { auth as AuthActions } from '../../../services/Auth/AuthActions'
import user_img from '../../../assets/images/user.jpg'

const Profile = () => {

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20
      }}>
      <Image source={user_img} style={{ width: 300, height: 300 }} />
      <Text style={{ fontSize: 35, fontWeight: 'bold', marginBottom: '10%' }}>Yulder Adrian</Text>
      <ListItem icon>
        <Left>
          <Button style={{ backgroundColor: "#777" }}>
            <Icon active name="clipboard-text" type="MaterialCommunityIcons" />
          </Button>
        </Left>
        <TouchableOpacity>
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
        <TouchableOpacity>
          <Right>
            <Text style={{ fontWeight: 'bold', color: '#777', fontSize: 20 }}>Mis certificados</Text>
          </Right>
        </TouchableOpacity>
      </ListItem>
    </View>
  )
}

export default Profile
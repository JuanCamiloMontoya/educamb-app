import React, { useState, useRef, useLinking, useEffect } from 'react';
import { Container, View } from 'native-base';
import { NativeRouter, Route } from "react-router-native";
import { ImageBackground } from 'react-native';

import Login from './Login/Login';
import Signup from './Signup/Signup';
import login_background from '../../assets/images/login-background.jpg'

const Public = ({ }) => {

  useEffect(() => {

  })

  return (


    <NativeRouter>
      <ImageBackground source={login_background} style={{ flex: 1 }}>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </ImageBackground>
    </NativeRouter>
  )
}

export default Public 
import React, { useState, useRef, useLinking, useEffect } from 'react';
import { Container, View, Content } from 'native-base';
import { NativeRouter, Route, withRouter, Router, Switch } from "react-router-native";
import { ImageBackground, StatusBar } from 'react-native';

import Login from './Login/Login';
import Signup from './Signup/Signup';
import login_background from '../../assets/images/login-background.jpg'

const Public = ({ history }) => {

  useEffect(() => {

  })

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={login_background} style={{ flex: 1 }}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </ImageBackground>
    </Container>
  )
}

export default Public
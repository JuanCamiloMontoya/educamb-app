import React from 'react';
import { StatusBar, ImageBackground } from 'react-native';
import { Container, Header, Body, Title } from 'native-base';

import { Route, withRouter, Switch, BackButton, Router, useHistory, MemoryRouter } from 'react-router-native';
import Profile from './Profile/Profile';
import Home from './Home/Home';
import Forum from './Forum/Forum';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import { wp } from '../../common/constants/_Mixins';
import CourseList from './Home/CourseList/CourseList';
import Course from './Home/CourseList/Course/Course';
import headerBg from '../../assets/images/header-bg.jpg'

const Private = (props) => {

  const history = useHistory()

  return (
    <Container>
      <StatusBar backgroundColor="#1F8209" />
      <BackButton>
        <ImageBackground source={headerBg} style={{ flex: 1 }} resizeMode="cover" >
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/home/course-list" component={CourseList} />
              <Route exact path="/home/course" component={Course} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/forum" component={Forum} />
            </Switch>
          </Router>
        </ImageBackground>
        <BottomTabBar />
      </BackButton>
    </Container>
  )
}

export default Private
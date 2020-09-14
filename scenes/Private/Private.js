import React from 'react';
import { StatusBar, ImageBackground, Platform } from 'react-native';
import { Container, Header, Body, Title, View } from 'native-base';

import { Route, withRouter, Switch, BackButton, Router, useHistory, MemoryRouter } from 'react-router-native';
import Profile from './Profile/Profile';
import Home from './Home/Home';
import Forum from './Forum/Forum';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import { wp } from '../../common/constants/_Mixins';
import CourseList from './Home/CourseList/CourseList';
import Course from './Home/CourseList/Course/Course';
import headerBg from '../../assets/images/header-bg.jpg'
import Exam from './Home/CourseList/Course/Exam/Exam';
import Information from './Profile/Views/Information/Information';
import Certificates from './Profile/Views/Certificates/Certificates';

const Private = (props) => {

  const history = useHistory()

  return (
    <Container>
      <StatusBar backgroundColor="#DDFCE2" />
      <BackButton>
        <ImageBackground source={headerBg} style={{ flex: 1 }} resizeMode="cover" >
          {Platform.OS == 'ios' && <View style={{ backgroundColor: 'transparent', height:wp(6) }} />}
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/home/course-list" component={CourseList} />
              <Route exact path="/home/course-list/course/:courseId" component={Course} />
              <Route exact path="/home/course-list/course/:courseId/exam/:examId" component={Exam} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/profile/information" component={Information} />
              <Route exact path="/profile/certificates" component={Certificates} />
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
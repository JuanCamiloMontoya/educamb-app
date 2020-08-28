import React from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { useHistory, useLocation } from 'react-router-native';

const BottomTabBar = (props) => {
  const history = useHistory()
  const location = useLocation()

  const routes = [
    { name: '/forum', icon: 'forum', label: 'Foro' },
    { name: '/home', icon: 'home', label: 'Inicio' },
    { name: '/profile', icon: 'account', label: 'Perfil' }
  ]

  return (
    <Footer>
      <FooterTab>
        {routes.map(({ name, icon, label }) => {
          const path = location.pathname
          const color = path.includes(name) || (path === '/' && name === '/home') ? '#FFF' : '#A3D6B0'
          return (
            <Button onPress={() => history.push(name)}
              style={{ backgroundColor: "#1F8209" }}>
              <Icon name={icon} type="MaterialCommunityIcons" style={{ color }} />
              <Text style={{ color }} >{label}</Text>
            </Button>
          )
        })}
      </FooterTab>
    </Footer>
  )
}

export default BottomTabBar
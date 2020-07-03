import React, { useState, useRef, useLinking, useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-native";
import { Container, Content, Item, Input, Button, Text, Spinner, View, Icon } from 'native-base';
import { createForm } from 'rc-form';

import i18n from '../../../i18n/i18n'
import { auth as AuthActions } from '../../../services/Auth/AuthActions'

const Login = ({ match, form }) => {
  const dispatch = useDispatch()
  const { getFieldDecorator, setFieldsValue } = form;

  const { loading, error } = useSelector(state => state.auth)
  const [isFormError, setFormError] = useState()

  const submit = (e) => {
    if (!loading) {
      form.validateFields({ suppressWarning: true }, (error, value) => {
        if (!error) {
          setFormError(false)
          dispatch(AuthActions.login(value.email, value.password))
        } else
          setFormError(true)
      });
    }
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text style={{ fontSize: 35, fontWeight: 'bold', marginBottom: '10%' }}>Iniciar Sesión</Text>
      <Item regular style={{ borderColor: '#000', marginBottom: 20, backgroundColor: '#FFF' }}>
        <Icon name='account-outline' type='MaterialCommunityIcons' />
        {getFieldDecorator('email', { rules: [{ required: true }] })(
          <Input type="email" placeholder={i18n.t('label.user')} onChangeText={email => setFieldsValue({ email })} />
        )}
      </Item>
      <Item regular style={{ borderColor: '#000', marginBottom: 20, backgroundColor: '#FFF' }}>
        <Icon active name='key' />
        {getFieldDecorator('password', { rules: [{ required: true }] })(
          <Input secureTextEntry placeholder={i18n.t('label.password')} onChangeText={password => setFieldsValue({ password })} />
        )}
      </Item>
      <Text style={{ alignSelf: 'flex-end', marginBottom: 20 }}>Olvidaste tu contraseña?</Text>

      {isFormError && <Text>{i18n.t('error.required')}</Text>}
      {error.login && !isFormError && <Text>{i18n.t('error.login.' + error.login)}</Text>}

      <Button success style={{ width: '100%', flexDirection: 'row', borderRadius: 10, marginBottom: 40 }} onPress={submit}>
        {loading && <Spinner color='green' />}
        <Text style={{ textAlign: 'center', flexGrow: 1, fontWeight: 'bold' }}>{i18n.t('button.login')}</Text>
      </Button>

      <View style={{ flexDirection: 'row' }}>
        <Text>No tienes una cuenta? </Text>
        <Link to={`${match.url === '/' ? '' : match.url}/signup`} underlayColor="#f0f4f7">
          <Text style={{ fontWeight: 'bold' }}>{i18n.t('button.signup')}</Text>
        </Link>
      </View>
    </View>
  )
}

export default createForm()(Login)
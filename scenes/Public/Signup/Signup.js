import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-native";
import { Container, Content, Item, Input, Button, Text, Spinner, Picker, Icon, CheckBox, View } from 'native-base';
import { createForm } from 'rc-form';
import { ImageBackground } from 'react-native';

import i18n from '../../../i18n/i18n'
import LANGUAGES from '../../../common/constants/Languages'
import { auth as AuthActions } from '../../../services/Auth/AuthActions'
import { utilities as utilActions } from '../../../services/Utilities/UtilitiesActions'
import PickerSelect from '../../../components/PickerSelect/PickerSelect'
import FormItem from '../../../components/FormItem/FormItem'

const initialValuesDev = {
  name: 'Yulder',
  lastname: 'Canamejoy',
  phone: '2174760746',
  country: 'Colombia',
  city: 'Bogotá',
  language: 'es',
  email: 'yulder@gmail.com',
  password: '12345',
  repitPassword: '12345'
}

const Signup = ({ form }) => {
  const dispatch = useDispatch()
  const { getFieldDecorator, setFieldsValue, validateFields, getFieldValue, getFieldError, setFieldsInitialValue } = form;

  const { loading, error } = useSelector(state => state.auth)
  const [isFormError, setFormError] = useState()

  useEffect(() => {

    if (__DEV__)
      setFieldsInitialValue(initialValuesDev)

  }, [])

  const submit = (e) => {
    if (!loading) {
      validateFields({ suppressWarning: true }, (error, value) => {
        if (!error) {
          setFormError(false)
          dispatch(AuthActions.setLogged(true))
          /* dispatch(AuthActions.signup(value)) */
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
      <Text style={{ fontSize: 35, fontWeight: 'bold', marginBottom: '10%' }}>Registro</Text>
      <FormItem regular
        form={form}
        keyForm='name'
        options={{ rules: [{ required: true, min: 2, max: 50 }] }}
        style={{ borderColor: '#000', marginBottom: 20, backgroundColor: '#FFF' }}
        input={
          <Input placeholder={i18n.t('label.name')} onChangeText={name => setFieldsValue({ name })} />
        }
      />

      <FormItem regular
        form={form}
        keyForm='lastname'
        options={{ rules: [{ required: true, min: 2, max: 50 }] }}
        style={{ borderColor: '#000', marginBottom: 20, backgroundColor: '#FFF' }}
        input={
          <Input placeholder={i18n.t('label.lastname')} onChangeText={lastname => setFieldsValue({ lastname })} />
        }
      />

      <FormItem regular
        form={form}
        keyForm='email'
        options={{ rules: [{ required: true }] }}
        style={{ borderColor: '#000', marginBottom: 20, backgroundColor: '#FFF' }}
        input={
          <Input type="email" placeholder={i18n.t('label.email')} onChangeText={email => setFieldsValue({ email })} />
        }
      />

      <FormItem regular
        form={form}
        keyForm='password'
        options={{ rules: [{ required: true, min: 3, max: 30 }] }}
        style={{ borderColor: '#000', marginBottom: 20, backgroundColor: '#FFF' }}
        input={
          <Input secureTextEntry placeholder={i18n.t('label.password')} onChangeText={password => setFieldsValue({ password })} />
        }
      />

      <FormItem regular
        form={form}
        keyForm='repitPassword'
        options={{
          rules: [{
            required: true,
            min: 3, max: 30,
            validator: () => getFieldValue('repitPassword') === getFieldValue('password')
          }]
        }}
        style={{ borderColor: '#000', marginBottom: 20, backgroundColor: '#FFF' }}
        input={
          <Input secureTextEntry placeholder={i18n.t('label.repitPassword')} onChangeText={repitPassword => setFieldsValue({ repitPassword })} />
        }
      />

      {isFormError && <Text>{i18n.t('error.required')}</Text>}
      {error?.signup && !isFormError && <Text>{i18n.t('error.signup.' + error.signup)}</Text>}

      <Button success style={{ width: '100%', flexDirection: 'row', borderRadius: 10, marginBottom: 40 }} onPress={submit}>
        {loading && <Spinner color='green' />}
        <Text style={{ textAlign: 'center', flexGrow: 1, fontWeight: 'bold' }}>{i18n.t('button.signup')}</Text>
      </Button>

      <View style={{ flexDirection: 'row' }}>
        <Text>Tienes una cuenta? </Text>
        <Link to={'/'} underlayColor="#f0f4f7">
          <Text style={{ fontWeight: 'bold' }}>Iniciar Sesión</Text>
        </Link>
      </View>
    </View>
  )
}

export default createForm()(Signup)
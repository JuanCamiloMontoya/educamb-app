import React, { useState, useRef, useLinking, useEffect, Fragment } from 'react';
import { ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter, useHistory } from "react-router-native";
import { createForm } from 'rc-form';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, View, Input } from 'native-base';

import styles from './InformationStyles'
import { wp } from '../../../../../common/constants/_Mixins';
import { auth as AuthActions } from '../../../../../services/Auth/AuthActions'
import FormItem from '../../../../../components/FormItem/FormItem';
import i18n from '../../../../../i18n/i18n';

const Information = ({ form, ...props }) => {

  const { logout } = AuthActions
  const dispatch = useDispatch()
  const history = useHistory()
  const { getFieldDecorator, setFieldsValue, validateFields, getFieldValue, getFieldError, setFieldsInitialValue } = form;

  const { loading, error } = useSelector(state => state.auth)
  const { profile } = useSelector(state => state.user)
  const [isFormError, setFormError] = useState()

  const submit = (e) => {
    if (!loading) {
      validateFields({ suppressWarning: true }, (error, value) => {
        if (!error) {

        } else
          setFormError(true)
      });
    }
  }

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
        <Text style={{ fontSize: wp(5), fontWeight: 'bold', marginBottom: '10%' }}>Mi información</Text>
        <FormItem regular
          form={form}
          keyForm='firstname'
          options={{
            rules: [{ required: true, min: 2, max: 50 }],
            initialValue: profile?.firstName
          }}
          style={{ borderColor: '#000', marginBottom: 20, backgroundColor: '#FFF' }}
          input={
            <Input placeholder={i18n.t('label.name')} onChangeText={name => setFieldsValue({ name })} />
          }
        />

        <FormItem regular
          form={form}
          keyForm='lastname'
          options={{
            rules: [{ required: true, min: 2, max: 50 }],
            initialValue: profile?.lastName
          }}
          style={{ borderColor: '#000', marginBottom: 20, backgroundColor: '#FFF' }}
          input={
            <Input placeholder={i18n.t('label.lastname')} onChangeText={lastname => setFieldsValue({ lastname })} />
          }
        />

        <FormItem regular
          form={form}
          keyForm='email'
          options={{
            rules: [{ required: true }],
            initialValue: profile?.user?.email
          }}
          style={{ borderColor: '#000', marginBottom: 20, backgroundColor: '#FFF' }}
          input={
            <Input type="email" disabled placeholder={i18n.t('label.email')} onChangeText={email => setFieldsValue({ email })} />
          }
        />

        {isFormError && <Text>{i18n.t('error.required')}</Text>}
        {error?.signup && !isFormError && <Text>{i18n.t('error.signup.' + error.signup)}</Text>}

        <Button bordered success style={{ width: '100%', flexDirection: 'row', borderRadius: 10, marginBottom: 40 }} onPress={submit}>
          {loading && <Spinner color='green' />}
          <Text style={{ textAlign: 'center', flexGrow: 1, color: '#1F8209', fontWeight: 'bold', fontSize: wp(4) }}>Actualizar</Text>
        </Button>
      </View>
    </Fragment>
  )
}

export default createForm()(Information)
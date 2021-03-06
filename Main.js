import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Private from './scenes/Private/Private';
import Public from './scenes/Public/Public';
import { auth as AuthActions } from './services/Auth/AuthActions'
import { NativeRouter } from 'react-router-native';

export const Main = () => {
  const dispatch = useDispatch()
  const { authentication } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(AuthActions.isLogged())
  }, [])

  if (authentication === undefined)
    return null

  return (
    <NativeRouter>
      {authentication ? <Private /> : <Public />}
    </NativeRouter>
  )
}
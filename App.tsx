import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, {useCallback, useEffect, useState} from 'react'
import {View} from 'react-native'
import AppRouter from './components/AppRouter'
import Appcontext from './context/Appcontext'
import {gStyle} from './styles/style'

//показуем заставку
SplashScreen.preventAutoHideAsync()

const fonts = () =>
  Font.loadAsync({
    'mt-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'mt-light': require('./assets/fonts/Montserrat-Light.ttf'),
  })

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    fonts()
      .then(() => setAppIsReady(true))
      .catch(e => console.log(e))
      .finally(() => setAppIsReady(true))
  }, [])

  //убераем заставку
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) return null
  return (
    <Appcontext>
      <View style={gStyle.main} onLayout={onLayoutRootView}>
        <AppRouter />
      </View>
    </Appcontext>
  )
}

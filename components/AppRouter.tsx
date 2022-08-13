import React, {FC} from 'react'
import FullInfo from '../pages/FullInfo'
import Main from '../pages/Main'

import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native'

import {createStackNavigator} from '@react-navigation/stack'
import {INews} from '../types/news'
import {TabNavigation, TabParamList} from './TabNavigation'
import DrawerNavigation, {DrawerParamList} from './Drawernavigation'

//параметры страниц описываются
export type RootStackParamList = {
  Main: undefined
  FullInfo: {data: INews}
  TabNavigation: NavigatorScreenParams<TabParamList>
  DrawerNavigation: NavigatorScreenParams<DrawerParamList>
}

const Stack = createStackNavigator<RootStackParamList>()

const AppRouter: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'tomato'},
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Главная страница',
          }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{
            title: 'Статья',
            headerStyle: {backgroundColor: 'blue'},
            headerTitleStyle: {fontFamily: 'mt-bold'},
          }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{title: 'Страницы', headerShown: true}}
        />
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{title: 'Страницы', headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter

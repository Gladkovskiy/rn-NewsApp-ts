import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FullInfo from '../pages/FullInfo'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import {INews} from '../types/news'

import {Foundation} from '@expo/vector-icons'
import {MaterialIcons} from '@expo/vector-icons'

export type TabParamList = {
  anons: undefined
  full: undefined
  FullInfo: {data: INews}
}

const Tab = createBottomTabNavigator<TabParamList>()

export const TabNavigation = () => (
  <Tab.Navigator screenOptions={{headerTitleAlign: 'center'}}>
    <Tab.Screen
      name="FullInfo"
      component={FullInfo}
      options={{
        title: 'Описание страницы',
        tabBarIcon: ({size, color}) => (
          <MaterialIcons name="contact-page" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="anons"
      component={Page1}
      options={{
        title: 'Анонс',
        tabBarIcon: ({size, color}) => (
          <Foundation name="page" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="full"
      component={Page2}
      options={{
        title: 'Полное описание',
        tabBarIcon: ({size, color}) => (
          <MaterialIcons name="restore-page" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
)

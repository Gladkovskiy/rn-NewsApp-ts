import React, {FC} from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {INews} from '../types/news'
import FullInfo from '../pages/FullInfo'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'

export type DrawerParamList = {
  anons: undefined
  full: undefined
  FullInfo: {data: INews}
}

const Drawer = createDrawerNavigator<DrawerParamList>()

const DrawerNavigation: FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="FullInfo"
        component={FullInfo}
        options={{title: 'Описание страницы'}}
      />
      <Drawer.Screen
        name="anons"
        component={Page1}
        options={{title: 'Анонс'}}
      />
      <Drawer.Screen
        name="full"
        component={Page2}
        options={{title: 'Полное описание'}}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation

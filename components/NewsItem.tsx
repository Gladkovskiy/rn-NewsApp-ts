import {useNavigation} from '@react-navigation/native'
import React, {FC, useContext} from 'react'
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {AppContext} from '../context/Appcontext'

import {NavigationProps} from '../types/navigationHooksType'
import {INews} from '../types/news'

interface NewsItemProp {
  data: INews
}

const NewsItem: FC<NewsItemProp> = ({data}) => {
  const navigation = useNavigation<NavigationProps>()
  const appContext = useContext(AppContext)

  return (
    <TouchableOpacity style={styles.item}>
      <ImageBackground
        source={{uri: data.img}}
        resizeMode="contain"
        style={styles.img}
      />
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.anons}>{data.anons}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="TabNavigation"
          onPress={() => {
            navigation.navigate('TabNavigation', {
              screen: 'FullInfo',
              params: {data},
            })
            appContext?.setNews(data)
          }}
        />
        <Button
          title="DrawerNavigation"
          onPress={() => {
            navigation.navigate('DrawerNavigation', {
              screen: 'FullInfo',
              params: {data},
            })
            appContext?.setNews(data)
          }}
        />
      </View>
    </TouchableOpacity>
  )
}

export default NewsItem

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747',
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747',
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

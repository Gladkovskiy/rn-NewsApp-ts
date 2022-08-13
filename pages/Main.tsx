import {Ionicons} from '@expo/vector-icons'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import React, {FC, useState} from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import {newsArr} from '../assets/news'
import AddNews from '../components/AddNews'
import {RootStackParamList} from '../components/AppRouter'
import NewsItem from '../components/NewsItem'
import {gStyle} from '../styles/style'
import {INews, INewsDescription} from '../types/news'

//можно так описывать тип пропсов для получения navigate и route, а можно пользоваться хуками с типами useRout useNavigation
type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>

const Main: FC<MainProps> = ({navigation}) => {
  const [news, setNews] = useState<INews[]>(newsArr)
  const [isVisible, setIsVisible] = useState(false)

  const addNews = (data: INewsDescription) => {
    const key = (news.length + 1).toString()
    setNews([...news, {...data, key}])
  }

  return (
    <View style={gStyle.main}>
      <AddNews
        visible={isVisible}
        setVisible={setIsVisible}
        addNews={addNews}
      />
      <View style={styles.iconAdd}>
        <Ionicons
          name="add-circle-sharp"
          size={34}
          color="tomato"
          onPress={() => setIsVisible(true)}
        />
      </View>
      <Text style={[gStyle.title, styles.header]}>Главная страница</Text>

      <FlatList
        data={news}
        renderItem={({item}) => <NewsItem data={item} />}
        keyExtractor={item => item.key}
      />
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginVertical: 25,
  },
  iconAdd: {
    alignItems: 'center',
    marginVertical: 15,
  },
})

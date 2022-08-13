import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import React, {FC} from 'react'
import {Text, View, ImageBackground, StyleSheet} from 'react-native'
import {gStyle} from '../styles/style'
import {RootStackParamList} from '../components/AppRouter'

type FullInfoProps = NativeStackScreenProps<RootStackParamList, 'FullInfo'>

const FullInfo: FC<FullInfoProps> = ({route}) => {
  const {
    params: {data},
  } = route

  return (
    <View>
      <ImageBackground
        source={{uri: data.img}}
        resizeMode="contain"
        style={styles.img}
      />
      <Text style={gStyle.title}>{data.name}</Text>
      <Text style={styles.full}>{data.full}</Text>
    </View>
  )
}

export default FullInfo

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
  },
  full: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#f55151',
  },
})

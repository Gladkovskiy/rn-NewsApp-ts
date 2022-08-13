import React, {FC, useContext} from 'react'
import {Text} from 'react-native'
import {AppContext} from '../context/Appcontext'

const Page1: FC = () => {
  const data = useContext(AppContext)

  return <Text>{data?.data.anons}</Text>
}

export default Page1

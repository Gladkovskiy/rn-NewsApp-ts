import React, {FC, useContext} from 'react'
import {Text} from 'react-native'
import {AppContext} from '../context/Appcontext'

const Page2: FC = () => {
  const data = useContext(AppContext)

  return <Text>{data?.data.full}</Text>
}

export default Page2

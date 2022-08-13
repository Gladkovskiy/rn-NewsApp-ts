import {RouteProp} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamList} from '../components/AppRouter'

//для useNavigate type
export type NavigationProps = StackNavigationProp<RootStackParamList>

//для useRoute экран FullInfo
export type FullInfoRouteProp = RouteProp<RootStackParamList, 'FullInfo'>

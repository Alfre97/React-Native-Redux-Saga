import { createStackNavigator } from 'react-navigation'
import Login from '../login/login.component'
import Home from '../home/home.component'

export default Navigator = createStackNavigator(
  {
    home: Home,
    login: Login,
  },
  {
    initialRouteName: 'login',
    navigationOptions: { header: null }
  }
)


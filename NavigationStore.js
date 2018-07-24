import { observable, action } from 'mobx';
import {createStackNavigator} from 'react-navigation'
import Login from './Login'
import Home from 'ProfileModule'

export const AppNavigator = createStackNavigator({
    Login: {screen: Login},
    Home: {screen: Home}
  }
  , {
    // initialRouteName: 'Home',
    // navigationOptions: {
    //   header: ({state}) => {
    //     return {title: state.params && state.params.title}
    //   }
    // }
  })

export default class NavigationStore {
    @observable headerTitle = "Login"
    @observable.ref navigationState = {
      index: 0,
      routes: [
        { key: "Login", routeName: "Login" },
      ],
    }
  
    @action dispatch = (action, stackNavState = true) => {
      const previousNavState = stackNavState ? this.navigationState : null;
      return this.navigationState = AppNavigator
          .router
          .getStateForAction(action, previousNavState);
    }

    @observable username = ''
    @observable password = ''
    @observable token = ''

    @action login() {
        this.token = 'abcde'
    }

    @action setUsername(username) {
        this.username = username
    }

    @action setPassword(password) {
        this.password = password
    }
  }


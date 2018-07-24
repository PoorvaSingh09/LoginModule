
import React, {Component} from 'react';
import { Provider, observer} from 'mobx-react';

import NavigationStore, {AppNavigator} from './NavigationStore';
import LoginStore from './LoginStore';

@observer
export default class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.store = new NavigationStore()
    this.loginStore = new LoginStore()
  }

  render() {
    return (
      <Provider loginStore = {this.loginStore}>
      <AppNavigator navigation={{
        dispatch: this.store.dispatch,
        state: this.store.navigationState,
        addListener: () => { /* left blank */ }
      }}/>
      </Provider>
    )
  }
};
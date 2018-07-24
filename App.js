
import React, {Component} from 'react';
import { Provider, observer} from 'mobx-react';

import NavigationStore, {AppNavigator} from './NavigationStore';

@observer
export default class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.store = new NavigationStore()
  }

  render() {
    return (
      <Provider navigationStore = {this.store}>
      <AppNavigator navigation={{
        dispatch: this.store.dispatch,
        state: this.store.navigationState,
        addListener: () => { /* left blank */ }
      }}/>
      </Provider>
    )
  }
};
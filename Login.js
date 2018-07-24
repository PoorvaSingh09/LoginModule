
import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {observer, inject} from 'mobx-react'

@inject("navigationStore")
@observer
export default class Login extends Component {

  render() {
      const {navigate, state, setParams} = this.props.navigation
    return (
        <View>
            {/* <Text>test</Text> */}
        <Text>Username:</Text>
        <TextInput 
            onChangeText={(text)=>this.props.navigationStore.setUsername(text)}
        />
        <Text>Password:</Text>
        <TextInput 
            onChangeText={(text)=>this.props.navigationStore.setPassword(text)}
        />
        <TouchableOpacity
            onPress={() => {
                this.props.navigationStore.login()
                navigate("Home", {title: "Home", parentKey: state.key})
            }}
        >
        <Text>Login</Text>
        </TouchableOpacity>
      </View>      
    )
  }
}

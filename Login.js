
import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {observer, inject} from 'mobx-react'

@inject("loginStore")
@observer
export default class Login extends Component {

  render() {
      const {navigate, state, setParams} = this.props.navigation
    return (
        <View>
        <Text>Username:</Text>
        <TextInput 
            onChangeText={(text)=>this.props.loginStore.setUsername(text)}
        />
        <Text>Password:</Text>
        <TextInput 
            onChangeText={(text)=>this.props.loginStore.setPassword(text)}
        />
        <TouchableOpacity
            onPress={() => {
                this.props.loginStore.login()
                navigate("Home", {title: "Home", parentKey: state.key})
            }}
        >
        <Text>Login</Text>
        </TouchableOpacity>
      </View>      
    )
  }
}

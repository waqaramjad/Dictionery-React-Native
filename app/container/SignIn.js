'use strict';
import React, {Component} from "react";
// import {Text, View, Dimensions} from "react-native";
import { StyleSheet, View, TouchableOpacity, Dimensions, StatusBar, Image, Text, Button, Modal } from 'react-native';

import {Actions} from "react-native-router-flux";
import styles from "./styles";
import {ButtonRoundBlue, IconInput}  from "@controls";
import { Navigator } from 'react-native-deprecated-custom-components'
import firebase from 'firebase';
import { StackNavigator } from 'react-navigation';


export default class SignIn extends Component {
 
  constructor(props){
		super(props)
		this.state={
			userEmail:'',
			userPassword:''
		}
	}

	 signinAction = () => {
    // return dispatch => {
			const {userEmail,userPassword} = this.state;

			console.log('done')
        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
            .then((signedinUser) => {
							alert('Login Success')
							this.props.prop.navigator.push({
								title: 'home'
						})
							console.log('done 2')

            }).catch((err)=>{
              console.log(err)
							alert(err.message)
						})

    // }

}



check= () =>{

	this.props.prop.navigator.push({
		title: 'home'
})
}
 

	
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: -15}}>
          <IconInput 	onChangeText={userEmail => this.setState({userEmail})}
 placeholder="Username" image={require("@images/icon-user.png")}/>

          <IconInput   secureTextEntry={true}	onChangeText={userPassword => this.setState({userPassword})}
 placeholder="Password" image={require("@images/icon-password.png")}/>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginTop: 10, marginBottom: 10}}>
          <Text style={{color: '#aaa', marginRight: 5, fontSize: 12}}>
            Forgot Password?
          </Text>
        </View>

        <ButtonRoundBlue text="Enter" onPress={() => this.check()}
/>
      </View>
    );
  }
}
'use strict';
import React, {Component} from "react";
// import {Text, View, Dimensions} from "react-native";
import { StyleSheet, View, TouchableOpacity, Dimensions, StatusBar, Image, Text, Button, Modal } from 'react-native';

import {Actions} from "react-native-router-flux";
import styles from "./styles";
import {ButtonRoundBlue, IconInput}  from "@controls";
import { Navigator } from 'react-native-deprecated-custom-components'

export default class SignIn extends Component {
 
  constructor(props){
		super(props)
		this.state={
			userEmail:'',
			userPassword:''
		}
	}

 
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: 'Username',
  //     password: '',
  //     visibleHeight: Dimensions.get('window').height,
  //     scroll: false
  //   };
  // }

	login = () =>{
		const {userEmail,userPassword} = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(userEmail==""){
			//alert("Please enter Email address");
		  this.setState({email:'Please enter Email address'})
			
		}
		
		else if(reg.test(userEmail) === false)
		{
		//alert("Email is Not Correct");
		this.setState({email:'Email is Not Correct'})
		return false;
		  }

		else if(userPassword==""){
		this.setState({email:'Please enter password'})
		}
		else{
		
console.log(JSON.stringify({
	// we will pass our input data to server
	email: userEmail,
	password: userPassword
}))

		fetch('https://hardeepwork.000webhostapp.com/react/login.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				email: userEmail,
				password: userPassword
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == "ok"){
				 // redirect to profile page
				 alert("Successfully Login");
				//  this.props.navigation.navigate("Profile");
				this.props.prop.navigator.push({
					title: 'Main'
			})
		
			 }else{
				 alert("Wrong Login Details");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		
		
		// Keyboard.dismiss();
	}

	check=()=>{
console.log(this.props)
		this.props.prop.navigator.push({
			title: 'Main'
	})

	}


  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: -15}}>
          <IconInput 	onChangeText={userEmail => this.setState({userEmail})}
 placeholder="Username" image={require("@images/icon-user.png")}/>

          <IconInput 	onChangeText={userPassword => this.setState({userPassword})}
 placeholder="Password" image={require("@images/icon-password.png")}/>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginTop: 10, marginBottom: 10}}>
          <Text style={{color: '#aaa', marginRight: 5, fontSize: 12}}>
            Forgot Password?
          </Text>
        </View>

        <ButtonRoundBlue text="Enter" onPress={() => this.login()}
/>
      </View>
    );
  }
}

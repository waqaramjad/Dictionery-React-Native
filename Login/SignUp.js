'use strict';

import React, {Component} from "react";
import {Text, View, ScrollView, TouchableOpacity} from "react-native";
import styles from "./styles";
import {ButtonRoundBlue, IconInput} from "@controls";
import {Actions} from "react-native-router-flux";

export default class SignUp extends Component {

	constructor(props){
		super(props)
		this.state={
			userName:'',
			userEmail:'', 
			userPassword:''				
		}
	}


  userRegister = () =>{
		//alert('ok'); // version 0.48
		
		const {userName} = this.state;
		const {userEmail} = this.state;
		const {userPassword} = this.state;
		
		
		fetch('https://hardeepwork.000webhostapp.com/react/register.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				name: userName,
				email: userEmail,
				password: userPassword,
			})
			
		})
		// .then((response) => response.json())

			.then((responseJson) =>{
				console.log('hy '+ responseJson)
				this.refs.Name.value = '';
				this.refs.Email.value = '';
				this.refs.Password.value = '';
		
				// this.setState({
				// 	userName:'',
				// 	userEmail:'', 
				// 	userPassword:''	
				// })

				// alert(responseJson);
			})
			.catch((error)=>{
				console.log('hy '+ responseJson)

				this.refs.Name.value = '';
				this.refs.Email.value = '';
				this.refs.Password.value = '';

			+98	// console.error(error);
			});
		
	}
	// const styles = StyleSheet.create({
	// 	container: {
	// 		flex: 1,
	// 		justifyContent: 'center',
	// 		alignItems: 'center',
	// 		backgroundColor: '#F5FCFF',
	// 	},
	// 	welcome: {
	// 		fontSize: 20,
	// 		textAlign: 'center',
	// 		margin: 10,
	// 	},
	// 	instructions: {
	// 		textAlign: 'center',
	// 		color: '#333333',
	// 		marginBottom: 5,
	// 	},
	// });
	 




  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{marginTop: -20}}>
            <IconInput   onChangeText= {userName => this.setState({userName})}
 placeholder="Name" ref='Name' image={require("@images/icon-password.png")}/>

            <IconInput 	  onChangeText= {userEmail => this.setState({userEmail})}
            placeholder="Email" ref='Email' image={require("@images/icon-email.png")}/>

            <IconInput placeholder="Phone" image={require("@images/icon-phone.png")}/>
            
            <IconInput ref='Password' onChangeText= {userPassword => this.setState({userPassword})} placeholder="Password" image={require("@images/icon-password.png")}/>
          </View>
          <ButtonRoundBlue
           onPress={this.userRegister}
            text="osidjoiRegistration"/>

          <Text style={{color: 'white', opacity: 0.7, marginRight: 5, fontSize: 15}}>
            already have an account
          </Text>
          <TouchableOpacity onPress={this.userRegister} style={{alignSelf: 'flex-end', marginRight: 15}}>
            <Text style={styles.registerLink}>
              Sign in now
            </Text>
          </TouchableOpacity>

          <Text style={{color: '#aaa', textAlign: 'center', padding: 12}}>
            By clicking "Registration" I agree to BeoUI <Text style={{color: '#3071D0'}}>Terms of Service</Text>
          </Text>

        </View>
      </ScrollView>
    );
  }
}

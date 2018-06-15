'use strict';

import React, {Component} from "react";
import {Text, View, ScrollView, TouchableOpacity} from "react-native";
import styles from "./styles";
import {ButtonRoundBlue, IconInput} from "@controls";
import {Actions} from "react-native-router-flux";
import firebase from 'firebase'
export default class SignUp extends Component {
  constructor(props){
		super(props)
		this.state={
			userName:'',
			userEmail:'', 
			userPassword:''				
		}
	}



   signupAction = () => {
    let uid ;
        const {userName} = this.state;
        const {userEmail} = this.state;
        const {userPassword} = this.state;

        console.log(userName)
    
  
        var obj = {
  
          name : userName,
          mail : userEmail,
          pass : userPassword
        }
  
        firebase.auth().createUserWithEmailAndPassword(userEmail,userPassword)
            .then((createdUser) => {
                alert('signed up successfully');
  
                firebase.database().ref('users/'  ).set(obj)
                    .then(() => {
                    })
  
  
            }).catch((err)=>{
              console.log(err)
              alert(err.message)
              
          })
  
  }
// }






  
 
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{marginTop: -20}}>
            <IconInput   onChangeText= {userName => this.setState({userName})}
 placeholder="Name" image={require("@images/icon-password.png")}/>

            <IconInput 	  onChangeText= {userEmail => this.setState({userEmail})}
            placeholder="Email" image={require("@images/icon-email.png")}/>

           
            
            <IconInput secureTextEntry={true}  onChangeText= {userPassword => this.setState({userPassword})} placeholder="Password" image={require("@images/icon-password.png")}/>
          </View>
          <ButtonRoundBlue
           onPress={this.signupAction}
            text="Registration"/>

          <Text style={{color: 'white', opacity: 0.7, marginRight: 5, fontSize: 15}}>
            already have an account
          </Text>
          <TouchableOpacity  style={{alignSelf: 'flex-end', marginRight: 15}}>
            <Text style={styles.registerLink}>
              Sign in now
            </Text>
          </TouchableOpacity>

          <Text style={{color: '#aaa', textAlign: 'center', padding: 12}}>
            By clicking "Registration" I agree  <Text style={{color: '#3071D0'}}>Terms of Service</Text>
          </Text>

        </View>
      </ScrollView>
    );
  }
}
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  
  NetInfo
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import Home from './app/container/home'

// import SignIn from './SignIn'
// import MainScene from './app/components/mainScene'
// import WordFeed from './app/components/words'
// import Search from './app/components/search'
// import NoConnection from './app/components/noInternet'
import Login from './app/components/loginSignup'

export default class UrbanDictionary extends Component {
  render() {
          return (
            <Navigator
              initialRoute={{ title: 'Login', index: 0 }}
              configureScene={(route, routeStack) => {
                if(route.title === 'Search'){
                return Navigator.SceneConfigs.FloatFromBottom
              }else{
                return Navigator.SceneConfigs.FloatFromRight
                }
              }}


            


              renderScene={(route, navigator) => {

              if(route.title === 'Login'){
                return(
                  <Login
                  navigator={navigator}
                  
                  />
                  );
                }


              if(route.title === 'home'){
                return(
                  <Home
                  navigator={navigator}
                  
                  />
                  );
                }

              // if(route.title === 'WoTD_2'){
              //   return(
              //   <WordFeed 
              //     title={'Word of the Day'}
              //     feedURL={'https://api.urbandictionary.com/v0/words_of_the_day'}
              //     onBack={() => {
              //           navigator.pop()
              //       }} 
              //     />
              //     );
              //   }

              // if(route.title === 'Random'){
              //   return(
              //   <WordFeed 
              //     title={'Random'}
              //     feedURL={'https://api.urbandictionary.com/v0/random'}
              //     onBack={() => {
              //           navigator.pop()
              //       }} 
              //     />
              //     );
              //   }
              // if(route.title === 'Search'){
              //   return(
              //   <Search 
              //     navigator={navigator}
              //     title={'Search'}
              //     title={'Random'}
              //     onBack={() => {
              //           navigator.pop()
              //       }} 
              //     />
              //     );
              //   }
                }
              }
              />
      );
        }
      }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('UrbanDictionary', () => UrbanDictionary);

// 'use strict';
// import React, {Component} from "react";
// import {View, Image, TouchableOpacity, Dimensions,} from "react-native";
// import {Actions} from "react-native-router-flux";
// import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import css from "@styles/style";

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       visibleHeight: Dimensions.get('window').height,
//       scroll: false
//     };
//   }

//   render() {
//     const toolbar = (
//       <View style={[css.toolbarMenu]}>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <TouchableOpacity onPress={Actions.product}>
//             <Image source={require('@images/icon-back.png')}
//                    style={[css.imageIconLarge, {marginLeft: 8, width: 14}]}/>
//           </TouchableOpacity>
//         </View>

//         <View style={css.rowCenter}>
//           <Image style={css.logo} source={require('@images/beologo.png')}/>
//         </View>

//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <TouchableOpacity onPress={Actions.cart}>
//             <Image source={require('@images/icon-bag.png')}
//                    style={[css.imageIconLarge, {marginRight: 8}]}/>
//           </TouchableOpacity>
//         </View>
//       </View>
//     )
//     return (
//       <View style={css.layout}>
//         {toolbar}
//         <ScrollableTabView
//           initialPage={0}
//           locked={false}
//           tabBarUnderlineStyle={ {height: 2, backgroundColor: "#1CAADE"}  }

//           tabBarActiveTextColor={"#393838"}
//           tabBarInactiveTextColor={"#B8B8B8"}
//           tabBarTextStyle={{fontWeight: 'normal', fontSize: 14}}
//           style={{backgroundColor: '#ffff'}}
//           contentProps={{backgroundColor: '#ffff', marginTop: 0}}
//           renderTabBar={() => <ScrollableTabBar
//             underlineHeight={3}
//             style={{borderBottomColor: '#eee'}}
//             tabsContainerStyle={{paddingLeft: 30, paddingRight: 30}}
//             tabStyle={{paddingBottom: 0, borderBottomWidth: 0, paddingTop: 0, paddingLeft: 50, paddingRight: 50}}
//           />}
//         >
//           <SignIn tabLabel="Login"/>
//           <SignUp tabLabel="Sign Up"/>
//         </ScrollableTabView>
//       </View>
//     );
//   }
// }

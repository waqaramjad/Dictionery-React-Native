import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  
  NetInfo
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'

import SignIn from './SignIn'
import MainScene from './app/components/mainScene'
import WordFeed from './app/components/words'
import Search from './app/components/search'
import NoConnection from './app/components/noInternet'
import Login from './loginSignup'

export default class UrbanDictionary extends Component {
  render() {
          return (
            <Navigator
              initialRoute={{ title: 'Main', index: 0 }}
              configureScene={(route, routeStack) => {
                if(route.title === 'Search'){
                return Navigator.SceneConfigs.FloatFromBottom
              }else{
                return Navigator.SceneConfigs.FloatFromRight
                }
              }}


            


              renderScene={(route, navigator) => {
              //   if(route.title === 'Main'){
              //     return (
              //       <SignIn navigator={navigator} 
              //       onPresentSearch={() => {
              //         navigator.push({
              //           title:'Search'
              //         });
              //       }}
                    
              //       />
                  
              //    );
              // }
     

                if(route.title === 'Main'){
                  return (

                  
                  <MainScene navigator={navigator}
                  


                  
                    onPresentSearch={() => {
                      navigator.push({
                        title:'Search'
                      });
                    }}

                  />);
              }

              if(route.title === 'WoTD'){
                return(
                <WordFeed 
                  title={route.search}
                  feedURL={'https://api.urbandictionary.com/v0/define?term='+route.search}
                  onBack={() => {
                        navigator.pop()
                    }} 
                  />
                  );
                }
              if(route.title === 'Login'){
                return(
                  <Login
                  navigator={navigator}
                    onPresentSearch={() => {
                      navigator.push({
                        title:'Search'
                      });
                    }}
                  
                  />
                  );
                }
              if(route.title === 'WoTD_2'){
                return(
                <WordFeed 
                  title={'Word of the Day'}
                  feedURL={'https://api.urbandictionary.com/v0/words_of_the_day'}
                  onBack={() => {
                        navigator.pop()
                    }} 
                  />
                  );
                }

              if(route.title === 'Random'){
                return(
                <WordFeed 
                  title={'Random'}
                  feedURL={'https://api.urbandictionary.com/v0/random'}
                  onBack={() => {
                        navigator.pop()
                    }} 
                  />
                  );
                }
              if(route.title === 'Search'){
                return(
                <Search 
                  navigator={navigator}
                  title={'Search'}
                  title={'Random'}
                  onBack={() => {
                        navigator.pop()
                    }} 
                  />
                  );
                }
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

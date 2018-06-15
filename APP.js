import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,

  NetInfo
} from 'react-native';
import {
  Navigator
} from 'react-native-deprecated-custom-components'
import Home from './app/container/home'
import Login from './app/components/loginSignup'

export default class UrbanDictionary extends Component {
  render() {
    return ( <
      Navigator initialRoute = {
        {
          title: 'Login',
          index: 0
        }
      }
      configureScene = {
        (route, routeStack) => {
          if (route.title === 'Search') {
            return Navigator.SceneConfigs.FloatFromBottom
          } else {
            return Navigator.SceneConfigs.FloatFromRight
          }
        }
      }





      renderScene = {
        (route, navigator) => {

          if (route.title === 'Login') {
            return ( <
              Login navigator = {
                navigator
              }

              />
            );
          }


          if (route.title === 'home') {
            return ( <
              Home navigator = {
                navigator
              }

              />
            );
          }


        }
      }
      />
    );
  }
}

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
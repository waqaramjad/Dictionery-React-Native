import {
  AppRegistry,
} from 'react-native'
import {
  Dictionary
} from './src/Dictionary'


export default  class DictionaryNative extends Dictionary {}

AppRegistry.registerComponent('DictionaryNative', () => DictionaryNative)



import {
    createAppContainer,
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './splash'
import App from '../App'

const MainNavigator = createStackNavigator({
    Splash: {screen:Splash},
    App: {screen:App},
},{
    headerMode:'none',
    navigationOptions:{
        headerVisible: false,
    }
});

export default createAppContainer(
    MainNavigator
);
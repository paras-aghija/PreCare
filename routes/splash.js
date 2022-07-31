import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';

const splash = (props) => {
    return (
        <View
        style={{
            flex:1,
            backgroundColor:'#0f0f0f'
        }}
        >
            <LottieView
            resizeMode="cover"
            style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '60%',
                marginTop:'50%',
                marginBottom:'50%',
            }}
            source={require('../assets/splash.json')}
             autoPlay loop 
             onAnimationFinish={()=>{
                 console.log('finish animation');
                 props.navigation.navigate('App')
             }}
             />
        </View>
    )
}

export default splash
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image,ToastAndroid } from 'react-native';
import { useState } from 'react'
import * as SecureStore from 'expo-secure-store';
import axios from 'axios'

const Login = (props) => {
  const [uname, setUname] = useState('')
  const [pwd, setPwd] = useState('')


  const login = () => {
    axios.post("https://minor-backend-2.herokuapp.com/api/login",
    {
      "email":uname,
      "password":pwd
    }
    ).then(async (res)=> {
      console.log(res);
      props.setUser(res.data)
      await SecureStore.setItemAsync('secure_token',JSON.stringify(res.data));
      // console.log(token);
      // props.setUser("gautam")
    }).catch(
      err=>{
        console.log(err)
        ToastAndroid.show("Error occured!",ToastAndroid.SHORT)
      }
    )
  }    
    return (
      <View style={styles.container}>
        {/* <Text style={styles.logo}>Health App</Text> */}
        <Image style={styles.img} source={require('./assets/banner.png')}/>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#fff"
            value = {uname}
            onChangeText={val => setUname(val)}
          />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#fff"
            onChangeText={val => setPwd(val)}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={()=>login()}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.authToggler('signup')}
        >
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
   justifyContent:'center',
   height:80,
   width:270,
   marginBottom:50,
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});

export default Login
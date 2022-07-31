import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/drawer';
import * as SecureStore from 'expo-secure-store';
import Signup from './Signup';
import Login from './Login';
import Splash from './routes/splash'

export default function App() {
  const [user, setUser] = useState(null);
  const [authType, setAuthType] = useState('login')

  useEffect(() => {
    const getUser  = async () => {
    const token = SecureStore.getItemAsync('secure_token');
    console.log(token);
  }
  getUser()
  }, [])



  if(user===null){
    return (authType==='login') ? 
    <Login setUser={setUser} authToggler={setAuthType}/>
     : <Signup setUser={setUser} authToggler={setAuthType}/>
  }
  console.log(authType)
  
  return (
       <Navigator/>
  );
}

import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import * as React from 'react'
import { useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';
import { Picker } from '@react-native-picker/picker';
// import {DocumentPicker,DocumentPickerUtil} from 'react-native-document-picker'
import * as DocumentPicker from 'expo-document-picker'
import { color } from 'react-native-reanimated';
import Axios from 'axios'
const HomeScreen = ({ navigation }) => {

  const [typeFile, setTypeFile] = useState(0);

 
   const openDoc = async ()=>{
    const result = await DocumentPicker.getDocumentAsync({});
    if(result.type==='success'){
      alert('Succesfully Uploaded!')
    }
    console.log(result.type);
    console.log(typeof(result));
    const formData = new FormData()
    formData.append('file',result)
    Axios.post('https://minor-backend-2.herokuapp.com/file/upload',formData)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
   }
  return (
    <View style={styles.container}>

        <Text style={styles.logoHealth}>Health Report</Text>
        <View style={styles.inputViewUpload}>
        <Picker style={{color:'white'}}
        selectedValue={typeFile}
        onValueChange={(itemValue, itemIndex) => setTypeFile(itemValue)} >
          <Picker.Item label="Choose disease type" value={0} />
          <Picker.Item label="Heart Disease" value={1} />
          <Picker.Item label="Obesity" value={2} />
          <Picker.Item label="Cancer" value={3} />
          <Picker.Item label="Diabetic" value={4} />
        </Picker>
      </View>

      <TouchableOpacity style={styles.loginBtnUpload}
       onPress={ ()=>{
          openDoc()
       }}>
        <Text style={styles.loginText}>UPLOAD FILE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtnUpload}
       onPress={ ()=>{
       }}>
        <Text style={styles.loginText}>SUBMIT FILE</Text>
      </TouchableOpacity>


      <Text style={styles.logo}>Disease Predictions</Text>

      <TouchableOpacity style={styles.loginBtn}
        onPress={() => navigation.navigate('Heart Disease Prediction')}
      >
        <Text style={styles.loginText}>HEART DISEASE PREDICTION</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}
        onPress={() => navigation.navigate('Obesity Prediction')}
      >
        <Text style={styles.loginText}>OBESITY PREDICTION</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}
      >
        <Text style={styles.loginText}>DIABETIC DETECTION</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}
       onPress={() => navigation.navigate('Emergency Screen')}
      >
        <Text style={styles.loginText}>EMERGENCY BUTTON</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#171818',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100
  },
  logo:{
    fontWeight:"bold",
    fontSize:30,
    color:"#fb5b5a",
    marginBottom:20,
    marginTop:10,
  },
  logoHealth:{
    fontWeight:"bold",
    fontSize:30,
    color:"#32a852",
    marginBottom:20
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:25
  },
  loginBtnUpload:{
    width:"80%",
    backgroundColor:"#32a852",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:20
  },
  loginText:{
    color:"white",
    fontWeight:'bold'
  },
  inputViewUpload: {
    width: '80%',
    fontWeight:'bold',
    backgroundColor: '#32a852',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
});

export default HomeScreen
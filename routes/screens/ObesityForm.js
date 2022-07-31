import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import {useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import Axios from 'axios'


const Form1 = (props) => {
// dopdown menus
// dropdown states

  const [age, setAge] = useState('')
  const [sex, setSex] = useState(2)
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [fhwo, setFhwo] = useState(2)
  const [favc, setFavc] = useState(2)
  const [fcvc, setFcvc] = useState('')
  const [ncp, setNcp] = useState('')
  const [caec, setCaec] = useState(4)
  const [smoke, setSmoke] = useState(2)
  const [ch20, setCh20] = useState('')
  const [scc, setScc] = useState(2)
  const [faf, setFaf] = useState('')
  const [tue, setTue] = useState('')
  const [calc, setCalc] = useState(4)
  const [mtrans, setMtrans] = useState(5)

  const handleSubmit = () => {
    const values = [sex,Number(age),Number(height),Number(weight),fhwo,favc,Number(fcvc),Number(ncp),caec,smoke,Number(ch20),scc,Number(faf),Number(tue),calc,mtrans];
    const sample = {
        data:values,
    };

    console.log(sample);
    Axios.post('https://minor-prediction.herokuapp.com/pred2/',
    sample
    ).then(response=>{console.log(response.data)
        props.navigation.navigate('Result',{result:response.data.Prediction,type:"Obesity Prediction"});
    }).catch(error=>(console.log(error.response.data)))
  }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.logo}>Obesity Disease</Text>
        <View style={styles.inputView} >
          <Picker
            selectedValue={sex}
            onValueChange={(itemValue, itemIndex) =>
              setSex(itemValue)
            }>
            <Picker.Item label="Gender" value={2} />
            <Picker.Item label="Male" value={0} />
            <Picker.Item label="Female" value={1} />
          </Picker>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Age..." 
            placeholderTextColor="#003f5c"
            value={age}
            onChangeText={setAge}
          />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Height..." 
            placeholderTextColor="#003f5c"
            value={height}
            onChangeText={setHeight}
          />
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Weight..." 
            placeholderTextColor="#003f5c"
            value={weight}
            onChangeText={setWeight}
          />
        </View>
        <View style={styles.inputView} >
          <Picker
            selectedValue={fhwo}
            onValueChange={(itemValue, itemIndex) =>
              setFhwo(itemValue)
            }
            >
            <Picker.Item label="Family History with overweight" value={2} />
            <Picker.Item label="Yes " value={0} />

            <Picker.Item label="No" value={1} />
          </Picker>
        </View>

        <View style={styles.inputView} >
          <Picker
            selectedValue={favc}
            onValueChange={(itemValue, itemIndex) =>
              setFavc(itemValue)
            }
            >
            <Picker.Item label="FAVC" value={2} />
            <Picker.Item label="Yes " value={0} />

            <Picker.Item label="No" value={1} />
          </Picker>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="FCVC" 
            placeholderTextColor="#003f5c"
            value={fcvc}
            onChangeText={setFcvc}
          />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="NCP" 
            placeholderTextColor="#003f5c"
            value={ncp}
            onChangeText={setNcp}
          />
        </View>
        <View style={styles.inputView} >
          <Picker
            selectedValue={caec}
            onValueChange={(itemValue, itemIndex) =>
              setCaec(itemValue)
            }
            >
            <Picker.Item label="CAEC" value={4} />
            <Picker.Item label="Sometimes" value={0} />
            <Picker.Item label="Frequently" value={1} />
            <Picker.Item label="Always" value={2} />
            <Picker.Item label="No" value={3} />
          </Picker>
        </View>

        <View style={styles.inputView} >
          <Picker
            selectedValue={smoke}
            onValueChange={(itemValue, itemIndex) =>
              setSmoke(itemValue)
            }
            >
            <Picker.Item label="Smoke..." value={2} />
            <Picker.Item label="Yes" value={1} />
            <Picker.Item label="No" value={0} />
          </Picker>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="CH20" 
            placeholderTextColor="#003f5c"
            value={ch20}
            onChangeText={setCh20}
          />
        </View>

        <View style={styles.inputView} >
          <Picker
            selectedValue={scc}
            onValueChange={(itemValue, itemIndex) =>
              setScc(itemValue)
            }>
            <Picker.Item label="SCC" value={2} />
            <Picker.Item label="Yes" value={1} />
            <Picker.Item label="No" value={0} />
          </Picker>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="FAF" 
            placeholderTextColor="#003f5c"
            value={faf}
            onChangeText={setFaf}
          />
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="TUE" 
            placeholderTextColor="#003f5c"
            value={tue}
            onChangeText={setTue}
          />
        </View>

        <View style={styles.inputView} >
          <Picker
            selectedValue={calc}
            onValueChange={(itemValue, itemIndex) =>
              setCalc(itemValue)
            }
            >
            <Picker.Item label="CALC" value={4} />
            <Picker.Item label="Sometimes" value={0} />
            <Picker.Item label="Frequently" value={2} />
            <Picker.Item label="Always" value={3} />
            <Picker.Item label="No" value={1} />
          </Picker>
        </View>

        <View style={styles.inputView} >
          <Picker
            selectedValue={mtrans}
            onValueChange={(itemValue, itemIndex) =>
              setMtrans(itemValue)
            }>
            <Picker.Item label="MTRANS" value={5} />
            <Picker.Item label="Automobile" value={1} />
            <Picker.Item label="Motorbike" value={3} />
            <Picker.Item label="Bike" value={4} />
            <Picker.Item label="Public transportation" value={0} />
            <Picker.Item label="Walking" value={2} />
          </Picker>
        </View>

        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={ () => handleSubmit() }
        >
          <Text style={styles.loginText}>SUBMIT</Text>
        </TouchableOpacity>

  
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  logo:{
    fontWeight:"bold",
    fontSize:40,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#6fd2ed",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
  },
  inputText:{
    height:50,
    color:"black"
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

export default Form1
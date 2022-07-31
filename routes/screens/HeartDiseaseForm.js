import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Axios from 'axios';

const Form1 = (props) => {
  // dopdown menus

  // dropdown states

  const [age, setAge] = useState('54');
  const [sex, setSex] = useState(1);
  const [cpe, setCpe] = useState(0);
  const [restBp, setRestBp] = useState('140');
  const [chol, setChol] = useState('239');
  const [fastBs, setFastBs] = useState(0);
  const [restECG, setRestECG] = useState(1);
  const [mhr, setMhr] = useState('160');
  const [exang, setExang] = useState(0);
  const [oldPeak, setOldPeak] = useState('1.2');
  const [slope, setSlope] = useState(2);
  const [ca, setCa] = useState(0);
  const [thal, setThal] = useState(2);
  const [target, setTarget] = useState(2);

  const handleSubmit = () => {
    console.log(age);
    console.log(sex);
    console.log(cpe);
    console.log(restBp);
    console.log(chol);
    console.log(fastBs);
    console.log(restECG);
    console.log(mhr);
    console.log(exang);
    console.log(oldPeak);
    console.log(slope);
    console.log(ca);
    console.log(thal);
    console.log(target);
    const values = [
      Number(age),
      sex,
      cpe,
      Number(restBp),
      Number(chol),
      fastBs,
      restECG,
      Number(mhr),
      exang,
      Number(oldPeak),
      slope,
      ca,
      thal,
    ];
    const sample = {
      data: values,
    };

    console.log(sample);
    Axios.post('https://minor-prediction.herokuapp.com/pred1/', sample)
      .then((response) => {
        console.log(response.data);
        props.navigation.navigate('Result', {
          result: response.data.Prediction,
          type: 'Heart Disease Prediction',
        });
      })
      .catch((error) => console.log(error.response.data));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>Heart Disease</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Age..."
          placeholderTextColor="#003f5c"
          value={age}
          onChangeText={setAge}
        />
      </View>

      <View style={styles.inputView}>
        <Picker
          selectedValue={sex}
          onValueChange={(itemValue, itemIndex) => setSex(itemValue)}>
          <Picker.Item label="Gender" value={0} />
          <Picker.Item label="Male" value={1} />
          <Picker.Item label="Female" value={2} />
        </Picker>
      </View>

      <View style={styles.inputView}>
        <Picker
          selectedValue={cpe}
          onValueChange={(itemValue, itemIndex) => setCpe(itemValue)}>
          <Picker.Item label="Chest Pain Experienced" value={4} />
          <Picker.Item label="Typical Angina" value={0} />
          <Picker.Item label="Atypical Angina" value={1} />
          <Picker.Item label="Non Anginal Pain" value={2} />
          <Picker.Item label="Asymptomatic" value={3} />
        </Picker>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Resting Blood Pressure (mm Hg)..."
          placeholderTextColor="#003f5c"
          value={restBp}
          onChangeText={setRestBp}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Cholestrol (mg/dl)..."
          placeholderTextColor="#003f5c"
          value={chol}
          onChangeText={setChol}
        />
      </View>
      <View style={styles.inputView}>
        <Picker
          selectedValue={fastBs}
          onValueChange={(itemValue, itemIndex) => setFastBs(itemValue)}>
          <Picker.Item label="Fasting Blood Sugar (>120 mg/dl)" value={2} />
          <Picker.Item label="Yes " value={1} />

          <Picker.Item label="No" value={0} />
        </Picker>
      </View>

      <View style={styles.inputView}>
        <Picker
          selectedValue={restECG}
          onValueChange={(itemValue, itemIndex) => setRestECG(itemValue)}>
          <Picker.Item label="Resting ECG " value={3} />

          <Picker.Item label="Normal" value={0} />
          <Picker.Item label="having ST-T wave abnormality" value={1} />
          <Picker.Item
            label="showing probable or definite left ventricular hypertrophy by Estes' criteria"
            value={2}
          />
        </Picker>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Max Heart Rate achieved..."
          placeholderTextColor="#003f5c"
          value={mhr}
          onChangeText={setMhr}
        />
      </View>

      <View style={styles.inputView}>
        <Picker
          selectedValue={exang}
          onValueChange={(itemValue, itemIndex) => setExang(itemValue)}>
          <Picker.Item label="Excercise induced angina" value={2} />
          <Picker.Item label="Yes" value={1} />
          <Picker.Item label="No" value={0} />
        </Picker>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="ST depression "
          placeholderTextColor="#003f5c"
          value={oldPeak}
          onChangeText={setOldPeak}
        />
      </View>

      <View style={styles.inputView}>
        <Picker
          selectedValue={slope}
          onValueChange={(itemValue, itemIndex) => setSlope(itemValue)}>
          <Picker.Item label="Slope ST segment " value={3} />
          <Picker.Item label="Upsloping" value={0} />
          <Picker.Item label="Flat" value={1} />
          <Picker.Item label="Downsloping" value={2} />
        </Picker>
      </View>

      <View style={styles.inputView}>
        <Picker
          selectedValue={ca}
          onValueChange={(itemValue, itemIndex) => setCa(itemValue)}>
          <Picker.Item label="No. of major vessels " value={4} />
          <Picker.Item label="0" value={0} />
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
        </Picker>
      </View>

      <View style={styles.inputView}>
        <Picker
          selectedValue={thal}
          onValueChange={(itemValue, itemIndex) => setThal(itemValue)}>
          <Picker.Item label="Thalassemia" value={0} />
          <Picker.Item label="normal" value={3} />
          <Picker.Item label="fixed defect" value={6} />
          <Picker.Item label="reversible defect" value={7} />
        </Picker>
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmit()}>
        <Text style={styles.loginText}>SUBMIT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#171818',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#6fd2ed',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default Form1;

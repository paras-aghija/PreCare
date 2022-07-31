import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import * as Progress from 'react-native-progress';
import CircularProgress from 'react-native-circular-progress-indicator';
import { color } from 'react-native-reanimated';



export default function Result1(props) {

const [prog,setProg] = useState(0);
useEffect(() => {
setProg(Math.round(Number(props.route.params.result)))
}, [props])

  // console.log(Number(Math.round(Number(props.route.params.result)))/100);
  // let prog = Math.round(Number(props.route.params.result));
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>{props?.route?.params?.type}</Text>
        {props?.route?.params?.type==="Heart Disease Prediction" ?
        // <Progress.Circle animated={true} borderWidth={3} size={200} indeterminate={false} showsText={true} color={"#fb5b5a"} thickness={10} progress={prog} />:
        <CircularProgress
        value={prog}
        valueSuffix={'%'}
        radius={130}
        textColor={'#ecf0f1'}
        activeStrokeColor={'#fb5b5a'}
        inActiveStrokeColor={'#9b59b6'}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={20}
        activeStrokeWidth={30}
        />:
        <Text style={styles.logo}>{props?.route?.params?.result}</Text>
        }
      </View>
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
      textAlign:'center',
      color:"#fb5b5a",
      marginBottom:150
    },
    inputView:{
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:80,
      marginBottom:20,
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
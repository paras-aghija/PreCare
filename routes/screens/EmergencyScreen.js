import React,{useEffect,useState,useRef,useMemo} from 'react'
import { StyleSheet, Text, View,FlatList,SafeAreaView,Pressable, Linking } from 'react-native'
import * as Location from 'expo-location'
import Axios from 'axios'
import ListItem from './ListItem'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {IoCall} from 'react-icons/io'
// import { Button } from 'react-native-paper'

const ListHeader = () => (
  <>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Hospitals Near You..</Text>
        </View>
      <View style={styles.divider}/>
  </>
)
const EmergencyScreen = () => {

    const [hospital,setHospital] = useState([]);
    const [error,setError] = useState(null);
    const bottomSheetModalRef = useRef(null);
    const [selectedHospitalData,setSelectedHospitalData] = useState(null);

    const openModal = (item) => {
      bottomSheetModalRef.current.present();
      setSelectedHospitalData(item)
     }
    
    const snapPoints = useMemo(() => ['40%'], []);
    useEffect(() => {
        let location
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setError('Permission to access location was denied');
            return;
          }
          location = await Location.getCurrentPositionAsync({});
          console.log(location)
    
          const lat = location.coords.latitude
          const lon = location.coords.longitude
          const url = `https://eu1.locationiq.com/v1/nearby.php?key=pk.4ec030a4cc8bb7c54b5c50976a7a2f47&lat=${lat}&lon=${lon}&tag=hospital&radius=10000&format=json&limit=50`
        
          // const res = await fetch(`https://eu1.locationiq.com/v1/nearby.php?key=pk.4ec030a4cc8bb7c54b5c50976a7a2f47&lat=28.5314443&lon=77.2544695&tag=hospital&radius=10000&format=json&limit=50`)
          // const hospitals = await res
          // console.log(hospitals)
          //   const response = await fetch(url)
          //   const posts = await response
          //   console.log(posts)
          Axios.get(url).then(res=>{setHospital(res.data)
          console.log(res);
          })
          .catch(err=>(setError(err)))
          // console.log(url);
        })();
      }, []);
    if(hospital===undefined || hospital.length===0){
      return(
        <View>
          <Text>
            Loading...!
          </Text>
        </View>
      )
    }
    return (
      <BottomSheetModalProvider>
        <View>
              {/* {
                 hospital && hospital?.map(h=>(
                   <Text key={h.place_id}>
                     {h.name}
                   </Text>
                 ))    
              } */}
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item)=> item.place_id}
        data={hospital}
        renderItem={({item})=>(
          <ListItem 
            name={item.name}
            logoUrl={"https://graphiccave.com/wp-content/uploads/2015/03/Red-Cross-PNG.png"}
            distance={item.distance}
            onPress={()=>{openModal(item)}}
        />
        )}
        ListHeaderComponent={<ListHeader/>}
      />
           </SafeAreaView>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          style={styles.bottomSheetWrapper}
           > 
          <View style={styles.wrapper}>
            <Text style={styles.hospitalName}>{selectedHospitalData?.name}</Text>
            <View style=  {styles.horizontalDiv}>
              <Text style={styles.address}>{selectedHospitalData?.display_name}</Text>
                 <View style={styles.distance}>
                 <Text style={styles.dist}>{selectedHospitalData?.distance}M</Text>
                 </View>
            </View>
            <View style={styles.horizontalDiv1}>
            <Pressable style={styles.btn1}>
              {/* <IoCall/> */}
            <Text style={styles.loginText}>Call</Text>
            </Pressable>
           <Pressable style={styles.btn2} onPress={()=> Linking.openURL(`google.navigation:q=${selectedHospitalData.lat}+${selectedHospitalData.lon}`)}>
           <Text style={styles.loginText}>Direction</Text>
           </Pressable>
          </View>
          </View>
        </BottomSheetModal>
         </View>
      </BottomSheetModalProvider>
    )
}

export default EmergencyScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171818',
  },
  largeTitle:{
    fontSize:24,
    color:'white',
    fontWeight:"bold",
  },
  titleWrapper:{
    marginTop:10,
    paddingHorizontal:24,
  },
  divider:{
  height: StyleSheet.hairlineWidth,
  backgroundColor: "#A9ABB1",
  marginHorizontal:16,
  marginTop:16,
  },
  bottomSheetWrapper:{
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:-4,
    },
    shadowOpacity:0.55,
    shadowRadius: 4,
    elevation: 5,
  },
  dist: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  distance: {
      backgroundColor: "#373739",
      width: '30%',
      borderRadius: 70,
      justifyContent: "center",
      alignItems: "center",
      },
  horizontalDiv: {
    width: '97%',
    flexDirection:"row",
    marginBottom: 10
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
  horizontalDiv1: {
    justifyContent:'space-evenly',
    width: '97%',
    flexDirection:"row",
    marginVertical: 10
  },
    wrapper: {
      width:'100%',
      padding: 10,
      height:'100%',
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black"
    },
    hospitalName: {
      fontWeight: 'bold',
      marginVertical: 10,
      fontSize: 20,
      color: "white",
      paddingHorizontal:10,

    },
    address: {
      padding: 10,
      width: "72%",
      marginVertical: 10,
      color: "white"

    },
    container1: {
        width:"100%",
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    },
    buttonContainer: {
        flex: 1,
        backgroundColor:'yellow',
        marginHorizontal: 5
    },
    btn1:{
      backgroundColor:'#07b519',
      paddingVertical:10,
      width:"45%",
      borderRadius:20,
    },
    btn2:{
      backgroundColor:'#0736e3',
      paddingVertical:10,
      width:"45%",
      borderRadius:20,
    },
    loginText:{
      color:'white',
      fontWeight:'bold',
      textAlign:'center',
      fontSize:20,
    }
})

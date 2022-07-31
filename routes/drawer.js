import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Card, Avatar, Title, Paragraph, Caption } from 'react-native-paper';
import HomeScreen from './screens/Home'
import HeartDiseaseForm from './screens/HeartDiseaseForm'
import ObesityForm from './screens/ObesityForm'
import Result from './screens/Result'
import EmergencyScreen from './screens/EmergencyScreen';

function HealthReports({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const UserInfo = () => (
  <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 70}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Gautam Sachdeva</Title>
                                <Caption style={styles.caption}>@gautam_sach20</Caption>
                            </View>
                        </View>
                    </View>
)

const CustomDrawer = (props) => {
  // const filteredProps = {
  //     ...props,
  //     state: {
  //       ...props.state,
  //       routeNames: props.state.routeNames.filter(
  //         // To hide single option
  //         // (routeName) => routeName !== 'HiddenPage1',
  //         // To hide multiple options you can add & condition
  //         (routeName) => 
  //           (routeName !== 'Heart Disease Prediction'
  //           && routeName !== 'Obesity Prediction')
  //       ),
  //       routes: props.state.routes.filter(
  //         (route) => 
  //           (route.name !== 'Heart Disease Prediction'
  //           && route.name !== 'Obesity Prediction'),
  //       ),
  //     },
  //   };
  //   console.log(filteredProps)
  return (
    <View style={{flex:1,backgroundColor:"#373739"}}>
      <UserInfo/>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>

    </View>              
      )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent={ props => <CustomDrawer {...props}/>}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Heart Disease Prediction" component={HeartDiseaseForm} />
        <Drawer.Screen name="Obesity Prediction" component={ObesityForm} />
        <Drawer.Screen name="Result" component={Result} options={()=>({
          drawerLabel:()=> null,
          title:undefined,
          drawerIcon:()=>null,
        })} />
        <Drawer.Screen name="Emergency Screen" component={EmergencyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   userInfoSection: {
      paddingLeft: 20,
    //   paddingBottom: 20
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      color:"#fff",
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color:"#fff"
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
});
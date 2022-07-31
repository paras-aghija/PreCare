import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'

const ListItem = ({name,logoUrl,distance,onPress}) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.itemWrapper}>
              <View style={styles.leftSide}>
                  <Image source={{uri:logoUrl}} style={styles.image}/>
                  <View style={styles.titleWrapper}>
                     <Text style={styles.title}>{name}</Text>
                     {/* <Text style={styles.subtitle}>{address}</Text> */}
                  </View>
              </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    itemWrapper:{
        paddingHorizontal:16,
        marginTop:24,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    image:{
       height:48,
       width:48,
       borderRadius:30,
       padding:4, 
    },
    leftSide:{
        flexDirection:"row",
        alignItems:'center',
        backgroundColor:'#373739',
        borderRadius:10,
    },
    titleWrapper:{
        marginLeft:8,
        flexGrow:1,
        flex:1,
        width:0,
    },
    rightSide:{
     alignItems:'flex-end'
    },
    title:{
        fontSize:18,
        color:'white',
        },
    subtitle:{
        marginTop:4,
        fontSize:14,
        color:"#A9ABB1"
    },
})

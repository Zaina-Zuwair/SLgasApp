import React from "react";
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity,ImageBackground } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
const image = { uri: "https://media.istockphoto.com/photos/abstract-blurred-simple-beige-and-tan-color-background-with-white-picture-id1046544350?k=20&m=1046544350&s=612x612&w=0&h=oO8ppqVSq7DqWPMmjib-H9C_FkN1PfHpgbbmUzJb-_U=" };

const Live = ({ navigation }) =>{
  return (
    <View style={styles.container}>
 <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
 <View style={styles.titles}>
          <View style={styles.group}>
          <Text style={styles.title} >SLGAS</Text>
          <MaterialIcons style={styles.mainLogo} name="local-fire-department" size={48} color="black" />         
          </View>
          <Text style={styles.title2} >APP</Text>
          <Text style={styles.subtitle}>Live Queue Map</Text>          
        </View>
        <Image source={{uri: 'https://www.orangesmile.com/common/img_city_maps/colombo-map-0.jpg'}}
       style={{width: 360, height: 300}} />
       <View>
           <Text style={styles.sub}>Enter Your Location To Find The Live Queue</Text>
           </View>
           <View style={styles.des1}>
       <View style={styles.desig}> 
       
            <TextInput
            style={styles.input} 
            placeholder="Enter Location"
            />
            </View>
            <TouchableOpacity style={styles.but}>
         <Text style={{textAlign:"center",alignItems:"center",color:'#D3D3D3',justifyContent:"center", marginTop:10}}>Search</Text>
         </TouchableOpacity> 
       
            </View>
 </View>
    );
};
const styles = StyleSheet.create({
  

    container: {
      flex: 1,   
      alignItems: "center",
     
      padding: 10,
    },
    pro:{
      
      alignItems: "center",
      justifyContent: "center",
    },
  
   
    group:{
      flexDirection:"row",
      paddingLeft:50
  
    },
  
    text:{
      alignItems:"center",
      textAlign: "center",
      justifyContent: "center",
      color: '#D3D3D3',
      fontSize:16
    },
  
    buttons: {
      borderRadius: 8,
      paddingVertical: 14,
      paddingHorizontal: 10,
      backgroundColor: '#8B4513',
      marginVertical:10,
    },
  
    carContainer: {
      width: "100%",
      height: "100%",
    },
  
    titles: {
       marginTop:"10%"  , 
      width: "100%",
      
    },
  
    title: {
      fontSize: 32,
      fontWeight: "600",
    },
    title2:{
      fontSize:32,
      fontWeight: "600",
      paddingLeft:150
  
    },
  
    subtitle: {
      fontSize: 22,
      color: "#5c5e62",
      textAlign:"center",
      backgroundColor:"#E1C16E",
      width:"100%"
    },
    sub:{
        fontSize: 22,
      color: "#5c5e62",
      textAlign:"center",
    
      width:"100%"
    },
   
  
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      position: "absolute",
    },
    input:{
      height: 40,
      width:300,
      color:"#808080"
     },
  
    inputt: {
      alignItems: "center",
      justifyContent: "center",
    },
    design:{
      flexDirection: 'row',
      height: 40,
      width:300,
      margin: 12,
      borderWidth: 1,
     paddingTop:3,
      backgroundColor:"#E1C16E",   
      borderColor:"#fadadd"
       
    },
    icon:{
      marginRight:10,
      marginTop:2,
      paddingLeft:4,
      color:'#808080'
      
    },
    desig:{
        flexDirection: 'row',
        height: 40,
        width:200,       
        borderWidth: 1,      
        backgroundColor:"#FFFFFF",   
        borderColor:'#8B4513',
        alignItems: "center",
        justifyContent: "center",
       marginLeft:40
      },
      des1:{
        flexDirection:"row",
      },
      but:{
        backgroundColor:'#8B4513'
      }
});
    
export default Live;
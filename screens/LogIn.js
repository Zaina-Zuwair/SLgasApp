import React from "react";
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity,ImageBackground } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const image = { uri: "https://media.istockphoto.com/photos/abstract-blurred-simple-beige-and-tan-color-background-with-white-picture-id1046544350?k=20&m=1046544350&s=612x612&w=0&h=oO8ppqVSq7DqWPMmjib-H9C_FkN1PfHpgbbmUzJb-_U=" };

const LogIn = ({ navigation }) =>{
  return (
    
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
     
      
      
      <View style={styles.titles}>
          <View style={styles.group}>
          <Text style={styles.title} >SLGAS</Text>
          <MaterialIcons style={styles.mainLogo} name="local-fire-department" size={48} color="black" />         
          </View>
          <Text style={styles.title2} >APP</Text>
          
          <View style={styles.inputt}>
              <View style={styles.design}>
              <Entypo style={styles.icon} name="user" size={24} color="black" /> 
              <TextInput
              style={styles.input} 
              placeholder="Enter UserName"
              />
              </View>

              <View style={styles.design}>
              <Feather style={styles.icon} name="eye-off" size={24} color="black" />   
              <TextInput
              style={styles.input} 
              placeholder="Enter Password"
              />
              </View>
           </View>        
      

           <TouchableOpacity onPress={() => navigation.navigate("DashBoard")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>LogIn</Text>  
          </View> 
        </TouchableOpacity> 
      
      </View>  
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  

    container: {
      flex: 1,   
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
    },
    pro:{
      marginTop: "40%",
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
      marginTop: "20%",     
      width: "100%",
      
    },
  
    title: {
      fontSize: 40,
      fontWeight: "600",
    },
    title2:{
      fontSize: 40,
      fontWeight: "600",
      paddingLeft:150
  
    },
  
    subtitle: {
      fontSize: 16,
      color: "#5c5e62",
      textAlign:"center"
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
    
  });
  
  
  


 

export default LogIn;



  


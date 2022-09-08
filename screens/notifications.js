import React from "react";
import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
const image = { uri: "https://media.istockphoto.com/photos/abstract-blurred-simple-beige-and-tan-color-background-with-white-picture-id1046544350?k=20&m=1046544350&s=612x612&w=0&h=oO8ppqVSq7DqWPMmjib-H9C_FkN1PfHpgbbmUzJb-_U=" };




const Notifications = ({ navigation }) =>{
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      
      <TouchableOpacity onPress={() => navigation.navigate("Fuel Type")}>
      <View style={styles.topic}>
      <Text style={styles.boxOne}>Your desired LP Gas has been delievered</Text>
      <FontAwesome name="bell" size={24} color="red" style={styles.icon} />
      </View>
      </TouchableOpacity >
      <TouchableOpacity onPress={() => navigation.navigate("Live")}>
      <View style={styles.topic}>
      <Text style={styles.boxOne}>Your desired LP Gas is currently unavailable</Text>
      <FontAwesome name="bell" size={24} color="red" style={styles.icon}  />
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.topic}>
      <Text style={styles.boxOne}>You are too far to deliver</Text> 
      <FontAwesome name="bell" size={24} color="red"  style={styles.icon}/>
      </View>
      </TouchableOpacity>
      
      </View>     
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems:"center",
    paddingTop:40,
    backgroundColor: '#ddd',
   
  },
  topic:{
    flexDirection:'row',
    width:500,      
    height: 40,   
    marginVertical:10,
    backgroundColor: '#E1C16E',  
    textAlign: "center",
   
      
  },
 
  text:{
     alignItems:"center",
    textAlign: "center",
    justifyContent: "center",
    color: '#FFFFFF',
  },
  boxOne:{
   marginTop:10,
   width:"100%"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  icon:{    
    marginRight:80
  }

 
});

export default Notifications;
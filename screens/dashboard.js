import React from "react";
import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity, Pressable } from "react-native";

const image = { uri: "https://media.istockphoto.com/photos/abstract-blurred-simple-beige-and-tan-color-background-with-white-picture-id1046544350?k=20&m=1046544350&s=612x612&w=0&h=oO8ppqVSq7DqWPMmjib-H9C_FkN1PfHpgbbmUzJb-_U=" };




const Dashboard = ({ navigation }) =>{
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      
      <TouchableOpacity onPress={() => navigation.navigate("Fuel Type")}>
      <View style={styles.topic}>
      <Text style={styles.boxOne}>FUEL TYPES</Text>
      </View>
      </TouchableOpacity >
      <TouchableOpacity onPress={() => navigation.navigate("Live")}>
      <View style={styles.topic}>
      <Text style={styles.boxOne}>LIVE QUEUE MAP</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.topic}>
      <Text style={styles.boxOne}>NOTIFICATIONS</Text>      
      </View>
      </TouchableOpacity>
      
      </View>
      
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,   
    justifyContent:"space-around",
    alignItems:"center",
    paddingTop:40,
    backgroundColor: '#ddd',
   
  },
  topic:{
  
    width: 150,
    height: 100,
    backgroundColor: '#E1C16E',
    borderRadius: 50,
    transform: [{ scaleX: 1 }],
    textAlign: "center",
      
  },
 
  text:{
    alignItems:"center",
    textAlign: "center",
    justifyContent: "center",
    color: '#FFFFFF',
  },
  boxOne:{
   marginTop:40
  },
  
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

 
});

export default Dashboard;
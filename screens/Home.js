import React from "react";
import { StyleSheet,  Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
const image = { uri: "https://c1.wallpaperflare.com/preview/796/449/255/paper-texture-brown-raw.jpg" };

const Home = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      <View style={styles.carContainer}>
     
            
            

        <View style={styles.titles}>
          <View style={styles.group}>
          <Text style={styles.title} >SLGAS</Text>
          <MaterialIcons style={styles.mainLogo} name="local-fire-department" size={48} color="black" />         
          </View>
          <Text style={styles.title2} >APP</Text>
          <Text style={styles.subtitle}>We're ready to help you...</Text>          
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>LogIn</Text>  
          </View> 
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>SignUp</Text>  
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
    marginTop: "40%",     
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
});

export default Home;

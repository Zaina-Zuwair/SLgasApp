import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,    
  StatusBar,
  TextInput,
  Image,
  ImageBackground
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
const image = { uri: "https://media.istockphoto.com/photos/abstract-blurred-simple-beige-and-tan-color-background-with-white-picture-id1046544350?k=20&m=1046544350&s=612x612&w=0&h=oO8ppqVSq7DqWPMmjib-H9C_FkN1PfHpgbbmUzJb-_U=" };

export default class SearchGas extends Component {
  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
    };
  }

  componentDidMount() {
    var data = [
      {
        name: "Litro Gas",
        weight: "5kg",
        img: "http://shyamasupercity.com/wp-content/uploads/2020/09/gas5k.png",
        
          press:()=>this.props.navigation.navigate("Harry Potter"),
      },
      {
        name: "Litro Gas",
        weight: "12.5Kg",
        img: "http://shyamasupercity.com/wp-content/uploads/2020/11/gas12.5k.png",
       
          press:()=>this.props.navigation.navigate("PercyJackson"),
      },
      {
        name: "Litro Gas",
        weight: "37.5Kg",
        img: "https://www.litrogas.com/wp-content/uploads/2021/05/37kgbg-1.png",
        
        
      },
      {
        name: "Laughs Gas",
        weight: "5Kg",
        img: "https://www.vipexdelivery.com/shop/assets/images/products/thumbs/5_300x300.jpg",
        
       
      },
      {
        name: "Laughs Gas",
        weight: "12.5Kg",
        img: "https://ants-cash-on-delivery.shophere.lk/wp-content/uploads/2020/04/laughs.jpg",
       
        
      },
      {
        name: "Laughs Gas",
        weight: "37.5Kg",
        img: "https://s.alicdn.com/@sc04/kf/Haeb94bb6f69948a6b04762c4461a15cah.jpg_300x300.jpg",
        
        
      },
    ];

    this.setState({
      dataBackup: data,
      dataSource: data,
    });
  }

  filterItem = (event) => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == "") {
      this.setState({
        dataSource: this.state.dataBackup,
      });
    } else {
      var data = this.state.dataBackup;
      query = query.toLowerCase();
      data = data.filter((l) => l.name.toLowerCase().match(query));

      this.setState({
        dataSource: data,
      });
    }
  };

  separator = () => {
    return (
      <View style={{ height: 10, width: "100%", backgroundColor: "#121212" }} />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.imaige}></ImageBackground>
        <StatusBar barStyle="light-content" />
        
        <View style = {styles.design}>
     <FontAwesome style={styles.icon} name="search" size={24} color="white" />
      <TextInput style = {styles.searchBar} placeholder="Search here"
            
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            
          />
        </View>

        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={() => this.separator()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={item.press}>
                <View style={styles.LPGasContainer}>
                  <Image style={styles.image} source={{ uri: item.img }} />
                  <View style={styles.dataContainer}>
                    <Text numberOfLines={2} style={styles.title}>
                      {item.name}
                    </Text>
                    <Text style={styles.weight}>{item.weight}</Text>
                    
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  design:{
    flexDirection: 'row',
    height: 35,
    width:"90%",
    margin: 10,
    borderWidth: 1,
    paddingRight:5,
    paddingLeft:5,
    backgroundColor:"#f4f4f4",
    borderRadius:8,
    borderColor:"#E1C16E"
     
  },
  icon:{
    marginRight:10,
    marginTop:5,
    color:'#c4c3d0'
    
  },
  LPGasContainer: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#E1C16E",
  },
  image: {
    height:70,
    width: 60,
    marginLeft: 5,
  },
  dataContainer: {
    padding: 10,
    paddingTop: 5,
    width: 250,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 16,
    color: "gray",
    marginTop: 10,
  },
  weight: {
    fontSize: 16,
  },
  imaige: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
 
});

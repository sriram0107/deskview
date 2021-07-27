import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import ItemComponent from "./ItemComponent";

interface NavComponentProps {
    
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    image: "bottle"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    image: "folder"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    image: "monitor"
    },
   {
    id: "bd7acebea-c1b1-46c2-aed5-3ad53abb28ba",
       title: "First Item",
    image: "phone"
  },
  {
    id: "3awwc68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    image: "phone"
  },
  {
    id: "58694a0f-3da1-471f-bd96-1455rw71e29d72",
      title: "Third Item",
    image: "phone"
    },
  {
    id: "wwbd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    image: "phone"
  }
];

const styles = StyleSheet.create({
    nav: {
        flex: 0.2,
        backgroundColor: "#808080"
    }
});


const NavComponent: React.FC<NavComponentProps> = () => {

    const renderItem = ({ item } : any ) => {
        return <ItemComponent item={ item }/>
    }
    return (
       // <Text>asdadasde</Text>
        <View style={ styles.nav }>
        <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />
            </View>
    );
};

export default NavComponent;
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native';
import { Dimensions } from 'react-native';

interface ItemComponentProps {
    item: any,
}
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const ItemComponent: React.FC<ItemComponentProps> = ({ item }) => {
    const styles = StyleSheet.create({
    item: {
        flex:1,
        borderRadius: 10,
        width: 100,
        margin: 3
        },
        image: {
            flex: 1
        }
});

    return (
        <Pressable onPress={() => alert("pressed")}>
            {/* <Image style={styles.image}
                   source={require('../images/bottle.jpg')}></Image> */}
            <View style={styles.item} >
                <Text>hello</Text>
            </View>
        </Pressable>
    );
};

export default ItemComponent;
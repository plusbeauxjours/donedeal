import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export default class ToDo extends Component{
    state = {
        isEditing: false
    }
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.circle} />
                </TouchableOpacity>
                <Text style={styles.text}>Hello I'm A To Do</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    text: {
        fontWeight: '600',
        fontSize: 20, 
        marginVertical: 20
    }
});
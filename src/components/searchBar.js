import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

class SearchBar extends Component {
    
    state = {
        searchValue : ""
    }

    render() {

        onChangeHandler = (event) => (this.setState(() => ({ searchValue: event })));

        return (
            <View style={styles.container}>
                  
                <TextInput
                    value={this.state.searchValue}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    style={styles.input}
                    placeholder="Search Content"
                    onChangeText={this.onChangeHandler}
                />
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={{ color: "white", justifyContent: "center", textAlign:"center"}}>Search</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "flex-end",
        flexDirection: "row"
    },
    input: {
        width: 250,
        height: 45,
        backgroundColor: '#d3d3d3',
        marginVertical: 10,
        paddingHorizontal: 16,
        borderColor: "black",
        borderRadius: 30,
        borderColor: "black",
        fontSize: 16,
    },
    button: {
        width: 80,
        height: 45,
        backgroundColor: "#263238",
        marginVertical: 10,
        padding: 10,
        borderRadius: 30,
    },
});
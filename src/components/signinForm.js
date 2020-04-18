import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

class SigninForm extends Component {
    state = {
        username: "",
        password: ""
    }

    onChangeHandler1 = (event) => (this.setState(() => ({ username: event })));
    onChangeHandler2 = (event) => (this.setState(() => ({ password: event })));

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.username}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    style={styles.input} 
                    placeholder="Enter Username"
                    onChangeText={this.onChangeHandler1}
                />
                <TextInput
                    value={this.state.password}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    secureTextEntry={true}
                    style={styles.input} 
                    placeholder="Enter Password"
                    onChangeText={this.onChangeHandler2}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onCheckHandler()}
                >
                    <Text style={styles.buttonText}>LogIn</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SigninForm;

const styles = StyleSheet.create({
    container: {

        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: 300,
        backgroundColor: '#d3dce8' ,
        marginVertical: 10,
        paddingHorizontal: 16,
        borderColor: "black",
        borderRadius: 25,
        fontSize: 16,
        color: "black"
    },
    button: {
        width: 150,
        backgroundColor: '#d3dce8',
        marginVertical: 10,
        paddingVertical: 12,
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: "black",
        textAlign: "center"
    }

});
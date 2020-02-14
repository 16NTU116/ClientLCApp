import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';


class EditProfileForm extends Component {
    state = {
        client: {
            email: "",
            password: "",
            name: "",
            contact: "",
            address: ""
        },
    }

    onChangeHandler1 = (event) => (this.setState(() => ({ email: event })));
    onChangeHandler2 = (event) => (this.setState(() => ({ password: event })));
    onChangeHandler3 = (event) => (this.setState(() => ({ name: event })));
    onChangeHandler4 = (event) => (this.setState(() => ({ contact: event })));
    onChangeHandler5 = (event) => (this.setState(() => ({ address: event })));

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.email}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    style={styles.input}
                    placeholder="Enter Email"
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
                <TextInput
                    value={this.state.name}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    style={styles.input}
                    placeholder="Enter Name"
                    onChangeText={this.onChangeHandler3}
                />
                <TextInput
                    value={this.state.contact}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    style={styles.input}
                    placeholder="Enter Contact"
                    onChangeText={this.onChangeHandler4}
                />
                <TextInput
                    value={this.state.address}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    style={styles.input}
                    placeholder="Enter Address"
                    onChangeText={this.onChangeHandler5}
                />

                <TextInput
                    value={this.state.address}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    style={styles.input}
                    placeholder="About You"
                    onChangeText={this.onChangeHandler5}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.addClients()}
                >
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default EditProfileForm;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        marginVertical: 10,
        paddingHorizontal: 16,
        borderColor: "black",
        borderRadius: 25,
        fontSize: 16,
        color: "#ffffff"
    },
    button: {
        width: 300,
        backgroundColor: '#000a12',
        marginVertical: 10,
        paddingVertical: 12,
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: "#ffffff",
        textAlign: "center"
    }

});
import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
// import { ImagePicker } from 'react-native-image-picker';

class CreatePost extends Component {
    state = {
        title: "",
        details: "",
        contact: ""
    }

    onChangeHandler1 = (event) => (this.setState(() => ({ title: event })));
    onChangeHandler2 = (event) => (this.setState(() => ({ details: event })));
    onChangeHandler3 = (event) => (this.setState(() => ({ contact: event })));

    onUploadImage = () => {
        // ImagePicker.launchImageLibrary({}, (response) => {
        //     if (response.didCancel) {
        //         console.log('User cancelled image picker');
        //     } else if (response.error) {
        //         console.log('ImagePicker Error: ', response.error);
        //     } else if (response.customButton) {
        //         console.log('User tapped custom button: ', response.customButton);
        //     } else {
        //         const source = { uri: response.uri }
        //     }
        // })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.title}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    style={styles.input}
                    placeholder="Enter Case Title"
                    onChangeText={this.onChangeHandler1}
                />
                <TextInput
                    placeholder="Enter Case Details"
                    multiline={true}
                    numberOfLines={10}
                    value={this.state.details}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    style={styles.input}
                    onChangeText={this.onChangeHandler2}

                />
                <TextInput
                    value={this.state.contact}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    style={styles.input}
                    placeholder="Enter Contact Number"
                    keyboardType="phone-pad"
                    onChangeText={this.onChangeHandler3}
                />
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Image style={{ width: 50, height: 50, marginRight: 30 }} source={require('../image/noimage.png')}></Image>
                    <TouchableOpacity
                        style={styles.uploadButton}
                    ><Text style={{ fontSize: 12 }, styles.buttonText}>Upload</Text></TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onCheckHandler()}
                >
                    <Text style={styles.buttonText}>Create Post</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default CreatePost;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 1.8)',
        marginVertical: 10,
        paddingHorizontal: 16,
        borderColor: "#303331",
        borderRadius: 25,
        fontSize: 16,
        borderWidth: 1,
        textAlignVertical: "top"
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
    },
    button: {
        width: 190,
        backgroundColor: "#263238",
        marginVertical: 40,
        paddingVertical: 12,
        borderRadius: 25,
    },
    uploadButton: {
        width: 150,
        backgroundColor: "#263238",
        paddingVertical: 6,
        borderRadius: 25,
        paddingTop: 15,
        height: 'auto'
    },
});


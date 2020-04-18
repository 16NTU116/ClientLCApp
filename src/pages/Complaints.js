import React from 'react';
import {
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Text,
    Alert,
    Button
} from 'react-native';

class Complaints extends React.Component {
    state = {
        complaintBox : ''
    }
    onSubmitHandler = () =>{
        Alert.alert(
            'Congratulations!!',
            'Your complain submitted successfully', // <- this part is optional, you can pass an empty string
            [
              {text: 'OK', onPress: () => console.log('alert closed')},
            ],
            {cancelable: false},
          );
    }
    render() {
        onChangeHandler = (event) => (this.setState(()=>({complaintBox : event})));
        
        return (
            <View style = {styles.container}>
                <Text style = {styles.headingText}>
                    Submit your Complaints here!!
                </Text>
                <TextInput 
                style= {styles.input}
                placeholder = "Enter your Complaint"
                onChangeText = {this.onChangeHandler}
                multiline={true}
                numberOfLines={10}
                />
                <TouchableOpacity style = {styles.button} >
                    <Text 
                    onPress = {this.onSubmitHandler}
                    style = {styles.buttonText}
                    
                    >
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Complaints;

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headingText : {
        fontFamily: 'sans-serif',
        fontSize: 25,
        fontWeight: '900',
        color : 'black'
    },
    input :{
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
    button : {
        width: 190,
        backgroundColor: "#263238",
        marginVertical: 15,
        paddingVertical: 12,
        borderRadius: 25,
    },
    buttonText : {
        fontSize: 16,
        fontWeight: '500',
        color: "white",
        textAlign: "center"
    },
});
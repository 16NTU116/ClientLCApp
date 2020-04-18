import React from 'react';
import {
    TextInput,
    View,
    Stylesheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Text,
} from 'react-native';
//import PostStructure from '../components/postStructure';
import Container from '../components/container';
class Notification extends React.Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <Container />
                </ScrollView>
            </View>
        );
    }
}

export default Notification;
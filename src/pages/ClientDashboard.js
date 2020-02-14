import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView
} from 'react-native';
// import { connect } from 'react-redux';
import SearchBar from '../components/searchBar';
import PostStrcture from '../components/postStructure';
import postImage from "../image/logo.png";
class ClientDashBoard extends Component {

    navigateToPost = () => {
        this.props.navigation.navigate('CreatePost')
    }

    render() {
        this.state = {
            posts: [
                {
                    name: "Ali",
                    title: "Divorce case",
                    details: "I want a divorce beacause of ..........."
                },
                {
                    name: "Nouman",
                    title: "Criminal Lawyer",
                    details: "I want a criminal lawyer for..........."
                }
            ]
        }
        return (
            <View style={styles.engine}>
                <StatusBar
                    backgroundColor="#000a12"
                    barStyle="light-content"
                />
                <SearchBar />
                <ScrollView>
                    { this.state.posts.map( (value, index) => (
                        <PostStrcture key={index} name={value.name} caseTitle={value.title} caseDetails={value.details} postImage={postImage} />
                    ))}
                </ScrollView>
                <TouchableOpacity
                    style={styles.postButton}
                    onPress={this.navigateToPost}
                >
                    <Text style={styles.postButtonText}>Create Post</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    engine: {
        flex: 1,
        // justifyContent: "center",
        backgroundColor: "#ffffff",
        alignItems: 'center'
    },
    postButton: {
        width: 300,
        height: 45,
        backgroundColor: '#000a12',
        marginVertical: 10,
        padding: 10,
        borderRadius: 15,
    },
    postButtonText: {
        color: "white",
        justifyContent: "center",
        textAlign: "center"
    }
});

export default (ClientDashBoard);

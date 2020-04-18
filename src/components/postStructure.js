import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

class SearchBar extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.name}>{this.props.name}</Text>
                <Text style={styles.title}>{this.props.caseTitle}</Text>
                <Text style={styles.details}>{this.props.caseDetails}</Text>
                {
                    this.props.postImage &&
                    <Image
                        source={this.props.postImage}
                        style={{ width: 170, height: 190, alignContent: "center" }}
                    />
                }
                <View style = {styles.innerView}>
                <TouchableOpacity>
                   <Text>Like</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{
                   paddingLeft : 10
               }}>
                   <Text>Comment</Text>
               </TouchableOpacity>
            </View>
            </View>
           
        )
    }
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {

        justifyContent: "flex-end",
        borderColor: "black",
        padding: 18,
        borderWidth: 1,
        marginBottom: 5,
        width :'100%' ,
    },
    name: {
        textAlign: "left",
        fontSize: 16,
        fontWeight: "700"
    },
    title: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 14,
    },
    details: {
        textAlign: "left",
        fontSize: 12,
    },
    innerView :{
        flexDirection : 'row',
        marginBottom : -5
    },
    
});
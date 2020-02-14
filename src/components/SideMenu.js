import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';
import { NavigationActions } from "react-navigation";

import Logo from "../image/logo.png"

class SideMenu extends Component {

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View style={styles.main}>
                <ScrollView>
                    <View>
                        <View style={styles.ImageContainer}>
                            <Image
                                source={Logo}
                                style={{ width: 70, height: 90 }}
                            />
                        </View>
                        {/* <Text style={styles.text2}>
                            Section 1
                        </Text> */}
                        <View style={styles.sectionStyle}>
                            <Text
                                style={styles.itemStyle}
                                onPress={this.navigateToScreen('Dashboard')}
                            >
                                Dashboard
                            </Text>
                            <Text
                                style={styles.itemStyle}
                                onPress={this.navigateToScreen('EditProfile')}
                            >
                                Edit Profile
                            </Text>
                            <Text
                                style={styles.itemStyle}
                                onPress={this.navigateToScreen('CreatePost')}
                            >
                                Create Post
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <Text style={styles.text}>Copyright @</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        padding: 20
    },
    ImageContainer: {
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#263238"
    },
    // text2: {
    //     marginTop: 1,
    //     fontSize: 15,
    //     fontWeight: "700",
    //     color: "white",
    //     backgroundColor: '#32CD32',
    //     padding: 10
    // },
    sectionStyle: {
        marginTop: 15,
    },
    itemStyle: {
        paddingTop: 10,
        fontSize: 20,
        color: "black",
        marginStart: 30
    },
});

export default SideMenu;
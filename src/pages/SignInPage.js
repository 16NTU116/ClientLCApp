import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import Logo from '../components/logo';
import SigninForm from '../components/signinForm';

class SignInPage extends Component {

  onCheckHandler = () => {
    // this.props.clients.map( (data) => {
    //   if(this.state.username === data.username && this.state.password === data.password)
    this.props.navigation.navigate('Dashboard');
    //   else
    //     ToastAndroid.show('Invali Login Credentials', ToastAndroid.SHORT);
    // })

  }

  render() {
    return (
      <View style={styles.engine}>
        <StatusBar
          backgroundColor="#000a12"
          barStyle="light-content"
        />
        <Logo  />
        <SigninForm onCheckHandler={this.onCheckHandler} />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet? </Text>
          <Text
            style={styles.signupButton}
            onPress={
              () => this.props.navigation.navigate('Signup')
            }>
            Signup
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  engine: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#263238",
    alignItems: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16
  },
  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: '500'
  }
});

const mapStateToProps = state => ({
  clients: state.clientsData.clients,
});

export default connect(mapStateToProps)(SignInPage);

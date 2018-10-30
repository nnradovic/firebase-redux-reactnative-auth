import React from 'react'
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
import { NavigationActions } from 'react-navigation'
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }
    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => { console.log(res) }, (error) => { Alert.alert(error.message) })
    }
    onCreateAccountPress = () => {
        this.props.navigation.navigate('Signup')
    }
    onForgotPasswordPress = () => {
        this.props.navigation.navigate('ForgotPassword')
    }
    render() {
        console.log(this.state.email);

        return (
            <View style={{ paddingTop: 50, alignItems: "center" }}>
                <Text style={{color:"red", fontSize:24, fontWeight:"bold"}}>Login</Text>
                <TextInput underlineColorAndroid='#fff'
                    style={{ width: 200, height: 40, borderWidth: 2, padding: 10, borderRadius:5, borderColor:'red' }}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({ email: text }) }}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="#f7b7b7"

                />
                <View style={{ paddingTop: 10 }} />
                <TextInput underlineColorAndroid='#fff'
                    style={{ width: 200, height: 40, borderWidth: 2, padding: 10,  borderRadius:5, borderColor:'red' }}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({ password: text }) }}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="#f7b7b7"
                />

                <TouchableOpacity
                    onPress={this.onLoginPress}
                    style={styles.button}
                >
                <Text style={styles.buttonText}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.onCreateAccountPress}
                    style={styles.button}
                >
                <Text style={styles.buttonText}> Create account... </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.onForgotPasswordPress}
                    style={styles.button}
                >
                <Text style={styles.buttonText}> Forgot Password... </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        width: '55%',
        borderRadius: 5,
        marginTop: 10


    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',


    }
})
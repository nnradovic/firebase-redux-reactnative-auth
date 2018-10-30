import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, Alert,TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation'
import * as firebase  from 'firebase'
export default class SignUpScreen extends React.Component{
    constructor(props){
       super(props)
       this.state = {
         email:"",
         password:"",
         passwordConfirm:""
       }       
    }
    onSignupPress = () =>{

        if(this.state.password !== this.state.passwordConfirm){
            Alert.alert('Pasword do not match')
            return
        }
       firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(()=>{},(error)=>{
            Alert.alert(error.message)
        })
    }
    onBackToLoginPress = () =>{
        this.props.navigation.navigate('Login')
    }

        render(){
            return (
                <View style={{paddingTop:50, alignItems:"center"  }}>
                <Text style={{color:"red", fontSize:24, fontWeight:"bold"}}>Sign Up</Text>
          <TextInput underlineColorAndroid='#fff'
                style={{width:200, height:40, borderWidth:2, borderRadius:5, borderColor:'red', padding:10, marginBottom:10}}
                value={this.state.email}
                onChangeText={(text) => { this.setState({email:text})}}
                autoCapitalize="none"
            autoCorrect={false}
                placeholder="Email"
                placeholderTextColor="#f7b7b7"
                />
         <TextInput underlineColorAndroid='#fff'
                style={{width:200, height:40, borderWidth:2, borderRadius:5, borderColor:'red', padding:10, marginBottom:10}}
                value={this.state.password}
                onChangeText={(text) => { this.setState({password:text})}}
                autoCapitalize="none"
            autoCorrect={false}
                placeholder="Password"
                placeholderTextColor="#f7b7b7"
                />
                 <TextInput underlineColorAndroid='#fff'
                style={{width:200, height:40, borderWidth:2, borderRadius:5, borderColor:'red', padding:10, marginBottom:10}}
                value={this.state.passwordConfirm}
                onChangeText={(text) => { this.setState({passwordConfirm:text})}}
                autoCapitalize="none"
            autoCorrect={false}
                placeholder="Retype password"
                placeholderTextColor="#f7b7b7"  
                />
         
         <TouchableOpacity
                    onPress={this.onSignupPress}
                    style={styles.button}
                >
                <Text style={styles.buttonText}> Signup </Text>
                </TouchableOpacity>
        <TouchableOpacity
            onPress={this.onBackToLoginPress}
            style={styles.button}
        >
        <Text style={styles.buttonText}> Back to Login </Text>
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
import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
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
                <View style={{paddingTop:50, alignItems:"center" }}>
                <Text>Sign Up</Text>
          <TextInput underlineColorAndroid='#fff'
                style={{width:200, height:40, borderWidth:1}}
                value={this.state.email}
                onChangeText={(text) => { this.setState({email:text})}}
                autoCapitalize="none"
            autoCorrect={false}
                placeholder="Email"
                />
         <TextInput underlineColorAndroid='#fff'
                style={{width:200, height:40, borderWidth:1}}
                value={this.state.password}
                onChangeText={(text) => { this.setState({password:text})}}
                autoCapitalize="none"
            autoCorrect={false}
                placeholder="Password"
                />
                 <TextInput underlineColorAndroid='#fff'
                style={{width:200, height:40, borderWidth:1}}
                value={this.state.passwordConfirm}
                onChangeText={(text) => { this.setState({passwordConfirm:text})}}
                autoCapitalize="none"
            autoCorrect={false}
                placeholder="Retype password"
                />
         <Button title="Signup" onPress={this.onSignupPress} />
         <Button title="Back to Login " onPress={this.onBackToLoginPress} />
                </View>
            )
        }
    }


const styles = StyleSheet.create({

})
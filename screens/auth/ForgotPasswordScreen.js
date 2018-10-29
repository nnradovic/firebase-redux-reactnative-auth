import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import * as firebase from 'firebase'
export default class ForgotPasswordScreen extends React.Component{
    constructor(props){
       super(props)
       this.state = {
            email:""
       }       
    }
    onBackToLoginPress = () =>{
        this.props.navigation.navigate('Login')
    }
    onResetPasswordPress = ()=>{
        firebase.auth().sendPasswordResetEmail(this.state.email)
        .then(()=>{
           Alert.alert('Passwor resete check your email')
        },(error)=>{
            Alert.alert(error.message)
        })
    }
    render(){
        return(
            <View style={{paddingTop:50, alignItems:"center" }}>
            <Text>Forgot Password</Text>
            <TextInput 
                  style={{width:200, height:40, borderWidth:1}}
                  value={this.state.email}
                  onChangeText={(text) => { this.setState({email:text})}}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Insert your email"
                  
                  />
  
           <Button title="Reset Password" onPress={this.onResetPasswordPress} />
           <Button title="Back to login" onPress={this.onBackToLoginPress} />
                  </View>
        )
    }
}

const styles = StyleSheet.create({

})
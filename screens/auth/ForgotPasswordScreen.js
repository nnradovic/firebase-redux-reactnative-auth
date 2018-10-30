import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
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
            <Text style={{color:"red", fontSize:24, fontWeight:"bold"}}>Forgot Password</Text>
            <TextInput 
                  style={{width:200, height:40,  borderWidth: 2, padding: 10,  borderRadius:5, borderColor:'red'}}
                  value={this.state.email}
                  onChangeText={(text) => { this.setState({email:text})}}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Insert your email"
                  underlineColorAndroid='#fff'
                  placeholderTextColor="#f7b7b7"
                  tintColor={'red'}
                  
                  />
  
           
           <TouchableOpacity
                    onPress={this.onResetPasswordPress}
                    style={styles.button}
                >
                <Text style={styles.buttonText}> Reset Password </Text>
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
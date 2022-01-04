
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/*import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';*/

//import Main from './MainScreen';
//import MyNavigator from './MyNavigator';

/*const MainNavigator = createStackNavigator({
  Main: {screen: MainScreen},
  SendCommand: {screen: App},
});*/

//const App1 = createAppContainer(MainNavigator);
/*export default*/ //App1;

/*class MainScreen extends React.Component{
  static navigationOptions = {
    title: 'Welcome',
  };
  render(){
    const {navigate} = this.props.navigation;
    return(
      <Button title = "Go to Control Screen" 
      onPress={() => navigate('SendCommand', {name: 'Control'})} />
    );
  }
}*/


////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Button, Alert, YellowBox} from 'react-native';
console.ignoredYellowBox = ['Remote debugger'];
//YellowBox.ignoredWarnings(['Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?']);

//import StartCobot from '.components/StartCobot';

var ws = new WebSocket("ws://192.168.0.101:5555/send");
var status = "";
ws.onopen = function(event){
  console.log("Connection open ...");
};
ws.onmessage = function(event){
  console.log("Received Message: " + ab2str(event.data));
  Alert.alert(
    'feedback',
    ab2str(event.data),[{text: 'OK', onPress: () => console.log('OK Pressed')}],
    { cancelable: false}
  )
};

function ab2str(buf){
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

function str2ab(str){
  var buf = new ArrayBuffer(str.length*2);
  var bufView = new Uint8Array(buf);
  for(var i=0, strLen = str.length; i<strLen; i++){
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

export default class App extends React.Component{
  static navigationOptions = {
    title: 'SendCommand',
  };
  render(){
    return (
    <View style = {styles.container}>
        
      <Button title = "Connect to Cobot" progress style = {styles.button} 
      onPress = {this.Connect}></Button>
      <Button title = "Start Cobot" type = "primary" style = {styles.button} 
      onPress = {this.Send}></Button>
      <Button title = "Pause Cobot" type = "primary" style = {styles.button}
      onPress = {this.Pause}></Button>
      <Button title = "Stop Cobot" type = "primary" style = {styles.button}
      onPress = {this.Stop}></Button>
      <Button title = "Shutdown Cobot" type = "primary" style = {styles.button}
      onPress = {this.Shutdown}></Button>
      <Button title = "Disconnect" type = "primary" style = {styles.button}
      onPress = {this.Disconnect}></Button>

      </View>
    );
  }


  Connect(){
    var state = ws.readyState;
    if(state == 1){
      status = "connected";
    }
    else{
      status = "not connect";
    }
    Alert.alert(
      'Connection status',
      status,[{text: 'OK', onPress: () => console.log('OK Pressed')}],
      { cancelable: false}
    )
  }

  Send(){
    ws.send(str2ab("play\n"));
  }

  Stop(){
    ws.send(str2ab("stop\n"));
  }

  Pause(){
    ws.send(str2ab("pause\n"));
  }

  Shutdown(){
    ws.send(str2ab("shutdown\n"));
  }

  Disconnect(){
    ws.send(str2ab("quit\n"));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around',
  }
});
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////

// var ws = new WebSocket("ws://192.168.0.100:5555/send");
// var status = "";
// ws.onopen = function(event){
//   console.log("Connection open ...");
// };
// ws.onmessage = function(event){
//   console.log("Received Message: " + ab2str(event.data));
//   Alert.alert(
//     'feedback',
//     ab2str(event.data),[{text: 'OK', onPress: () => console.log('OK Pressed')}],
//     { cancelable: false}
//   )
// };

// function ab2str(buf){
//   return String.fromCharCode.apply(null, new Uint8Array(buf));
// }

// function str2ab(str){
//   var buf = new ArrayBuffer(str.length*2);
//   var bufView = new Uint8Array(buf);
//   for(var i=0, strLen = str.length; i<strLen; i++){
//     bufView[i] = str.charCodeAt(i);
//   }
//   return buf;
// }


/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React,{Component} from 'react';
import { View, Image,AsyncStorage, TextBase, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native';
import {  createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {ActivityIndicator,
StatusBar
} from 'react-native';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  //Button
} from 'react-native';

import { YellowBox } from 'react-native';
import {Button, Alert} from 'react-native';


YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);


//import tcp-socket transfer method from React Native
import TcpSocket from 'react-native-tcp-socket';

var client = TcpSocket.createConnection({port:29999, host:"192.168.0.110"});
//alert("sssss");
client.on('data', function(data) {
  alert("success");
  console.log('message was received', data);
});
 
client.on('error', function(error) {
  alert("fail");
  console.log(error);
});






/*
  function name: Storeuser
  this function is used to connect with server and store the data we want to the user table.
  */
function Storeuser(ID, EMAIL, PASSWORD, LEVEL,SECRET,CHATID){ 
  fetch('http://10.132.211.240:3000/sms/User', {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
},
body: JSON.stringify({

  id: ID,

  email: EMAIL,

  password: PASSWORD,

  level: LEVEL,

  secret: SECRET,

  chatid:CHATID
})

});
} 
/*
  function name: Storeerror
  this function is used to connect with server and store the data we want to the errordata table.
*/
function Storeerror(ID, IP, DATA){ 
  fetch('http://localhost:3000/sms/Error', {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
},
body: JSON.stringify({

  icobotid: IP,

  ip: IP,

  data: DATA
})

});
}
/*
  function name: Storecobot
  this function is used to connect with server and store the data we want to the cobot table.
*/
function Storecobot(IP, UNIT, USERID){ 
  fetch('http://localhost:3000/sms/Cobot', {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
},
body: JSON.stringify({

  ip: IP,

  unit: UNIT,

  userid: USERID
})

});
}
/*
  function name: Getuser
  this function is used to connect with server and extract the data we need from the user table.
*/
function Getuser(){
  fetch('http://10.132.211.240:3000/User')
  .then((data) => {
    return data.json();
  })
  .then((response) => {
      console.log("success: ", response);
      return response;
      
  })
  .catch((error) => {
      console.warn("error: "+error);
      //return error;
  })
  return xx;
  
}


/*
  function name: GetError
  this function is used to connect with server and extract the data we need from the error table.
*/
function GetError(){
  fetch('http://localhost:3000/Error')
  .then((data) => {

    return data.json();
  })
  .then((response) => {
      console.log("success: ", response);
      
  })
  .catch((error) => {
      console.warn("error: "+error);
  })
  
}
/*
  function name: Getcobot
  this function is used to connect with server and extract the data we need from the cobot table.
*/
function GetCobot(){
  fetch('http://localhost:3000/Cobot')
  .then((data) => {

    return data.json();
  })
  .then((response) => {
      console.log("success: ", response);
      
  })
  .catch((error) => {
      console.warn("error: "+error);
  })

}



/*
  function name: HomeScreen
  this function is used to HOME GUI.
  log in part
  */


const userInfo={username:'Admin',password:'12345'}

//GUI design for the homepage, which can allow users to login, register, and sho passward
class HomeScreen extends Component{
  static navigationOptions={
    headerShown:false
  }

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }
  render(){
    return(
        <View style={styles.container}>
           <Image style={{width: 200, height: 50,marginBottom:30}}
          source={require('./images/tag.png')}  />
          
          
            <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Username"
            onChangeText={(username)=>this.setState({username})}
            value={this.state.username}
            placeholderTextColor="#ffffff"
            />

            <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            onChangeText={(password)=>this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            />

            <TouchableOpacity style={styles.button}
                // onPress={()=> this.props.navigation.navigate('Details')}
                onPress={this._login}
            >
                <Text style={styles.buttonText}>{this.props.type} Login</Text>
            </TouchableOpacity>
            <Text style={styles.signupText}> Don't have an account yet?</Text>
           <TouchableOpacity onPress={this._register}><Text style={styles.signupButton}> Register</Text></TouchableOpacity>  

            <TouchableOpacity onPress={this._forgot}><Text style={styles.signupButton}> Forgot Password?</Text></TouchableOpacity>  


        </View>
    );
  }
/*
  function name: HomeScreen
  this function is used to validation log in.

  log in part
  */

   _forgot=async()=>{
    this.props.navigation.navigate('Reset');
   }

   _login=async()=>{
    
      // fetch('http://10.132.211.240:3000/User')
      // .then((data) => {
      //   return data.json();
      // })
      // .then((response) => {
      //     for(let index = 0; index < response.length;index++){
      //   if(response[index]["UserID"]=== this.state.username&&response[index]["Password"] === this.state.password){
         this.props.navigation.navigate('Details');
      //    return response;
      //   }
      //        }
            
      //        alert("Wrong username or password!");
      //     return response;
          
      // })
      // .catch((error) => {
      //     console.warn("error: "+error);
      //     //return error;
      // })
      
     
   }

/*
  function name: HomeScreen
  this function is used to change navagation to register.

  log in part
  */
   _register=async()=>{
      this.props.navigation.navigate('Register');
   }

}

/*
  function name: DetailScreen
  this function is used to change DetailScreen.

  */

//GUI design for the Control Panel page, which can allow the users to control the cobot by sending commands   
class DetailsScreen extends Component {
  static navigationOptions={
    title:'Control Panel'
  }
  
  constructor(props){
    super(props);
    this.state={
      Select:''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this._logout} title="Logout"/>

        <Text style={{fontWeight: 'bold', color: 'red'}}>Cobot Live Status:</Text>
        <Text style={{fontWeight: 'bold', color: 'red'}}>Units Produced:</Text>

        <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Select Cobot By IP"
            onChangeText={(Select)=>this.setState({Select})}
            value={this.state.Select}
            placeholderTextColor="#ffffff"
            />
            <TouchableOpacity style={styles.button}
               // onPress={this.Stop}
               >
        <Text style={styles.buttonText}>{this.props.type} Select</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button}
                onPress={this.Send}>
        <Text style={styles.buttonText}>{this.props.type} Start Cobot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
                onPress={this.Pause}>
        <Text style={styles.buttonText}>{this.props.type} Pause Cobot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
                onPress={this.Stop}>
        <Text style={styles.buttonText}>{this.props.type} Stop Cobot</Text>
        </TouchableOpacity>


        
        {/* //<Button onPress={this._logout} title="User Setting"/> */}
        <Button  title="User Setting"/>

      {/* <Button title = "Start Cobot" type = "primary" style = {styles.button} 
      onPress = {this.Send}></Button>
      <Button title = "Pause Cobot" type = "primary" style = {styles.button}
      onPress = {this.Pause}></Button>
      <Button title = "Stop Cobot" type = "primary" style = {styles.button}
      onPress = {this.Stop}></Button> */}

      
      </View>
    );
  }

//functions to make connection between devices and cobot by using tcp protocal
  Connect(){
    var state = ws.readyState;
    if(state == 1){
      status = "connected";
    }
    else{
      status = "not connect";
    }
    Alert.alert(
      'Connection status',
      status,[{text: 'OK', onPress: () => console.log('OK Pressed')}],
      { cancelable: false}
    )
  }

  //start cobot function
  Send(){
    client.write(("play\n"));
  }

 //stop cobot function
  Stop(){
    client.write(("stop\n"));
  }

  //pause cobot function
  Pause(){
    client.write(("pause\n"));
  }

/*
  function name: DetailScreen
  this function is used to log out.

  */
  _logout=async()=>{
    //await AsyncStorage.clear();
    //this.props.navigation.navigate('Auth');
    const asyncStorageKeys = await AsyncStorage.getAllKeys();

    if (asyncStorageKeys.length > 0) {
    AsyncStorage.clear();
    }
 // await AsyncStorage.clear();
  this.props.navigation.navigate('Auth');
  }

}

//GUI design for Reset Password screen
class ResetScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      answer:'',
      emailname:''
    }
  }
    render() {
      return (
        <View style={styles.container}>
          <Text>Forget Password Screen</Text>
          
          <TextInput style={styles.inputBox} 
             underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="What is your Email Address?"
              onChangeText={(emailname)=>this.setState({emailname})}
              value={this.state.emailname}
              placeholderTextColor="#ffffff"
              />

          <TextInput style={styles.inputBox} 
             underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="In what city were you born?"
              onChangeText={(answer)=>this.setState({answer})}
              value={this.state.answer}
              placeholderTextColor="#ffffff"
              />
             <Button onPress={this._check} title="Submit"/>
             </View>
    );
  }


/*
  function name: check
  this function is answer question and get the password.

  */

  _check=async()=>{
    
    fetch('http://10.132.211.240:3000/User')
    .then((data) => {
      return data.json();
    })
    /*.then((response) => {
        for(let index = 0; index < response.length;index++){
      if(response[index]["Secret"]=== this.state.answer){
        alert("your password is "+ response[index]["Password"]);
      }
           }
          
        return response;
        
    })*/
    .then((response) => {
      for(let index = 0; index < response.length;index++){
    if(response[index]["Secret"]=== this.state.answer&&response[index]["Email"]=== this.state.emailname){
      alert("your password is "+ response[index]["Password"]);
      return response;
    }
         }
    
       alert("your email or secret answer wrong!");
       return response;
       
     
      
  })
    .catch((error) => {
        console.warn("error: "+error);
        //return error;
    })
    

}
}
/*
  function name: Register
  this function is used to register.

  */
class RegisterScreen extends Component {

  /*constructor(props){
    super(props);
    this.state={
      newname:'',
      newpassword:'',
      confirmpassword:''
    }
  }*/

  constructor(props){
    super(props);
    this.state={
      newname:'',
      emailaddress:'',
      secret:'',
      level:'',
      teleg:'',
      newpassword:'',
      confirmpassword:''
    }
  }

  /*render() {
    return (
      <View style={styles.container}>
        <Text>Register Screen</Text>
        

        <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Username"
            onChangeText={(newname)=>this.setState({newname})}
            value={this.state.newname}
            placeholderTextColor="#ffffff"
            />

          <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email Address"
            onChangeText={(emailaddress)=>this.setState({emailaddress})}
            value={this.state.emailaddress}
            placeholderTextColor="#ffffff"
            />

            <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="In what city were you born?"
            onChangeText={(secret)=>this.setState({secret})}
            value={this.state.secret}
            placeholderTextColor="#ffffff"
            />


          <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="What is your permission level?"
            onChangeText={(level)=>this.setState({level})}
            value={this.state.level}
            placeholderTextColor="#ffffff"
            />
            <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            onChangeText={(newpassword)=>this.setState({newpassword})}
            value={this.state.newpassword}
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            />

            <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="ConfirmPassword"
            onChangeText={(confirmpassword)=>this.setState({confirmpassword})}
            value={this.state.confirmpassword}
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            />

            <TouchableOpacity style={styles.button}
                // onPress={()=> this.props.navigation.navigate('Details')}
                onPress={this._submit}
            >
            <Text style={styles.buttonText}>{this.props.type} Submit</Text>
            </TouchableOpacity>
            <Text style={styles.signupText}> Already have an account yet?</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}><Text style={styles.signupButton}> Sign In</Text></TouchableOpacity>  




      </View>
    );
  }*/

  render() {
    return (
      
   <View style={styles.containerop}>
     <KeyboardAvoidingView behavior="position">
        <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Username"
            onChangeText={(newname)=>this.setState({newname})}
            value={this.state.newname}
            placeholderTextColor="#ffffff"
            />

          <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email Address"
            onChangeText={(emailaddress)=>this.setState({emailaddress})}
            value={this.state.emailaddress}
            placeholderTextColor="#ffffff"
            />

            <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="In what city were you born?"
            onChangeText={(secret)=>this.setState({secret})}
            value={this.state.secret}
            placeholderTextColor="#ffffff"
            />


          <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="What is your permission level?"
            onChangeText={(level)=>this.setState({level})}
            value={this.state.level}
            placeholderTextColor="#ffffff"
            />
          <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="What is your Telegram chat ID?"
            onChangeText={(teleg)=>this.setState({teleg})}
            value={this.state.teleg}
            placeholderTextColor="#ffffff"
            />



            <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            onChangeText={(newpassword)=>this.setState({newpassword})}
            value={this.state.newpassword}
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            />

            <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="ConfirmPassword"
            onChangeText={(confirmpassword)=>this.setState({confirmpassword})}
            value={this.state.confirmpassword}
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            />
           </KeyboardAvoidingView>
           <TouchableOpacity style={styles.button}
                // onPress={()=> this.props.navigation.navigate('Details')}
                onPress={this._submit}
            >
            <Text style={styles.buttonText}>{this.props.type} Submit</Text>
            </TouchableOpacity>
            <Text style={styles.signupText}> Already have an account yet?</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}><Text style={styles.signupButton}> Sign In</Text></TouchableOpacity>  




      </View>
    );
  }


/*
  function name: Register
  this function is used to register.

  */


  _submit=async()=>{

    /*if(this.state.newname!=null&&this.state.confirmpassword===this.state.newpassword){
      Storeuser(this.state.newname,this.state.emailaddress,this.state.newpassword,this.state.level,this.state.secret);
     //await AsyncStorage.setItem('isLoggedIn','1')
     alert('Register successfully! Please back to Log in')
     this.props.navigation.navigate('Home');
    }
    else{
      alert("username or password is incorrect!");
    }*/

    if(this.state.newname!=''&&this.state.emailaddress!=''&&this.state.newpassword!=''&&this.state.level!=''&&this.state.secret!=''&&this.state.teleg!=''){
      if(this.state.confirmpassword===this.state.newpassword){
        Storeuser(this.state.newname,this.state.emailaddress,this.state.newpassword,this.state.level,this.state.secret,this.state.teleg);
       //await AsyncStorage.setItem('isLoggedIn','1')
       alert('Register successfully! Please back to Log in')
       this.props.navigation.navigate('Home');
      }
  
      else if(this.state.confirmpassword!=this.state.newpassword){
        alert(" two password is not the same!");
      }
    }
  
    else{
      alert("Please fill all blank inputbox!");
    }

  }


}


const RootStack = createStackNavigator({
  Home:HomeScreen, /////////////////////////////////////newAdded
  //Home:HomeScreen,
  Details:DetailsScreen,
  Register:RegisterScreen,
  Reset:ResetScreen
},
//{
  //initialRouteName:'Home'
//}
);




const AuthStack=createStackNavigator({Home:HomeScreen});


/*
  function name: AuthLoadingScreen
  this function is used to validation log in.

  log in part
  */

class AuthLoadingScreen extends Component{
  constructor(props){
    super(props);
    this._loadData();
  }

  render(){
    return(
      <View style={styles.container}>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
    );
  }

  /*
  function: keep the app logged status
  

  */

  _loadData=async()=>{
    const isLoggedIn=await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate(isLoggedIn!=='1'?'Auth':'App');
  }
}

const AppContainer = createAppContainer(RootStack); 


/*
  function name: createAppContainer
  this function is used to main UI
  */


export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: RootStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
/*
  
  this function is used to design the GUI.

  */

//GUI layout design
const styles =StyleSheet.create({
    container:{
      backgroundColor:'#455a64',
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },

    containerop:{
      backgroundColor:'#455a64',
      flex:1,
      alignItems:'center',
    },

    inputBox:{
        width:300,
        height:45,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical:10
    },
    
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:"center"
    },

    button:{
        backgroundColor:'#1c313a',
        width:300,
        paddingVertical:12,
        marginVertical:10,
        borderRadius:25
    }



});




/////end






import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TextInputBase,
  KeyboardAvoidingView,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {WIDTH, HEIGHT} from 'utils/dimension';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import  Icon from 'react-native-vector-icons/AntDesign';


interface IProps {}

/**
 * @author
 * @function @loginScreen
 **/

const SignUpScreen: FC<IProps> = props => {
  const isEmailValid = (email: string): boolean => {
    // Regular expression for a simple email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const isPasswordValid = (password: string): boolean => {
    // Regular expression for a strong password
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/;
  
    return passwordRegex.test(password);
  };
  
  
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    container,
    textStyle,
    headingText,
    subhead,
    headingTextView,
    askView,
    askView1,
    button,
    subhead1,
    enterText,
    enterTextStyle,
    buttonStyle,
  } = styles;
  return (
    <KeyboardAwareScrollView style={container}>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginEmailScreen')}>
          <Text style={textStyle}>Have Account? Log In</Text>
        </TouchableOpacity>
        <View style={headingTextView}>
          <Text style={headingText}>Sign Up</Text>
        </View>
        <View style={askView}>
          <Text style={subhead}>Sign Up To Continue</Text>
        </View>
        <View style={askView1}>
          <Text style={subhead1}>YOUR EMAIL</Text>
        </View>
        <View style={enterText}>
          <TextInput
            style={enterTextStyle}
            placeholder="Your email here"
            inputMode="email"
            placeholderTextColor="lightgrey"
            underlineColorAndroid="black"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        {email.length > 0 && !isEmailValid(email) && (
          <Text style={{color: 'red', marginLeft: 25}}>
            Invalid email address
          </Text>
        )}
        <View style={askView1}>
          <Text style={subhead1}>YOUR PASSWORD</Text>
        </View>
        <View style={enterText}>
          <TextInput
            style={enterTextStyle}
            placeholder="Your Password Here"
            secureTextEntry={!showPassword}
            placeholderTextColor="lightgrey"
            underlineColorAndroid="black"
            multiline={false}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          {/* <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon
            name={showPassword ? "eye": "eye-off"}
            size={40}
            color="red"
          />
          <Text>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity> */}
        </View>
        {password.length > 0 && !isPasswordValid(password) && (
          <Text style={{color: 'red', marginLeft: 25}}>
            Invalid Password
          </Text>
        )}
        <TouchableOpacity
          style={button}
          onPress={() => navigation.navigate('UserInfoScreen')}
          disabled={!isEmailValid(email)}>
          <Text style={buttonStyle}>Continue</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'black',
    fontFamily: 'Times New Roman',
    fontSize: 20,
    textAlign: 'right',
    textDecorationLine: 'underline',
    marginRight: 30,
    marginTop: 50,
    marginBottom: 30,
  },

  headingTextView: {
    height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 30,
    marginTop: 50,
  },
  headingText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 45,
    fontWeight: '500',
  },
  subhead: {
    fontSize: 18,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '300',
    textTransform: 'capitalize',
  },
  askView: {
    height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    marginLeft: 30,
    marginTop: 20,
  },
  askView1: {
    height: 'auto',
    width: 'auto',
    marginLeft: 30,
    marginTop: 50,
  },
  button: {
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 50,
    backgroundColor: 'royalblue',
    width: WIDTH - 100,
    borderRadius: 25,
    textDecorationLine: 'underline',
    height: 70,
    alignItems: 'center',
  },
  subhead1: {
    fontSize: 16,
    color: 'black',
    justifyContent: 'center',
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  enterText: {
    marginTop: 25,
    width: 350,
    marginLeft: 25,
    fontWeight: '500',
    textTransform: 'lowercase',
  },
  enterTextStyle: {
    color: 'black',
    fontWeight: '400',
    fontSize: 20,
    textTransform: 'lowercase',
  },
  buttonStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
});

export default SignUpScreen;
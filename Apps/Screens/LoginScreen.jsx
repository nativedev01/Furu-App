import React from 'react';
import { View, Text, Button } from 'react-native';


const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Go to Registration"
        onPress={() => navigation.navigate('SignInScreen')}
      />
    </View>
  );
};

export default LoginScreen;
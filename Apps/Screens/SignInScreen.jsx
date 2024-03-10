import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Linking,
  StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import { Link, useNavigation } from "@react-navigation/native";

WebBrowser.maybeCompleteAuthSession();



export default function SignInScreen() {
  

  const [isPasswordShow, setIspasswordShow] = useState(false);
  

  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    
    <ScrollView>
      <Image
        source={require("../../assets/images/login_.png")}
        className="mt-0 "
      />
      <View className="p-3 bg-white mb-[5px]  shadow-md">
        <Text className="text-[20px] font-semi-bold mb-[6px]">
          Your Profile Time!
        </Text>
        <Text className="text-[14px] text-1e1e1e mb-[12px]">
          Enter your details below correctly it will be use in billing.
        </Text>
      </View>
      <View
        style={{
          width: 336,
          height: 232,
          paddingLeft: 12,
          marginTop: -11,
        }}
      >
        <View style={{ marginBottom: 14 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              marginBottom: 4,
            }}
          >
            Your name
          </Text>

          <View
            style={{
              width: 336,
              height: 45,
              backgroundColor: "#F3F3F3",
              borderWidth: 0,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 20,
            }}
          >
            <TextInput
              placeholderTextColor={Colors.black}
              keyboardType="name-phone-pad"
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 14 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Email
          </Text>

          <View
            style={{
              width: 336,
              height: 45,
              backgroundColor: "#F3F3F3",
              borderWidth: 0,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholderTextColor={Colors.black}
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 14 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Password
          </Text>

          <View
            style={{
              width: 336,
              height: 45,
              backgroundColor: "#F3F3F3",
              borderWidth: 0,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholderTextColor={Colors.black}
              secureTextEntry={isPasswordShow}
              style={{
                width: "100%",
              }}
            />
            <TouchableOpacity
              onPress={() => setIspasswordShow(!isPasswordShow)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShow == true ? (
                <Ionicons name="eye-off" size={24} color={Colors.black} />
              ) : (
                <Ionicons name="eye" size={24} color={Colors.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* it is phone number colomn  */}

        <View style={styles.container}>
        <View style={styles.phoneNumberContainer}>
          <Text style={styles.label}>Phone number</Text>

          <View style={styles.inlineInputContainer}>
            <TextInput
              placeholder="+91-XXXXXXXXXX"
              placeholderTextColor="#AFAFAF"
              keyboardType="phone-pad"
              style={styles.inlineInput}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Get OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>


      <Text
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 13,
          height: 15,
          left: 170,
          marginTop:11,
          marginBottom: 15,
        }}
      >
        or
      </Text>

      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: "#F3F3F3",
          width: 210,
          height: 46,
          padding: 10,
          left: 5,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text className="w-204 h-45">SignIn With Google</Text>
      </TouchableOpacity>
      <View>
        <Text
          style={{
            borderColor: "#F3F3F3",
            fontSize:12,
            borderWidth: 0,
            width: 184,
            height: 45,
            left: 5,
            marginTop:10
          }}
        >
          Already Have an Account? {""}
          <Text style={{ color: 'green' }} onPress={() => navigation.navigate('LoginScreen')}>Login
          </Text>
        </Text>
      </View>

      <Text
        style={{
          fontSize:10,
          height: 12,
          width: 299,
          paddingLeft:5,
          marginBottom:8,
          marginTop:-15,
          alignItems:"center",
          alignSelf:'center'
        }}
      >
        *By clicking continue you agree to {""}
        <Text
          style={{ color: "green" }}
          onPress={() => {
            Linking.openURL("https://www.google.com/");
          }}
        >
          Terms & Conditions
        </Text>{" "}
        of furu
      </Text>
      <TouchableOpacity
        onPress={() => console.log("aa gya singIn krne")}
        style={{
          backgroundColor: "#03753C",
          borderWidth: 0,
          width: 336,
          height: 50,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          alignSelf:"center"
        }}
      >
        <Text
          style={{
            height: 17,
            width: 45,
            color: "white",
            fontSize: 14,
            
          }}
        >
          SignIn
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  phoneNumberContainer: {
    marginTop:35,
    paddingLeft:10
    
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
    marginBottom:5
  },
  inlineInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 336,
  },
  inlineInput: {
    flex: 1,
    height: 45,
    borderRadius: 8,
    paddingLeft: 22,
    borderColor: '#F3F3F3',
    borderWidth: 1,
    paddingRight:2
  },
  button: {
    width: 100,
    height: 45,
    backgroundColor: '#03753C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:5,
    alignItems:"center"
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
  },
});

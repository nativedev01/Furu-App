import { StatusBar } from "expo-status-bar";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "./Apps/Screens/SignInScreen";

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_ZXhwZXJ0LW1lZXJrYXQtNTUuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <View className="flex-1 bg-white">
        <StatusBar style="auto" />

        <SignedIn>
          <Text>Hey! You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <SignInScreen/>
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

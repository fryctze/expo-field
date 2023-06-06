import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppContainer from "./src/navigation/AppContainer";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {app} from "./firebase";

export default function App() {
  return (
      <SafeAreaProvider>
          <StatusBar style="auto"/>
          <SafeAreaView style={styles.container}>
              <AppContainer/>
          </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

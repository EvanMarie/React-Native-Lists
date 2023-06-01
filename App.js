import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { appContainer } from "./styling_components";
import MessagesList from "./MessagesList";

export default function App() {
  return (
    <View style={appContainer}>
      <SafeAreaView>
        <MessagesList />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

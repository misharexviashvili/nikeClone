import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CartListItem from "./src/components/CartListItem";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import cart from "./src/data/cart";
import ProductsScreen from "./src/screens/ProductsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

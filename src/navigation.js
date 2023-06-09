import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerTitleStyle: { fontFamily: "RobotoMedium" },
            headerRight: () => (
              <Pressable
                style={{ flexDirection: "row" }}
                onPress={() => navigation.navigate("Cart")}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>
                  {numberOfItems}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{
            presentation: "modal",
            headerTitleStyle: { fontFamily: "RobotoMedium" },
          }}
        />
        <Stack.Screen
          name="Cart"
          component={ShoppingCart}
          options={{ headerTitleStyle: { fontFamily: "RobotoMedium" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

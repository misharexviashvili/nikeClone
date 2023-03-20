import { FlatList, Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import CartListItem from "../components/CartListItem";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectDeliveryPrice, selectSubtotal } from "../store/cartSlice";
const ShoppingCart = () => {
  const shoppingCartTotal = () => {
    const subTotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    return (
      <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>{subTotal} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>{deliveryFee} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>{subTotal + deliveryFee} US$</Text>
        </View>
      </View>
    );
  };
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Fragment>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={shoppingCartTotal}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </Fragment>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

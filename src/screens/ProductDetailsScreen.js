import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

export default function ProductDetailsScreen() {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product: product }));
  };
  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={product.images}
          horizontal
          showsHorizontalScrollIndicator={false}
          //  Effect of carousel  -  pagingEnabled
          pagingEnabled
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={addToCart}
      >
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 80,
  },
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
    fontFamily: "RobotoMedium",
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
    fontFamily: "RobotoMedium",
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
    fontFamily: "RobotoMedium",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 20,
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
    fontFamily: "RobotoMedium",
  },
  pressed: {
    backgroundColor:'#444',
  },
});

import { StyleSheet, FlatList, Image, Pressable } from "react-native";
import { productsSlice } from "../store/productSlice";
import { useSelector, useDispatch } from "react-redux";

const ProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  const distpatch = useDispatch();
  return (
    <FlatList
      data={products}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            // update selected product
            distpatch(productsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Product Details");
          }}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  useWindowDimensions,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "./components/CustomButton";
import Input from "./components/Input";
import ListItem from "./components/ListItem";
import Colors from "./utils/Colors";

export default function App() {
  const [modalState, setModalState] = useState(false);
  const [purchases, setPurchases] = useState([]);
  const { height } = useWindowDimensions();

  const openInput = () => {
    setModalState(true);
  };

  const closeInput = () => {
    setModalState(false);
  };

  const itemAddedHandler = (inputValue) => {
    setPurchases((previousPurchases) => [
      ...previousPurchases,
      {
        text: inputValue,
        id: Math.floor(Math.random() * Date.now()).toString(),
      },
    ]);
    setModalState(false);
  };

  const removeItemHandler = (id) => {
    const newPurchases = purchases.filter((item) => item.id !== id);
    setPurchases(newPurchases);
  };

  const paddingTopDimentions = height > 400 ? 60 : 15;

  return (
    <LinearGradient
      colors={Platform.select({
        ios: [Colors.grey, Colors.blue],
        android: [Colors.mint, Colors.darkGreen],
      })}
      style={[styles.mainContainer, { paddingTop: paddingTopDimentions }]}
    >
      {/* START BUTTON */}
      {!modalState && (
        <CustomButton onPress={openInput} style={styles.startBtn}>
          Add New Item
        </CustomButton>
      )}

      {/* INPUT MODAL */}
      <Input
        visible={modalState}
        arrayOfPurchases={purchases}
        onGetInputValue={itemAddedHandler}
        onCancel={closeInput}
      />

      {/* LIST OF PURCHASES */}
      <View style={styles.listItemContainer}>
        <FlatList
          style={styles.flatList}
          data={purchases}
          keyExtractor={purchases.id}
          renderItem={(itemData) => {
            return (
              <ListItem
                text={itemData.item.text}
                id={itemData.item.id}
                removeItem={removeItemHandler}
              />
            );
          }}
        />
      </View>

      {/* STATUS BAR MODE */}
      <StatusBar style={Platform.select({ ios: "light", android: "dark" })} />
    </LinearGradient>
  );
}

// STYLING
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Platform.select({
      ios: Colors.blue,
      android: Colors.darkGreen,
    }),
  },

  startBtn: {
    backgroundColor: Platform.select({
      ios: Colors.orange,
      android: Colors.yellow,
    }),
    paddingVertical: 6,
    paddingHorizontal: 18,
    color: Platform.select({ ios: Colors.light, android: Colors.darkGreen }),
    borderRadius: 8,
    border: "none",
    textAlign: "center",
  },

  listItemContainer: {
    width: "100%",
    marginTop: 25,
    marginBottom: 80,
  },

  flatList: {
    width: "100%",
  },
});

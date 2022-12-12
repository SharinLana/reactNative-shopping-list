import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Modal,
  Alert,
  KeyboardAvoidingView,
  useWindowDimensions,
  Platform,
} from "react-native";
import CustomButton from "./CustomButton";
import Colors from "../utils/Colors";

const Input = ({ visible, onGetInputValue, arrayOfPurchases, onCancel }) => {
  const [inputValue, setInputValue] = useState("");
  const { height } = useWindowDimensions();

  const getInputValueHandler = (enteredText) => {
    setInputValue(enteredText);
  };

  const addItemHandler = () => {
    // BAN ON ADDING A DUPLIATE ITEM
    for (let i = 0; i < arrayOfPurchases.length; i++) {
      if (arrayOfPurchases[i].text.toLowerCase() === inputValue.toLowerCase()) {
        Alert.alert("This item is already on the list!");
        setInputValue("");
        return;
      }
    }

    // BAN ON ADDING AN EMPTY FIELD
    if (inputValue.trim().length === 0) {
      Alert.alert("Please add an item or press Cancel");
      return;
    }

    onGetInputValue(inputValue);
    setInputValue("");
  };

  const cancelInput = () => {
    onCancel();
    setInputValue("");
  };

  const btnWidth = height > 400 ? 100 : 170;
  const btnsContainerWidth = height > 400 ? "100%" : "70%";
  const paddingTopDimentions = height > 400 ? 0 : 13;
  const inputHeight = height > 400 ? 50 : 40;
  const inputPaddingV = height > 400 ? 15 : 8;
  const btnPadding = height > 400 ? 8 : 5;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      supportedOrientations={["portrait", "landscape"]}
    >
      <KeyboardAvoidingView
        style={[
          styles.inputContainer,
          styles.screen,
          { paddingTop: paddingTopDimentions },
        ]}
        behavior={Platform.select({ ios: "padding", android: "" })}
      >
        <TextInput
          onChangeText={getInputValueHandler}
          value={inputValue}
          style={[
            styles.input,
            { height: inputHeight, paddingVertical: inputPaddingV },
          ]}
          placeholder={"Add to the list..."}
          autoCapitalize="none"
        />
        <View style={[styles.btnsContainer, { width: btnsContainerWidth }]}>
          <CustomButton
            onPress={cancelInput}
            style={[
              styles.inputBtn,
              {
                backgroundColor: Colors.grey,
                width: btnWidth,
                paddingVertical: btnPadding,
              },
            ]}
          >
            Cancel
          </CustomButton>
          <CustomButton
            onPress={addItemHandler}
            style={[
              styles.inputBtn,
              { width: btnWidth, paddingVertical: btnPadding },
            ]}
          >
            Add
          </CustomButton>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default Input;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Platform.select({
      ios: Colors.orange,
      android: Colors.green,
    }),
  },

  input: {
    borderRadius: 8,
    minWidth: "90%",
    paddingHorizontal: 15,
    backgroundColor: Colors.light,
    fontSize: 18,
  },

  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  inputBtn: {
    backgroundColor: Platform.select({
      ios: Colors.blue,
      android: Colors.darkGreen,
    }),
    color: Colors.light,
    borderRadius: 8,
    border: "none",
    textAlign: "center",
  },
});

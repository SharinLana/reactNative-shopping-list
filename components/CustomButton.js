import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Colors from "../utils/Colors";

const CustomButton = ({ children, style, onPress }) => {
  const { height } = useWindowDimensions();

  const marginT = height > 400 ? 30 : 15;

  return (
    <View style={[style, { marginTop: marginT }]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.light }}
        style={(pressData) => pressData.pressed && styles.pressedBtn}
      >
        <Text style={[styles.text, style]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  pressedBtn: {
    opacity: 0.6,
  },

  text: {
    fontSize: 18,
  },
});

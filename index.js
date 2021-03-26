//Imported React-Native Components
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  FlatList,
  Modal,
  Linking,
  Share,
  DeviceEventEmitter,
  Dimensions,
  Platform,
} from "react-native";

const HomeScreen = () => {
return(
<View>
      <View style={[styles.overlay]} />

</View>
)
}

const styles = StyleSheet.create({
 overlaystyle: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.5,
  },
})

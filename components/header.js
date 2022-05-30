import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  dummyData,
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  theme,
} from "../constants";

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Profile */}
      <TouchableOpacity style={styles.headerProfile}>
        <Image source={images.profile_photo} style={styles.profilePhoto} />
      </TouchableOpacity>
      {/* Screen Mirror */}
      <TouchableOpacity style={styles.headerProfile}>
        <Image source={icons.airplay} style={styles.screenMirror} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.padding,
  },
  headerProfile: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  screenMirror: {
    width: 25,
    height: 25,
    tintColor: COLORS.primary,
  },
});

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const Profiles = ({ profiles }) => {
  if (profiles.length <= 3) {
    return (
      <View style={styles.container}>
        {profiles.map((item, index) => {
          return (
            <View
              key={`profile-${index}`}
              style={index == 0 ? null : { marginLeft: -15 }}
            >
              <Image
                source={item.profile}
                style={styles.profile}
                resizeMode="cover"
              />
            </View>
          );
        })}
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {profiles.slice(0, 3).map((item, index) => {
          return (
            <View
              key={`profile-${index}`}
              style={index == 0 ? null : { marginLeft: -15 }}
            >
              <Image
                source={item.profile}
                style={styles.profile}
                resizeMode="cover"
              />
            </View>
          );
        })}
        <Text
          style={{
            color: COLORS.white,
            marginLeft: SIZES.base,
            ...FONTS.body3,
          }}
        >
          {`${profiles.length - 3} +`}
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.black,
  },
});

export default Profiles;

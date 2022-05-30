import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES, dummyData } from "../../constants";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import ProgressBar from "./ProgressBar";
const ContinueWatching = ({ navigation }) => {
  return (
    <View style={{ marginTop: SIZES.padding }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text style={{ flex: 1, color: COLORS.white, ...FONTS.h2 }}>
          Continue Watching
        </Text>
        <Image
          source={icons.right_arrow}
          style={{ width: 20, height: 20, tintColor: COLORS.primary }}
        />
      </View>
      {/* LIST MOVIE */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: SIZES.padding }}
        data={dummyData.continueWatching}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate("MovieDetail", { selectedMovie: item })
              }
            >
              <View
                style={{
                  marginLeft: index == 0 ? SIZES.padding : 20,
                  marginRight:
                    index == dummyData.continueWatching.length - 1
                      ? SIZES.padding
                      : 0,
                }}
              >
                {/* THUMBNAIL */}
                <Image
                  source={item.thumbnail}
                  resizeMode="cover"
                  style={{
                    width: SIZES.width / 3,
                    height: SIZES.width / 3 + 60,
                    borderRadius: 20,
                  }}
                />
                <Text
                  style={{
                    color: COLORS.white,
                    marginTop: SIZES.base,
                    ...FONTS.h4,
                  }}
                >
                  {item.name}
                </Text>
                {/* PROGRESS BAR */}
                <ProgressBar
                  containerStyle={{ marginTop: SIZES.radius }}
                  barStyle={{ height: 3 }}
                  barPercentage={item.overallProgress}
                />
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

export default ContinueWatching;

const styles = StyleSheet.create({});

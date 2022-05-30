import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { ProgressBar } from "../components";
import { COLORS, SIZES, icons, FONTS } from "../constants";
import LinearGradient from "react-native-linear-gradient";
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";

const MovieDetail = ({ navigation, route }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  //   HEADER BACK BUTTON
  const HeaderBar = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: Platform.OS === "ios" ? 40 : 20,
          marginHorizontal: 15,
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: 20,
            backgroundColor: COLORS.transparentBlack,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.left_arrow}
            style={{ width: 20, height: 20, tintColor: COLORS.white }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: 20,
            backgroundColor: COLORS.transparentBlack,
          }}
        >
          <Image
            source={icons.upload}
            style={{ width: 20, height: 20, tintColor: COLORS.white }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  //   COVER IMAGE
  const HeaderSection = () => {
    return (
      <ImageBackground
        source={selectedMovie?.details?.image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.7,
        }}
      >
        <HeaderBar />
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["transparent", "#000"]}
            style={{
              width: "100%",
              height: 150,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {/* SEASON */}
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              {selectedMovie?.details.season}
            </Text>
            {/* TITLE */}
            <Text
              style={{
                color: COLORS.white,
                marginTop: SIZES.base,
                ...FONTS.h1,
              }}
            >
              {selectedMovie?.name}
            </Text>
          </LinearGradient>
        </View>
      </ImageBackground>
    );
  };
  //   CATEGORY AND RATINGS
  const CategoryAndRatings = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.base,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* umur */}
        <View style={[styles.categoryContainer, { marginHorizontal: 3 }]}>
          <Text style={{ color: COLORS.white, ...FONTS.h4 }}>
            {selectedMovie?.details?.age}
          </Text>
        </View>
        {/* genre */}
        <View style={[styles.categoryContainer, { marginHorizontal: 3 }]}>
          <Text style={{ color: COLORS.white, ...FONTS.h4 }}>
            {selectedMovie?.details?.genre}
          </Text>
        </View>
        {/* ratings */}
        <View style={[styles.categoryContainer, { marginHorizontal: 3 }]}>
          <Image
            source={icons.star}
            style={{ width: 15, height: 15 }}
            resizeMode="contain"
          />
          <Text
            style={{ color: COLORS.white, marginLeft: SIZES.base, ...FONTS.h4 }}
          >
            {selectedMovie?.details?.ratings}
          </Text>
        </View>
      </View>
    );
  };

  const MovieDescription = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
          justifyContent: "space-around",
        }}
      >
        {/* title & time */}
        <View style={{ flexDirection: "row" }}>
          <Text style={{ ...FONTS.h4, flex: 1, color: COLORS.white }}>
            {selectedMovie?.details?.currentEpisode}
          </Text>
          <Text style={{ color: COLORS.lightGray, ...FONTS.body4 }}>
            {selectedMovie?.details?.runningTime}
          </Text>
        </View>
        {/* progress barr */}
        <ProgressBar
          containerStyle={{ marginTop: SIZES.radius }}
          barPercentage={selectedMovie?.details?.progress}
          barStyle={{ height: 5, borderRadius: 3 }}
        />
        {/* BUTTON */}
        <TouchableOpacity
          style={{
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: Platform.OS === "ios" ? SIZES.padding * 2 : 0,
            borderRadius: 15,
            backgroundColor: COLORS.primary,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
            {selectedMovie?.details?.progress == "0%"
              ? "WATCH NOW"
              : "CONTINUE"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    let { selectedMovie } = route.params;
    setSelectedMovie(selectedMovie);
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: COLORS.black }}
      style={{ backgroundColor: COLORS.black }}
    >
      <HeaderSection />
      <CategoryAndRatings />
      <MovieDescription />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: SIZES.base,
    paddingHorizontal: SIZES.base,
    paddingVertical: 3,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.gray1,
  },
});

export default MovieDetail;

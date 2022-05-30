import React from "react";
import { Animated, Image, ImageBackground, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import Profiles from "./Profiles";

const HighlightMovie = ({ newSeasonScrollX, navigation }) => {
  // const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      horizontal
      pagingEnabled
      snapToAlignment={"center"}
      snapToInterval={SIZES.width}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      decelerationRate={0}
      contentContainerStyle={{ marginTop: SIZES.radius }}
      data={dummyData.newSeason}
      keyExtractor={(item) => `${item.id}`}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: newSeasonScrollX } } }],
        { useNativeDriver: false }
      )}
      renderItem={({ item, index }) => {
        return (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("MovieDetail", { selectedMovie: item })
            }
          >
            <View
              style={{
                width: SIZES.width,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* THUMBNAIL */}
              <ImageBackground
                source={item.thumbnail}
                resizeMode="cover"
                style={{
                  width: SIZES.width * 0.85,
                  height: SIZES.width * 0.85,
                  justifyContent: "flex-end",
                }}
                imageStyle={{
                  borderRadius: 40,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    height: 60,
                    width: "100%",
                    marginBottom: SIZES.radius,
                    paddingHorizontal: SIZES.radius,
                  }}
                >
                  {/* PLAY */}
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: COLORS.transparentWhite,
                      }}
                    >
                      <Image
                        source={icons.play}
                        resizeMode="contain"
                        style={{
                          width: 15,
                          height: 15,
                          tintColor: COLORS.white,
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        color: COLORS.white,
                        marginLeft: SIZES.base,
                        ...FONTS.h3,
                      }}
                    >
                      Play now
                    </Text>
                  </View>
                  {/* STILL WATCHING */}
                  {item.stillWatching.length > 0 && (
                    <View style={{ justifyContent: "center" }}>
                      <Text style={{ color: COLORS.white, ...FONTS.h4 }}>
                        Still watching
                      </Text>
                      <Profiles profiles={item.stillWatching} />
                    </View>
                  )}
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        );
      }}
    />
  );
};

export default HighlightMovie;

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated,
  ScrollView,
  StyleSheet,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Header,
  HighlightMovie,
  DotsCarousel,
  ContinueWatching,
} from "../components";

import {
  dummyData,
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  theme,
} from "../constants";

const Home = ({ navigation }) => {
  const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <HighlightMovie
          newSeasonScrollX={newSeasonScrollX}
          navigation={navigation}
        />
        <DotsCarousel newSeasonScrollX={newSeasonScrollX} />
        <ContinueWatching navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

// STYLES
const styles = StyleSheet.create({});

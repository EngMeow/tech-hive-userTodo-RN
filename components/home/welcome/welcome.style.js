import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.white,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    marginTop: 2,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
    flex: 1,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
  },
  tab:{
    paddingVertical: SIZES.small / 2,
    marginHorizontal:SIZES.medium,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.gray2,
  },
  tabText:{
    marginHorizontal: SIZES.medium / 2,
    fontFamily: FONT.medium,
    color: COLORS.gray2,
  }
});

export default styles;

import { Dimensions } from "react-native";
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import {
  configureFonts,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import {
  useFonts,
  Rubik_300Light,
  Rubik_300Light_Italic,
  Rubik_400Regular,
  Rubik_400Regular_Italic,
  Rubik_500Medium,
  Rubik_500Medium_Italic,
  Rubik_700Bold,
  Rubik_700Bold_Italic,
} from "@expo-google-fonts/rubik";

import {
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from "@expo-google-fonts/dm-sans";

export const FONTS = {
  Rubik_300Light,
  Rubik_300Light_Italic,
  Rubik_400Regular,
  Rubik_400Regular_Italic,
  Rubik_500Medium,
  Rubik_500Medium_Italic,
  Rubik_700Bold,
  Rubik_700Bold_Italic,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
};

export const fontConfig = {
  default: {
    regular: {
      fontFamily: "DMSans_400Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "DMSans_500Medium",
      fontWeight: "normal",
    },
    italic: {
      fontFamily: "DMSans_400Regular_Italic",
      fontWeight: "normal",
    },
    bold: {
      fontFamily: "DMSans_700Bold",
      fontWeight: "normal",
    },
  },
};

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    background: "#FFFFFF",
    surface: "#F8F8F8",
    primary: "#CA3782",
    accent: "#8D265B",
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    background: "#010101",
    surface: "#121212",
    primary: "#CA3782",
    accent: "#8D265B",
  },
};

export const getTheme = (scheme) => {
  if (scheme === "dark") {
    return CombinedDarkTheme;
  } else {
    return CombinedDefaultTheme;
  }
};

import { Colors } from "react-native-paper";
Colors.darkBg = "rgb(18, 18, 18)";
Colors.primary = "#CA3782";
Colors.accent = "#8D265B";
Colors.pink = "#d973a7";
Colors.silver = "#ced1d6";
Colors.gray = "#bdb8b8";

const { width, height } = Dimensions.get("window");
export const Tokens = {
  unit: (n = 1) => 8 * n,
  width,
  height,
  isLargeScreen: width >= 1024,
  borderRadius: 20,
  isSmallDevice: width < 375,
};

export const Styles = {
  web: {
    base: {
      touchable: {
        borderRadius: Tokens.borderRadius,
      },
      text: {},
    },
    light: {
      box: {},
      header: {
        backgroundColor: Colors.white,
      },
      touchable: {
        backgroundColor: Colors.white,
        hovered: {
          shadowColor: Colors.darkBg,
        },
      },
      text: {
        color: "#1C1C1E8",
      },
    },
    dark: {
      box: {
        shadowColor: Colors.white,
      },
      header: {
        backgroundColor: Colors.darkBg,
      },
      touchable: {
        backgroundColor: Colors.darkBg,
        hovered: {
          shadowColor: Colors.white,
        },
      },
      text: {
        color: "#E5E5E7",
      },
    },
  },
  android: {},
  ios: {},
};

export { Colors, useFonts };

import react from "react";
import { View, Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts as useFontOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useFontLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import { RestaurantsContextProvider } from "./src/services/restaurant/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  const [fontsLoaded] = useFontOswald({
    Oswald_400Regular,
  });
  const [osworldFont] = useFontLato({
    Lato_400Regular,
  });

  if (!fontsLoaded || !osworldFont) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        {/*<RestaurantsScreen />*/}
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
        <ExpoStatusBar style="auto"></ExpoStatusBar>
      </ThemeProvider>
    </>
  );
}

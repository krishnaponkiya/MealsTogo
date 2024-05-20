import react, { useState } from "react";
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
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { Navigation } from "./src/infrastructure/navigation";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRb8qfR0eVqxhBrcj3wKXcnGS_BxrM_-c",
  authDomain: "mealstogo-3985e.firebaseapp.com",
  projectId: "mealstogo-3985e",
  storageBucket: "mealstogo-3985e.appspot.com",
  messagingSenderId: "459619181820",
  appId: "1:459619181820:web:7a8f04727601cb7227a379",
};

const app = initializeApp(firebaseConfig);
export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, "krishna@gmail.com", "12345678 ")
    .then((userCredential) => {
      setIsAuth(true);
    })
    .catch((error) => {
      console.log("error", error);
    });
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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
        <ExpoStatusBar style="auto"></ExpoStatusBar>
      </ThemeProvider>
    </>
  );
}

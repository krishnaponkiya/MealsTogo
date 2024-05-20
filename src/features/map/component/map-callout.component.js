import { Text, View, Image } from "react-native";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";
export const MapCallOut = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};

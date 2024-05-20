import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurant/restaurant.context";
import { Text } from "react-native";
import { Search } from "../component/search.component";
import { MapCallOut } from "../component/map-callout.component";
const MapTag = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);
  return (
    <>
      <Search />
      <MapTag
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          var coordinate = {
            latitude: restaurant.geometry.location.lat,
            longitude: restaurant.geometry.location.lng,
          };
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={coordinate}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <MapCallOut restaurant={restaurant}></MapCallOut>
              </Callout>
            </Marker>
          );
        })}
      </MapTag>
    </>
  );
};

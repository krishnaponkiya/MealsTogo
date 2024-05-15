import { Text } from "react-native";
import { Card, Avatar } from "react-native-paper";
import styled from "styled-components";

export const RestaurantCard = styled(Card)`
  backgroundcolor: "white";
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;
// const Title = styled(Text)`
//   font-family: ${(props) => props.theme.fonts.heading};
//   font-size: ${(props) => props.theme.fontSizes.body};
//   color: ${(props) => props.theme.colors.ui.primary};
// `;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

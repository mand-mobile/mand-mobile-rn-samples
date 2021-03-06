import * as React from "react";
import { View, Text } from "react-native";
import { MDTabBar } from "mand-mobile-rn";
import styles from "./styles";

export default class BaseTabBarDemo extends React.Component {
  render() {
    const items = [{ name: 0, label: "标签1" }, { name: 1, label: "标签2" }];
    return (
      <View>
        <Text style={styles.title}>基础</Text>
        <MDTabBar current={0} items={items} hasInk />
      </View>
    );
  }
}

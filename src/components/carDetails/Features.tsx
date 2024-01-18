import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { IconTransform, IconBluetooth } from "tabler-icons-react-native";
import { Tabs } from "react-native-collapsible-tab-view";

import { createStyleSheet, useStyles } from "react-native-unistyles";

interface specs {
  id: number;
  icon: any;
  transmissionHeader: string;
  transmissionBody: string;
}

const Features = () => {
  const { styles, theme } = useStyles(stylesheet);
  const route = useRoute<any>();

  const item: specs[] = [
    {
      id: 1,
      icon: <IconTransform size={24} />,
      transmissionHeader: "Transmission type",
      transmissionBody: "Automatic",
    },
    {
      id: 2,
      icon: <IconTransform size={24} />,
      transmissionHeader: "Transmission type",
      transmissionBody: "Automatic",
    },
    {
      id: 3,
      icon: <IconTransform size={24} />,
      transmissionHeader: "Transmission type",
      transmissionBody: "Automatic",
    },
    {
      id: 4,
      icon: <IconTransform size={24} />,
      transmissionHeader: "Transmission type",
      transmissionBody: "Automatic",
    },
    {
      id: 5,
      icon: <IconTransform size={24} />,
      transmissionHeader: "Transmission type",
      transmissionBody: "Automatic",
    },
  ];

  const renderItem = ({ item }: { item: specs }) => (
    <View>
      <View style={styles.specContainer}>
        <View style={styles.icon}>{item.icon}</View>
        <View style={styles.transmissionContainer}>
          <Text style={styles.transmissionHead}>{item.transmissionHeader}</Text>
          <Text>{item.transmissionBody}</Text>
        </View>
      </View>
    </View>
  );

  // const { title } = route.params;
  return (
    <Tabs.ScrollView>
      <View style={styles.keySpecContainer}>
        <Text style={styles.title}>Key Spec of </Text>
        <FlatList
          data={item}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.performanceContainer}>
        <Text style={styles.title}>Performance</Text>
        <FlatList
          data={item}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.featureContainer}>
        <Text style={styles.title}>Notable features</Text>
        <View>
          <View style={styles.notableContainer}>
            <View style={styles.notableFeatures}>
              <View style={styles.iconContainer}>
                <IconBluetooth />
              </View>
              <Text style={styles.notableTitle}>Bluetooth connectivity</Text>
            </View>
            <Text style={styles.notableSubtitle}>Yes</Text>
          </View>
          <View style={styles.notableContainer}>
            <View style={styles.notableFeatures}>
              <View style={styles.iconContainer}>
                <IconBluetooth />
              </View>
              <Text style={styles.notableTitle}>Bluetooth connectivity</Text>
            </View>
            <View>
              <Text style={styles.notableSubtitle}>Yes</Text>
            </View>
          </View>
        </View>
      </View>
    </Tabs.ScrollView>
  );
};

export default Features;

const stylesheet = createStyleSheet((theme) => ({
  // rootContainer: {
  //   // flex: 1,
  //   marginLeft: 24,
  //   marginHorizontal: 24,
  // },
  keySpecContainer: {
    marginLeft: 24,
  },
  performanceContainer: {
    marginLeft: 24,
  },
  title: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.gray900,
    marginTop: 24,
  },

  specContainer: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 12,
    paddingRight: 16,
    marginTop: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.gray200,
    marginRight: 12,
    gap: 12,
  },
  icon: {
    borderRadius: 8,
    width: 30,
    backgroundColor: theme.colors.gray50,
  },
  transmissionContainer: {
    marginTop: 12,
    marginBottom: 12,
  },
  transmissionHead: {
    ...theme.typography.bodyXSmall.medium,
    color: theme.colors.gray500,
  },
  transmissionBody: {
    ...theme.typography.bodyMedium.bold,
    color: theme.colors.gray900,
  },
  featureContainer: {
    marginRight: 24,
    marginLeft: 24,
  },
  notableContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
    padding: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderRadius: 0,
    borderColor: theme.colors.gray50,
  },
  notableFeatures: {
    flexDirection: "row",
    alignItems: "center",
  },
  notableTitle: {
    marginLeft: 16,
    ...theme.typography.bodyMedium.bold,
    color: theme.colors.gray900,
  },
  notableSubtitle: {
    ...theme.typography.bodyMedium.medium,
    color: theme.colors.success,
  },
  bluetoothContainer: {
    gap: 6,
  },
  iconContainer: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: theme.colors.gray50,
  },
}));

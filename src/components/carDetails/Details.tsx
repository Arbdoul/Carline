import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { ReactNode, useEffect, useState } from "react";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { Tabs } from "react-native-collapsible-tab-view";
import Accordion from "react-native-collapsible/Accordion";
import { TouchableOpacity } from "react-native";
import { IconChevronUp, IconChevronDown } from "tabler-icons-react-native";

interface AccordionProp {
  title: string;
  content: ReactNode;
}

const Details = () => {
  const { styles, theme } = useStyles(stylesheet);
  const [activeSections, setActionSections] = useState<number[]>([]);

  const sections = [
    {
      title: "Vehicle details",
      content: (
        <>
          <View style={styles.contentContainer}>
            <View style={styles.contents}>
              <Text style={styles.contentType}>Make</Text>
              <Text style={styles.contentDescription}>Audi</Text>
            </View>
            <View style={styles.contents}>
              <Text style={styles.contentType}>Model</Text>
              <Text style={styles.contentDescription}>Q7 Quattro</Text>
            </View>
            <View style={styles.contents}>
              <Text style={styles.contentType}>External Color</Text>
              <Text style={styles.contentDescription}>Carara white</Text>
            </View>
            <View style={styles.contents}>
              <Text style={styles.contentType}>Internal Color</Text>
              <Text style={styles.contentDescription}>Other Color</Text>
            </View>
            <View style={styles.contents}>
              <Text style={styles.contentType}>Body</Text>
              <Text style={styles.contentDescription}>SUV/Offroad</Text>
            </View>
            <View style={styles.contents}>
              <Text style={styles.contentType}>Seat</Text>
              <Text style={styles.contentDescription}>5</Text>
            </View>
            <View style={styles.contents}>
              <Text style={styles.contentType}>VIN</Text>
              <Text style={styles.contentDescription}>b47he63eg726</Text>
            </View>
          </View>
        </>
      ),
    },
    {
      title: "Steering",
      content: (
        <View>
          <>
            <View style={styles.contentContainer}>
              <View style={styles.contents}>
                <Text style={styles.contentType}>Make</Text>
                <Text style={styles.contentDescription}>Audi</Text>
              </View>
              <View style={styles.contents}>
                <Text style={styles.contentType}>Model</Text>
                <Text style={styles.contentDescription}>Q7 Quattro</Text>
              </View>
              <View style={styles.contents}>
                <Text style={styles.contentType}>External Color</Text>
                <Text style={styles.contentDescription}>Carara white</Text>
              </View>
              <View style={styles.contents}>
                <Text style={styles.contentType}>Internal Color</Text>
                <Text style={styles.contentDescription}>Other Color</Text>
              </View>
              <View style={styles.contents}>
                <Text style={styles.contentType}>Body</Text>
                <Text style={styles.contentDescription}>SUV/Offroad</Text>
              </View>
              <View style={styles.contents}>
                <Text style={styles.contentType}>Seat</Text>
                <Text style={styles.contentDescription}>5</Text>
              </View>
              <View style={styles.contents}>
                <Text style={styles.contentType}>VIN</Text>
                <Text style={styles.contentDescription}>b47he63eg726</Text>
              </View>
            </View>
          </>
        </View>
      ),
    },
    {
      title: "Vehicle Condition",
      content: (
        <View>
          <>
            <View style={styles.contentContainer}>
              <View style={styles.contents}>
                <Text style={styles.contentType}>Make</Text>
                <Text style={styles.contentDescription}>Audi</Text>
              </View>
              <View style={styles.contents}>
                <Text style={styles.contentType}>Model</Text>
                <Text style={styles.contentDescription}>Q7 Quattro</Text>
              </View>
              <View style={styles.contents}>
                <Text style={styles.contentType}>External Color</Text>
                <Text style={styles.contentDescription}>Carara white</Text>
              </View>
              <View style={styles.contents}>
                <Text style={styles.contentType}>Internal Color</Text>
                <Text style={styles.contentDescription}>Other Color</Text>
              </View>
              <View style={styles.contents}>
                <Text style={styles.contentType}>Body</Text>
                <Text style={styles.contentDescription}>SUV/Offroad</Text>
              </View>
              <View style={styles.contents}>
                <Text style={styles.contentType}>Seat</Text>
                <Text style={styles.contentDescription}>5</Text>
              </View>
              <View style={styles.contents}>
                <Text style={styles.contentType}>VIN</Text>
                <Text style={styles.contentDescription}>b47he63eg726</Text>
              </View>
            </View>
          </>
        </View>
      ),
    },
  ];

  const renderHeader = (section: any, isActive: any) => (
    <>
      <View style={styles.sectionTitle}>
        <Text style={styles.title}>{section.title}</Text>
        {isActive ? (
          <IconChevronUp
            color={
              UnistylesRuntime?.themeName === "dark"
                ? theme.colors.gray50
                : theme.colors.gray900
            }
          />
        ) : (
          <IconChevronDown
            color={
              UnistylesRuntime?.themeName === "dark"
                ? theme.colors.gray50
                : theme.colors.gray900
            }
          />
        )}
      </View>
    </>
  );

  const renderContent = (section: any) => (
    <View style={{ flexDirection: "column" }}>
      <Text>{section.content}</Text>
    </View>
  );

  return (
    <Tabs.ScrollView style={{ marginBottom: 100 }}>
      <View style={styles.rootContainer}>
        <View>
          <Text style={styles.content}>
            Audi Q7 3.0 Quattro with automatic transmission in Carara White with
            Laser headlights and a Black optic. As the most substantial SUV in
            the Audi lineup, the Audi Q7 has ample cargo room and
            more-than-accommodating passenger capacity—proving that bigger is
            better.
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            marginHorizontal: 24,
            marginTop: 24,
          }}
        >
          <Accordion
            sections={sections}
            renderHeader={renderHeader}
            renderContent={renderContent}
            onChange={(sections) => setActionSections(sections)}
            activeSections={activeSections}
            touchableComponent={TouchableOpacity}
          />
        </View>
      </View>
    </Tabs.ScrollView>
  );
};

export default Details;

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
    //marginLeft: 24,
    backgroundColor:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray900
        : theme.colors.white,
  },
  content: {
    ...theme.typography.bodyMedium.medium,
    color: theme.colors.gray500,
    marginTop: 16,
    paddingLeft: 24,
    paddingRight: 24,
  },
  vehicleDetails: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.gray900,
  },
  contentContainer: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderColor:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray800
        : theme.colors.gray200,
    paddingBottom: 12,
  },
  contents: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 325,
    borderBottomWidth: 1,
    paddingVertical: 12,
    paddingBottom: 12,
    paddingTop: 12,
    borderColor:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray800
        : theme.colors.gray200,
  },
  contentTitle: {},
  contentType: {
    ...theme.typography.bodyMedium.medium,
    color: theme.colors.gray500,
    paddingBottom: 12,
    paddingTop: 12,
  },
  contentDescription: {
    ...theme.typography.bodyMedium.bold,
    color:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,
  },
  sectionTitle: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  title: {
    ...theme.typography.bodyLarge.bold,
    marginBottom: 12,
    color:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,
  },
}));

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import {
  IconTruckDelivery,
  IconChevronRight,
  IconBox,
  IconFileText,
} from "tabler-icons-react-native";
import Timeline from "react-native-timeline-flatlist";

const TrackingScreen = () => {
  const { styles, theme } = useStyles(stylesheet);

  const data = [
    {
      time: "09:00",
      title: "Package delivered",
      description: "st Jackson, san francisco",
      icon: <IconBox />,
    },
    {
      time: "10:45",
      title: "Package is being sent",
      description: "with cargo",
      icon: <IconTruckDelivery />,
    },
    {
      time: "12:00",
      title: "Package is processed",
      description: "kubwa village",
      icon: <IconBox />,
    },
    {
      time: "14:00",
      title: "Payment is verified",
      description: "credit card",
      icon: <IconFileText />,
    },
  ];

  return (
    <View style={styles.rootContainer}>
      <View style={styles.trackingContainer}>
        <View style={styles.progressContainer}>
          <View style={styles.progress}>
            <View style={styles.truckIcon}>
              <IconTruckDelivery size={24} />
            </View>
            <View>
              <Text style={styles.recieptNo}>#19984442MPX</Text>
              <Text style={styles.onProgress}>on Progress</Text>
            </View>
          </View>
          <IconChevronRight size={20} />
        </View>
        <View style={styles.deliveryContainer}>
          <View>
            <Text style={styles.delivery}>Estimate delivery</Text>
            <Text style={styles.date}>july 29, 2022</Text>
          </View>
          <View>
            <Text style={styles.delivery}>Shipment</Text>
            <Text style={styles.date}>DHL Express</Text>
          </View>
        </View>
      </View>
      <View style={styles.deliveryContainer}>
        <Text style={styles.deliveryStatus}>Delivery status</Text>
      </View>
      <View></View>
      <Timeline
        style={styles.timelineContainer}
        data={data}
        innerCircle={"icon"}
        circleSize={48}
        circleColor={theme.colors.white}
        circleStyle={styles.circleStyle}
        lineColor={theme.colors.primary100}
        eventDetailStyle={styles.eventDetails}
        titleStyle={styles.titleStyle}
        descriptionStyle={styles.descriptionStyle}
        timeContainerStyle={styles.timeStyle}
      />
    </View>
  );
};

export default TrackingScreen;

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  trackingContainer: {
    marginTop: 24,
    marginHorizontal: 24,
    borderRadius: 20,
    backgroundColor: theme.colors.gray50,
    paddingBottom: 24,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
  },
  progress: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  truckIcon: {
    borderRadius: 16,
    padding: 12,
    backgroundColor: theme.colors.white,
  },
  recieptNo: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.gray900,
  },
  onProgress: {
    ...theme.typography.bodySmall.bold,
    color: theme.colors.primary400,
  },
  deliveryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  delivery: {
    ...theme.typography.bodySmall.medium,
    color: theme.colors.gray500,
  },
  date: {
    marginTop: 4,
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.gray900,
  },
  deliveryStatusContainer: {
    marginHorizontal: 24,
  },
  deliveryStatus: {
    marginTop: 24,
    ...theme.typography.bodyXLarge.bold,
    color: theme.colors.gray900,
  },
  timelineContainer: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  circleStyle: {
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: theme.colors.primary100,
  },
  eventDetails: {
    marginHorizontal: 16,
    marginBottom: 40,
  },
  titleStyle: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.gray900,
  },
  descriptionStyle: {
    ...theme.typography.bodySmall.medium,
    color: theme.colors.gray400,
  },
  timeStyle: {
    justifyContent: "flex-end",
  },
}));

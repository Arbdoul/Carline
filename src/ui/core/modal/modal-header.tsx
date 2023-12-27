import * as React from "react";

//import { Montserrat_Bold } from '@/common/theme';
import { Text, View } from "react-native";
//import { IconButton } from 'react-native-paper';

type ModalHeaderProps = {
  title?: string;
  dismiss: () => void;
};

export const ModalHeader = React.memo(
  ({ title, dismiss }: ModalHeaderProps) => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 8,
          paddingVertical: 16,
          alignItems: "center",
        }}
      >
        <View style={{ height: 24, width: 24 }} />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              //    fontFamily: Montserrat_Bold,
              textAlign: "center",
              fontSize: 16,
            }}
          >
            {title}
          </Text>
        </View>
        <CloseButton close={dismiss} />
      </View>
    );
  }
);

const CloseButton = ({ close }: { close: () => void }) => {
  return (
    <View />
    // <IconButton icon={'close'} onPress={close} />
    /*   <Pressable
      onPress={close}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      accessibilityLabel="close modal"
      accessibilityRole="button"
      accessibilityHint="closes the modal">
      <Icon name="close" size={24} />
    </Pressable> */
  );
};

import { BottomSheetFlatList, BottomSheetModal } from "@gorhom/bottom-sheet";
import { forwardRef, useCallback, useMemo } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type PressableProps,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { renderBackdrop } from "../bottom-sheet";
import React from "react";

export type Option<T = string | number> = { label: string; value: T };

type OptionsProps = {
  options: Option[];
  onSelect: (option: Option) => void;
  value?: Option;
};

function keyExtractor(item: Option) {
  return `select-item-${item.value}`;
}

const renderSeperator = () => {
  return <View style={styles.separator} />;
};

export const Options = forwardRef<BottomSheetModal, OptionsProps>(
  ({ options, onSelect, value }, ref) => {
    const height = options.length * 40 + 100;
    const snapPoints = useMemo(() => [height], [height]);
    //const colorScheme = useColorScheme();
    //    const isDark = colorScheme === 'dark';
    const renderSelectItem = useCallback(
      ({ item }: { item: Option }) => (
        <Option
          key={`select-item-${item.value}`}
          label={item.label}
          selected={value?.value === item.value}
          onPress={() => onSelect(item)}
          isDark={false}
        />
      ),
      [onSelect, value]
    );

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={styles.modalHandle}
        topInset={140}
        backgroundStyle={styles.modalBackground}
      >
        <BottomSheetFlatList
          data={options}
          keyExtractor={keyExtractor}
          renderItem={renderSelectItem}
          ItemSeparatorComponent={renderSeperator}
          style={styles.bottomSheetFlatList}
          contentContainerStyle={{ paddingBottom: 32 }}
        />
      </BottomSheetModal>
    );
  }
);

const Option = ({
  label,
  selected = false,
  ...props
}: PressableProps & {
  selected?: boolean;
  label: string;
  isDark?: boolean;
}) => {
  return (
    <Pressable {...props} style={styles.option}>
      <Text style={selected ? styles.optionLabelSelected : styles.optionLabel}>
        {label}
      </Text>
      {selected && <Icon name="checkmark" color={"black"} size={24} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  separator: { height: 24 },
  modalHandle: {
    backgroundColor: "black",
  },
  modalBackground: {
    backgroundColor: "white",
  },
  option: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionLabel: {
    fontSize: 16,
    //  fontFamily: Montserrat_Regular,
  },
  optionLabelSelected: {
    fontSize: 16,
    //fontFamily: Montserrat_Bold,
  },
  bottomSheetFlatList: {
    backgroundColor: "white",
  },
});

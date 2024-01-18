import type { FieldValues, UseControllerProps } from "react-hook-form";
import { useController } from "react-hook-form";

import type { SelectProps } from "./select";
import { Select } from "./select";
import React from "react";

interface ControlledSelectProps<T extends FieldValues>
  extends SelectProps,
    UseControllerProps<T> {}

// only used with react-hook-form
export function ControlledSelect<T extends FieldValues>(
  props: ControlledSelectProps<T>
) {
  const { name, control, rules, ...selectProps } = props;

  const { field, fieldState } = useController({ control, name, rules });
  return (
    <Select
      onSelect={field.onChange}
      value={field.value}
      error={fieldState.error?.message}
      {...selectProps}
    />
  );
}

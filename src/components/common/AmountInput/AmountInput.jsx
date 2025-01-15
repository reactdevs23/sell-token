import React from "react";

import classes from "./AmountInput.module.css";
import clsx from "clsx";
import Text from "../Text/Text";
const AmountInput = ({
  value,
  setValue,
  placeholder,
  onKeyDown,
  type,
  className,
  readonly,

  label,
  name,
}) => {
  return (
    <div
      className={clsx(
        classes.inputContainer,

        className
      )}
    >
      <Text base primitive500 className={classes.label}>
        {label}
      </Text>
      <input
        name={name}
        id="input"
        type={type ? type : "text"}
        onKeyDown={onKeyDown && onKeyDown}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classes.input}
        placeholder={placeholder}
        required
        readOnly={readonly}
      />
    </div>
  );
};

export default AmountInput;

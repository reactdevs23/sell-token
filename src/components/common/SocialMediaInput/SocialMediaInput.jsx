import React from "react";

import classes from "./SocialMediaInput.module.css";
import clsx from "clsx";
const SocialMediaInput = ({
  value,
  setValue,
  placeholder,
  onKeyDown,
  type,
  className,
  readonly,
  icon,
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
      <div className={classes.iconContainer}>{icon}</div>
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

export default SocialMediaInput;

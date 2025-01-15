import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

import classes from "./TextArea.module.css";
import clsx from "clsx";

const TextArea = ({
  value,
  setValue,

  placeholder,
  type,
  className,
  name,

  rows,
}) => {
  return (
    <textarea
      name={name}
      id=""
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={clsx(classes.textArea, className)}
      placeholder={placeholder}
      required
      rows={rows}
      cols={10}
    ></textarea>
  );
};

export default TextArea;

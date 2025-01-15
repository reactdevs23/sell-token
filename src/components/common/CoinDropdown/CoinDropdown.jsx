import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { FaCaretUp, FaCaretDown } from "react-icons/fa6";
import classes from "./CoinDropdown.module.css";

import { Input, Text } from "..";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const Dropdown = ({
  isActive,
  items,
  selectedValue,
  onSelect,
  setIsActive,
  className,
  sm,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const ref = useRef();
  console.log(selectedValue);
  useOnClickOutside(ref, () => setIsActive(false));

  return (
    <div
      className={clsx(classes.dropdown, classes.noTheme, className)}
      ref={ref}
    >
      <div
        className={clsx(classes.labelContainer)}
        onClick={() => setIsActive((prev) => !prev)}
      >
        {selectedValue.logo && (
          <img src={selectedValue.logo} alt="#" className={classes.logo} />
        )}
        <Text sm primitive400 className={classes.label}>
          {selectedValue.name ? selectedValue.name : "Select"}
        </Text>
        {isActive ? (
          <FaCaretUp className={classes.arrow} />
        ) : (
          <FaCaretDown className={classes.arrow} />
        )}
      </div>

      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
        <Input
          className={classes.input}
          value={searchValue}
          setValue={setSearchValue}
          search
          placeholder="Search"
        />
        <div className={clsx(classes.list, "overflow")}>
          {filteredItems.map((item, idx) => {
            return (
              <div
                key={idx}
                className={clsx(
                  classes.item,
                  selectedValue.name === item.name && classes.active
                )}
                onClick={() => {
                  onSelect(item);
                  setIsActive(false);
                }}
              >
                <img src={item.logo} alt="#" className={classes.logo} />
                <Text className={clsx(classes.listItem)}>{item.name}</Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import classes from "./Dropdown.module.css";

import { Input, Text } from "..";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const Dropdown = ({
  children,
  isActive,
  items,
  selectedValue,
  onSelect,
  setIsActive,
  className,
  sm,
  label,
  type2,
  noSearch,
  languageDropdown,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchValue.toLowerCase())
  );
  const ref = useRef();

  useOnClickOutside(ref, () => setIsActive(false));
  return (
    <div
      className={clsx(
        classes.dropdown,
        classes.noTheme,
        className,
        sm && classes.sm,
        type2 && classes.type2
      )}
      ref={ref}
    >
      {!type2 && (
        <>
          {/* <label htmlFor="input" className={classes.label}>
            {label}
          </label> */}
          <div
            className={clsx(classes.labelContainer)}
            onClick={() => setIsActive((prev) => !prev)}
          >
            <Text sm primitive400 className={classes.selectedValue}>
              {selectedValue ? selectedValue : "Select"}
            </Text>
            {isActive ? (
              <FaChevronUp className={classes.arrow} />
            ) : (
              <FaChevronDown className={classes.arrow} />
            )}
          </div>
        </>
      )}
      {type2 && children}
      <div
        className={clsx(
          classes.dropdownMain,
          isActive && classes.active,
          languageDropdown && classes.languageDropdown
        )}
      >
        {!noSearch && (
          <Input
            className={classes.input}
            value={searchValue}
            setValue={setSearchValue}
            search
            placeholder="Search"
          />
        )}
        <div className={clsx(classes.list, "overflow")}>
          {filteredItems?.map((item, idx) => {
            return (
              <div key={idx}>
                <Text
                  key={"id-" + idx}
                  className={clsx(
                    classes.listItem,
                    selectedValue === item && classes.active
                  )}
                  onClick={() => {
                    onSelect(item);
                    setIsActive(false);
                  }}
                >
                  {item}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

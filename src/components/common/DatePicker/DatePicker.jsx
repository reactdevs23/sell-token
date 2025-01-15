import React, { forwardRef, useState } from "react";
import classes from "./DatePicker.module.css";
import DatePicker from "react-datepicker";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import Text from "../Text/Text";

const CustomInput = forwardRef(({ value, onClick, onChange }, ref) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={classes.customInput} onClick={onClick} ref={ref}>
      <input
        className={classes.inputField}
        value={value}
        onChange={onChange}
        placeholder="Launch Time"
        id="input"
      />
      <Text
        sm
        primitive400
        className={classes.label}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <label htmlFor="input">Launch Time</label>
      </Text>
      {isActive ? (
        <FaChevronUp className={classes.arrow} />
      ) : (
        <FaChevronDown className={classes.arrow} />
      )}
    </div>
  );
});

const Calender = ({ value, setValue }) => {
  return (
    <div className={classes.wrapper}>
      <DatePicker
        selected={value}
        onChange={(date) => setValue(date)}
        dateFormat="MM/dd/yyyy"
        maxDate={new Date()}
        customInput={<CustomInput />}
        showPopperArrow={false}
        // Enable year and month dropdowns
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={classes.header}>
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              className={classes.navButton}
            >
              {"<"}
            </button>
            <select
              value={date.getFullYear()}
              onChange={({ target: { value } }) => changeYear(Number(value))}
            >
              {Array.from({ length: 50 }, (_, i) => (
                <option key={i} value={new Date().getFullYear() - i}>
                  {new Date().getFullYear() - i}
                </option>
              ))}
            </select>
            <select
              value={date.getMonth()}
              onChange={({ target: { value } }) => changeMonth(Number(value))}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
                  {new Date(0, i).toLocaleString("default", { month: "long" })}
                </option>
              ))}
            </select>
            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              className={classes.navButton}
            >
              {">"}
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default Calender;

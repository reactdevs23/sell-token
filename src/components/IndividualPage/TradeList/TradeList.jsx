import clsx from "clsx";
import { galaxyGuruImg } from "../../../assets/images";
import { Button, Input, Pagination, Text } from "../../common";
import classes from "./TradeList.module.css";
import Checkbox from "../../common/CheckBox/CheckBox";
import { useMemo, useState } from "react";
import { handleKeyDown, timeAgo } from "../../../utils";

const TradeList = () => {
  const [filterbyFollowing, setFilterByFollowing] = useState(false);
  const [filterByOwntrades, setFilterByOwntrades] = useState(false);
  const [filterBysize, setFilterBysize] = useState(false);
  const [size, setSize] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const data = [
    {
      user: {
        img: galaxyGuruImg,
        name: "8HmzAB",
        following: true,
        isOwn: false,
      },
      type: "Buy",
      ltc: "1.004",
      walley: "2.60m",
      date: "2025-01-14",
      transaction: "64dTN4",
    },
    {
      user: {
        img: galaxyGuruImg,
        name: "Trader42",
        following: false,
        isOwn: true,
      },
      type: "Sell",
      ltc: "0.800",
      walley: "1.80m",
      date: "2025-01-12",
      transaction: "54dTF2",
    },
    {
      user: {
        img: galaxyGuruImg,
        name: "CryptoFan",
        following: true,
        isOwn: true,
      },
      type: "Buy",
      ltc: "1.500",
      walley: "3.00m",
      date: "2025-01-10",
      transaction: "84dJK3",
    },
    {
      user: {
        img: galaxyGuruImg,
        name: "Investor99",
        following: false,
        isOwn: false,
      },
      type: "Sell",
      ltc: "2.004",
      walley: "4.50m",
      date: "2025-01-08",
      transaction: "34dTT8",
    },
  ];

  // Filter logic
  const filteredData = data.filter((el) => {
    let isValid = true;
    if (filterbyFollowing && !el.user.following) isValid = false;
    if (filterByOwntrades && !el.user.isOwn) isValid = false;
    if (filterBysize && size && parseFloat(el.ltc) < parseFloat(size))
      isValid = false;
    return isValid;
  });
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredData, itemsPerPage]);

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, filteredData.length);
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <Text primitive300 base>
          {filteredData.length < 10
            ? `0${filteredData.length}`
            : filteredData.length}{" "}
          trades found
        </Text>
        <div className={classes.buttonContainer}>
          <div className={clsx(classes.filterBy, classes.filterBysize)}>
            <Checkbox
              checked={filterBysize}
              setChecked={setFilterBysize}
              label="Size"
            />
            <Input
              className={classes.input}
              type="number"
              value={size}
              setValue={setSize}
              onKeyDown={handleKeyDown}
              placeholder="0.05"
            />
          </div>
          <div className={classes.filterBy}>
            <Checkbox
              checked={filterbyFollowing}
              setChecked={setFilterByFollowing}
              label="Following"
            />
            <Checkbox
              checked={filterByOwntrades}
              setChecked={setFilterByOwntrades}
              label="Own Trades"
            />
          </div>
        </div>
      </div>
      <div className={clsx(classes.tableContainer, "overflow")}>
        <table className={classes.table}>
          <tbody>
            <tr className={classes.row}>
              <th className={classes.heading}>Account</th>
              <th className={classes.heading}>Type</th>
              <th className={classes.heading}>LTC</th>
              <th className={classes.heading}>$WALLEY </th>
              <th className={classes.heading}>Date</th>
              <th className={clsx(classes.heading, classes.lastChild)}>
                Transaction
              </th>
            </tr>
            {currentData.map((el, index) => (
              <tr className={classes.row} key={index}>
                <td className={classes.item}>
                  <div className={classes.account}>
                    <img src={el.user.img} alt="#" className={classes.img} />
                    <Text xs primitiveDefault className={classes.userName}>
                      {el.user.name}
                    </Text>
                  </div>
                </td>
                <td
                  className={clsx(
                    classes.item,
                    el.type.toLowerCase() === "buy"
                      ? classes.buy
                      : el.type.toLowerCase() === "sell"
                      ? classes.sell
                      : null
                  )}
                >
                  {el.type}
                </td>
                <td className={classes.item}>{el.ltc}</td>
                <td className={classes.item}>{el.walley}</td>
                <td className={classes.item}>{timeAgo(el.date)}</td>
                <td className={clsx(classes.item, classes.lastChild)}>
                  {el.transaction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={classes.paginationInfo}>
          <Text xs primitive500 className={classes.paginationText}>
            Showing {startIndex} to {endIndex} of {filteredData.length} threads
          </Text>{" "}
          <Pagination
            className={classes.pagination}
            currentPage={currentPage}
            totalCount={filteredData.length}
            pageSize={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
            siblingCount={0}
          />
        </div>
      </div>
    </section>
  );
};

export default TradeList;

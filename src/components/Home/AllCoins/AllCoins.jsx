import clsx from "clsx";
import classes from "./AllCoins.module.css";

import SingleCoin from "./SingleCoin/SingleCoin";
import { useMemo, useState } from "react";
import { DatePicker, Dropdown, Input, Pagination } from "../../common";

import { allCoins } from "../../../assets/data";

const filterByCoinsDropdownItems = [
  "All Coins",
  "Bitcoin",
  "Ethereum",
  "Tether USDT",
  "Solana",
  "Dogecoin",
  "Cardano",
];
const filterByBlockChainDropdownItems = [
  "All Coins",
  "Polygon",
  "Ethereum",
  "Solana",
  "Optimism",
  "Arbitrum",
  "Starknet",
];
const sortByDropdownItems = [
  "Featured",
  "Last Trade",
  "Creation Time",
  "Last Reply",
  "Market Cap",
];

const AllCoins = () => {
  // Filter states
  const [searchToken, setSearchToken] = useState("");
  const [showFilterByCoinDropdown, setShowFilterByCoinDropdown] =
    useState(false);
  const [selectedCoin, setSelectedCoin] = useState("All Coins");
  const [showfilterByBlockChainDropdown, setShowFilterBlockChainDropdown] =
    useState(false);
  const [selectedBlockCoin, setSelectedBlockCoin] = useState("All Coins");
  const [launchDate, setLaunchDate] = useState("");
  const [showSortByDropdown, setShowSortByDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Featured");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Sort logic based on selected "Sort By"
  const sortData = (data, selectedItem) => {
    switch (selectedItem) {
      case "Featured":
        return data.sort(
          (a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)
        );
      case "Last Trade":
        return data.sort(
          (a, b) => new Date(b.lastTradeDate) - new Date(a.lastTradeDate)
        );
      case "Creation Time":
        return data.sort(
          (a, b) => new Date(b.creationDate) - new Date(a.creationDate)
        );
      case "Last Reply":
        return data.sort(
          (a, b) => new Date(b.lastReplyDate) - new Date(a.lastReplyDate)
        );
      case "Market Cap":
        return data.sort((a, b) => {
          const aMarketCap = parseFloat(
            a.marketCap.replace("$", "").replace("M", "")
          );
          const bMarketCap = parseFloat(
            b.marketCap.replace("$", "").replace("M", "")
          );
          return bMarketCap - aMarketCap;
        });
      default:
        return data;
    }
  };

  // Filtered and sorted data
  const filteredCoins = useMemo(() => {
    return allCoins.filter((coin) => {
      const isCoinNameMatch = coin.coinName
        .toLowerCase()
        .includes(searchToken.toLowerCase());
      const isCoinTypeMatch =
        selectedCoin === "All Coins" || coin.coinName === selectedCoin;
      const isBlockChainMatch =
        selectedBlockCoin === "All Coins" ||
        coin.blockChain.name === selectedBlockCoin;
      const isLaunchDateMatch = launchDate
        ? new Date(coin.launchDate) >= new Date(launchDate)
        : true;
      return (
        isCoinNameMatch &&
        isCoinTypeMatch &&
        isBlockChainMatch &&
        isLaunchDateMatch
      );
    });
  }, [searchToken, selectedCoin, selectedBlockCoin, launchDate]);

  // Paginate filtered coins
  const currentData = useMemo(() => {
    const sortedCoins = sortData(filteredCoins, selectedItem);
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return sortedCoins.slice(firstPageIndex, lastPageIndex);
  }, [filteredCoins, selectedItem, currentPage, itemsPerPage]);

  return (
    <section className={clsx(classes.wrapper, "container")}>
      <div className={classes.header}>
        {/* Search Bar */}
        <Input
          value={searchToken}
          setValue={setSearchToken}
          placeholder="Search tokens"
          search
          className={classes.searchInput}
        />
        <div className={classes.dropdownContainer}>
          {/* Filter by Coin Dropdown */}
          <Dropdown
            selectedValue={selectedCoin}
            onSelect={(coin) => setSelectedCoin(coin)}
            isActive={showFilterByCoinDropdown}
            setIsActive={setShowFilterByCoinDropdown}
            items={filterByCoinsDropdownItems}
          />
          {/* Filter by Blockchain Dropdown */}
          <Dropdown
            selectedValue={selectedBlockCoin}
            onSelect={(blockchain) => setSelectedBlockCoin(blockchain)}
            isActive={showfilterByBlockChainDropdown}
            setIsActive={setShowFilterBlockChainDropdown}
            items={filterByBlockChainDropdownItems}
          />
          {/* Filter by Launch Date */}
          <DatePicker value={launchDate} setValue={setLaunchDate} />
          {/* Sort By Dropdown */}
          <Dropdown
            selectedValue={selectedItem}
            onSelect={(item) => setSelectedItem(item)}
            isActive={showSortByDropdown}
            setIsActive={setShowSortByDropdown}
            items={sortByDropdownItems}
          />
        </div>
      </div>

      {/* Coin List */}
      <div className={classes.coins}>
        {currentData?.map((coin, i) => (
          <SingleCoin {...coin} key={i} />
        ))}
      </div>

      {/* Pagination */}
      <div className={classes.pagination}>
        <Pagination
          currentPage={currentPage}
          totalCount={filteredCoins.length}
          pageSize={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          siblingCount={0}
        />
      </div>
    </section>
  );
};

export default AllCoins;

import { useState } from "react";
import TradingChart from "../../components/IndividualPage/TradingChart/TradingChart";
import { Heading, Tabs, Text } from "../../components/common";
import PostThread from "../../components/IndividualPage/PostThread/PostThread";
import TradeList from "../../components/IndividualPage/TradeList/TradeList";
import clsx from "clsx";
import classes from "./IndividualPage.module.css";
import BuySell from "../../components/IndividualPage/BuySell/BuySell";
import AboutCoin from "../../components/IndividualPage/AboutCoin/AboutCoin";
import BuyerList from "../../components/IndividualPage/BuyerList/BuyerList";
import { devilCoin, galaxyGuruImg } from "assets/images";
import TradingViewChart from "../../components/IndividualPage/TradingChart/TradingChart";
import { timeAgo } from "utils";

const IndividualPage = () => {
  const tabs = ["Discussion Thread", "Trade List"];
  const [activeTab, setActiveTab] = useState("Discussion Thread");
  return (
    <main className={clsx(classes.container, "container spaceFromTop")}>
      <div className={classes.leftSide}>
        <div className={classes.chartContainer}>
          <div className={classes.userInfo}>
            <img src={devilCoin} alt="#" className={classes.userImg} />
            <div className={classes.details}>
              <Heading lg medium primitive0>
                Terminals Devil Coin{" "}
                <span className={classes.nickName}>(DevilCoin)</span>
              </Heading>
              <div className={classes.creatorContainer}>
                <div className={classes.creator}>
                  <img src={galaxyGuruImg} alt="#" className={classes.img} />
                  <Text xs medium primitiveDefault>
                    8HmzAB
                  </Text>
                </div>
                <Text xs primitive400>
                  {timeAgo("01-14-2025")}
                </Text>
              </div>
            </div>
          </div>
          <TradingViewChart />
        </div>

        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
          className={classes.tabs}
        />
        {activeTab === "Discussion Thread" && <PostThread />}
        {activeTab === "Trade List" && <TradeList />}
      </div>
      <div className={classes.rightSide}>
        <BuySell />
        <AboutCoin />
        <BuyerList />
      </div>
    </main>
  );
};
export default IndividualPage;

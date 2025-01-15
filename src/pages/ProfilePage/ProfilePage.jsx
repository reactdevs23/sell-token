import UserInfo from "components/ProfilePage/UserInfo/UserInfo";
import classes from "./Profile.module.css";
import clsx from "clsx";
import { Tabs, Text } from "components/common";
import { useState } from "react";
import { allCoins } from "assets/data";
import SingleCoin from "components/Home/AllCoins/SingleCoin/SingleCoin";
import { vector } from "assets/images";

const ProfilePage = () => {
  const tabs = ["Coins Created", "Coins Owned", "Coins Sold"];
  const [activeTab, setActiveTab] = useState("Coins Created");

  // Function to filter coins based on the active tab
  const filteredCoins = allCoins.filter((coin) => {
    if (activeTab === "Coins Created") {
      // Example condition: Filter coins with creationDate not null
      return coin.creationDate;
    }
    if (activeTab === "Coins Owned") {
      // Example condition: Filter coins where `buy` > 0
      return parseInt(coin.buy) > 0;
    }
    if (activeTab === "Coins Sold") {
      // Example condition: Filter coins where `sell` > 0
      return parseInt(coin.sell) > 0;
    }
    return false; // Default case if no condition matches
  });

  return (
    <main className={classes.main}>
      <section className={clsx(classes.wrapper, "container spaceFromTop")}>
        <div className={classes.container}>
          <UserInfo />
          <div className={classes.myCoins}>
            <Tabs
              className={classes.tabs}
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div className={classes.coins}>
              {filteredCoins.length > 0 ? (
                filteredCoins.map((coin, i) => <SingleCoin key={i} {...coin} />)
              ) : (
                <Text base primitive400 textCenter>
                  No coins found for this category.
                </Text>
              )}
            </div>
          </div>
        </div>
      </section>
      <img src={vector} alt="#" className={classes.vector} />
    </main>
  );
};

export default ProfilePage;

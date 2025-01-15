import { useState } from "react";
import { Button, Tabs, Text } from "../../common";
import classes from "./BuySell.module.css";
import { handleKeyDown } from "../../../utils";
import { ethereumLogo, usdtLogo } from "../../../assets/images"; // Assume you have a USDT logo here
import SetSlipPageModal from "../../Modal/SetSlipPageModal/SetSlipPageModal";

const BuySell = () => {
  const tabs = ["Buy", "Sell"];
  const [coin, setCoin] = useState({
    name: "ETH",
    logo: ethereumLogo,
  });
  const [activeTab, setActiveTab] = useState("Buy");
  const [amount, setAmount] = useState("");
  const [showSlipPageModal, setShowSlipPageModal] = useState(false);

  const handleSwitchCoin = () => {
    if (coin.name === "ETH") {
      setCoin({
        name: "USDT",
        logo: usdtLogo,
      });
    } else {
      setCoin({
        name: "ETH",
        logo: ethereumLogo,
      });
    }
  };

  const handleBuy = () => {
    console.log("Buying", amount, coin.name);
  };

  const handleSell = () => {
    console.log("Selling", amount, coin.name);
  };

  return (
    <>
      <section className={classes.wrapper}>
        <Tabs
          className={classes.tab}
          buySell
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className={classes.content}>
          <div className={classes.spaceBetween}>
            <Button
              primitiveTransparent8
              className={classes.button}
              onClick={handleSwitchCoin}
            >
              Switch to {coin.name === "ETH" ? "USDT" : "ETH"}
            </Button>
            <Button
              primitive800
              className={classes.button}
              onClick={() => setShowSlipPageModal(true)}
            >
              Set max slippage
            </Button>
          </div>
          <div className={classes.inputWrapper}>
            <Text xs primitive200>
              <label htmlFor="amount">Enter Amount</label>
            </Text>
            <div className={classes.inputContainer}>
              <input
                name="amount"
                className={classes.input}
                type="number"
                onKeyDown={handleKeyDown}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
              />
              <Text
                uppercase
                base
                medium
                primitive400
                className={classes.coinContainer}
              >
                <img src={coin.logo} alt="#" className={classes.coinLogo} />
                {coin.name}
              </Text>
            </div>
            <Text primitive300 medium xs className={classes.balance}>
              <span className={classes.balanceLabel}>Balance:</span> 132.45 USDT
            </Text>
          </div>
          <div className={classes.infoContainer}>
            <div className={classes.spaceBetween}>
              <Text sm primitive400>
                1 DevilCoin
              </Text>
              <Text medium primitive100 className={classes.value}>
                {coin.name === "ETH" ? "0.00012 ETH" : "1.00000 USDT"}
              </Text>
            </div>
            <div className={classes.spaceBetween}>
              <Text sm primitive400>
                Platform Fee
              </Text>
              <Text medium primitive100 className={classes.value}>
                0.02 {coin.name}
              </Text>
            </div>
          </div>
        </div>
        {activeTab === "Buy" && (
          <Button className={classes.buyButton} wFull onClick={handleBuy}>
            Buy Now
          </Button>
        )}
        {activeTab === "Sell" && (
          <Button wFull className={classes.sellButton} onClick={handleSell}>
            Sell Now
          </Button>
        )}
      </section>
      <SetSlipPageModal
        isActive={showSlipPageModal}
        onClose={() => setShowSlipPageModal(false)}
      />
    </>
  );
};

export default BuySell;

import clsx from "clsx";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import classes from "./LaunchNewCoin.module.css";
import {
  AmountInput,
  Button,
  Heading,
  ImgUpload,
  Input,
  SocialMediaInput,
  Text,
  TextArea,
} from "../../components/common";
import { useState } from "react";
import CoinDropdown from "../../components/common/CoinDropdown/CoinDropdown";
import { ethreumIcon, usdtLogo, vector } from "../../assets/images";
import Switch from "../../components/common/Switch/Switch";
const allBlockChains = [
  { logo: ethreumIcon, name: "ETH" },
  { logo: usdtLogo, name: "USDT" },
];
const LaunchNewCoin = () => {
  const [showBlockChainDropdown, setShowBlockChainDropdown] = useState(false);
  const [selectedBlockChain, setSelectedBlockChain] = useState({
    logo: ethreumIcon,
    name: "ETH",
  });

  // coin info
  const [coinName, setCoinName] = useState("");
  const [coinDescription, setCoinDescription] = useState("");
  const [uploadImg, setUploadedImg] = useState("");

  const [telegramLink, setTelegramLink] = useState("");
  const [twitterLink, setTwiiterLink] = useState("");
  const [tiktokLink, setTiktokLink] = useState("");

  const [perBuyAmount, setPerBuyAmount] = useState("");
  const [toEarnOnLaunchAmount, setToEarnOnLaunchAmount] = useState("");
  const [airDropAmount, setAirDropAmount] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  return (
    <main className={classes.main}>
      <section className={clsx(classes.mainWrapper, "container spaceFromTop")}>
        <Heading lg medium primitive0 textCenter>
          Launch a New Coin
        </Heading>
        <div className={classes.wrapper}>
          <div className={clsx(classes.selectBlockChain, classes.box)}>
            <Text primitive400 sm>
              Select Blockchain
            </Text>
            <CoinDropdown
              className={classes.dropdown}
              isActive={showBlockChainDropdown}
              setIsActive={setShowBlockChainDropdown}
              selectedValue={selectedBlockChain}
              onSelect={(val) => setSelectedBlockChain(val)}
              items={allBlockChains}
            />
          </div>{" "}
          <div className={classes.container}>
            <Heading sm medium primitive0>
              Coin Info
            </Heading>
            <div className={classes.coinInfo}>
              <Input
                className={classes.input}
                placeholder="Enter coin name"
                value={coinName}
                setValue={setCoinName}
              />
              <TextArea
                placeholder="Write description"
                value={coinDescription}
                setValue={setCoinDescription}
                className={classes.textArea}
                rows={4}
              />
              <ImgUpload
                setImage={setUploadedImg}
                className={classes.imgUploading}
              />
            </div>{" "}
          </div>{" "}
          <div className={classes.container}>
            {" "}
            <Heading sm medium primitive0>
              Social media links
            </Heading>
            <div className={classes.socialMediaContainer}>
              <SocialMediaInput
                className={classes.telegramInput}
                icon={<FaTelegramPlane className={classes.socialIcon} />}
                name="telegramLink"
                value={telegramLink}
                setValue={setTelegramLink}
                placeholder="e.g. https://t.me/telegram"
              />{" "}
              <SocialMediaInput
                className={classes.twitterInput}
                icon={<FaXTwitter className={classes.socialIcon} />}
                name="twitterLink"
                value={twitterLink}
                setValue={setTwiiterLink}
                placeholder="e.g. https://twitter.com/username
"
              />{" "}
              <SocialMediaInput
                className={classes.tiktokInput}
                icon={<AiFillTikTok className={classes.socialIcon} />}
                name="tiktokLink"
                value={tiktokLink}
                setValue={setTiktokLink}
                placeholder="e.g. https://www.tiktok.com/@exampleuser"
              />
            </div>
          </div>
          <div className={classes.container}>
            <Heading sm medium primitive0>
              Amount
            </Heading>
            <div className={classes.amountContainer}>
              <AmountInput
                name="perbuy"
                label="Prebuy"
                type="number"
                className={classes.perbuy}
                placeholder="0.00"
                value={perBuyAmount}
                setValue={setPerBuyAmount}
              />{" "}
              <AmountInput
                name="toEarnOnLaunch"
                label="To earn on launch"
                type="number"
                className={classes.toEarnOnLaunch}
                placeholder="0.00"
                value={toEarnOnLaunchAmount}
                setValue={setToEarnOnLaunchAmount}
              />{" "}
              <div className={classes.airDropsWrapper}>
                <AmountInput
                  name="ariDrops"
                  label="Airdrops"
                  type="number"
                  className={classes.airdrops}
                  placeholder="0.00"
                  value={airDropAmount}
                  setValue={setAirDropAmount}
                />
                <Switch isChecked={isChecked} setIsChecked={setIsChecked} />
                <Button primitive800 className={classes.setMax}>
                  Set max participants
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <Button primitive800>Cancel</Button>
            <Button wFull>Launch Coin</Button>
          </div>
        </div>
      </section>
      <img src={vector} alt="#" className={classes.vector} />
    </main>
  );
};
export default LaunchNewCoin;

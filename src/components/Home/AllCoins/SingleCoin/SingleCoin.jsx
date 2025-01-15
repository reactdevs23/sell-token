import { Button, Heading, Text } from "../../../common";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoMdMore } from "react-icons/io";

import classes from "./SingleCoin.module.css";

const SingleCoin = ({
  coinLogo,
  coinName,
  info,
  creator,
  blockChain,
  price,
  marketCap,
  buy,
  sell,
  launchDate,
  socialLinks,
}) => {
  const formatLaunchDate = (launchDate) => {
    const currentTime = new Date();
    const launchTime = new Date(launchDate);
    const timeDiffInMs = currentTime - launchTime;
    const diffInHours = Math.floor(timeDiffInMs / (1000 * 60 * 60));

    // If launch was within the last 24 hours, show "X hours ago"
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    } else {
      // Otherwise, display the full date
      return launchTime.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
  };
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <img src={coinLogo} alt="#" className={classes.logo} />
        <div className={classes.details}>
          <Heading lg medium primitive0>
            {coinName}
          </Heading>
          <Text xs regular primitive400>
            {info.substring(0, 55)}...
          </Text>
        </div>{" "}
        <Button primitiveTransparent8 className={classes.moreButton}>
          <IoMdMore />
        </Button>
      </div>
      <div className={classes.about}>
        <div className={classes.keyValue}>
          <Text primitive400 xs className={classes.key}>
            Creator:
          </Text>{" "}
          <Text primitive0 sm className={classes.value}>
            {creator.name}{" "}
            <img src={creator.img} alt="#" className={classes.img} />
          </Text>{" "}
        </div>{" "}
        <div className={classes.keyValue}>
          <Text primitive400 xs className={classes.key}>
            Blockchain:
          </Text>
          <Text primitive0 sm className={classes.value}>
            {blockChain.name}{" "}
            <img src={blockChain.img} alt="#" className={classes.img} />
          </Text>{" "}
        </div>{" "}
        <div className={classes.keyValue}>
          <Text primitive400 xs className={classes.key}>
            Price:
          </Text>
          <Text primitive0 sm className={classes.value}>
            {price}{" "}
          </Text>{" "}
        </div>
      </div>
      <div className={classes.marketInfo}>
        <div className={classes.marketCap}>
          <Text primitive400 xs>
            Market Cap
          </Text>
          <Text primitive100 xs medium>
            {marketCap}
          </Text>
        </div>{" "}
        <div className={classes.buy}>
          <Text primitive400 xs>
            Buy
          </Text>
          <Text success xs medium>
            {buy}
          </Text>
        </div>{" "}
        <div className={classes.sell}>
          <Text primitive400 xs>
            Sell
          </Text>
          <Text error xs medium>
            {sell}
          </Text>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.launchDate}>
          <Text xs primitive400>
            Launch Date:
          </Text>
          <Text sm primitive100>
            {formatLaunchDate(launchDate)}
          </Text>
        </div>
        <div className={classes.socialContainer}>
          <a
            href={socialLinks.telegramLink}
            target="_blank"
            rel="noreferrer"
            className={classes.iconContainer}
          >
            <FaTelegramPlane className={classes.icon} />
          </a>{" "}
          <a
            href={socialLinks.telegramLink}
            target="_blank"
            rel="noreferrer"
            className={classes.iconContainer}
          >
            <FaXTwitter className={classes.icon} />
          </a>{" "}
          <a
            href={socialLinks.tiktokLink}
            target="_blank"
            rel="noreferrer"
            className={classes.iconContainer}
          >
            <AiFillTikTok className={classes.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default SingleCoin;

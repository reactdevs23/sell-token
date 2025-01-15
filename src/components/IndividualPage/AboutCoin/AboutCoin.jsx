import classes from "./AboutCoin.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { Heading, Text } from "../../common";
import { timeAgo } from "../../../utils";
import { devilCoin } from "../../../assets/images";
import ProgressBar from "../../common/ProgressBar/ProgressBar";
const AboutCoin = () => {
  const socialItems = [
    {
      icon: <FaTelegramPlane className={classes.socialIcon} />,
      to: "#",
    },
    {
      icon: <FaXTwitter className={classes.socialIcon} />,
      to: "#",
    },
    {
      icon: <AiFillTikTok className={classes.socialIcon} />,
      to: "#",
    },
  ];
  return (
    <section className={classes.wrapper}>
      <div className={classes.header}>
        <img src={devilCoin} alt="#" className={classes.img} />
        <div className={classes.details}>
          <Heading base medium primitive0>
            Terminals Devil Coin <br />{" "}
            <span className={classes.nickName}>(DevilCoin)</span>
          </Heading>
          <Text primitive400 xs>
            GalaxyCoin is revolutionizing interstellar trade, enabling seamless
            and secure crypto transactions across galaxies. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </Text>
        </div>
      </div>
      <div className={classes.goalAchieved}>
        <Text xs primitive400 className={classes.label}>
          50% funding goal achieved
        </Text>
        <ProgressBar progress={50} />
      </div>
      <div className={classes.footer}>
        <div className={classes.launchDate}>
          <Text xs primitive400>
            Launch Date:
          </Text>
          <Text sm primitive100>
            {timeAgo("2024-03-15T00:00:00Z")}
          </Text>
        </div>
        <div className={classes.socialContainer}>
          {socialItems?.map((el, i) => (
            <a
              href={el.to}
              target="_blank"
              rel="noreferrer"
              key={i}
              className={classes.iconContainer}
            >
              <span> {el.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutCoin;

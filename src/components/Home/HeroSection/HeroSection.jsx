import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import classes from "./HeroSection.module.css";
import clsx from "clsx";
import { Button, Heading, Text, Wrapper } from "../../common";
import { vector } from "assets/images";
import {
  bananacatImg,
  galaxyGuruImg,
  momoCoinImg,
  nootImg,
} from "../../../assets/images";

const HeroSection = () => {
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
  const data = [
    {
      byUser: {
        img: galaxyGuruImg,
        name: "76v5yx",
        action: "bought",
      },
      quantity: "0.0124 SOL",
      from: {
        img: momoCoinImg,
        name: "Momocoin",
      },
    },
    {
      byUser: {
        img: galaxyGuruImg,
        name: "76v5yx",
        action: "sold",
      },
      quantity: "0.0124 SOL",
      from: {
        img: nootImg,
        name: "noot",
      },
    },
    {
      byUser: {
        img: galaxyGuruImg,
        name: "jR1V1r",
        action: "created",
      },

      item: {
        img: bananacatImg,
        name: "UTTK AURA",
        createdAt: "12/31/24",
      },
    },
  ];
  return (
    <Wrapper className={clsx(classes.wrapper)}>
      <div className={clsx(classes.container, "container")}>
        <Heading xl6 primitive0 regular textCenter>
          Launch, and Sell Your <br className={classes.br} /> Token Seamlessly
        </Heading>
        <div className={classes.buttonContainer}>
          <Button lg>Launch a new coin</Button>
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

        <div className={classes.cards}>
          {data?.map((el, i) => (
            <div
              className={clsx(
                classes.card,
                el.byUser.action === "bought" && classes.bought,
                el.byUser.action === "sold" && classes.sold,
                el.byUser.action === "created" && classes.created
              )}
              key={i}
            >
              <div className={classes.header}>
                <img src={el.byUser.img} alt="#" className={classes.userImg} />
                <Text sm primitive300>
                  <span className="highlight"> {el.byUser.name}</span>{" "}
                  <span>{el.byUser.action}</span>
                </Text>
              </div>
              <div className={classes.footer}>
                {el.byUser.action !== "created" && (
                  <>
                    <Text sm primitive300>
                      <span className={classes.font500}>{el.quantity}</span> of{" "}
                      <span className="highlight"> {el.from.name}</span>
                    </Text>
                    <img
                      src={el.from.img}
                      alt="#"
                      className={classes.userImg}
                    />
                  </>
                )}
                {el.byUser.action === "created" && (
                  <>
                    <Text sm primitive300>
                      <span className={classes.font500}>{el.item.name}</span>
                    </Text>
                    <img
                      src={el.item.img}
                      alt="#"
                      className={classes.userImg}
                    />
                    <Text sm primitive300>
                      <span className={classes.font500}>
                        on {el.item.createdAt}
                      </span>{" "}
                    </Text>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <img src={vector} alt="#" className={classes.vector} />
    </Wrapper>
  );
};
export default HeroSection;

import { Button, Text } from "components/common";
import classes from "./Footer.module.css";
import clsx from "clsx";
const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <footer className={clsx(classes.footer, "container")}>
        <Text base medium primitive0>
          © 2024 - Uniswap Labs
        </Text>

        <Text sm primitive400 className={classes.linkContainer}>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Privacy Policy
          </a>{" "}
          <span className={classes.seperator}></span>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Terms of Use
          </a>
        </Text>

        <Button radius primitiveTransparent8 className={classes.supportButton}>
          Support
        </Button>
      </footer>
    </div>
  );
};
export default Footer;

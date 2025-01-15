import classes from "./LoginModal.module.css";
import Modal from "../../common/Modal/Modal";
import { Button, Input, Text } from "../../common";

import { useState } from "react";
import {
  bnbChainLogo,
  coinBaseLogo,
  ethereumLogo,
  metamaskLogo,
  solanaLogo,
} from "../../../assets/images";
const LoginModal = ({ isActive, onClose, setShowVerificationModal }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setShowVerificationModal(true);
    onClose();
  };
  return (
    <Modal heading="Log in or sign up" isActive={isActive} onClose={onClose}>
      <div className={classes.form}>
        <div className={classes.inputContainer}>
          <Text sm primitive400>
            Email
          </Text>
          <Input
            name="email"
            className={classes.input}
            value={email}
            setValue={setEmail}
            placeholder="example@email.com"
          />
        </div>
        <Button
          primitiveTransparent8
          wFull
          className={classes.button}
          onClick={handleSubmit}
          loading={""}
        >
          Submit
        </Button>
      </div>
      <Text sm primitive600 textCenter>
        or sign-up with
      </Text>
      <div className={classes.buttonContainer}>
        <Button primitive800 onClick={() => {}}>
          <img src={coinBaseLogo} alt="#" className={classes.logo} /> Coinbase
        </Button>
        <Button primitive800 onClick={() => {}}>
          <img src={metamaskLogo} alt="#" className={classes.logo} /> MetaMask
        </Button>
        <Button primitive800 onClick={() => {}}>
          <img src={solanaLogo} alt="#" className={classes.logo} /> Solana
        </Button>
        <Button primitive800 onClick={() => {}}>
          <img src={ethereumLogo} alt="#" className={classes.logo} /> Ethereum
        </Button>
        <Button primitive800 onClick={() => {}}>
          <img src={bnbChainLogo} alt="#" className={classes.logo} /> BNB Chain
        </Button>
      </div>
    </Modal>
  );
};
export default LoginModal;

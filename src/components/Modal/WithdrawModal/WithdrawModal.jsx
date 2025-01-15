import Modal from "../../common/Modal/Modal";
import classes from "./WithdrawModal.module.css";
import EnterWalletAddressInput from "../../common/AmountInput/AmountInput";
import { useState } from "react";
import { Button, Text } from "../../common";
import { ethreumIcon, usdtLogo } from "../../../assets/images";
import { handleKeyDown } from "../../../utils";
import { CoinDropdown } from "../../common";
const allBlockChains = [
  { logo: ethreumIcon, name: "ETH" },
  { logo: usdtLogo, name: "USDT" },
];

const WithdrawModal = ({ isActive, onClose }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [showBlockChainDropdown, setShowBlockChainDropdown] = useState(false);

  const [selectedBlockChain, setSelectedBlockChain] = useState({
    logo: ethreumIcon,
    name: "ETH",
  });

  return (
    <Modal isActive={isActive} onClose={onClose} heading="Withdraw">
      <div className={classes.container}>
        <div className={classes.inputContainer}>
          <EnterWalletAddressInput
            name="walletAddress"
            value={walletAddress}
            setValue={setWalletAddress}
            label="Wallet address"
            placeholder="Enter Wallet address"
          />
          <Text xs12 primitive500>
            Ensure your wallet address is valid to avoid the risk of losing your
            assets.
          </Text>
        </div>{" "}
        <div className={classes.inputWrapper}>
          <Text xs primitive200>
            <label htmlFor="amount">Enter Amount</label>
          </Text>
          <div className={classes.amountContainer}>
            <input
              name="amount"
              className={classes.input}
              type="number"
              onKeyDown={handleKeyDown}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
            />
            <CoinDropdown
              className={classes.dropdown}
              isActive={showBlockChainDropdown}
              setIsActive={setShowBlockChainDropdown}
              selectedValue={selectedBlockChain}
              onSelect={(val) => setSelectedBlockChain(val)}
              items={allBlockChains}
            />
            <Button primitive800 className={classes.setMax}>
              Set Max
            </Button>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Button primitive800 onClick={onClose}>
            Cancel
          </Button>
          <Button
            loading={""}
            onClick={() => {
              onClose();
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default WithdrawModal;

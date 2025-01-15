import { useState } from "react";
import { Button, Text } from "../../common";
import Modal from "../../common/Modal/Modal";
import classes from "./SetSlipPageModal.module.css";
import clsx from "clsx";
import { handleKeyDown } from "../../../utils";
import { ethreumIcon } from "../../../assets/images";

const SetSlipPageModal = ({ isActive, onClose }) => {
  const [pageNumber, setPageNumber] = useState("");
  const [tip, setTip] = useState("");
  return (
    <Modal isActive={isActive} onClose={onClose} heading="Set max slippage">
      <div className={classes.container}>
        <div className={classes.inputContainer}>
          <Text primitive400 sm>
            Slippage
          </Text>
          <input
            name="slipPage"
            className={classes.input}
            type="number"
            placeholder="2"
            onKeyDown={handleKeyDown}
            value={pageNumber}
            onChange={(e) => setPageNumber(e.target.value)}
          />
          <Text className={classes.percent} primitive600 sm>
            %
          </Text>
        </div>{" "}
        <Text primitive400 xs>
          This defines the maximum slippage you are willing to tolerate when
          executing trades.
        </Text>
        <div className={clsx(classes.inputContainer, classes.tip)}>
          <Text primitive400 sm>
            Tip
          </Text>
          <input
            name="tip"
            className={classes.input}
            type="number"
            placeholder="2"
            onKeyDown={handleKeyDown}
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
          <Text
            uppercase
            base
            medium
            primitive400
            className={classes.coinContainer}
          >
            <img src={ethreumIcon} alt="#" className={classes.coinLogo} />
            ETH
          </Text>
        </div>
        <Text primitive400 xs>
          Paying a higher tip can speed up transaction confirmation.
        </Text>
        <div className={classes.buttonContainer}>
          <Button primitive800 onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onClose();
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SetSlipPageModal;

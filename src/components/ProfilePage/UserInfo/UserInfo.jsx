import { userImg } from "assets/images";
import classes from "./UserInfo.module.css";
import { Button, Heading, Text } from "components/common";
import { RiFileCopyFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

import { useState } from "react";
import EditProfileModal from "components/Modal/EditProfileModal/EditProfileModal";
import WithdrawModal from "components/Modal/WithdrawModal/WithdrawModal";

const UserInfo = () => {
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showWithdrawModal, setShowWithDrawModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const user = { img: userImg, name: "@CucqJN", nickName: "(DevilCoin)" };
  const address = "CucqJNpR9pVEM6wDdiZwyTuCVztQEe4bnZrKNUiiam9k";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); // Reset after 1 second
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <img src={user.img} alt={user.name} className={classes.userImg} />
          <div className={classes.details}>
            <Heading base medium primitive0>
              {user.name}
            </Heading>
            <Text xs medium primitiveDefault>
              {user.nickName}
            </Text>
          </div>
        </div>
        <div className={classes.copyContainer}>
          <Text xs primitive400 className={classes.address}>
            {address}
          </Text>
          <button onClick={handleCopy} className={classes.copyButton}>
            {copied ? (
              <FaCheck className={classes.checkIcon} />
            ) : (
              <RiFileCopyFill className={classes.copyIcon} />
            )}
          </button>
        </div>
        <Button
          primitiveTransparent8
          onClick={() => setShowEditProfileModal(true)}
        >
          Edit Profile
        </Button>

        <div className={classes.infoContainer}>
          <div className={classes.spaceBetween}>
            <Text primitive400>Commented on</Text>
            <Text primitive300 className={classes.value}>
              165 threads
            </Text>
          </div>{" "}
          <div className={classes.spaceBetween}>
            <Text primitive400>Up-Voted</Text>
            <Text primitive300 className={classes.value}>
              234
            </Text>
          </div>{" "}
          <div className={classes.spaceBetween}>
            <Text primitive400>Down-Voted</Text>
            <Text primitive300 className={classes.value}>
              37
            </Text>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Button primitive800 wFull>
            Disconnect Wallet
          </Button>
          <Button primitive800 wFull onClick={() => setShowWithDrawModal(true)}>
            Withdraw From Wallet
          </Button>
        </div>
      </div>
      <EditProfileModal
        isActive={showEditProfileModal}
        onClose={() => setShowEditProfileModal(false)}
      />{" "}
      <WithdrawModal
        isActive={showWithdrawModal}
        onClose={() => setShowWithDrawModal(false)}
      />
    </>
  );
};

export default UserInfo;

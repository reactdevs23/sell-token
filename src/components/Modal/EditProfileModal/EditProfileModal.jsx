import Modal from "../../common/Modal/Modal";
import classes from "./EditProfileModal.module.css";
import EnterNameInput from "../../common/AmountInput/AmountInput";
import { useState } from "react";
import { Button, ImgUpload, Text } from "../../common";
import { userImg } from "../../../assets/images";

const EditProfileModal = ({ isActive, onClose }) => {
  const [nickName, setNickName] = useState("");
  const [uploadedImg, setUploadImg] = useState("");
  return (
    <Modal isActive={isActive} onClose={onClose} heading="Edit Profile">
      <div className={classes.container}>
        <div className={classes.inputContainer}>
          <EnterNameInput
            name="nickname"
            value={nickName}
            setValue={setNickName}
            label="Nickname"
            placeholder="Enter nickname"
          />
          <Text xs12 primitive500>
            You can update your username once every 24 hours.
          </Text>
        </div>
        <div className={classes.imgUpload}>
          <ImgUpload setImage={setUploadImg} />
          <img
            src={uploadedImg ? uploadedImg : userImg}
            alt="#"
            className={classes.img}
          />
        </div>

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
export default EditProfileModal;

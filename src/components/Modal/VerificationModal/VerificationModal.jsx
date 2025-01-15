import clsx from "clsx";
import { Button, Text } from "../../common";
import Modal from "../../common/Modal/Modal";
import classes from "./VerificationModal.module.css";
import OTPInput from "otp-input-react";
import React, { useEffect, useState } from "react";
const ResendOTP = ({ timeInterval, onResend, attempLeft }) => {
  const [remainingTime, setRemainingTime] = useState(timeInterval);

  useEffect(() => {
    if (remainingTime <= 0) return;
    const timer = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  return (
    <button
      className={classes.resend}
      disabled={remainingTime === 0 && attempLeft === 0}
      onClick={() => {
        if (remainingTime === 0 && attempLeft !== 0) {
          onResend();
          setRemainingTime(timeInterval);
        }
      }}
    >
      {remainingTime !== 0 ? `Resend Code (${remainingTime}s)` : "Resend"}
    </button>
  );
};

const VerificationModal = ({ isActive, onClose }) => {
  const [OTP, setOTP] = useState("");
  const [otpInvalid, setOtpInvalid] = useState(false);
  const [attempLeft, setAttempLeft] = useState(5);
  const handleVerify = () => {
    onClose();
  };
  return (
    <Modal heading="Verification" isActive={isActive} onClose={onClose}>
      <Text xs primitive500 textCenter>
        We've sent a 6-digit verification code to your email. Please check your
        inbox, and if you don't see it, make sure to check your spam folder.
      </Text>
      <Text sm primitive300 textCenter>
        {attempLeft ? attempLeft : 0} attempt left
      </Text>{" "}
      <div className={clsx(classes.inputs, classes.noResendInputs)}>
        <OTPInput
          inputClassName={clsx(classes.input, otpInvalid && classes.hasError)}
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
        />
      </div>
      {otpInvalid && (
        <div className={classes.helperError}>
          Please enter valid verification code.
        </div>
      )}
      <div className={clsx(classes.actions)}>
        <Button
          loading={""}
          onClick={handleVerify}
          size="md"
          primitiveTransparent8
        >
          Verify
        </Button>

        <ResendOTP
          timeInterval={30}
          attempLeft={attempLeft}
          onResend={() => {
            if (attempLeft !== 0) {
              setAttempLeft((prev) => prev - 1);
            }
          }}
        />
      </div>
    </Modal>
  );
};
export default VerificationModal;

import React, { useEffect, useState } from "react";

import classes from "./ProgressBar.module.css";

const ProgressBar = ({ progress, background = "#4CB266" }) => {
  const [progressValue, setProgressValue] = useState(0);
  const progressPercentage = progressValue + "%";

  const progressStyle = {
    width: progressPercentage,
    background: background,
  };
  useEffect(() => {
    setProgressValue(progress);
  }, [progress]);
  return (
    <>
      <div className={classes.progressBar}>
        <div className={classes.progress} style={progressStyle} />
      </div>
    </>
  );
};

export default ProgressBar;

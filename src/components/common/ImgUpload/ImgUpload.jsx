import clsx from "clsx";
import Text from "../Text/Text";
import classes from "./ImgUpload.module.css";
import { useState } from "react";
const ImgUpload = ({ setImage, className }) => {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState(""); // State to store the file name

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files
      ? event.target.files[0]
      : event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name); // Update the file name state
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Drag-and-drop event handlers
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    handleImageUpload(event);
  };
  return (
    <div
      className={clsx(
        classes.imgUpload,
        dragActive && classes.dragActive,
        className
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        id="imgInput"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className={classes.fileInput}
      />
      <Text sm medium textCenter primitive400>
        Select an{" "}
        <label htmlFor="imgInput" className={classes.upload}>
          Image
        </label>{" "}
        or <br />
        drag & drop an image here
      </Text>
      {fileName && (
        <Text sm medium textCenter primitive100>
          Uploaded File: {fileName}
        </Text>
      )}
    </div>
  );
};
export default ImgUpload;

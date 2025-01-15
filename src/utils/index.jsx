export const handleKeyDown = (event) => {
  if (
    !(
      /[0-9]/.test(event.key) ||
      event.key === "Backspace" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "."
    )
  ) {
    event.preventDefault();
  }
};
export const nameInitial = (name) => {
  const parts = name.split(" ");
  if (parts.length < 2) return name; // return the original name if it's not in "Firstname Lastname" format

  const firstNameInitial = parts[0].charAt(0);
  const lastNameInitial = parts[1].charAt(0);

  return `${firstNameInitial}${lastNameInitial}`;
};
export const formatName = (name) => {
  const parts = name.split(" ");
  if (parts.length < 2) return name; // return the original name if it's not in "Firstname Lastname" format

  const firstName = parts[0];
  const lastNameInitial = parts[1].charAt(0);

  return `${firstName} ${lastNameInitial}.`;
};

// Function to calculate time difference
export const timeAgo = (timestamp) => {
  const diff = Date.now() - new Date(timestamp).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    const date = new Date(timestamp);
    const formattedDate = `${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}-${date.getFullYear()}`;
    return formattedDate; // MM-DD-YYYY format
  }
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
};

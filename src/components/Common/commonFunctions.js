export const formatDate = (dateString) => {
  if (!dateString) return;
  const date = new Date(dateString);
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const day = date.getDate();
  let suffix = "th";

  if (day === 1 || day === 21 || day === 31) {
    suffix = "st";
  } else if (day === 2 || day === 22) {
    suffix = "nd";
  } else if (day === 3 || day === 23) {
    suffix = "rd";
  }

  return formattedDate.replace(/\b\d{1,2}\b/, `${day}${suffix}`);
};

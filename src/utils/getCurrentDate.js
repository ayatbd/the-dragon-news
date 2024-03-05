export function getCurrentDate() {
  // Create a new Date object
  var currentDate = new Date();

  // Define an array of month names
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the current day, month, date, and year
  var day = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  var month = monthNames[currentDate.getMonth()];
  var date = currentDate.getDate();
  var year = currentDate.getFullYear();

  // Display the result
  return `${day}, ${month}, ${date}, ${year}`;
}

// Call the function to display the current date
// showCurrentDate();

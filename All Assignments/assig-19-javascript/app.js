// Ask user to enter year
  var year = prompt("Enter a year:");
  year = Number(year);

  // Validate input
  if (isNaN(year)) {
    alert("Please enter a valid year.");
  } else {
    // Check leap year
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
      alert(year + " is a Leap Year");
    } else {
      alert(year + " is NOT a Leap Year");
    }
  }
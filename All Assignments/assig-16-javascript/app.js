let bill = prompt("Enter total bill amount:");
bill = Number(bill);

let payment = prompt("Enter payment amount:");
payment = Number(payment);

if (isNaN(bill) || isNaN(payment)) {
  console.log("Invalid input! Please enter numbers only.");
} else if (payment < bill) {
  console.log("Insufficient payment!");
} else {
  let remaining = payment - bill;

  console.log("Bill Amount: " + bill + " Rs");
  console.log("Payment: " + payment + " Rs");
  console.log("Remaining: " + remaining + " Rs");

  let chocolates = Math.floor(remaining / 5);
  let cash = remaining % 5;

  if (chocolates > 0) {
    console.log("Return Chocolates: " + chocolates);
  }

  if (cash > 0) {
    console.log("Return Cash: " + cash + " Rs");
  }

  if (remaining === 0) {
    console.log("No return amount.");
  }
}

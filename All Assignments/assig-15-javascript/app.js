  let num = prompt("Enter a number to print table:");

    num = Number(num);

    if (isNaN(num)) {
      console.log("Invalid input, Please enter a number");
    } else {
      for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
      }
    }
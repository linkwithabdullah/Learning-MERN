 // Function to count vowels
  function countVowels(str) {
    var count = 0;

    // Convert string to lowercase
    str = str.toLowerCase();

    // Loop through string
    for (var i = 0; i < str.length; i++) {
      if (
        str[i] === 'a' ||
        str[i] === 'e' ||
        str[i] === 'i' ||
        str[i] === 'o' ||
        str[i] === 'u'
      ) {
        count++;
      }
    }

    return count;
  }

  // Ask user for input
  var userInput = prompt("Enter a string:");

  // Call function and alert result
  var vowels = countVowels(userInput);
  alert("Number of vowels: " + vowels);
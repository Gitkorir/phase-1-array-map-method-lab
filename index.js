// index.js

// Function to convert a string into title case
function titleCase(str) {
  return str
    .split(" ")
    .map((word) => {
      // Capitalize first letter of each word, keeping other letters lowercase
      if (
        ["the", "and", "but", "or", "for", "nor", "so", "yet", "to"].includes(
          word.toLowerCase()
        )
      ) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

// Array of tutorial names
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Function that returns an array of title-cased tutorial names
function titleCased() {
  return tutorials.map((tutorial) => {
    const words = tutorial.split(" ");
    words.forEach((word, i) => {
      words[i] = `${word[0].toUpperCase()}${word.substring(1)}`;
      console.log(words[0]);
    });
    console.log(words);
    return words.join(" ");
  });
}
console.log(titleCased());

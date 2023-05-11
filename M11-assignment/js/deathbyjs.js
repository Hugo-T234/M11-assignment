//STEP 1
// function alphabetical(text){
//     let letters = text.split("");
//     letters.sort();
//     let newText = letters.join("");
//     return newText;
// }

// alphabetical("webmaster");

//STEP 2
// function firstCapital(text){
//     let textArray = text.split(' ');
//     let firstLetter;
//     let remainingText;
//     for(let i = 0; i < textArray.length; i++){
//         firstLetter = textArray[i].toUpperCase().charAt(0);
//         remainingText = textArray[i].slice(1);
//         textArray[i] = firstLetter + remainingText;
//     }
//     console.log(textArray.join(" "));
// }

// firstCapital('the quick brown fox');

//STEP 3
// function vowels(text) {
//     return(text.match(/[aeiou]/gi).length)
// }
// vowels("The quick brown fox");

//STEP 4
// function randomString(number){
//     let text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let randomWord = "";
//     for(let i = 0; i <= number; i++){
//         let randomChar = text.charAt(Math.floor(Math.random() * text.length));
//         randomWord += randomChar;
//     }
//    return randomWord;
// }

// randomString(5);

//STEP 5
// function countryName(country){
//     let biggestCount = 0;
//     for(let i = 0; i < country.length; i++){
//         if (country[i].length > biggestCount){
//             biggestCount = i;
//         }
//     }
//     console.log(country[biggestCount]);
// }

// countryName(["Australia", "Germany", "United States of America"]);
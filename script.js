/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// an array of objects containing quotes, names, sources and dates 

const quotes = [

{quote: "Love begins at home.",
name: "Mother Teresa",
source: "Speeches that changed the world",
date: "December, 1979"},

{quote: "The only thing we have to fear is fear itself.",
name: "Franklin D.Roosevelt",
source: "Speeches that changed the world",
date: "March, 1933"},

{quote: "Ask not what your country can do for you, but what you can do for your country.",
name: "John F.Kennedy",
source: "Speeches that changed the world",
date: "January, 1961"},

{quote: "There comes a time when one must take a position that is neither safe, nor politic, nor popular, but he must take it because conscience tells him it is right.",
name: "Martin Luther King Jr",
source: "Speeches that changed the world",
date: "February, 1968",
photo: "martinjr.jpg"},

{quote: "There is no job that is too small, there is no person who is too small",
name: "Indira Gandhi",
source: "Speeches that changed the world",
date: "November, 1974"},

{quote: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
name: "Albert Einstein",
source: "Life Magazine",
date: "May, 1955",
photo: "einstein.jpg"}


]

// QUOTES
/***
 * `getRandomQuote` function
***/

 // this function randomly generates an object from the array
function getRandomQuote(){ 

      let getQuote = Math.floor(Math.random() * quotes.length);  
      let quote = quotes[getQuote];
      return quote 

}

/***
 * `printQuote` function
***/

// I linked the function in order to display the randomly generated quote
// I used template literals detailing how each part of the quote should be displayed
function printQuote(){ 

      let generatedQuote = getRandomQuote(); 
      let quotesPrinted = `<p class = "quote">${generatedQuote.quote}
      <p class = "source"> ${generatedQuote.name}
      <span class = "citation"> ${generatedQuote.source}
      <span class = "year"> ${generatedQuote.date}</p>`

      if(generatedQuote.photo){
// conditional statement to display the extra property in certain quotes

      	quotesPrinted = `<p class = "quote">${generatedQuote.quote}
      <p class = "source"> ${generatedQuote.name}
      <span class = "citation"> ${generatedQuote.source}
      <span class = "year"> ${generatedQuote.date}</p>
      <img src = "${generatedQuote.photo}" alt = "A picture of ${generatedQuote.name}">`
      }

      return document.querySelector(".container").innerHTML = quotesPrinted
  }


//COLORS
/***
 * `getColor` function
***/

//Function randomly generates a color 
function getColor(){

	let red = Math.floor(Math.random() *256);
	let green = Math.floor(Math.random() *256); 
	let blue = Math.floor(Math.random() * 256);

	let randomRGB = `rgb(${red},${green},${blue})`; // Template literal to take the random colors and assign it to a single variable

	return randomRGB
}


/***
 * `printColor` function
***/

//take the color generated above and display it as the background color of the document
function printColor(){

	let colorChange = getColor();
	return document.body.style.backgroundColor = colorChange
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
window.addEventListener("load",printQuote) // load in a quote on opening the application to avoid blank space.
document.getElementById('load-quote').addEventListener("click", printQuote, false); // change quote when button is clicked
document.getElementById('load-quote').addEventListener("click", printColor); // change color when button is clicked
setInterval(printColor, 15000) // change color every 10 seconds
setInterval(printQuote, 15000) // change quote every 10 seconds
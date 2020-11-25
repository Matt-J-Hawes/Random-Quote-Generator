/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/
// an array of objects containing quotes, names, sources and dates 

const quotes = [

{quote: "Love begins at home.",
source: "Mother Teresa",
citation: "Speeches that changed the world",
year: "December, 1979"},

{quote: "The only thing we have to fear is fear itself.",
source: "Franklin D.Roosevelt",
citation: "Speeches that changed the world",
year: "March, 1933"},

{quote: "Ask not what your country can do for you, but what you can do for your country.",
source: "John F.Kennedy",
citation: "Speeches that changed the world",
year: "January, 1961"},

{quote: "There comes a time when one must take a position that is neither safe, nor politic, nor popular, but he must take it because conscience tells him it is right.",
source: "Martin Luther King Jr",
citation: "Speeches that changed the world",
year: "February, 1968",
photo: "martinjr.jpg"},

{quote: "There is no job that is too small, there is no person who is too small",
source: "Indira Gandhi",
citation: "Speeches that changed the world",
year: "November, 1974"},

{quote: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
source: "Albert Einstein",
citation: "Life Magazine",
year: "May, 1955",
photo: "einstein.jpg"}


];

// QUOTES
/***
 * `getRandomQuote` function
***/

 // this function randomly generates an object from the array
function getRandomQuote(){ 
      let getQuote = Math.floor(Math.random() * quotes.length);  
      let quote = quotes[getQuote];
      return quote 
};

/***
 * `printQuote` function
***/

// I linked the function in order to display the randomly generated quote
// I used template literals detailing how each part of the quote should be displayed
function printQuote(){ 
      let generatedQuote = getRandomQuote(); 
      let quotesPrinted = `<p class = "quote">${generatedQuote.quote}
      <p class = "source"> ${generatedQuote.source}
      <span class = "citation"> ${generatedQuote.citation}
      <span class = "year"> ${generatedQuote.year}</p>`
      if(generatedQuote.photo){
          	quotesPrinted +=
           `<img src = "${generatedQuote.photo}" alt = "A picture of ${generatedQuote.name}">`
      };
      return document.querySelector(".container").innerHTML = quotesPrinted
  };

/***
 * `getColor` function
***/
//Function randomly generates a color 
function getColor(){
  	let red = Math.floor(Math.random() *256);
  	let green = Math.floor(Math.random() *256); 
  	let blue = Math.floor(Math.random() * 256);
  	let randomRGB = `rgb(${red},${green},${blue})`; 
	return randomRGB;
}

/***
 * `printColor` function
***/
//take the color generated above and display it as the background color of the document
function printColor(){
	let colorChange = getColor();
	return document.body.style.backgroundColor = colorChange
};

/***
 * click event listener for the print quote button
***/
// load in a quote on opening the application to avoid blank space.
window.addEventListener("load",printQuote); 
// change quote when button is clicked
document.getElementById('load-quote').addEventListener("click", printQuote, false); 
// change color when button is clicked
document.getElementById('load-quote').addEventListener("click", printColor); 
// change color every 15 seconds
setInterval(printColor, 15000); 
// change quote every 15 seconds
setInterval(printQuote, 15000); 

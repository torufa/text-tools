let textInput = document.getElementById("textInput");

let wordCount = document.getElementById("wordCount");
let charCount = document.getElementById("charCount");
let sentenceCount = document.getElementById("sentenceCount");
let paragraphCount = document.getElementById("paragraphCount");

textInput.addEventListener("input", function () {
   let text = textInput.value.trim();
//Words Counting
   let words = (text === "" ? [] : (text.split(/\s+/)));
   wordCount.innerText = words.length;
//character counting
    charCount.innerText = text.length;



//animation
   let span = document.querySelectorAll("span");
   span.forEach((e)=> {e.classList.add("beat");});
   setTimeout(() => {
    span.forEach((e)=>{e.classList.remove("beat");});
   }, 1000); 
   
});
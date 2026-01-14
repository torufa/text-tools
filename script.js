let p = document.querySelectorAll("p");
p.forEach((array)=>{
   array.className = "flex-1 min-w-[45%] bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm text-gray-700 flex items-center gap-2";

});

let icons = document.querySelectorAll("i");
icons.forEach((array)=>{
   array.classList.add("text-xl", "text-green-500");
});

let spans = document.querySelectorAll("span");
spans.forEach((array)=>{
   array.className = "ml-auto text-xl font-semibold text-green-600";
});
//styling ended


let textInput = document.getElementById("textInput");

let wordCount = document.getElementById("wordCount");
let charCount = document.getElementById("charCount");
let charNoSpacesCount = document.getElementById("charNoSpacesCount");
let sentenceCount = document.getElementById("sentenceCount");
let paragraphCount = document.getElementById("paragraphCount");


textInput.addEventListener("input", function () {
   let text = textInput.value.trim();
//Words Counting
   let words = (text === "" ? [] : (text.split(/\s+/)));
   wordCount.innerText = words.length;
//character counting
    charCount.innerText = text.length;

//sentence counting
   let sentences = text.split(/[|.!?]+/);
   ((sentences.length > 0) ? sentenceCount.innerText = sentences.length-1 : (sentenceCount.innerText = 0));

//paragraph counting
   let paragraphs = text.split(/\n+/);
   ((paragraphs.length > 0) ? paragraphCount.innerText = paragraphs.length : (paragraphCount.innerText = 0));

//character counting without spaces
   let charNoSpaces = text.replace(/\s/g, "");
   charNoSpacesCount.innerText = charNoSpaces.length;


//animation
   let span = document.querySelectorAll("span");
   span.forEach((e)=> {e.classList.add("beat");});
   setTimeout(() => {
    span.forEach((e)=>{e.classList.remove("beat");});
   }, 1000); 
   
});
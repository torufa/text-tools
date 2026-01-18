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

let info = document.querySelector(".info");
info.addEventListener("mouseover", function () {
  info.innerHTML = "Based on 250 words per minute.";
});
info.addEventListener("mouseout", function () {
  info.innerHTML = `<i class="text-[12px] fa-solid fa-info p-1.5"></i>`;
});


//styling ended


let textInput = document.getElementById("textInput");

let wordCount = document.getElementById("wordCount");
let charCount = document.getElementById("charCount");
let charNoSpacesCount = document.getElementById("charNoSpacesCount");
let sentenceCount = document.getElementById("sentenceCount");
let paragraphCount = document.getElementById("paragraphCount");
let emojiCount = document.getElementById("emojiCount");
let readingTime = document.getElementById("readingTime");

textInput.addEventListener("input", function () {
   let text = textInput.value.trim();
//Words Counting
   let words = (text === "" ? [] : (text.split(/\s+/)));
   let count = words.length
   wordCount.innerText = count;
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

//emoji counting
   let emojiRegex = text.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu);
   emojiCount.innerText = emojiRegex ? emojiRegex.length : 0;

//reading time
   let totalMinutes = count / 250;

   let minutes = Math.floor(totalMinutes);
   let seconds = Math.round((totalMinutes - minutes) * 60);

   if (totalMinutes < 1) {
      readingTime.innerText = `${seconds} sec`;
   } else {
      readingTime.innerText = `${minutes} min ${seconds} sec`;
   }


//animation
   let span = document.querySelectorAll("span");
   span.forEach((e)=> {e.classList.add("beat");});
   setTimeout(() => {
    span.forEach((e)=>{e.classList.remove("beat");});
   }, 1000); 
   
});
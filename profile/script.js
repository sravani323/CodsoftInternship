const typingElement=document.getElementById("typing_animation");
const typingTexts=["Web Developer",];
function play(text){
    for(let i=0;i<text.length;i++){
       setTimeout(()=>{
        typingElement.textContent+=text[i];
       },i*200);
    }
    setTimeout(()=>{
        typingElement.textContent="";
        play(typingTexts[(typingTexts.indexOf(text)+1)%typingTexts.length]);
    },text.length*200);
}
play(typingTexts[0]);
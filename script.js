const title = document.getElementById("title");

const CLICKED_CLASS = "clicked"; 

function heandleClick(){
    title.classList.toggle(CLICKED_CLASS)
    }


function init(){
    title.addEventListener("click",heandleClick);
}
init();
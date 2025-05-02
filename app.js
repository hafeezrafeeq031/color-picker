selected = ""
previousDiv = null; 

function selectColor(div,color) { 
if (previousDiv != null){ 
previousDiv.style.borderWidth = "1px" 
} 
previousDiv = div 
div.style.borderWidth = "3px" 
selected= color }

function handleColor(div) {
div.style.backgroundColor = selected; 
div.style.borderWidth = "2px" }
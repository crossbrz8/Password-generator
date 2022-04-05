var passwordEl = document.getElementById("gen-But")
var rectEl = document.getElementById("Rect1")
var rectEl2 = document.getElementById("Rect2")
var rectEl3 = document.getElementById("Rect3")
var rectEl4 = document.getElementById("Rect4")
var passwordArray = []
var password = ""
passwordEl.addEventListener('click', function() { 
  generatePassword('c'); 
}, false);


function genPass()
{
    let randomstring 
    return randomstring = Math.random().toString(36).slice(-8)
}


function generatePassword()
{
    for(let i = 0; i < 4 ;i++)
    {
       passwordArray[i] = genPass()
     
    }
    rectEl.textContent = passwordArray[0]
    rectEl2.textContent = passwordArray[1]
    rectEl3.textContent = passwordArray[2]
    rectEl4.textContent = passwordArray[3]
} 




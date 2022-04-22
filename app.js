// DOM BASICS EXERCISE
// 1
const xMen = document.getElementById(`x-men`);

// 2
const centered = document.getElementsByClassName(`center`);

// 3
const batman =  document.querySelector(`div h2`);
// another option to getting the same result would be const batman = document.querySelector(#batman)

// 4
const h3s = document.querySelectorAll(`h3`);

// 5a
const h1 = document.querySelector(`h1`);


// 5b
h1.innerText = `The Best Animated Superhero TV Shows Ever!`;

// 6a
const honorableMentions = document.getElementById (`honorable-mentions`);

// 6b
honorableMentions.innerHTML = `<p>OTHER GREAT SHOWS </p>`;

// 7a 
const aTag = document.querySelector(`a`);

// 7b
aTag.href = "https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/";

// 8
h1.classList.add(`background`, `text-color`);

// 9
h1.classList.remove(`background`);

// 10a
const h4 = document.createElement(`h4`);

// 10b
h4.innerText = "Is Avatar: The Last AirBender A Superhero Show?";

// go back to the recording minute 32:27 on 04/08/22.
// 10c
const body = document.querySelector(`body`);
body.prepend(h4);

// 11a
const h5 = document.createElement(`h5`);

// 11b
h5.innerText = "Heroes in a half shell Turtle Power!";
 
// 11c 
aTag.insertAdjacentElement(`afterend` , h5);

// 12
const li =  document.querySelector(`ul>li`);
li.remove();

// BONUS
// 13a
const divs = document.querySelectorAll(`div`);

// 13b
divs.forEach((div) => {
    div.classList.toggle(`background`);
});

// or

document.querySelectorAll(`div`).forEach(function(elem){
    elem.classList.toggle(`background`);
});

// or
for (d of divs){
    d.classList.toggle(`background`);
}

// 14a
const avengers = [
    "Forever",
    "Fight",
    "As",
    "One",
    "AVENGERS",
    "ASSEMBLE!"
];

// 14b
// DULCE ANSWER, ineed to ask here about the book she ordered.
const newRay = document.createElement(`span`);
function adding (a){
    for(i=0; i<a.length; i++){
        newRay.innerText += a[i]+ ` `;
    }
    body.append(newRay);

}

adding(avengers);






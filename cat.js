const image = document.getElementById('cat');
const image2 = document.getElementById('cat2');
const counter = document.getElementById('counter');
const counterWrapper = document.getElementById('counter-wrapper');
const counter2 = document.getElementById('counter2');
const counterWrapper2 = document.getElementById('counter-wrapper2');
const cat1 = "Georges";
const cat2 = "Henry";
const cat1name = document.getElementById('cat1name');
const cat2name = document.getElementById('cat2name');

document.addEventListener('DOMContentLoaded', () => {
  cat1name.innerHTML = cat1;
  cat2name.innerHTML = cat2;
});

if(image){
  let x = 0;
  counterWrapper.innerHTML = 'You haven\'t clicked me yet!';
  image.addEventListener('click', () => {
    x++;
    console.log(x);
    counter.innerHTML = x;
    counterWrapper.innerHTML = "You've already clicked me " + x + (x > 1 ? " times" : " time");
  } )
}

if(image2){
  let x = 0;
  counterWrapper2.innerHTML = 'You haven\'t clicked me yet!';
  image2.addEventListener('click', () => {
    x++;
    console.log(x);
    counter2.innerHTML = x;
    counterWrapper2.innerHTML = "You've already clicked me " + x + (x > 1 ? " times" : " time");
  } )
}

console.log("running from cat.js");

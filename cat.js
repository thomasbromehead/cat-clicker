const image = document.getElementById('cat');
const counter = document.getElementById('counter');
const counterWrapper = document.getElementById('counter-wrapper');


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

console.log("running from cat.js");

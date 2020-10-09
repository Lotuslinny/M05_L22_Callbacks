function huiswerkMaken(vak, callback) {
  /* Binnen deze callback functie moet je wachten tot de functie klaarMetHuiswerk klaar is.
  Simply put: A callback is a function that is to be executed after another function has 
  finished executing — hence the name ‘call back’.

  More complexly put: In JavaScript, functions are objects. Because of this, 
  functions can take functions as arguments, and can be returned by other functions. 
  Functions that do this are called higher-order functions. Any function that is passed 
  as an argument is called a callback function. */

  setTimeout(() => {
    console.log(`Ok, ok ik ga nu mijn huiswerk ${vak} maken.`);
    callback();
  }, 3000)
}
function klaarMetHuiswerk() {
  console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!")
}
huiswerkMaken('wiskunde', klaarMetHuiswerk);



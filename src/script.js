/* eslint-disable */

window.onload = function() {
  //write your code here
  var who = ["the dog", "my father", "my girlfriend", "my cat"];
  var what = ["scratched", "took away", "stole", "broked"];
  var when = [
    "before the class",
    "during dinner",
    "when I was in the shower",
    "taking the bus"
  ];
  var ex1 = Math.floor((Math.random()*who.length) );
  var ex2 = Math.floor((Math.random()*what.length));
  var ex2 = Math.floor((Math.random()*when.length));
  
  document.querySelector ('#excuse').innerHTML = who[ex1]+what[ex2]+when[ex3];
};

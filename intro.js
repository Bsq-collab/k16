//  Team iBerry-- Bayan Berri, Ibnul Jahan
//  SoftDev1 pd7
//  K15 -- DOMinating JS
//  2017-12-11

var list=['bayan','bob','balloon','barbie','blue','bootstrap','bees','bright', 'bubbles'];

var addElement = function(list, el){
    list.push(el);
    //console.log(el + " has just been pushed to the list (" + list + ")");
    return list;
};

//Callback button for randomStudent
//Returns 1 (one) random name from the list
var addElementCallback = function(e){
    element = "b" + Math.floor(Math.random(25)*50);
    console.log("\nWe are adding " + element + " to the list (" + list + ")");
    console.log("addElement ->" + addElement(list, element));
};
//Event listener for randStudent
var addElementButton = document.getElementById('b');
addElementButton.addEventListener('click', addElementCallback);



//SIGNING OFF
console.log("This has been a production by Bayan & Ibnul");

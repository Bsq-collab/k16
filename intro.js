//  Team iBerry-- Bayan Berri, Ibnul Jahan
//  SoftDev1 pd7
//  K15 -- DOMinating JS
//  2017-12-11
/* NOTES
JS for selecting HTML elements from the dom:
  document.getElementById(ID)
  document.getElementByTagName(TAG)
  document.getElementsbyCLassName(class)
  document is like the root/computer/c:
  JS for manipulating HTML elements

  ELEMENT.remove()
  ELEMENT.innerHTML(HTML)
  document.createElement(html, tag, name)
  ELEMENT. appendChild(element)
  element.setAttribute(name,value)
  element.getAttribute(mname)
  element.addEventListener(event,function)

*/

//var list=['bayan','bob','balloon','barbie','blue','bootstrap','bees','bright', 'bubbles'];
var listNum=8;//to add to the list the next number

var addElementCallback=function(e){
  var list=document.getElementById("thelist");//<ol id="thelist">
  var newElem=document.createElement("li");
  newElem.innerHTML='item '+ listNum;//item 8
  list.appendChild(newElem);
  console.log("appended child: "+ listNum);
  listNum+=1;
};

var addElementButton = document.getElementById('b');
addElementButton.addEventListener('click', addElementCallback);


var returnCallback=function(e){
  var heading= document.getElementbyID('h');
  heading.innerHTML="Hello World!";
};


//SIGNING OFF
console.log("This has been a production by Bayan & Ibnul");

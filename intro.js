//  Team iBerry-- Bayan Berri, Ibnul Jahan
//  SoftDev1 pd7
//  K15 -- DOMinating JS
//  2017-12-11

var listNum=8;//to add to the list the next number
var list=document.getElementById('thelist');//<ol id='thelist'>

//Adding elements function
var addElementCallback=function(e){

  //var list=document.getElementById("thelist");//<ol id="thelist">
  var newElem=document.createElement("li");
  newElem.innerHTML='item '+ listNum;//item 8
  list.appendChild(newElem);
  newElem.addEventListener("mouseover",changeHeaderCallback);
  newElem.addEventListener("click",removeElement);
  console.log("appended child: "+ listNum);
  listNum+=1;
};
//calling add Element-- listens for click and adds element
var addElementButton = document.getElementById('b');
addElementButton.addEventListener('click', addElementCallback);

//change the header
var changeHeaderCallback=function(e){
  var heading=document.getElementById('h');
  heading.innerHTML= this.innerHTML;
  console.log("Header changed to: "+ heading.innerHTML + ", move your mouse off the item to change it back");
}
//remove header and make it Hello World
var removeHeaderCallback=function(e){
  var heading= document.getElementById('h');
  heading.innerHTML="Hello World!";
  console.log("Header changed back to Hello World, put your mouse over an item again to change it");
};
//If mouseout-- change header to Hello World
list.addEventListener("mouseout", removeHeaderCallback);

// function that removes the item.
var removeElement=function(e){
  this.remove();
  console.log("You clicked and removed an item, So long item!");
}

//loops through every element of the list and changes header or removes
var elementsOfList=document.getElementsByTagName('li');
var i=0;
while (i<list.length){
  elementsOfList[i].addEventListener('mouseover', changeHeaderCallback);
  elementOfList[i].addEventListener('click',removeElement);
}




//SIGNING OFF
console.log("This has been a production by Bayan & Ibnul");

/*
  NOTES
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

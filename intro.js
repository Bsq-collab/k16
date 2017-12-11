//  Team iBerry-- Bayan Berri, Ibnul Jahan
//  SoftDev1 pd7
//  K16 -- Sequential Progression II: Electric Boogaloo...
//  2017-12-12

var listNum=8;//to add to the list the next number
var list=document.getElementById('thelist');//<ol id='thelist'>

var secListNum = 1;

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

var list2=document.getElementById('2ndlist');//<ol id='thelist'>
var addElementButton2 = document.getElementById('b2');
addElementButton2.addEventListener("click", addFibonacciCallback);

/*
var addFibonacciCallback = function(n){
    var newElem=document.createElement("li");
    newElem.innerHTML=secListNum;//item 8
    
    var secList = document.getElementById('2ndlist');
    secList.innerHTML= this.innerHTML;
    secList.appendChild(fibonacci(secListNum));
    console.log("Fibonacci Number added " + secListNum );
    secListNum+=1;

};
*/
var addFibonacciCallback = function(n) {
    var newElem = document.createElement("li");
    newElem.innerHTML=fibonacci(secListNum);
    list2.appendChild(newElem);
    console.log("added the " + secListNum + "th fib num" + );
    secListNum+=1;
};


var fibonacci= function(n){
    if(n<0){
	return "Sorry, you cannot find a negative fibonacci term";
    };
    if(n==0){
	return 0;
    };
    if(n==1){
	return 1;
    };
    return fibonacci(n-1)+fibonacci(n-2);
};

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

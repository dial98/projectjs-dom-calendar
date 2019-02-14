//1. Взимане на съществуващ DOM елемент от страницата.-by class
var getElementByClass=document.getElementsByClassName("Dom");

//2. Добавяне на не съществуващ елемент към произволен елемент, вече съществуващ на HTML страницата.
function AddFilm() {
  var node = document.createElement("li");
  var textnode = document.createTextNode("Night School");
  node.appendChild(textnode);
  document.getElementById("myMoviesList").appendChild(node);
}


//3. Изтриване на съществуващ елемент от HTML страницата
function removeElement() {
    document.getElementById("Venom").remove();}
//4. Промяна на свойствата на избран елемент, в това число:
//a. Промяна на атрибутите на елемента (id / class / data / name)
//document.getElementsByTagName("p")[0].setAttribute("class", "democlass");
function changingTheId() {
  document.getElementById("getNewId").id = "Id2";
  document.getElementById("id3").innerHTML = "The id of the paragraph was changed from 'getNewId' to 'Id2'.";
}

function myFunction() {
    document.getElementsByTagName("h3")[0].setAttribute("class", "NewClass"); 
    document.getElementById("addingClass").innerHTML = "You just added a class- it is called NewClass";
  }

function nameChange() {    
    document.getElementById("btn").name = "New Name";
    document.getElementById("changingName").innerHTML = "You just changed the name attribute of the button- now it is New Name";
}
    
//b. Промяна и връщане на текстово съдържание
function changeText(){
    document.getElementById("myspan").innerHTML="New Text";

}
//c. Промяна и връщане на HTML съдържание на елемента
function changeContent(){
    document.getElementById("js").innerHTML = "Hello JavaScript!";
}

function changeHtml(){
  document.getElementById("demo1").innerHTML = "Hello JavaScript!";
}

//d. Промяна на съществуващи стилове, както и добавяне на множество стилове
function myFunctionn() {
    var x = document.createElement("STYLE");
    var t = document.createTextNode("body {font: 20px verdana!important;background-color:purple!important;font-style:italic!important;color:white!important;padding:50px;}");
    x.appendChild(t);
    document.head.appendChild(x);
}

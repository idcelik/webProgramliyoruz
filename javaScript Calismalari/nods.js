

var node = document.getElementById("agac");
alert(node.childNodes[0].nodeValue)


var baslik = document.createElement("h2");
var node = document.createTextNode("Hello Js !");
baslik.appendChild(node);

var div1 = document.getElementById("div1");
var p2= document.getElementById("p2");
div1.insertBefore(baslik,p2);

alert("p2 siliniyor."); 
div1.removeChild(p2);
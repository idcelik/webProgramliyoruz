
var deniz = document.getElementById("deniz").addEventListener("click",renkDegistir);

function renkDegistir(){

    document.getElementById("div1").style.color="red";
    var isimElemanlari = document.getElementsByName("musteriAdi");
    isimElemanlari[0].value="idc";
}

var deniz = document.getElementById("deniz").addEventListener("mouseover",mesajVer);
function mesajVer(){
    var isimElemanlari = document.getElementsByName("musteriAdi");
    isimElemanlari[0].value="Mouse Üzerimde"; 
}
var deniz = document.getElementById("deniz").addEventListener("mouseleave",mesajVer2);
function mesajVer2(){
    var isimElemanlari = document.getElementsByName("musteriAdi");
    isimElemanlari[0].value="Ohh! Mouse Üzerimde değil."; 
}
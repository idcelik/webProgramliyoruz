
var sehirler = ["Ankara", "İzmir", "İstanbul"]

for (i = 0; i < sehirler.length; i++) {
    console.log(sehirler[i])
}

i = 1;
while (i < 10) {
    console.log(i);
    i++;
}
// alert("Bitti");

var i = 1;
do {
    console.log(i);
    i++;
} while (i < 10);

sehirler.forEach(function (sehir) {
    console.log(sehir);
});
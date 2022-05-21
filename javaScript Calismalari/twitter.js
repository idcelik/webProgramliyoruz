

var kullanicilar = [
    { email: "idc@gmail.com", sifre: "1234" },
    { email: "dc@gmail.com", sifre: "123" }
]
var tweets = [
    { email: "idc@gmail.com", tweet: "Hello Twitter!" },
    { email: "idc@gmail.com", tweet: "Hello World!" },
    { email: "dc@gmail.com", tweet: "Selam!" }
]
var email = prompt("E-mail?");
var sifre = prompt("Şifre?");
function kullaniciVarMi(_email, _sifre) {
    for (i = 0; i < kullanicilar.length; i++) {
        if (kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) return true;
    }
    return false;
}
function giris(_email, _sifre) {
    if (kullaniciVarMi(_email, _sifre)) console.log(tweets);
    else console.log("Kullanıcı bilgileri hatalı veya bulunamadı!");
}
giris(email, sifre);
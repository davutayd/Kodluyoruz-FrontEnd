// Bir kullanıcının yaşını kontrol eden bir örnek
var yas = prompt("Lütfen yaşınızı girin:");

if (yas >= 18) {
  console.log("Ehliyet alabilirsiniz.");
} else {
  console.log("Ehliyet alamazsınız. Daha küçüksünüz.");
}

//matematiksel işlem
function hesaplaToplama() {
  var sayi1 = parseFloat(document.getElementById("sayi1").value);
  var sayi2 = parseFloat(document.getElementById("sayi2").value);
  var sonuc = sayi1 + sayi2;
  document.getElementById("sonuc").textContent = sonuc;
}

function hesaplaCikarma() {
  var sayi1 = parseFloat(document.getElementById("sayi1").value);
  var sayi2 = parseFloat(document.getElementById("sayi2").value);
  var sonuc = sayi1 - sayi2;
  document.getElementById("sonuc").textContent = sonuc;
}

function hesaplaCarpma() {
  var sayi1 = parseFloat(document.getElementById("sayi1").value);
  var sayi2 = parseFloat(document.getElementById("sayi2").value);
  var sonuc = sayi1 * sayi2;
  document.getElementById("sonuc").textContent = sonuc;
}

function hesaplaBolme() {
  var sayi1 = parseFloat(document.getElementById("sayi1").value);
  var sayi2 = parseFloat(document.getElementById("sayi2").value);
  if (sayi2 === 0) {
    document.getElementById("sonuc").textContent =
      "Bölme işlemi sıfıra bölünemez.";
  } else {
    var sonuc = sayi1 / sayi2;
    document.getElementById("sonuc").textContent = sonuc;
  }
}
//1'den 10'a kadar olan sayıları yazdırma
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

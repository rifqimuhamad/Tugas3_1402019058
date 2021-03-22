//Berfungsi untuk scroll header/navbar
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
// Berfungsi untuk memilih hitungan yang ingin di gunakan 
var _0xf97a=["\x68\x69\x64\x65","\x23\x74\x61\x62\x75\x6E\x67","\x23\x6B\x65\x72\x75\x63\x75\x74","\x23\x62\x6F\x6C\x61","\x63\x6C\x69\x63\x6B","\x23\x68\x69\x64\x65\x31","\x73\x68\x6F\x77","\x23\x73\x68\x6F\x77\x31","\x23\x68\x69\x64\x65\x6B\x31","\x23\x73\x68\x6F\x77\x6B\x31","\x23\x68\x69\x64\x65\x62\x31","\x23\x73\x68\x6F\x77\x62\x31","\x72\x65\x61\x64\x79"];$(document)[_0xf97a[12]](function(){$(_0xf97a[1])[_0xf97a[0]]();$(_0xf97a[2])[_0xf97a[0]]();$(_0xf97a[3])[_0xf97a[0]]();$(_0xf97a[5])[_0xf97a[4]](function(){$(_0xf97a[1])[_0xf97a[0]]()});$(_0xf97a[7])[_0xf97a[4]](function(){$(_0xf97a[1])[_0xf97a[6]]();$(_0xf97a[2])[_0xf97a[0]]();$(_0xf97a[3])[_0xf97a[0]]()});$(_0xf97a[8])[_0xf97a[4]](function(){$(_0xf97a[2])[_0xf97a[0]]()});$(_0xf97a[9])[_0xf97a[4]](function(){$(_0xf97a[2])[_0xf97a[6]]();$(_0xf97a[1])[_0xf97a[0]]();$(_0xf97a[3])[_0xf97a[0]]()});$(_0xf97a[10])[_0xf97a[4]](function(){$(_0xf97a[3])[_0xf97a[0]]()});$(_0xf97a[11])[_0xf97a[4]](function(){$(_0xf97a[3])[_0xf97a[6]]();$(_0xf97a[1])[_0xf97a[0]]();$(_0xf97a[2])[_0xf97a[0]]()})})

  // Meminta pengunjung untuk menuliskan nama, dan mengecek waktu 
  nama();
  function nama(){
      var txt;
      person = prompt("Please enter your name:", "Nama kamu....");
      var now = new Date();
      var hour = now.getHours();
      if(person == "" || person.search("[!A-Z.a-z]")){
      alert("Inputan yang anda masukan salah");
      nama();
      }
      if (person != null || hour >= 12) {
          if (hour >= 0 && hour < 12) {
              txt = "Hello " + person + " Good Morning.";
          }
          if (hour >= 12 && hour < 18) {
              txt = "Hello " + person + " Good Afternoon.";
          }
          if (hour >= 18) {
              txt = "Hello " + person + " Good Evening.";
          }
      } else {
      txt = "User cancelled the prompt.";
      }
      document.getElementById("nama").innerHTML = txt;
  }

  // menghitung tabung
  var tabung1 = function () {
    let jari_jari = document.getElementById('masukan_jari1').value
    let tinggi = document.getElementById('masukan_tinggi1').value
    var z = 2 * Math.PI * Math.pow(jari_jari, 2) + 2 * Math.PI * jari_jari * tinggi;
    var y = Math.PI * Math.pow(jari_jari, 2) * tinggi;
    if (jari_jari == "" || tinggi == "") {
        alert("Inputan masih kosong");
    } else {
        if (isNaN(jari_jari) || isNaN(tinggi)) {
            alert("Inputan harus angka");
            document.getElementById('masukan_jari1').value = '';
            document.getElementById('masukan_tinggi1').value = '';
        } else {
            // display the result
            document.getElementById('result1').textContent = "Luas permukaan = " + z.toFixed(2) + " m^2 \n" + "Volume = " + y.toFixed(2) + " m^2";
        }
    }
 }
 //menghitung kerucut
 var kerucut1 = function () {
    // get the radius
    let jari = document.getElementById('masukan_jari2').value
    let selimut = document.getElementById('masukan_garis').value
    let tinggik = document.getElementById('masukan_tinggi2').value
    var a = Math.PI * Math.pow(jari, 2) + Math.PI * jari * selimut;
    var d = (1 / 3) * Math.PI * Math.pow(jari, 2) * tinggik;
    if (jari == "" || tinggik == "" || selimut == "") {
        alert("Inputan masih kosong");
    } else {
        if (isNaN(jari) || isNaN(tinggik) || isNaN(selimut)) {
            alert("Inputan harus angka");
            document.getElementById('masukan_jari2').value = '';
            document.getElementById('masukan_tinggi2').value = '';
            document.getElementById('masukan_garis').value = '';
        } else {
        // display the result
            document.getElementById('result2').textContent = "Luas permukaan = " + a.toFixed(2) + " m^2\n" + "Volume = " + d.toFixed(2) + " m^2";
        }
    }
 }
 // menghitung bola
 var bola = function () {
    // get the radius
    let radius = document.getElementById('radius').value
    var b = 4 * Math.PI * Math.pow(radius, 2);
    var c = (4 / 3) * Math.PI * Math.pow(radius, 3);
    if (radius == "") {
        alert("Inputan masih kosong");
    } else {
        if (isNaN(radius)) {
            alert("Inputan harus angka");
            document.getElementById('radius').value = "";
        } else {
        // display the result
            document.getElementById('result3').textContent = "Luas permukaan = " + b.toFixed(2) + " m^2\n" + "Volume = " + c.toFixed(2) + " m^2";
        }
    }
 }

// Berfungsi untuk memilih hitungan yang ingin di gunakan 
    $(document).ready(function () {
        $("#tabung").hide();
        $("#kerucut").hide();
        $("#bola").hide();
        $("#hide").click(function () {
            $("#tabung").hide();
        });
        $("#show").click(function () {
            $("#tabung").show();
            $("#kerucut").hide();
            $("#bola").hide();
        });
        $("#hidek").click(function () {
            $("#kerucut").hide();
        });
        $("#showk").click(function () {
            $("#kerucut").show();
            $("#tabung").hide();
            $("#bola").hide();
        });
        $("#hideb").click(function () {
            $("#bola").hide();
        });
        $("#showb").click(function () {
            $("#bola").show();
            $("#tabung").hide();
            $("#kerucut").hide();
        });
    });
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
// Berfungsi untuk memilih hitungan yang ingin di gunakan pada bagian header
    $(document).ready(function () {
        $("#tabung").hide();
        $("#kerucut").hide();
        $("#bola").hide();
        $("#hide1").click(function () {
            $("#tabung").hide();
        });
        $("#show1").click(function () {
            $("#tabung").show();
            $("#kerucut").hide();
            $("#bola").hide();
        });
        $("#hidek1").click(function () {
            $("#kerucut").hide();
        });
        $("#showk1").click(function () {
            $("#kerucut").show();
            $("#tabung").hide();
            $("#bola").hide();
        });
        $("#hideb1").click(function () {
            $("#bola").hide();
        });
        $("#showb1").click(function () {
            $("#bola").show();
            $("#tabung").hide();
            $("#kerucut").hide();
        });
    });
    
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
          if (hour >= 0 && hour < 11) {
              txt = "Hello " + person + " Selamat Pagi.";
          }
          if (hour >= 11 && hour < 14) {
              txt = "Hello " + person + " Selamat Siang.";
          }
          if (hour >= 14 && hour < 18) {
              txt = "Hello " + person + " Selamat Sore.";
          }
          if (hour >= 18) {
              txt = "Hello " + person + " Selamat Malam.";
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
            document.getElementById('result_tabung1').innerHTML = "Luas permukaan = " + z.toFixed(2) + " m"+"2".sup() ;
            document.getElementById('result_tabung2').innerHTML = "Volume = " + y.toFixed(2) + " m"+"3".sup();
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
            document.getElementById('result_kerucut1').innerHTML = "Luas permukaan = " + a.toFixed(2) + " m"+"2".sup();
            document.getElementById('result_kerucut2').innerHTML = "Volume = " + d.toFixed(2) + " m"+"3".sup() ;
        }
    }
 }
 // menghitung bola
 var bola = function () {
    // get the radius
    let radius = document.getElementById('masukan_jari3').value
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
            document.getElementById('result_bola1').innerHTML = "Luas permukaan = " + b.toFixed(2) + " m"+"2".sup() ;
            document.getElementById('result_bola2').innerHTML = "Volume = " + c.toFixed(2) + " m"+"3".sup();
        }
    }
 }


fot()
 function fot() {
    var tahun = new Date().getFullYear();
    document.getElementById('th').innerHTML = "Copyright  &#169 " + tahun + " 3D Kalkulator. Design by Muhamad Rifqi.";
 }
let myName = prompt("Lütfen isminizi giriniz");
let username = document.querySelector("#myName");

if (myName.length) {
  username.innerHTML = myName;
} else {
  alert("Lütfen adınızı giriniz");
}

function Calendar() {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let day = d.getDate();
  let months = d.getMonth();
  let year = d.getFullYear();
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  let time = hours + ":" + minutes + " " + day + "/" + months + "/" + year + " " + days[d.getDay()];

  document.getElementById("myClock").innerHTML = time;
 
}
Calendar();
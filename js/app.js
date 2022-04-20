function loadingbycep() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    data = JSON.parse(this.responseText);

    if (data.hasOwnProperty("erro")) {
      alert("CEP não encontrado!");
      return 1;
    }
    document.getElementById("bairro").value = data["bairro"];
    document.getElementById("rua").value = data["logradouro"];
    document.getElementById("cidade").value = data["localidade"];
    document.getElementById("uf").value = data["uf"];
  };
  xhttp.open(
    "GET",
    `https://viacep.com.br/ws/${document.getElementById("cep").value}/json/`,
    true
  );
  xhttp.send();
}

let count = 0;
console.log(localStorage.getItem("type"));
window.type_color = localStorage.getItem("type");
if (window.type_color === undefined) {
  console.log("aqui");
  window["type_color"] = "light";
  count = 1;
} else if (window.type_color == "dark") {
  count = 0;
} else if (window.type_color == "light") {
  count = 1;
}

console.log(window.type_color);
changeColor();

function changeValueTag(tag, value, property) {
  let elements = document.getElementsByTagName(tag);
  for (let elemt of elements) {
    elemt.style[property] = value;
  }
}
function changeValueById(id, value, property) {
  try {
    document.getElementById(id).style[property] = value;
  } catch (error) {
    console.log(id);
  }
}
function changeColor() {
  let type = window["type_color"];

  let nav = document.getElementById("nav_bar");

  if (count == 0) {
    document.getElementsByTagName("nav")[0].classList.value =
      "navbar navbar-expand-lg navbar-dark bg-dark";

    changeValueTag("body", "#515151", "backgroundColor");
    changeValueById("content", "#515151", "backgroundColor");
    changeValueById("content", "#cfcfcf", "borderColor");

    changeValueTag("btnSend", "#0288d1", "backgroundColor");
    changeValueTag("btnSend", "#0288d1", "borderColor");
    changeValueTag("go-to", "#0288d1", "backgroundColor");
    changeValueTag("go-to", "#0288d1", "borderColor");

    changeValueTag("label", "white", "color");
    changeValueTag("body", "white", "color");

    changeValueById("carousel-btn-p", "#f8f9fa", "backgroundColor");
    changeValueById("carousel-btn-p", "#f8f9fa", "borderColor");
    changeValueById("carousel-btn-n", "#f8f9fa", "backgroundColor");
    changeValueById("carousel-btn-n", "#f8f9fa", "borderColor");

    type = "dark";
    count++;
  } else {
    document.getElementsByTagName("nav")[0].classList.value =
      "navbar navbar-expand-lg navbar-light bg-light";
    // changeValueTag('button', '#198754', 'backgroundColor')
    // changeValueTag('button', '#198754', 'borderColor')
    changeValueById("btnSend", "#198754", "backgroundColor");
    changeValueById("btnSend", "#198754", "borderColor");
    changeValueById("go-to", "#198754", "backgroundColor");
    changeValueById("go-to", "#198754", "borderColor");

    changeValueTag("body", "white", "backgroundColor");

    changeValueTag("label", "black", "color");
    changeValueTag("body", "black", "color");

    changeValueById("carousel-btn-p", "white", "backgroundColor");
    changeValueById("carousel-btn-p", "white", "borderColor");
    changeValueById("carousel-btn-n", "white", "backgroundColor");
    changeValueById("carousel-btn-n", "white", "borderColor");

    changeValueById("content", "white", "backgroundColor");
    changeValueById("content", "white", "borderColor");

    console.log("chegou no fim");
    type = "light";
    count = 0;
  }
  localStorage.setItem("type", type);
  window["type_color"] = type;
}



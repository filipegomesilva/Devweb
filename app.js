'use strict';
// OPERADORES
// && e
// || ou
// ! not
// == comparação
//!= diferença
// ++ -- incremento/decremeto
let nome = 'Filipe'

var h4nome = document.getElementById('nome');

h4nome.innerHTML += " " + nome;
function carregarImagens()
{

    var url = "https://dog.ceo/api/breeds/image/random"
    fetch(url, {
        method: 'get'
    })
        .then(function (response)
        {
            response.json().then(function (data)
            {
                console.log('Resultado da Requisição: ' + data.message);

                var imgDog = document.getElementById("img_dog");
                imgDog.src = data.message;
            });
        })
        .catch(function (err)
        {
            console.error('O seguinte erro ocorreu durante a requisição: ' + err);
        });

}

let contenedor;
const total_pokemons = 500;

window.onload = inicio;

function aleatorio(min, max)
{ // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function inicio()
{
    contenedor = document.getElementById("vitrina");
    window.addEventListener("click", pintarVitrina);
}

function pintarVitrina(evento)
{
    contenedor.innerHTML = "";
    traerDatos(aleatorio(1, total_pokemons));
    traerDatos(aleatorio(1, total_pokemons));
    traerDatos(aleatorio(1, total_pokemons));
    traerDatos(aleatorio(1, total_pokemons));
    traerDatos(aleatorio(1, total_pokemons));
}

function traerDatos(id)
{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(function (data)
        {
            let nombre = data.name;
            let url = data.sprites.other.dream_world.front_default;
            if (nombre && url) {
                imprimirTarjeta(nombre, url);
            }
        });
}

function imprimirTarjeta(nombre, url)
{
    let template = `<div class="tarjeta row">
  <div style="width:100% class="rounded float-left img-thumbnail img-fluid max-width: 100% column">
  <img  src="${url}" alt="" > <br>
    <label class="text-center" for="">
      ${nombre}
    </label>
  </div>
  </div>`;
    contenedor.innerHTML += template;
}

document.getElementById('boton_1').onclick = function (){
    document.getElementById('demo_1').innerHTML = "Probando el primer capturador de click."
}

document.getElementById('boton_2').onclick = function (){
    document.getElementById('demo_1').innerHTML = "Estamos viendo JavaScript."
}
document.getElementById("boton_color").addEventListener('click', function(){
    document.body.style.backgroundColor = "#F45F54";
})

document.getElementById("boton_color_2").addEventListener('click', function(){
    document.body.style.backgroundColor = "#F6A73C";
})
let boton = document.querySelector("#btnp")

boton.addEventListener("click", respuestaClick)
function respuestaClick(){
    alert("Respuesta de evento")
}
function onClicks(){alert("Respuesta 2")}
let texto = document.querySelector("#text")
texto.addEventListener("click", cha)
function cha(){
    return(this.innerHTML = 'Hola')
  }

  function mOver(obj) {
    obj.innerHTML = "Hola"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Adios..."
  }
let boton = document.querySelector("#btnp")

boton.addEventListener("click", clickResponse)
function clickResponse(){
    alert("Event response")
}
function onClicks(){alert("2nd event response")}
let text = document.querySelector("#text")
text.addEventListener("click", cha)
function cha(){
    return(this.innerHTML = 'Hello!')
  }

  function mOver(obj) {
    obj.innerHTML = "Hello!"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Goodbye..."
  }
const nombreInput = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");


let amigos = [];




function agregarAmigo(){
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
      alert("Por favor, ingresa un nombre válido.");
      return;
    }

    amigos.push(nombre);
  

    nombreInput.value = "";
  

    actualizarLista();
}
adicionarBtn.addEventListener("click", () => {

});


function actualizarLista() {
  listaAmigos.innerHTML = ""; 
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}


function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay nombres en la lista. Agrega al menos un amigo.");
        return;
      }
    

      const indiceAleatorio = Math.floor(Math.random() * amigos.length);
      const amigoSecreto = amigos[indiceAleatorio];
      
    //   amigos.pop(indiceAleatorio);
    //   actualizarLista();

      resultado.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;

}


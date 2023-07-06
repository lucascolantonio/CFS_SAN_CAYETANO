var PedidoId=1;
var lista=document.getElementById("Lista")
//funcion para agregar pedido 
function AgregarAlPedido() {
    var NotaPedido = document.getElementById("NotaPedido");
    var NotaSinEspacio = NotaPedido.value.trim();
  
    if (NotaSinEspacio === "") {
      alert("Por favor, ingrese su pedido");
      return;
    }
  
    var NuevoPedido = document.createElement("li");
    NuevoPedido.setAttribute("id", "PedidoNumero" + PedidoId);
    NuevoPedido.classList.add("Pedidos");
    NuevoPedido.classList.add("PedidoNuevo");
    NuevoPedido.innerHTML = `<span class="NotaPedido">${NotaSinEspacio}</span>
                              <select class="EstadoDePedido">
                              <option value="nuevo">Pedido confirmado</option>
                              <option value="EnPreparacion">Pedido en Camino</option>
                              <option value="PedidoListo">Pedido Entregado</option>
                           </select>
                           <button class="EliminarPedido">Eliminar</button>`;
  
    lista.appendChild(NuevoPedido);
    NotaPedido.value = "";
    PedidoId++;
  
    // Obtener el botón "Eliminar" recién creado dentro del elemento li
    var botonEliminar = NuevoPedido.querySelector(".EliminarPedido");
  
    // Asignar un controlador de eventos para el clic del botón "Eliminar"
    botonEliminar.addEventListener("click", function() {
      lista.removeChild(NuevoPedido);
    });
  }

//var CancelarPedido=document.getElementById("CancelarPedido")
//CancelarPedido.addEventListener("click", borrarPedido);
//function borrarPedido(){console.log("sdasda")}
//funcion para cambiar el estado del pedido
function CambiarEstado(e){
    var NuevoPedido=e.target.parentNode;
    var PedidoId= NuevoPedido.getAttribute("id");
    var EstadoDePedido=e.target.value;
    NuevoPedido.classList.remove("nuevo","EnPreparacion","PedidoListo")
    NuevoPedido.classList.add(EstadoDePedido)

}

// agregar evento click en boton para crear nuevo pedido 
document.getElementById("TomarPedido").addEventListener("click", AgregarAlPedido);

// Agregar evento de cambio al selector de estado para cambiar el estado del pedido
document.getElementById("Lista").addEventListener("change", CambiarEstado);


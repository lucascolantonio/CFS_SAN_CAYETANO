const form= document.querySelector("form")
form.addEventListener("submit", CrearContacto);
function CrearContacto(e){
    e.preventDefault();
    const user={
        nombre:"",
        email:"", 
        direccion:"",
        opinion:""
    };
    const informacionContacto= new FormData(form)
    console.log("nombre:", informacionContacto.get("nombre"))
    console.log("email:", informacionContacto.get("email"))
    console.log("direccion:", informacionContacto.get("direccion"))
    console.log("observacion:", informacionContacto.get("observacion"))
}
function validardatos(){
    var nombre=document.getElementById("nombre"). value;
    var apellido=document.getElementById("apellido"). value;
    var email=document.getElementById("email"). value;
    var caja=document.getElementById("caja"). value;
    var enviar=document.getElementById("enviar"). value;

if(nombre===""){
    alert("No ha registrado el nombre");
    return false;
    }
    else if(apellido===""){
    alert("No ha registrado el apellido");
    return false;
    }
    else if(email===""){}
    alert("No ha registrado el email")
    return false;
    }if(caja===""){
    alert("No ha registrado el caja");
    return false;
    
    }else if(enviar===""){
    alert("No ha registrado el enviar");
    return false;
}
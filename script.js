function saludo(us1) {
    alert("Bienvenido " + us1 +" a Gym Extreme")    
}
function menu() {
    alert("Al registrarte en nuestro sistema accedes a muchos descuentos")
    let opcion
    let total = 0
    do {
        opcion = Number(prompt("1 Mensual $10000\n 2 Bimestre $20000\n 3 Trimestre $30000\n 4 semestre $60000\n 0 Salir"))
        if (opcion === 1) {
            total = valor()   //alert("cuota sin descuentos " + cuota )
        } else if(opcion === 2){
            total = valor()  //total = cuota - cuota * 0.03
        } else if(opcion === 3){
            total = valor() //total = cuota - cuota * 0.05
        } else if(opcion === 4){
            total = valor() //total = cuota - cuota * 0.10
        } 
 } while (opcion !== 0){
        
    }
}  
function valor(total){
    cantidadDeMeses = Number(prompt("Ingrese cantidad de meses"))
    cuota = 10000
    total = cuota * cantidadDeMeses
    alert("Nuevo valor "+ total)
    return total
}
alert("Comenzemos")
usuarioNuevo = prompt("crear usuario")
contraseniaNueva = prompt("crear contraseña")
do {
usuario = prompt("Ingresar usuario")
contrasenia = prompt("Ingresar contraseña")
if (usuario === usuarioNuevo && contrasenia === contraseniaNueva) {
    saludo(usuario)
}else{
    alert("uno o mas valores incorrectos")
}
} while (usuario != usuarioNuevo || contrasenia != contraseniaNueva){
 }
 
menu ()
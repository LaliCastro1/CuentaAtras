// timeElement.innerText = number;

// let counter = setInterval(() => {
//     number--;
//     timeElement.innerText = number;

//     if (...) {
//         clearInterval(counter);

//     }
// }, 1000);


function crearCuentaAtras(fechaObjetivo) {
   
    const contenedor = document.createElement("div");
    document.body.innerHTML = ''; 
    document.body.appendChild(contenedor);

  
    const titulo = document.createElement("h1");
    titulo.innerText = "Cuenta atrás para Navidad!";
    contenedor.appendChild(titulo);

    const timeElement = document.createElement("p");
    contenedor.appendChild(timeElement);

    
    const counter = setInterval(() => {
        const ahora = new Date().getTime();
        const diferencia = fechaObjetivo - ahora;

        
        const segundos = Math.floor((diferencia / 1000) % 60);
        const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const días = Math.floor((diferencia / (1000 * 60 * 60 * 24)) % 30);
        const meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30));

      
        if (diferencia <= 0) {
            clearInterval(counter);
            timeElement.innerText = "¡Tiempo agotado!";
            timeElement.style.color = "black"; 
        } else {
          
            if (meses > 0) {
                timeElement.style.color = "green";
            } else if (días < 14) {
                timeElement.style.color = "orange"; 
            } else if (días < 7) {
                timeElement.style.color = "red"; 
            }

            
            timeElement.innerText = `
                Meses: ${meses > 0 ? meses : 0}, 
                Días: ${días > 0 ? días : 0}, 
                Horas: ${horas > 0 ? horas : 0}, 
                Minutos: ${minutos > 0 ? minutos : 0}, 
                Segundos: ${segundos > 0 ? segundos : 0}`;
        }
    }, 1000);
}


const fechaNavidad = new Date("December 25, 2024 00:00:00").getTime();
crearCuentaAtras(fechaNavidad);


const inputFecha = document.createElement("input");
inputFecha.type = "date";
document.body.appendChild(inputFecha);

inputFecha.addEventListener("change", (e) => {
    const nuevaFecha = new Date(e.target.value).getTime();
    crearCuentaAtras(nuevaFecha);
});

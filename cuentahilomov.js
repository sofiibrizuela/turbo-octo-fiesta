// document.onmousemove = ver;

// function ver(e) {
// let x, y, x1, x2, y1, y2;
// let fact = 800/400;
// let opp = 100;

// if (e == null) e = window.event;
// x = e.clientX;
// y = e.clientY;

// x1 =- opp+(x)*fact;
//     y1 =- opp+(y)*fact;
//     x2 =+ opp+(x)*fact;
//     y2 =+ opp+(x)*fact;
    
//     let imagen = document.getElementsByClassName("imagen2");
//     imagen.style.display= "inline";
//     imagen.style.left = (x) * (1-fact);
//     imagen.style.top = (y) * (1-fact);
//     imagen.style.clipPath = "inset("+y1+"px, "+x2+"px, "+y2+"px, "+x1+"px)"

// }

// ver()

window.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor");
  const imagenZoom = contenedor.querySelector(".imagen2");

  const factorZoom = 2; // imagen2 es el doble
  const radio = 60;     // tamaño del círculo

  contenedor.addEventListener("mousemove", (e) => {
    const rect = contenedor.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const porcentajeX = offsetX / rect.width;
    const porcentajeY = offsetY / rect.height;

    const imgWidth = rect.width * factorZoom;
    const imgHeight = rect.height * factorZoom;

    const newLeft = -(porcentajeX * imgWidth - offsetX);
    const newTop = -(porcentajeY * imgHeight - offsetY);

    imagenZoom.style.display = "inline";
    imagenZoom.style.left = `${newLeft}px`;
    imagenZoom.style.top = `${newTop}px`;

    imagenZoom.style.clipPath = `circle(${radio}px at ${offsetX}px ${offsetY}px)`;
  });

  contenedor.addEventListener("mouseleave", () => {
    imagenZoom.style.display = "none";
  });
});
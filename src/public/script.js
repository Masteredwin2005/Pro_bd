const form = document.getElementById("mascotaForm");
const lista = document.getElementById("listaMascotas");

// Cargar mascotas al iniciar
window.addEventListener("DOMContentLoaded", cargarMascotas);

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const mascota = {
    nombre: document.getElementById("nombre").value,
    especie: document.getElementById("especie").value,
    edad: document.getElementById("edad").value,
    propietario: document.getElementById("propietario").value,
    telefono: document.getElementById("telefono").value
  };

  try {
    const res = await fetch("/api/datos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mascota)
    });

    const result = await res.json();
    alert(result.message);

    form.reset();
    cargarMascotas(); // actualizar lista
  } catch (error) {
    console.error("Error al enviar los datos:", error);
  }
});

async function cargarMascotas() {
  try {
    const res = await fetch("/api/datos");
    const mascotas = await res.json();

    lista.innerHTML = ""; // Limpia la lista

    mascotas.forEach((m, i) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${i + 1}.</strong> 
        <span>Nombre: ${m.nombre}</span> | 
        <span>Especie: ${m.especie}</span> | 
        <span>Edad: ${m.edad} años</span> | 
        <span>Propietario: ${m.propietario}</span> | 
        <span>Tel: ${m.telefono}</span>
      `;
      lista.appendChild(li);
    });
  } catch (error) {
    console.error("Error cargando mascotas:", error);
  }
}


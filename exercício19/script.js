const senha = document.getElementById("senha");
const alternar = document.getElementById("alternar");

alternar.addEventListener("click", () => {
  if (senha.type === "password") {
    senha.type = "text";
    alternar.textContent = "Ocultar senha";
  } else {
    senha.type = "password";
    alternar.textContent = "Mostrar senha";
  }
});
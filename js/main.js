document.addEventListener("DOMContentLoaded", function () {
    const toggleDarkModeButton = document.getElementById("toggleDarkMode");
    const toggleIcon = document.getElementById("toggleIcon");
    const body = document.body;

    // Verifica el estado del modo oscuro al cargar la página
    if (localStorage.getItem("darkMode") === "enabled") {
      enableDarkMode();
    }

    // Cambia entre modo claro y oscuro al hacer clic en el botón
    toggleDarkModeButton.addEventListener("click", function () {
      if (body.classList.contains("dark-mode")) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });

    function enableDarkMode() {
        body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
        toggleIcon.textContent = "brightness_7";
        toggleIcon.setAttribute('brightness_7', ''); // Añade el atributo personalizado
      }

    function disableDarkMode() {
      body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", null);
      toggleIcon.textContent = "brightness_3";
    }
  });
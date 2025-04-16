// Función para mostrar y ocultar secciones (navegación tipo SPA)
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.classList.add('active');
      window.scrollTo(0, 0);
    }
  }
  
  // Validación básica en formularios con feedback visual
  document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const errorDiv = document.getElementById("loginError");
    if (!email || !password) {
      errorDiv.textContent = "Por favor, complete todos los campos.";
      return;
    }
    errorDiv.textContent = "";
    alert("Inicio de sesión exitoso (simulado).");
  });
  
  document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const errorDiv = document.getElementById("registerError");
    if (!name || !email || !password) {
      errorDiv.textContent = "Por favor, complete todos los campos.";
      return;
    }
    errorDiv.textContent = "";
    alert("Registro exitoso (simulado).");
  });
  
  // Toggle para Modo Oscuro
  document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Oscuro";
  });
  
  // Mostrar siempre el Modal de Onboarding al cargar la página
  window.addEventListener("load", function() {
    document.getElementById("onboardingModal").style.display = "block";
  });
  
  function closeOnboarding() {
    document.getElementById("onboardingModal").style.display = "none";
  }
  
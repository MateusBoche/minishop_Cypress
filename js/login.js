document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const alertContainer = document.getElementById("alert-container");

  if (user === "admin" && pass === "12345") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html";
  } else {
    alertContainer.innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Usuário ou senha inválidos.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>`;
  }
});
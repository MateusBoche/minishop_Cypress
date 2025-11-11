document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const alertContainer = document.getElementById("alert-container");

  alertContainer.innerHTML = "";

  if (!name || !email || !message) {
    alertContainer.innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Preencha todos os campos antes de enviar.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>`;
    return;
  }

  if (!email.includes("@")) {
    alertContainer.innerHTML = `
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        O e-mail informado não é válido.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>`;
    return;
  }

  alertContainer.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      Mensagem enviada com sucesso!
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;

  document.getElementById("contactForm").reset();
});
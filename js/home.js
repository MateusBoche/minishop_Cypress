function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }

  const products = [
    { id: 1, name: "Camiseta Azul", price: 79.9 },
    { id: 2, name: "Tênis Esportivo", price: 249.9 },
    { id: 3, name: "Relógio Digital", price: 199.9 }
  ];

  const container = document.getElementById("product-list");
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "col-md-4 mt-3";
    card.innerHTML = `
      <div class="card shadow-sm">
        <div class="card-body text-center">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text text-muted">R$ ${p.price.toFixed(2)}</p>
          <a href="product.html?id=${p.id}" class="btn btn-primary btn-sm">Ver detalhes</a>
        </div>
      </div>`;
    container.appendChild(card);
  });
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

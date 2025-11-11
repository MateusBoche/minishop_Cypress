function loadProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const products = {
    1: { 
      name: "Camiseta Azul", 
      desc: "Camiseta 100% algodão, leve e confortável para o dia a dia.", 
      price: 79.9
    },
    2: { 
      name: "Tênis Esportivo", 
      desc: "Ideal para corrida e treino. Solado com amortecimento reforçado.", 
      price: 249.9
    },
    3: { 
      name: "Relógio Digital", 
      desc: "Resistente à água, com display luminoso e pulseira ajustável.", 
      price: 199.9
    }
  };

  const product = products[id];
  const container = document.getElementById("product-details");

  if (product) {
    container.innerHTML = `
      <div class="card shadow-lg mx-auto" style="max-width: 600px;">
        <div class="card-body">
          <h3 class="card-title">${product.name}</h3>
          <p class="card-text text-muted">${product.desc}</p>
          <p class="fs-5 fw-bold text-success">R$ ${product.price.toFixed(2)}</p>
          <button class="btn btn-success me-2" onclick="buy()">Comprar</button>
          <a href="home.html" class="btn btn-secondary">Voltar</a>
        </div>
      </div>`;
  } else {
    container.innerHTML = `<p class="text-danger text-center mt-4">Produto não encontrado.</p>`;
  }
}

function buy() {
  const modal = new bootstrap.Modal(document.getElementById("successModal"));
  modal.show();
}
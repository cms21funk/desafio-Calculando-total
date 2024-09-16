document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el contenedor de las tarjetas de productos
    const productGrid = document.querySelector(".product-grid");
    const totalPriceElement = document.querySelector("#total-price");
    let totalPurchase = 0;

    // querySelector() para seleccionar el primer product-card
    const firstProductCard = document.querySelector(".product-card");

    // innerHTML
    firstProductCard.innerHTML = `
        <img src="/assets/img/aseo/1.jpg" alt="Papel Higiénico Elite Ultra Doble Hoja 25m 4un">
        <h6>Papel Higiénico Elite Ultra Doble Hoja 25m 4un</h6>
        <p>$2.150</p>
        <div class="quantity-controls">
            <button class="btn-minus">-</button>
            <input type="text" class="product-quantity" value="0" readonly>
            <button class="btn-plus">+</button>
        </div>
        <button class="btn btn-primary d-grid gap-2" type="button">Comprar</button>`;

    // Seleccionamos todos los product-card
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const btnPlus = card.querySelector(".btn-plus");
        const btnMinus = card.querySelector(".btn-minus");
        const quantityInput = card.querySelector(".product-quantity");
        const productPrice = parseFloat(card.getAttribute("data-price"));

        btnPlus.addEventListener("click", function() {
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
            updateTotal(productPrice);
        });

        btnMinus.addEventListener("click", function() {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 0) {
                quantity--;
                quantityInput.value = quantity;
                updateTotal(-productPrice);
            }
        });
    });

    function updateTotal(price) {
        totalPurchase += price;
        totalPriceElement.innerHTML = `<strong>Total Compra: ${formatPrice(totalPurchase)}</strong>`; // Usamos innerHTML aquí
    }

    function formatPrice(price) {
        return new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
            minimumFractionDigits: 0 // Elimina los decimales
        }).format(price);
    }
});

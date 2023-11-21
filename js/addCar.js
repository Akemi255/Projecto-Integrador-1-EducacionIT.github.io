function showToast(message, type) {
    Toastify({
      close: true, 
      text: message,
      duration: 2000,
      position: "center", 
      backgroundColor: type === "error" ? "#ff5c5c" : "#1a1818",
      style: {
        fontSize: "20px", // Ajusta el tamaño del texto según sea necesario
        height: "70%", // Ajusta la altura del contenedor según sea necesario
      },
    }).showToast();
  }


document.addEventListener('DOMContentLoaded', function () {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    function addToCart(product) {
      cartItems.push(product);
      updateCart();
      saveCartToLocalStorage();
    }
  
    function removeFromCart(productId) {
      const index = cartItems.findIndex(item => item.id === productId);
      if (index !== -1) {
        cartItems.splice(index, 1);
        updateCart();
        saveCartToLocalStorage();
      }
    }
  
    function updateCart() {
      const cartIcon = document.querySelector('.navbar__item--cart');
      cartIcon.innerHTML = `<span class="material-symbols-outlined">shopping_cart</span> (${cartItems.length})`;
    }
  
    function saveCartToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  
    const addToCartButtons = document.querySelectorAll('.button--add');
    addToCartButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const productCard = button.closest('.card--product');
        const productId = productCard.getAttribute('data-id');
        const productName = productCard.querySelector('.card__title').textContent;
        const productPrice = productCard.querySelector('.card__price').textContent;
        const product = { id: productId, name: productName, price: productPrice };
        addToCart(product);
      });
    });
  
    const removeFromCartButtons = document.querySelectorAll('.button--remove');
    removeFromCartButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const productCard = button.closest('.card--product');
        const productId = productCard.getAttribute('data-id');
        removeFromCart(productId);
      });
    });
  
    const cartIcon = document.querySelector('.navbar__item--cart');
    cartIcon.addEventListener('click', function () {
      if (cartItems.length > 0) {
        let cartMessage = 'Productos en el carrito:\n';
        cartItems.forEach(function (item, index) {
          cartMessage += `${index + 1}. ${item.name} - ${item.price}\n`;
        });
        showToast(cartMessage);
      } else {
        showToast('El carrito está vacío.');
      }
    });
  
    // Mostrar el carrito al cargar la página
    updateCart();
  });
  
// Función para mostrar alerta tipo toast
function showToast(message, type) {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "bottom", // Opciones disponibles: 'top', 'bottom', 'middle'
    position: "left", // Opciones disponibles: 'left', 'right', 'center'
    backgroundColor: type === "error" ? "#ff5c5c" : "#4CAF50", // Rojo para error, verde para éxito
  }).showToast();
}

// Función para validar el formato de correo electrónico
function isValidEmail(email) {
  // Expresión regular para una dirección de correo electrónico válida
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para validar el formulario de producto
function saveProduct() {
  // Obtener los valores de los campos
  var productName = document.getElementById('productName').value;
  var productPrice = document.getElementById('productPrice').value;
  var productStock = document.getElementById('productStock').value;
  var productBrand = document.getElementById('productBrand').value;
  var productCategory = document.getElementById('productCategory').value;
  var shortDescription = document.getElementById('shortDescription').value;
  var longDescription = document.getElementById('longDescription').value;
  var importedProduct = document.getElementById('importedProduct').checked;
  var nationalProduct = document.getElementById('nationalProduct').checked;
  var freeShipping = document.getElementById('freeShipping').checked;
  var productPhoto = document.getElementById('productPhoto').value;

  // Expresiones regulares para validaciones
  var priceRegex = /^\d+(\.\d{1,2})?$/; // Precio con hasta 2 decimales
  var stockRegex = /^\d+$/; // Solo números enteros para el stock

  // Validar nombre
  if (productName.trim() === '') {
    showToast('Por favor, ingresa el nombre del producto.', 'error');
    return;
  }

  // Validar precio
  if (!priceRegex.test(productPrice)) {
    showToast('Por favor, ingresa un precio válido.', 'error');
    return;
  }

  // Validar stock
  if (!stockRegex.test(productStock)) {
    showToast('Por favor, ingresa un valor válido para el stock.', 'error');
    return;
  }

  // Validar marca
  if (productBrand.trim() === '') {
    showToast('Por favor, ingresa la marca del producto.', 'error');
    return;
  }

  // Validar categoría
  if (productCategory.trim() === '') {
    showToast('Por favor, ingresa la categoría del producto.', 'error');
    return;
  }

  // Validar descripciones
  if (shortDescription.trim() === '' || longDescription.trim() === '') {
    showToast('Por favor, ingresa descripciones corta y larga del producto.', 'error');
    return;
  }

  // Validar al menos una opción entre Producto Importado y Producto Nacional
  if (!importedProduct && !nationalProduct) {
    showToast('Por favor, selecciona si el producto es importado o nacional.', 'error');
    return;
  }

  // Si todas las validaciones pasan, mostrar un mensaje de éxito
  showToast('Producto guardado con éxito.', 'success');
  document.getElementById("productForm").reset();
}

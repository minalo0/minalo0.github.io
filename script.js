// Загружаем товары из products.js
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
        // Очищаем сетку
        productGrid.innerHTML = '';
        
        // Для каждого товара создаем карточку
        productsData.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <a href="product.html?id=${product.id}" style="text-decoration: none; color: inherit; display: block;">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='images/no-image.jpg'; this.onerror=null;">
                    <h3>${product.name}</h3>
                    <p>${product.shortDesc}</p>
                    <p class="price">${product.price}</p>
                    <div style="margin-top: 10px; background: #222; color: white; padding: 8px; border-radius: 5px; font-size: 14px; transition: background 0.3s;">
                        Подробнее →
                    </div>
                </a>
            `;
            productGrid.appendChild(productItem);
        });
    }
});
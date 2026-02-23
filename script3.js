      document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    const activeItem = document.querySelector('.item.active');
    if (activeItem) {
        activeItem.classList.add('highlight');
    }

    let totalPrice = 0;
    let maxPrice = 0;
    let maxPriceItemName = '';

    items.forEach(item => {
        const price = Number(item.dataset.price);
        totalPrice += price;

        if (price > maxPrice) {
            maxPrice = price;
            maxPriceItemName = item.textContent;
        }
    });

    console.log(`Суммарная стоимость всех товаров: ${totalPrice}`);
    console.log(`Товар с максимальной ценой: ${maxPriceItemName}`);
});

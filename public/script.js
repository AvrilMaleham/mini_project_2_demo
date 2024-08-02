document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/orders.html') {
        fetch('/orders?status=new')
            .then(response => response.json())
            .then(data => {
                const ordersList = document.getElementById('new-orders-list');
                data.forEach(order => {
                    const listItem = document.createElement('li');
                    listItem.className = 'order-item';
                    listItem.innerHTML = `
                        <h3>Order ID: ${order.id}</h3>
                        <p>Customer: ${order.customerName}</p>
                        <p>Pizza: ${order.pizzaType}</p>
                        <p>Extra Toppings: ${order.extraToppings.join(', ')}</p>
                        <p>Quantity: ${order.quantity}</p>
                        <p>Drink: ${order.drink}</p>
                        <p>Status: ${order.status}</p>
                    `;
                    ordersList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching new orders:', error));
    }
});

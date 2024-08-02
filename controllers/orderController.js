const pizzaOrders = require('../models/orderModel');

const getOrders = (req, res) => {
    let filteredOrders = pizzaOrders;

    if (req.query.status) {
        filteredOrders = filteredOrders.filter(order => order.status.toLowerCase() === req.query.status.toLowerCase());
    }

    res.json(filteredOrders);
};

const getOrderById = (req, res) => {
    const order = pizzaOrders.find(o => o.id === parseInt(req.params.id));
    if (!order) {
        return res.status(404).send('Order not found');
    }
    res.json(order);
};


module.exports = {
    getOrders,
    getOrderById
};

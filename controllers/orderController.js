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

const createOrder = (req, res) => {
    const newOrder = {
        id: pizzaOrders.length + 1,
        customerName: req.body.customerName,
        pizzaType: req.body.pizzaType,
        extraToppings: req.body.extraToppings,
        quantity: req.body.quantity,
        drink: req.body.drink,
        status: req.body.status,
    };
    pizzaOrders.push(newOrder);
    res.status(201).json(newOrder);
};

const updateOrder = (req, res) => {
    const order = pizzaOrders.find(o => o.id === parseInt(req.params.id));
    if (!order) {
        return res.status(404).send('Order not found');
    }
    order.customerName = req.body.customerName;
    order.pizzaType = req.body.pizzaType;
    order.extraToppings = req.body.extraToppings;
    order.quantity = req.body.quantity;
    order.drink = req.body.drink;
    order.status = req.body.status;
    res.json(order);
};

module.exports = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
};

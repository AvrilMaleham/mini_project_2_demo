const express = require('express');
const app = express();
const port = 3000;

const orderRoutes = require('./routes/orderRoutes');

app.use(express.json());
app.use(express.static('public')); 
app.use('/orders', orderRoutes);

app.listen(port, () => {
    console.log(`Pizza order app listening at http://localhost:${port}`);
});

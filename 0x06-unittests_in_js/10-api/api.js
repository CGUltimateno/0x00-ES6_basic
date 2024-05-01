const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
    }
);

app.get('/cart/:id', (req, res) => {
    const id = req.params.id;

    res.send(`Payment methods for cart ${id}`);
  
});

app.get('/available_payments', (req, res) => {
    const payments = {
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    };

    res.send(payments);
});

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
}
);

module.exports = app;
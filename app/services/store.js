import Ember from 'ember';
import Product from 'woodland/models/product';
import Order from 'woodland/models/order';
import LineItem from 'woodland/models/line-item';

const products = [
    Product.create({title: 'Tent', price: 10, description: 'up to 2 people'}),
    Product.create({title: 'Flash Light', price: 2, description: 'really bright'}),
    Product.create({title: 'Sleeping Bag', price: 5, description: 'warm in the nights'}),
];

const orders = [
    Order.create({id: 1234, name: 'John',
                 items: [
                    LineItem.create({product: products[0], quantity: 1}),
                    LineItem.create({product: products[1], quantity: 2}),
                 ]
    }),
    Order.create({id: 1233, name: 'Ana',
                 items: [
                    LineItem.create({product: products[3], quantity: 1}),
                 ]
    }),
];

export default Ember.Service.extend({
    getOrders() {
        return orders;
    },

    getOrdersById(id) {
        return orders.findById(id);
    },

    getProducts() {
        return products;
    },

    getProductsById(id) {
        return products.findById(id);
    }
});

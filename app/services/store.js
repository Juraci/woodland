import Ember from 'ember';

export default Ember.Service.extend({
    getOrdersById(id) {
        const orders = this.getOrders();
        return orders.findById(id);
    },

    getOrders() {
        return [
            { id: '1', name: 'Nate' },
            { id: '2', name: 'Jhon' }
        ];
    }
});

import Ember from 'ember';

export default Ember.Object.extend({
    price: Ember.computed('unitPrice', 'quantity', function() {
        return parseInt(this.get('quantity'), 10) * this.get('unitPrice');
    }),
    title: Ember.computed.alias('product.title'),
    unitPrice: Ember.computed.alias('product.price')
});

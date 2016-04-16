import Ember from 'ember';

export default Ember.Object.extend({
    title: Ember.computed.alias('product.title'),
    unitPrice: Ember.computed.alias('product.price')
});

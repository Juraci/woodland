import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        toggleDetails() {
            this.toggleProperty('showDetails');
        }
    },

    isImportant: Ember.computed.gte('percentage', 50),

    percentage: Ember.computed('itemPrice', 'orderTotal', function() {
        return this.get('itemPrice') / this.get('orderTotal') * 100;
    })
});

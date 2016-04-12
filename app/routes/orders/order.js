import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return [
            { id: '1', name: 'Nate' },
            { id: '2', name: 'Jhon' }
        ].findBy('id', params.order_id);
    }
});

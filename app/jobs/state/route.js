import Ember from 'ember';

export default Ember.Route.extend({
  jobs: Ember.inject.service(),
    queryParams: {
        page: { refreshModel: true },
        order: { refreshModel: true }
    },

    model(params) {
        this.controllerFor('application').set('type', null);
        this.controllerFor('application').set('state', params.stateId);
        return this.get('jobs').find({
            state: params.stateId,
            page: params.page,
            order: params.order
        });
    },

    activate() {
        this._super();
        window.scrollTo(0,0);
    }

});

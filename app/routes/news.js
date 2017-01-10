import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    limit: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('news', params);
  },

  actions: {

    showAll() {
      const total = this.controllerFor('news').get('total');
      this.transitionTo({ queryParams: { limit: total }}); // total?
    },

    showLess() {
      this.transitionTo({ queryParams: { limit: 3 }}); // total?
    }

  }
});

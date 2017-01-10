import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      latest_news: this.store.query('news', { limit: 2 })
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'latest_news', model.latest_news);
  }
});

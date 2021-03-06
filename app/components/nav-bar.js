import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({

  session: service('session'),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});

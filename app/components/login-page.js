import Ember from 'ember';

export default Ember.Component.extend({

  authManager: Ember.inject.service('session'),
  flashMessages: Ember.inject.service(),

  actions: {
    authenticate() {
      const { login, password } = this.getProperties('login', 'password');
      this.get('authManager').authenticate('authenticator:oauth2', login, password).then(() => {

      }, (err) => {
        this.toast.error('Invalid Username or Password');
      });
    }
  }
});

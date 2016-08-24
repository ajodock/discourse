const Router = Ember.Router.extend({
});

Router.map(function () {
  this.route('steps', { path: '/steps/:step_id' });
});

export default Router;

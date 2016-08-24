export default Ember.Route.extend({
  beforeModel() {
    this.replaceWith('steps', 'welcome');
  }
});

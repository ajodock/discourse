export default Ember.Route.extend({
  model(id) {
    return {
      id,
      title: "You're a wizard harry!"
    };
  }
});

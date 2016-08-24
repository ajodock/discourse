export default Ember.DefaultResolver.extend({

  resolveRoute(parsedName) {
    const withoutType = parsedName.fullNameWithoutType;
    const entries = requirejs.entries;

    const named = `wizard/routes/${withoutType}`;
    if (entries[named]) {
      const module = require(named, null, null, true /* force sync */);
      return module.default;
    }

    return this._super(parsedName);
  },

  resolveTemplate(parsedName) {
    const templates = Ember.TEMPLATES;
    const withoutType = parsedName.fullNameWithoutType;
    return templates[`wizard/templates/${withoutType}`] || this._super(parsedName);
  }
});

import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../mixins/infinity-route";

export default Ember.Route.extend(InfinityRoute, AuthenticatedRouteMixin, {
	_listName: 'model.mensajes.content',

	model: function() {
		return Ember.RSVP.hash({
          	mensajes: this.infinityModel("mensaje", { perPage: 25, startingPage: 1, ordering: '-fecha'})
     	});		
	},
	
	actions: {
		search: function (filters) {
			var query = {perPage: 25, startingPage: 1, ordering: '-fecha'};
			filters.forEach(function (filter) {
				var value = filter.get('value');
				//console.log(Ember.typeOf(value));	
				query[filter.get('type.field')] = value;
			})
			this.set('controller.model.reachedInfinity', false);
			this.get('controller').set('model.mensajes', this.infinityModel("mensaje", query));
		}
	},

	setupController: function (controller, model) {
		this._super(controller, model);

		var availableFilters = [];

		availableFilters.pushObjects([
			Ember.Object.create({
				name: 'Texto Libre',
				template: 'input-text',
				field: 'search'
			}),
		]);

		controller.set('availableFilters', availableFilters);
	}
});


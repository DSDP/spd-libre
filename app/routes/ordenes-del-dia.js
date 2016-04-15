import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../mixins/infinity-route";

export default Ember.Route.extend(InfinityRoute, AuthenticatedRouteMixin, {
	_listName: 'model.ods.content',

	model: function() {
		return Ember.RSVP.hash({
          	ods: this.infinityModel("od", { perPage: 25, startingPage: 1, publicadas: "True", ordering: '-periodo, -numero'})
     	});			
	},	

	actions: {
		search: function (filters) {
			var query = {perPage: 25, startingPage: 1, ordering: '-periodo, -numero', publicadas: "True"};
			filters.forEach(function (filter) {
				var value = filter.get('value');
				query[filter.get('type.field')] = value;
			})
			this.set('controller.model.reachedInfinity', false);
			this.get('controller').set('model.ods', this.infinityModel("od", query));
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

			Ember.Object.create({
				name: 'Periodo',
				template: 'input-number',
				field: 'periodo'
			}),

			Ember.Object.create({
				name: 'Origen',
				values: ['Diputados', 'Senadores'],
				template: 'simple-select',
				field: 'tipo_camara'
			}),

		]);

		controller.set('availableFilters', availableFilters);
	}
});


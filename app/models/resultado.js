import DS from 'ember-data';

export default DS.Model.extend({
	resultado: DS.attr('string'),
	tipo: DS.attr('string'),
	titulo: DS.attr('string'),
	sumario: DS.attr('string'),
	texto: DS.attr('string'),
});
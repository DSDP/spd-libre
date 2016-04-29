import DS from 'ember-data';

export default DS.Model.extend({
	codigo_exp: DS.attr('string'),
	sumario: DS.attr('string'),
	tipo_camara: DS.attr('string'),
	tipo_proy: DS.attr('string'),
	tipo: DS.attr('string'),
	fecha_caducidad: DS.attr('date'),
	fecha: DS.attr('date'),
	periodo: DS.attr('string'),
	titulo: DS.attr('string'),
	despachos: DS.hasMany('despacho', {async: true}),
	resultados: DS.hasMany('resultado', {async: true}),
	firmantes: DS.attr(''),

	giros: DS.attr('')
});
import DS from 'ember-data';

export default DS.Model.extend({
	proyectos: DS.hasMany('proyecto', {async: true}),
	mensajes: DS.hasMany('mensaje', {async: true}),
	periodo: DS.attr('string'),
	fecha_impresion: DS.attr('date'),
	tipo: DS.attr('string'),
	visibilidad: DS.attr('number'),
	despacho: DS.belongsTo('despacho', {async: true}),
	numero: DS.attr('number'),
	anio: DS.attr('number'),
	fecha_art113: DS.attr('date'),

	isVigente: Ember.computed('fecha_art113', function () {
		if (this.get('fecha_art113')) {
			return moment() < moment(this.get('fecha_art113'));
		} else {
			return false;
		}
	}),

	link_pdf: Ember.computed('periodo', 'numero', function () {
		var str = Ember.String.loc("http://www4.hcdn.gob.ar/dependencias/dcomisiones/periodo-%@/%@-%@.pdf", [(this.get('periodo') - (this.get('periodo') % 2)) , (this.get('periodo') - (this.get('periodo') % 2)), this.get('numero')]);
		return str;
	}),

	proyecto_cabecera: Ember.computed('proyectos.@each', function () {
		if (this.get('proyectos')) {
			return this.get('proyectos').objectAt(0);
		} else {
			return null;
		}
	}),

	mensaje_cabecera: Ember.computed('mensajes.@each', function () {
		if (this.get('mensajes')) {
			return this.get('mensajes').objectAt(0);
		} else {
			return null;
		}
	}),	
});
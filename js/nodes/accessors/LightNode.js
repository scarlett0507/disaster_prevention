(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.LightNode', ['three'], factory);
    }
    else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
        module.exports = factory(require('three'));
    }
    else {
        factory(root.THREE);
    }
}(this, function(THREE) {

/**
 * @author sunag / http://www.sunag.com.br/
 */

THREE.LightNode = function() {

	THREE.TempNode.call( this, 'v3', { shared: false } );

};

THREE.LightNode.prototype = Object.create( THREE.TempNode.prototype );
THREE.LightNode.prototype.constructor = THREE.LightNode;

THREE.LightNode.prototype.generate = function( builder, output ) {

	if ( builder.isCache( 'light' ) ) {

		return builder.format( 'reflectedLight.directDiffuse', this.getType( builder ), output )

	} else {

		console.warn( "THREE.LightNode is only compatible in \"light\" channel." );

		return builder.format( 'vec3( 0.0 )', this.getType( builder ), output );

	}

};
}));
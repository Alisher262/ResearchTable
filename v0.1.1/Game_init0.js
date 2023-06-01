// "		\t\t"

; (function _thisF0() {




Object.defineProperty(Game, "Descr", { value: function Descr(v0) {
	
	
	this.value = v0;
	
	
} , } );

Object.defineProperty(Game.Descr.prototype, "configurable", { value: false, } );
Object.defineProperty(Game.Descr.prototype, "enumerable", { value: false, } );
Object.defineProperty(Game.Descr.prototype, "writable", { value: false, } );


Object.defineProperty(Game, "DescrE", { value: function DescrE(v0) {
	
	
	this.value = v0;
	
	
} , } );

Object.defineProperty(Game.DescrE.prototype, "configurable", { value: false, } );
Object.defineProperty(Game.DescrE.prototype, "enumerable", { value: true, } );
Object.defineProperty(Game.DescrE.prototype, "writable", { value: false, } );


Object.defineProperty(Game, "DescrW", { value: function DescrW(v0) {
	
	
	this.value = v0;
	
	
} , } );

Object.defineProperty(Game.DescrW.prototype, "configurable", { value: false, } );
Object.defineProperty(Game.DescrW.prototype, "enumerable", { value: false, } );
Object.defineProperty(Game.DescrW.prototype, "writable", { value: true, } );


Object.defineProperty(Game, "DescrEW", { value: function DescrEW(v0) {
	
	
	this.value = v0;
	
	
} , } );

Object.defineProperty(Game.DescrEW.prototype, "configurable", { value: false, } );
Object.defineProperty(Game.DescrEW.prototype, "enumerable", { value: true, } );
Object.defineProperty(Game.DescrEW.prototype, "writable", { value: true, } );




Game.iWritten0 = 0;

Object.defineProperty(Game, "F_WRITE0", new Game.Descr(function _thisF1(s0) {
	
	
	document.body.insertAdjacentHTML("beforeend",
		"<pre>\nDebug output # " + this.iWritten0 + ":\n"
		+ s0
		+ "\n</pre>\n"
	);
	
	this.iWritten0 = Math.floor(this.iWritten0) + 1;
	
	return this;
	
	
} ));


Object.defineProperty(Game, "F_WRITE1", new Game.Descr(function _thisF1() {
	
	
	var sResu0 = Array.prototype.reduce.call(arguments, function _thisF2(v0, v1, i1, a1) {
		
		return v0 + "\n\n" + v1;
		
	} );
	
	console.log(arguments);
	
	return this.F_WRITE0(sResu0);
	
	
} ));


Object.defineProperty(Game, "F_WRITE2", new Game.Descr(function _thisF1() {
	
	
	var
		sResu0 = JSON.stringify(arguments, null, "\t");
	
	console.log(arguments);
	
	return this.F_WRITE0(sResu0);
	
	
} ));




Object.defineProperty(Game, "STRS", new Game.Descr( {} ));

Object.defineProperty(Game.STRS, "LANGS", new Game.DescrE( {} ));


/*

var
	_elScrs0 = document.getElementById("scripts0");

if(!_elScrs0) {
	
	_elScrs0 = document.createElement("div");
	
	_elScrs0.id = "scripts0";
	
	document.body.insertAdjacentElement("afterbegin", _elScrs0);
	
}

Object.defineProperty(Game, "EL_SCRIPTS0", new Game.Descr(_elScrs0));


Object.defineProperty(Game, "F_LOAD0", new Game.Descr(function _thisF1() {
	
	
	var
		_el0 = this.EL_SCRIPTS0,
		elResu0;
	
	
	var _b0 = Array.prototype.every.call(arguments, function _thisF2(v0, i0, a0) {
		
		
		elResu0 = document.createElement("script");
		
		elResu0.setAttribute("src", v0);
		elResu0.setAttribute("type", "text/javascript");
		
		_el0.appendChild(elResu0);
		
		return true;
		
		
	} );
	
	
	return this;
	
	
	
	
} ));

*/




} )();




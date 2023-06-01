/*
Thaumcraft 4.2: Research

TC4.2_Research

Автор оригинальной модификации «Thaumcraft» для видеоигры «Minecraft»:
Azanor
Автор этой пародии:
Алиса в стране Таумкрафта (Alisher262)
*/

// "		\t\t"

; (function _thisF0() {




Object.defineProperty(window, "Game", { value: function TC4_2R() {
	
	try {
	
	
	
	
	if(Game.B_INITIATED0)
		throw new ReferenceError("F_INIT0 or TC4_2R has already been run at least once.");
	
	Object.defineProperty(Game, "B_INITIATED0", new Game.Descr(true));
	
	
	var
		_this = this,
		_o = {} ;
	
	
	// Object.defineProperty(this, "nums", new Game.DescrE( {} ));
	Object.defineProperty(this, "strs", new Game.DescrE( {} ));
	Object.defineProperty(this, "els", new Game.DescrE( {} ));
	
	
	
	
	Object.defineProperty(this, "setStrings", new Game.DescrE(function _thisF1(sLang0) {
		
		
		
		
		var
			_S_STRS = Game.STRS.LANGS[sLang0],
			_STRS0 = {} ,
			_i0,
			_i1 = -1;
		
		
		while(true) {
			
			_i0 = _S_STRS.indexOf("=", _i1);
			if(!~_i0)
				break;
			_s0 = _S_STRS.slice(_i1 + 1, _i0);
			
			_i1 = _S_STRS.indexOf("\n", _i0);
			
			Object.defineProperty(this.strs, _s0, new Game.DescrEW(
				_S_STRS.slice(_i0 + 1, _i1)
			));
			
		}
		
		
		return this;
		
		
		
		
	} ));
	
	
	
	
	function Aspect(sNamespace, sName, sNameComp0, sNameComp1, sColor) {
		
		
		Object.defineProperty(this, "namespace", new Game.DescrE(sNamespace));
		Object.defineProperty(this, "name", new Game.DescrE(sName));
		Object.defineProperty(this, "color", new Game.DescrE(
			parseInt(sColor, 0x10) | 0
		));
		
		
		if(sNameComp0 && sNameComp1) {
			
			
			var _i0 = _o.asps.findIndex(function _thisF1(v0, i0, a0) {
				
				return v0.name === sNameComp0;
				
			} );
			var _i1 = _o.asps.findIndex(function _thisF1(v0, i0, a0) {
				
				return v0.name === sNameComp1;
				
			} );
			
			var
				_sErr0 = " aspect has not yet been defined.";
			if(!~_i0)
				throw new ReferenceError(sNameComp0 + _sErr0);
			if(!~_i1)
				throw new ReferenceError(sNameComp1 + _sErr0);
			
			var
				_b0 = _i0 < _i1;
			
			Object.defineProperty(this, "comp0", new Game.DescrE(
				_b0 ? sNameComp0 : sNameComp1
			));
			Object.defineProperty(this, "comp1", new Game.DescrE(
				_b0 ? sNameComp1 : sNameComp0
			));
			
			
		} else {
			
			if(sNameComp0 || sNameComp1)
				throw new ReferenceError("Compounds must be either 2 already defined aspects, or 2 none (for the primal aspect).");
			else {
				
				Object.defineProperty(this, "comp0", new Game.DescrE(null));
				Object.defineProperty(this, "comp1", new Game.DescrE(null));
				
			}
			
		}
		
		
	}
	
	
	
	
	Object.defineProperty(this, "getAspects", new Game.DescrE(function _thisF1() {
		
		
		return _o.asps;
		
		
	} ));
	
	
	Object.defineProperty(this, "clearAspects", new Game.DescrE(function _thisF1() {
		
		
		_o.asps = [];
		
		return this;
		
		
	} ));
	
	
	Object.defineProperty(this, "setAspects", new Game.DescrE(function _thisF1(sAsps0) {
		
		
		var
			_aAsps0 = sAsps0.split(/\s*,\s*/),
			_i0 = 0,
			_i1 = 0,
			_iLen0 = _aAsps0.length;
		
		if(_iLen0 % 5)
			console.warn("There are " + (_iLen0 % 5) + " extra elements in S_ASPECTS.js");
		
		while(_i1 < _iLen0) {
			
			Object.defineProperty(_o.asps, _i0, new Game.DescrE(
				new Aspect(
					_aAsps0[_i1],
					_aAsps0[++_i1],
					_aAsps0[++_i1],
					_aAsps0[++_i1],
					_aAsps0[++_i1]
				)
			));
			++_i0;
			++_i1;
			
		}
		
		
		return this;
		
		
		
		
	} ));
	
	
	Object.defineProperty(this, "getAspect", new Game.DescrE(function _thisF1(sName) {
		
		
		return _o.asps.find(function _thisF2(v0, i0, a0) {
			
			return v0.name === sName;
			
		} );
		
		
	} ));
	
	
	
	
	Object.defineProperty(this, "getImages", new Game.DescrE(function _thisF1() {
		
		
		return _o.imgs;
		
		
	} ));
	
	
	Object.defineProperty(this, "clearImages", new Game.DescrE(function _thisF1() {
		
		
		_o.imgs = {} ;
		
		Object.defineProperty(_o.imgs, "asps", new Game.DescrE( {} ));
		
		return this;
		
		
	} ));
	
	
	Object.defineProperty(this, "setImages", new Game.DescrE(function _thisF1() {
		
		
		
		
		var _fOnLoad0 = function _thisF2(ev0) {
			
			Object.defineProperty(this, "bLoadingComplete", new Game.DescrE(true));
			
		} ;
		
		var _fOnError0 = function _thisF2(ev0) {
			
			// Game.F_WRITE1("Failed to load image from:\n" + this.src);
			
		} ;
		
		
		
		
		// other images
		
		
		var
			_s0,
			_img0;
		
		var _b0 = _o.asps.every(function _thisF2(asp0, i0, a0) {
			
			
			_s0 = asp0.name;
			
			Object.defineProperty(_o.imgs.asps, _s0, new Game.DescrE(
				new Image()
			));
			
			_img0 = _o.imgs.asps[_s0];
			
			_img0.addEventListener("load", _fOnLoad0);
			_img0.addEventListener("error", _fOnError0);
			_img0.src = "res/images/asps/" + _s0 + ".png";
			_img0.alt = _s0;
			
			return true;
			
			
		} );
		
		
		// other images
		
		
		
		
		return this;
		
		
		
		
	} ));
	
	
	
	
	// 0x00000000 only first?
	Object.defineProperty(this.els, "canv0", new Game.DescrE(
		document.getElementsByClassName("canv0")[0]
	));
	
	
	Object.defineProperty(this, "defaultCanvWidth", new Game.DescrE(
		1024
	));
	
	Object.defineProperty(this, "defaultCanvHeight", new Game.DescrE(
		576
	));
	
	this.els.canv0.width = this.defaultCanvWidth;
	this.els.canv0.height = this.defaultCanvHeight;
	
	
	_o.nSides0 = 6;
	_o.nPointWidth0 = 48 / this.els.canv0.width;
	_o.nPointHeight0 = 48 / this.els.canv0.height;
	_o.nPointMargin0 = 48 / this.els.canv0.height;
	_o.nDegLattRotated0 = 150;
	
	_o.c0 = this.els.canv0.getContext("2d");
	
	
	Object.defineProperty(this, "fCanvOnclick0", new Game.DescrE(function _thisF1(
		ev0
	) {
		
		try {
		
		
		
		
		var
			_DOMR0 = _this.els.canv0.getBoundingClientRect();
			_xOfCanv0 = ev0.clientX - _DOMR0.x - window.pageXOffset,
			_yOfCanv0 = ev0.clientY - _DOMR0.y - window.pageYOffset;
		
		// 0x00000000 TEST cause firstly need to find the latt on canv;
		var
			_i0 = _this.latt.getPointIndexByCoords(_xOfCanv0, _yOfCanv0);
		
		Game.F_WRITE2(
			_i0,
			_this.latt.POINTS[_i0],
			_this.latt.getAdjacentPointsIndices(_i0)
		);
		
		
		return;
		
		
		
		
		} catch(ex1) {
			Game.F_WRITE1(ex1.stack);
		}
		
	} ));
	
	
	this.els.canv0.addEventListener("click", this.fCanvOnclick0);
	
	
	//
	
	
	
	
	Object.defineProperty(this, "getCanvContext0", new Game.DescrE(function _thisF1() {
		
		
		return _o.c0;
		
		
	} ));
	
	
	
	
	// 0x00000000 addEvent change on INPUT type number
	Object.defineProperty(this, "changeCanvWidth0", new Game.DescrE(function _thisF1(
		ev0
	) {
		
		
		var
			iWidth = Math.trunc(Number(this.value));
		
		
		if(Number.isFinite(iWidth))
			_this.els.canv0.width = iWidth;
		else
			console.warn("iWidth should be a number.");
		
		
		return;
		
		
	} ));
	
	Object.defineProperty(this, "changeCanvHeight0", new Game.DescrE(function _thisF1(
		ev0
	) {
		
		
		var
			iHeight = Math.trunc(Number(this.value));
		
		
		if(Number.isFinite(iHeight))
			_this.els.canv0.height = iHeight;
		else
			console.warn("iHeight should be a number.");
		
		
		return;
		
		
	} ));
	
	
	
	
	Object.defineProperty(this, "paintImage0", new Game.DescrE(function _thisF1(image0, iColor0) {
		
		
		if(
			!Number.isFinite(Number(iColor0))
			|| iColor0 < 0
			|| iColor0 >= 0x1000000
		)
			throw new TypeError("iColor0 must be a number between zero and 0xFFFFFF.");
		
		
		var
			imgDataResu0;
		
		
		//
		
		
		return imgDataResu0;
		
		
		
		
	} ));
	
	
	
	
	_o.iLoadRow0
		= _o.I_LOAD_ROW = 12;
	
	Object.defineProperty(this, "drawPoint0", new Game.DescrE(function _thisF1(point) {
		
		
		
		
		if(Number.isFinite(Number(point)))
			point = this.latt.POINTS[point];
		
		
		if("loadingPoint" === point.data.name) {
			
			
			_o.c0.beginPath();
			// 0.5625 = 18 / 32;
			_o.c0.arc(
				point.x + _o.nPointWidth0 * this.els.canv0.width / 2,
				point.y + _o.nPointHeight0 * this.els.canv0.height / 2,
				0.5625 * _o.nPointHeight0 * this.els.canv0.height,
				0, 2 * Math.PI
			);
			_o.c0.fillStyle = "#FFFFFF3F";
			_o.c0.fill();
			_o.c0.strokeStyle = "#3333337F";
			_o.c0.stroke();
			
			_o.c0.beginPath();
			// 0.375 = 12 / 32;
			_o.c0.arc(
				point.x + _o.nPointWidth0 * this.els.canv0.width / 2,
				point.y + _o.nPointHeight0 * this.els.canv0.height / 2,
				0.375 * _o.nPointHeight0 * this.els.canv0.height,
				0, 2 * Math.PI
			);
			
			_o.c0.fillStyle = "#FFFFFF3F";
			_o.c0.fill();
			
			// 0x00000000 auram, but should be fabrico;
			if(_o.imgs.asps.auram.complete) {
				_o.c0.drawImage(_o.imgs.asps.auram,
					point.x,
					point.y,
					_o.nPointWidth0 * this.els.canv0.width,
					_o.nPointHeight0 * this.els.canv0.height
				);
			}
			
			
			// 0x00000000 TEST
			_o.c0.font = _o.I_LOAD_ROW + "px monospace";
			_o.c0.fillStyle = "#FFFFFF";
			
			_o.c0.fillText(point.x, this.els.canv0.width - 288, _o.iLoadRow0);
			_o.c0.fillText(point.y, this.els.canv0.width - 144, _o.iLoadRow0);
			
			_o.iLoadRow0 += _o.I_LOAD_ROW;
			// 7 = this.latt.getPolygN(2 - 1);
			if(_o.iLoadRow0 >= 7 * _o.I_LOAD_ROW)
				_o.iLoadRow0 = 0;
			
			
			return this;
			
			
		}
		
		
		// 0x00000000 TEST Auram
		// var _img0 = _o.imgs.asps1;
		// var _img0 = new ImageData(
			// new Uint8ClampedArray(new Array(4096).fill(0xFF))
		// , 24, 24);
		
		var _img0 = _o.imgs.asps[point.data.name];
		
		
		if(_img0.bLoadingComplete) {
			
			_o.c0.drawImage(_img0,
				point.x,
				point.y,
				_o.nPointWidth0 * this.els.canv0.width,
				_o.nPointHeight0 * this.els.canv0.height
			);
			
		}
		
		
		return this;
		
		
		
		
	} ));
	
	
	
	
	Object.defineProperty(this, "time", new Game.DescrE(new Game.Time()));
	
	Object.defineProperty(this, "latt", new Game.DescrE(new Game.Lattice(
		_o.nSides0,
		_o.nPointWidth0,
		_o.nPointHeight0,
		_o.nPointMargin0,
		_o.nDegLattRotated0
	)));
	
	
	
	
	this
		.setStrings("en_US")
		.clearAspects()
		.setAspects(Game.STRS.ASPECTS)
		.clearImages()
		.setImages();
	
	
	
	
	} catch(ex0) {
		Game.F_WRITE1(ex0.stack);
	}
	
} , } );




} )();








// Выводить 2 кнопки, которые переключают, в какой шестиугольник двигает курсор (?) кнопка
// клавиатуры влево (первая кнопка)/вправо (вторая), в верхний или нижний?.. (Или просто
// одной кнопкой переключения одного отклонения?)

/*

06172839:

1,0: 2,0 2,6 1,1 0,0 1,5 2,11;
1,1: 2,1 2,7 1,2 0,0 1,0 2,6;
1,2: 2,2 2,8 1,3 0,0 1,1 2,7;
1,3: 2,3 2,9 1,4 0,0 1,2 2,8;
1,4: 2,4 2,10 1,5 0,0 1,3 2,9;
1,5: 2,5 2,11 1,0 0,0 1,4 2,10;


01234567:

1,0: 2,0 2,1 1,1 0,0 1,5 2,11;
1,1: 2,2 2,3 1,2 0,0 1,0 2,1;
1,2: 2,4 2,5 1,3 0,0 1,1 2,3;
1,3: 2,6 2,7 1,4 0,0 1,2 2,5;
1,4: 2,8 2,9 1,5 0,0 1,3 2,7;
1,5: 2,10 2,11 1,0 0,0 1,4 2,9;

2,0: 3,0 3,1 2,1 1,0 2,11 3,17;
2,1: 3,1 3,2 2,2 1,1 1,0 2,0;
2,2: 3,3 3,4 2,3 1,1 2,1 3,2;
2,3: 3,4 3,5 2,4 1,2 1,1 2,2;
2,4: 3,6 3,7 2,5 1,2 2,3 3,5;
2,5: 3,7 3,8 2,6 1,3 1,2 2,4;

3,0: 4,0 4,1 3,1 2,0 3,17 4,23;
3,1: 4,1 4,2 3,2 2,1 2,0 3,0;
3,2: 4,2 4,3 3,3 2,2 2,1 3,1;
3,3: 4,4 4,5 3,4 2,2 3,2 4,3;
3,4: 4,5 4,6 3,5 2,3 2,2 3,3;
3,5: 4,6 4,7 3,6 2,4 2,3 3,4;
3,6: 4,8 4,9 3,7 2,4 3,5 4,7;
3,7: 4,9 4,10 3,8 2,5 2,4 3,6;
3,8: 4,10 4,11 3,9 2,6 2,5 3,7;

*/

window.o0 = {} ;


o0.VERTICES = 6;


o0.getDataByPointIndex = function _thisF1(iTheta0, iR0) {
	
	
	return [iTheta0, iR0];
	
	
} ;


o0.getDataByAdjacentPoints = function _thisF1(iTheta0, iR0) {
		
		
		
		
		// do the check!
		iTheta0 |= 0;
		iR0 |= 0;
		
		
		if(!iR0) {
			
			var
				aResu0 = [],
				_i0 = 0;
			for( ; _i0 < this.VERTICES; ++_i0)
				aResu0[_i0] = getDatsByPointIndex(_i0, 0);
			
			return aResu0;
			
		}
		
		
		var
			_i0 = iTheta0 / iR0 | 0,
			_i1 = this.VERTICES * iR0,
			_iTheta0 = iTheta0 + 1,
			_iTheta1 = iTheta0 - 1,
			_iR0 = iR0 + 1,
			_b0 = Boolean(iTheta0 % iR0),
			_iResu0,
			_iResu1 = _iTheta1 % _i1;
		
		// valid modulo
		_iResu1 += _i1 * (_iResu1 < 0);
		
		if(_b0) {
			_iResu0 = -_i0 + _iTheta1;
		} else {
			var
				_i2 = _i1 + this.VERTICES;
			
			_iResu0 = _iResu1;
			_iResu1 = (_i0 + _iTheta1) % _i2;
			// valid modulo
			_iResu1 += _i2 * (_iResu1 < 0);
		}
		
		
		return [
			this.getDataByPointIndex(_i0 + iTheta0, _iR0),
			this.getDataByPointIndex(_i0 + _iTheta0, _iR0),
			this.getDataByPointIndex(_iTheta0 % _i1, iR0),
			this.getDataByPointIndex(-_i0 + iTheta0, iR0 - 1),
			this.getDataByPointIndex(_iResu0, iR0 - _b0),
			this.getDataByPointIndex(_iResu1, _iR0 - _b0),
		];
		
		
		
		
} ;




// "		\t\t"

o0.BI0 = BigInt(0);
o0.BI1 = BigInt(1);


o0.FGetArrTiersLens = function _thisF1(iPrimalTierLen, bCountDoubledCompounds) {


var
_bi0 = BigInt(iPrimalTierLen),
aResu0 = [_bi0],
_i0 = 1,
_biOtherPrevTiersLen = this.BI0,
_bi1 = bCountDoubledCompounds ? this.BI1 : BigInt(~0);


while(_i0 < 10) {

_biOtherPrevTiersLen += aResu0[_i0 - 2] || this.BI0;

aResu0[_i0]
= _bi0
= _bi0 * (
_bi0 + _bi1
+ (_biOtherPrevTiersLen << this.BI1)
) >> this.BI1;

++_i0;

}


return aResu0;


} ;


o0.sResu0 = o0.FGetArrTiersLens(6, true).join("\n\n");
/*

if bCountDoubledCompounds is falsy:

6

15

195

23010

269688705

36372262457306490

661470747941626697157800146138995

218771775191227543766631088313649234079924435111775146634248162410

23930544810160501697000055708068348577682093975399597381892188057383062759264412242612468787333005753979949169953114638926408355405

286335487455549861102153756091795843026660622353188309652459701812424779897386817091332995161908283248371401527273460789699636400637091755516332215533625752889540360213937803511034108821914992689769077129219618760064759343766222049697468484494803738402872938840

*/




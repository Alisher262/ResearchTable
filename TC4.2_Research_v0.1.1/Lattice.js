// "		\t\t"

; (function _thisF0() {



// Or Lattice2D ?..
// -Extend as HexLattice2D ?..-
Object.defineProperty(Game, "Lattice", new Game.DescrE(function Lattice(
	nSides, nPointWidth, nPointHeight, nPointMargin, nDegLattRotated
) {
	
	
	var
		_this = this,
		_o = {} ;
	
	
	Object.defineProperty(this, "N_SIDES", new Game.DescrE(nSides));
	
	Object.defineProperty(this, "nPointWidth", new Game.DescrEW(nPointWidth));
	Object.defineProperty(this, "nPointHeight", new Game.DescrEW(nPointHeight));
	Object.defineProperty(this, "nPointMargin", new Game.DescrEW(nPointMargin));
	Object.defineProperty(this, "nDegLattRotated", new Game.DescrEW(nDegLattRotated));
	
	
	Object.defineProperty(this, "POINTS", new Game.DescrE([]));
	
	
	function Point(data0, nX0, nY0) {
		
		
		this.data = data0;
		this.x = nX0;
		this.y = nY0;
		
		
	}
	
	
	
	
	Object.defineProperty(this, "polygNums", new Game.DescrE([]));
	
	Object.defineProperty(this, "getPolygN", new Game.DescrE(function _thisF1(
		i0
	) {
		
		
		i0 = Number(i0);
		
		if(!Number.isFinite(i0))
			throw new RangeError("i0 must be a finite number.");
		
		
		i0 |= 0;
		
		var
			iResu0 = this.polygNums[i0];
		
		
		if(Number.isNaN(Number(iResu0))) {
			iResu0 = this.N_SIDES * i0 * (i0 + 1) / 2 + 1;
			Object.defineProperty(this.polygNums, i0, new Game.DescrE(iResu0));
		}
		
		
		return iResu0;
		
		
	} ));
	
	
	Object.defineProperty(this, "getIndexFromPolygN", new Game.DescrE(function _thisF1(
		n0
	) {
		
		
		return Math.sqrt(2 * (n0 - 1) / this.N_SIDES + 0.25) - 0.5;
		
		
	} ));
	
	
	Object.defineProperty(this, "getIPolarCoordsByPointIndex", new Game.DescrE(function _thisF1(
		i0
	) {
		
		
		i0 = Number(i0);
		
		if(!Number.isFinite(i0))
			throw new RangeError("i0 must be a finite number.");
		
		if(i0 < 1) {
			return {
				theta: 0,
				r: 0,
			} ;
		}
		
		
		var
			_IR0 = Math.floor(this.getIndexFromPolygN(i0));
		
		return {
			theta: i0 - this.getPolygN(_IR0),
			r: _IR0 + 1,
		} ;
		
		
	} ));
	
	
	Object.defineProperty(this, "getPointIndexByIPolarCoords", new Game.DescrE(function _thisF1(
		iTheta0, iR0
	) {
		
		
		iTheta0 = Number(iTheta0);
		iR0 = Number(iR0);
		
		if(!Number.isFinite(iTheta0))
			return iTheta0;
		
		if(!Number.isFinite(iR0))
			return iR0;
		
		if(iR0 < 1)
			return 0;
		
		return this.getPolygN(iR0 - 1) + iTheta0;
		
		
	} ));
	
	
	
	
	Object.defineProperty(this, "clearPoints", new Game.DescrE(function _thisF1() {
		
		
		this.POINTS.length = 0;
		
		return this;
		
		
	} ));
	
	
	
	
	Object.defineProperty(this, "setPoints0", new Game.DescrE(function _thisF1(
		nPointMargin0, nDegLattRotated0
	) {
		
		try {
		
		
		
		
		nPointMargin0 = nPointMargin0 || this.nPointMargin;
		nDegLattRotated0 = nDegLattRotated0 || this.nDegLattRotated;
		
		var
			_NS = this.N_SIDES,
			_NPM = game.els.canv0.height * Number(nPointMargin0),
			_NLR0 = 2 * Math.PI * (Number(nDegLattRotated0) - 30) / 360,
			_NLR1 = 0.5 / _NS + 1 / 360,
			_N_OFFS_X0 = 0.75 * game.els.canv0.width * (
				1 - this.nPointWidth
			),
			_N_OFFS_Y0 = 0.5 * game.els.canv0.height * (
				1 - this.nPointHeight
			),
			_point0,
			_i0 = 0,
			_iIPN0 = 0,
			_iPN0 = 1,
			_nTheta0,
			_nR0,
			_nX0 = _N_OFFS_X0,
			_nY0 = _N_OFFS_Y0;
		while(_iIPN0 < 6) {
			
			
			// 0x00000000 "auram"
			_point0 = new Point(game.getAspect("auram"), _nX0, _nY0);
			
			this.POINTS.push(_point0);
			
			game.drawPoint0(_point0);
			
			
			if(_i0 + 1 >= _iPN0) {
				_i0 = 0;
				++_iIPN0;
				_iPN0 += _NS;
				// _iPN0 = this.getPolygN(_iIPN0);
			}
			
			_nTheta0 = 2 * Math.PI * (_i0 / _NS / _iIPN0 + _NLR1);
			// Source:
			// Polar Equations of Polygons — Dr Barker
			// https://youtu.be/AoOv6bWg9lk
			_nR0 = Math.cos(Math.PI / _NS) / Math.cos(
				-2 * Math.PI / _NS
					* Math.floor((_NS * _nTheta0 / Math.PI + 1) / 2)
				+ _nTheta0
			);
			// просто ломаная поверх предыдущей:
			// _nR0 = -Math.abs((n / 3) % (2 * Math.PI / _NS / 3) - Math.PI / _NS / 3) + 1;
			
			_nX0 = _NPM * _iIPN0 * _nR0 * Math.cos(_nTheta0 + _NLR0) + _N_OFFS_X0;
			_nY0 = _NPM * _iIPN0 * _nR0 * Math.sin(_nTheta0 + _NLR0) + _N_OFFS_Y0;
			
			
			++_i0;
			
			
		}
		
		
		return this;
		
		
		
		
		} catch(ex0) {
			Game.F_WRITE1(ex0.stack);
		}
		
	} ));
	
	
	
	
	Object.defineProperty(this, "getPointIndexByCoords", new Game.DescrE(function _thisF1(
		nX0, nY0
	) {
		
		
		
		
		var
			_NPW0 = Math.max(
				game.els.canv0.width * this.nPointWidth,
				game.els.canv0.height * this.nPointHeight
			),
			// 0.53125 = 17 / 32;
			_NR0 = 0.53125 * _NPW0,
			_NX1 = -nX0 + 0.5 * _NPW0,
			_NY1 = -nY0 + 0.5 * _NPW0,
			_nX2,
			_nY2;
		
		
		return this.POINTS.findIndex(function _thisF2(point0, i0, a0) {
			
			
			_nX2 = point0.x + _NX1;
			_nY2 = point0.y + _NY1;
			
			return Math.sqrt(_nX2 * _nX2 + _nY2 * _nY2) <= _NR0;
			
			
		} );
		
		
		
		
	} ));
	
	
	
	
	Object.defineProperty(this, "getAdjacentPointsIndices", new Game.DescrE(function _thisF1(
		i0
	) {
		
		
		
		
		var
			_OPC0 = this.getIPolarCoordsByPointIndex(i0),
			_IR0 = _OPC0.r,
			_I_THETA0 = _OPC0.theta;
		
		
		if(!_IR0) {
			
			var
				aResu0 = [],
				_i0 = 0;
			
			while(_i0 < this.N_SIDES) {
				aResu0[_i0]
					// = this.getPointIndexByIPolarCoords(_i0, 1);
					= _i0;
				++_i0;
			}
			
			return aResu0;
			
		}
		
		
		var
			_i0 = _I_THETA0 / _IR0 | 0,
			_i1 = this.N_SIDES * _IR0,
			_iTheta0 = _I_THETA0 + 1,
			_iTheta1 = _I_THETA0 - 1,
			_iR0 = _IR0 + 1,
			_b0 = Boolean(_I_THETA0 % _IR0),
			_iResu0,
			_iResu1 = _iTheta1 % _i1;
		
		// valid modulo
		_iResu1 += _i1 * (_iResu1 < 0);
		
		if(_b0) {
			_iResu0 = -_i0 + _iTheta1;
		} else {
			var
				_i2 = _i1 + this.N_SIDES;
			
			_iResu0 = _iResu1;
			_iResu1 = (_i0 + _iTheta1) % _i2;
			// valid modulo
			_iResu1 += _i2 * (_iResu1 < 0);
		}
		
		
		return [
			this.getPointIndexByIPolarCoords(
				_i0 + _I_THETA0,
				_iR0
			),
			this.getPointIndexByIPolarCoords(
				_i0 + _iTheta0,
				_iR0
			),
			this.getPointIndexByIPolarCoords(
				_iTheta0 % _i1,
				_IR0
			),
			this.getPointIndexByIPolarCoords(
				-_i0 + _I_THETA0,
				_IR0 - 1
			),
			this.getPointIndexByIPolarCoords(
				_iResu0,
				_IR0 - _b0
			),
			this.getPointIndexByIPolarCoords(
				_iResu1,
				_iR0 - _b0
			),
		];
		
		
		
		
	} ));
	
	
	
	
	Object.defineProperty(this, "animLoading0", new Game.DescrE(function _thisF1(
		nMsTotal0
	) {
		
		
		
		
		var
			_C0 = game.getCanvContext0(),
			_NCW0 = game.els.canv0.width,
			_NCH0 = game.els.canv0.height,
			_NS = this.N_SIDES,
			_N_1TURN = 2 * Math.PI,
			// velocity
			_NV0 = _N_1TURN / 192,
			// latt rotated (other way)
			_NLR1 = 0.5 / _NS + 1 / 360,
			_N_OFFS_X0 = _NCW0 * (
				1 - this.nPointWidth
			) / 2,
			_N_OFFS_Y0 = _NCH0 * (
				1 - this.nPointHeight
			) / 2,
			_i0 = 0,
			_nDLR0 = this.nDegLattRotated,
			_point0,
			_i1,
			_iIPN0,
			_iPN0,
			_nX0,
			_nY0,
			_nTheta0,
			_nR0;
		
		
		var _I_REQ_ID0 = window.requestAnimationFrame(function _thisF2(nElapsed0) {
			
			try {
			
			
			
			
			_C0.clearRect(0, 0, _NCW0, _NCH0);
			
			
			if(nElapsed0 >= nMsTotal0) {
				
				cancelAnimationFrame(_I_REQ_ID0);
				
				_this.clearPoints();
				
				return;
				
			}
			
			
			_nPM0 = _NCH0 * _this.nPointMargin * Math.cos(_NV0 * _i0);
			_nLR0 = _N_1TURN * (_nDLR0 - 30) / 360;
			
			_i1 = 0;
			_iIPN0 = 0;
			_iPN0 = 1;
			_nX0 = _N_OFFS_X0;
			_nY0 = _N_OFFS_Y0;
			
			// 7 points
			while(_iIPN0 < 2) {
				
				
				_point0 = new Point( {
					name: "loadingPoint",
				} , _nX0, _nY0);
				
				_this.POINTS.push(_point0);
				
				game.drawPoint0(_point0);
				
				
				if(_i1 + 1 >= _iPN0) {
					_i1 = 0;
					++_iIPN0;
					_iPN0 += _NS;
					// _iPN0 = this.getPolygN(_iIPN0);
				}
				
				_nTheta0 = _N_1TURN * (_i1 / _NS / _iIPN0 + _NLR1);
				// Source:
				// Polar Equations of Polygons — Dr Barker
				// https://youtu.be/AoOv6bWg9lk
				_nR0 = Math.cos(Math.PI / _NS) / Math.cos(
					-_N_1TURN / _NS
						* Math.floor((_NS * _nTheta0 / Math.PI + 1) / 2)
					+ _nTheta0
				);
				// просто ломаная поверх предыдущей:
				// _nR0 = -Math.abs((n / 3) % (2 * Math.PI / _NS / 3) - Math.PI / _NS / 3) + 1;
				
				_nX0 = _nPM0 * _iIPN0 * _nR0 * Math.cos(_nTheta0 + _nLR0) + _N_OFFS_X0;
				_nY0 = _nPM0 * _iIPN0 * _nR0 * Math.sin(_nTheta0 + _nLR0) + _N_OFFS_Y0;
				
				
				++_i1;
				
				
			}
			
			++_i0;
			_nDLR0 += 1.5;
			
			
			requestAnimationFrame(_thisF2);
			
			return;
			
			
			
			
			} catch(ex0) {
				Game.F_WRITE1(ex0.stack);
			}
			
		} );
		
		
		return _I_REQ_ID0;
		
		
		
		
	} ));
	
	
	
	
} ));




} )();




// //////////// testing1
var aspectboard = {
	'aer': {
		count: 10,
		isRegen: true
	},
	'terra': {
		count: 20,
		isRegen: false
	}
};
var level = 4,
	difficult = 2,
	isNoScrTools = false,
	startAspNames = ['humanus', 'vitium', 'spiritus', 'lux'];



var pi = Math.PI,
	hexWidth = 80,
	hexHeight = 80,
	offsetMenuAsp = 0,
	selectedAspect1 = -1,
	selectedAspect2 = -1,
	hexCount = fFactorial(level) * 6 + 1,
	arrAspects1 = [],
	arrHexagons = [],
	arrAspects2 = [],
	arrHexNeighbors = [],
	startHexs = [],
	placedAspects = [],
	arrIsHexEnabled = [],
	menuAspects = document.getElementById('menuAspects'),
	interface1 = document.getElementById('interface1');

var aspectNamesTC = [
	'obscurus', 'aer', 'alienis', 'aqua', 'arbor', 'auram', 'bestia', 'cognitio',
	'corpus', 'exanimis', 'fabrico', 'fames', 'gelum', 'herba', 'humanus', 'ignis',
	'instrumentum', 'iter', 'limus', 'lucrum', 'lux', 'machina', 'messis', 'metallum',
	'meto', 'mortuus', 'motus', 'ordo', 'pannus', 'perditio', 'perfodio', 'permutatio',
	'potentia', 'praecantatio', 'sano', 'sensus', 'spiritus', 'telum', 'tempestas', 'tenebrae',
	'terra', 'tutamen', 'vacuos', 'venenum', 'victus', 'vinculum', 'vitium', 'vitreus',
	'volatus'
],
	aspectNamesFM = ['desidia', 'gula', 'infernus', 'invidia', 'ira', 'luxuria', 'superbia'],
	aspectNamesGT5 = ['electrum', 'magneto', 'nebrisum', 'radio', 'strontio'],
	aspectNamesMB = ['tempus'],
	aspectNamesE2 = ['sanctus'],
	aspectNamesTW = ['exubitor'],
	aspectNamesTC_Old = ['granum', 'saxum'],
	aspectNamesET = ['mru', 'radiation', 'matrix'];
var aspectNames = aspectNamesTC.concat(
	aspectNamesFM, aspectNamesGT5, aspectNamesMB, aspectNamesE2,
	aspectNamesTW, aspectNamesTC_Old, new Array(4), aspectNamesET
);
var compoundAspects = {
	'obscurus' : 'obscurus',
	'aer' : 'primal',
	'alienis' : ['tenebrae', 'vacuos'],
	'aqua' : 'primal',
	'arbor' : ['herba', 'aer'],
	'auram' : ['praecantatio', 'aer'],
	'bestia' : ['motus', 'victus'],
	'cognitio' : ['spiritus', 'ignis'],
	'corpus' : ['bestia', 'mortuus'],
	'exanimis' : ['mortuus', 'motus'],
	'fabrico' : ['instrumentum', 'humanus'],
	'fames' : ['vacuos', 'victus'],
	'gelum' : ['ignis', 'perditio'],
	'herba' : ['victus', 'terra'],
	'humanus' : ['cognitio', 'bestia'],
	'ignis' : 'primal',
	'instrumentum' : ['humanus', 'ordo'],
	'iter' : ['motus', 'terra'],
	'limus' : ['victus', 'aqua'],
	'lucrum' : ['humanus', 'fames'],
	'lux' : ['aer', 'ignis'],
	'machina' : ['instrumentum', 'motus'],
	'messis' : ['humanus', 'herba'],
	'metallum' : ['vitreus', 'terra'],
	'meto' : ['instrumentum', 'messis'],
	'mortuus' : ['victus', 'perditio'],
	'motus' : ['aer', 'ordo'],
	'ordo' : 'primal',
	'pannus' : ['instrumentum', 'bestia'],
	'perditio' : 'primal',
	'perfodio' : ['humanus', 'terra'],
	'permutatio' : ['ordo', 'perditio'],
	'potentia' : ['ignis', 'ordo'],
	'praecantatio' : ['vacuos', 'potentia'],
	'sano' : ['victus', 'ordo'],
	'sensus' : ['spiritus', 'aer'],
	'spiritus' : ['mortuus', 'victus'],
	'telum' : ['instrumentum', 'ignis'],
	'tempestas' : ['aer', 'aqua'],
	'tenebrae' : ['lux', 'vacuos'],
	'terra' : 'primal',
	'tutamen' : ['instrumentum', 'terra'],
	'vacuos' : ['aer', 'perditio'],
	'venenum' : ['aqua', 'perditio'],
	'victus' : ['terra', 'aqua'],
	'vinculum' : ['motus', 'perditio'],
	'vitium' : ['praecantatio', 'perditio'],
	'vitreus' : ['terra', 'ordo'],
	'volatus' : ['motus', 'aer'],
	
	'desidia' : ['spiritus', 'vinculum'],
	'gula' : ['fames', 'vacuos'],
	'infernus' : ['praecantatio', 'ignis'],
	'invidia' : ['sensus', 'fames'],
	'ira' : ['telum', 'ignis'],
	'luxuria' : ['corpus', 'fames'],
	'superbia' : ['volatus', 'vacuos'],
	
	'electrum' : ['machina', 'potentia'],
	'magneto' : ['iter', 'metallum'],
	'nebrisum' : ['perfodio', 'lucrum'],
	'radio' : ['lux', 'potentia'],
	'strontio' : ['cognitio', 'perditio'],
	
	'tempus' : ['vacuos', 'ordo'],
	
	'sanctus' : ['auram', 'spiritus'],
	
	'exubitor' : ['alienis', 'mortuus'],
	
	'mru' : ['praecantatio', 'potentia'],
	'radiation' : ['mru', 'lux'],
	'matrix' : ['mru', 'mru'],
};


// //////////// testing2
var knownAsps = aspectNames.slice(1, aspectNames.length); // ['aer', 'terra', 'ignis', 'aqua', 'ordo', 'perditio'];


function fIsCompound (a1, a2){
	if (!a1 || !a2) return false;
	if (typeof(a1) == 'number' && a1>=0) a1 = aspectNames[a1];
	if (typeof(a2) == 'number' && a2>=0) a2 = aspectNames[a2];
	var key = compoundAspects[a2];
	if (key == 'primal' || typeof(key) != 'object') return false;
	return !!~key.indexOf(a1);
}

function showAspectImg (asp, elem){
	var imgNum = Math.floor(asp / 16)+1;
	elem.style.backgroundImage = ~asp ? 'url(\"res/images/T4aspects-' + imgNum + '.png\")' : 'none';
	elem.style.backgroundPosition = (-hexWidth * (asp % 16)) + 'px';
	// var style1 = hexHeight + 'px ' + hexWidth + 'px';
	// elem.style.MozBackgroundSize = style1;
	// elem.style.OBackgroundSize = style1;
	// elem.style.WebkitBackgroundSize = style1;
	// elem.style.backgroundSize = style1;
}

function fSelectAspect (){
	var aspect = this;
	var class1 = 'selectedAspect',
		classNames = fJoin(aspect.className, ' '),
		aspNum;
	
	if (~aspect.className.indexOf(class1)){
		aspNum = -1;
		fRemoveClassNames(aspect, class1);
	} else {
		for (var i=0; i < arrAspects1.length; i++) fRemoveClassNames(arrAspects1[i], class1);
		fAddClassNames(aspect, class1);
		for (var j=0; j < classNames.length; j++){
			aspNum = aspectNames.indexOf(classNames[j]);
			if (!~aspNum) continue;
			break;
		}
	}
	
	selectedAspect1 = aspNum;
	return selectedAspect1;
}

function fScrollMenuAsp (table, n){
	var o = offsetMenuAsp;
	if (o+n>0 || o+n <= knownAsps.length - 25) offsetMenuAsp += 5;
	fMenuAspectsInit(table);
}

function fMenuAspectsInit (table){
	var aspCount = knownAsps.length - offsetMenuAsp;
	var cellsLength = Math.floor(aspCount / 5) + 1;
	
	table.innerHTML = '';
	
	function makeTable (){
		table.style.width = (cellsLength * 81 + 1) + 'px';
		for (var i=0, elemRow, row; i<5; i++){
			elemRow = document.createElement('tr');
			row = table.appendChild(elemRow);
			for (var j=0, elemCell, cell; j < cellsLength; j++){
				elemCell = document.createElement('td');
				cell = row.appendChild(elemCell);
			}
		}
	}
	makeTable();
	function showAspects (){
		for (var i=0, i1 = offsetMenuAsp; i < cellsLength && i1 < aspCount + 1; i++){
			for (var j=0, cell, elemAspect, aspect, aspNum; j<5 && j < aspCount - i*5; j++){
				aspNum = aspectNames.indexOf(knownAsps[i1]);
				cell = table.rows[j].cells[i];
				
				elemAspect = document.createElement('div');
				elemAspect.className = 'aspect ' + knownAsps[i1];
				if (aspNum == selectedAspect1) fAddClassNames(elemAspect, 'selectedAspect');
				elemAspect.onclick = fSelectAspect;
				
				aspect = cell.appendChild(elemAspect);
				arrAspects1.push(aspect);
				
				showAspectImg(aspNum, aspect);
				i1++;
			}
		}
	}
	showAspects();
}
fMenuAspectsInit(menuAspects);



function fContactLine (hexNum, sector, isConnect){
	var elems = arrHexagons[hexNum].getElementsByClassName('connectLine' + sector);
	elems[0].style.display = isConnect ? 'block' : 'none';
}

function findContacts (hexNum){
	var neighbors = arrHexNeighbors[hexNum],
		aspNum = placedAspects[hexNum],
		isCorAsp = false,
		hexNum2, aspNum2, bool1;
	for (var i=0; i < neighbors.length; i++){
		if (!neighbors[i]) continue;
		hexNum2 = neighbors[i];
		aspNum2 = placedAspects[hexNum2];
		bool1 = fIsCompound(aspNum, aspNum2) || fIsCompound(aspNum2, aspNum);
		fContactLine(hexNum, i, false);
		if (bool1){
			isCorAsp = bool1;
			fContactLine(hexNum, i, true);
		}
	}
	return isCorAsp;
}

function checkHexagons (hexagons){
	for (var i=0, isCorAsp, aspect, hexagon, hexagonImg, style1; i < hexagons.length; i++){
		isCorAsp = !!~startHexs.indexOf(i) || findContacts(i);
		
		aspect = arrAspects2[i];
		hexagon = arrHexagons[i];
		hexagonImg = hexagon.querySelector('.hexagonImg');
		if (!aspect || !hexagonImg) continue;
		style1 = '0 0 8px #222222, inset 0 0 40px 4px #222222';
		if (isCorAsp || !~placedAspects[i]){
			aspect.style.opacity = 1;
			hexagonImg.style.MozBoxShadow = 'none';
			hexagonImg.style.WebkitBoxShadow = 'none';
			hexagonImg.style.boxShadow = 'none';
		} else {
			aspect.style.opacity = 0.6;
			hexagonImg.style.MozBoxShadow = style1;
			hexagonImg.style.WebkitBoxShadow = style1;
			hexagonImg.style.boxShadow = style1;
		}
	}
}

function fPlaceAspInHex (asp, hex, isStartAsp){
	if (!arrIsHexEnabled[hex] || (!isStartAsp && ~startHexs.indexOf(hex))
		|| isNoScrTools) return arrHexagons[hex];
	
	placedAspects[hex] = asp;
	
	var aspect = arrAspects2[hex];
	showAspectImg(asp, aspect);
	checkHexagons(arrHexagons);
	return arrHexagons[hex];
}

function toPlaceAspInHex (){
	var idName = this.id;
	var hexNum = +idName.slice('hexagon'.length, idName.length);
	fPlaceAspInHex(selectedAspect1, hexNum, false);
}

function toSelectHexagon (){
	var hexagonsImg = this.getElementsByClassName('hexagonImg');
	hexagonsImg[0].style.backgroundImage = 'url(\"res/images/hexagonBg_hover.png\")';
}

function toUnselectHexagon (){
	var hexagonsImg = this.getElementsByClassName('hexagonImg');
	hexagonsImg[0].style.backgroundImage = 'url(\"res/images/hexagonBg.png\")';
}


function fInterfaceInit (interface){
	interface.style.width = (hexWidth * 9) + 'px';
	interface.style.height = (hexHeight * 9) + 'px';
	interface.style.padding = (hexHeight * 7/30) + 'px ' + (hexWidth * 7/30) + 'px';
	
	while (placedAspects.length < hexCount) placedAspects.push(-1);
	while (arrIsHexEnabled.length < hexCount) arrIsHexEnabled.push(true);
	
	function setStartHexs (){
		var sac = startAspNames.length;
		for (var i=0, a; i < sac; i++){
			a = 6 * (fFactorial(level - 1) + level * i / sac) + 1;
			startHexs.push(a - Math.floor(a) > 0.5 ? Math.ceil(a) : Math.floor(a));
		}
		return startHexs;
	}
	function setDisabledHexs (){
		for (var i=0, r; i < level * 2 - 4 + difficult; ){
			r = getRandInt(0, hexCount - 1);
			if (arrIsHexEnabled[r] && !~startHexs.indexOf(r)){
				arrIsHexEnabled[r] = false;
				i++;
			}
		}
		return arrIsHexEnabled;
	}
	function insertHexagons (){
		setStartHexs();
		setDisabledHexs();
		for (var i=0; i < hexCount; i++){
			var hexagon = document.createElement('div');
			hexagon.id = 'hexagon' + i;
			hexagon.className = 'hexagon';
			hexagon.style.width = hexWidth + 'px';
			hexagon.style.height = hexHeight + 'px';
			hexagon.style.borderRadius = (hexHeight / 2) + 'px ' + (hexWidth / 2) + 'px';
			
			arrHexagons.push(interface.appendChild(hexagon));
			if (arrIsHexEnabled[i]){
				var aspect = document.createElement('div');
				aspect.className = 'aspect';
				arrAspects2.push(hexagon.appendChild(aspect));
				
				hexagon.onclick = toPlaceAspInHex;
				
				if (!~startHexs.indexOf(i)){
					var hexagonImg = document.createElement('div');
					hexagonImg.className = 'hexagonImg';
					hexagonImg.style.borderRadius = (hexHeight / 2) + 'px ' + (hexWidth / 2) + 'px';
					hexagon.appendChild(hexagonImg);
					
					hexagon.onmouseenter = toSelectHexagon;
					hexagon.onmouseleave = toUnselectHexagon;
				}
			} else {
				arrAspects2.push(null);
			}
		}
	}
	
	function toPosHexagons (){
		insertHexagons();
		var x0 = (parseFloat(interface.style.width) - hexWidth) / 2,
			y0 = (parseFloat(interface.style.height) - hexHeight) / 2;
		
		interface.children[0].style.marginLeft = x0 + 'px';
		interface.children[0].style.marginTop = y0 + 'px';
		
		for (var i=1, j=0, hexagon, sector, prevSect, numInSect = 0, x, y, x1=x0, y1=y0; i <= level; i++){
			for ( ; j < fFactorial(i) * 6; j++){
				hexagon = interface.children[j+1];
				sector = Math.floor((j - fFactorial(i-1) *6)/i);
				prevSect = Math.floor((j-1 - fFactorial(i-1) *6)/i);
				if (prevSect < sector){
					x = x0 + hexWidth * i * Math.sin((sector + 4)*pi/3); // x0 + hexWidth * i * Math.sin((j/3-2*(i-1))*pi/i + 4/3*pi);
					y = y0 - hexHeight * i * Math.cos((sector + 4)*pi/3);
					x1 = x;
					y1 = y;
					numInSect = 0;
				} else {
					x = x1 + hexWidth * numInSect * Math.sin(sector * pi/3);
					y = y1 - hexHeight * numInSect * Math.cos(sector * pi/3);
				}
				hexagon.style.marginLeft = x + 'px';
				hexagon.style.marginTop = y + 'px';
				numInSect++;
			}
		}
		return interface.children;
	}
	
	function findNeighbors (hexagon){
		var x1 = fRound(parseFloat(hexagon.style.marginLeft), 3),
			y1 = fRound(parseFloat(hexagon.style.marginTop), 3),
			hexagon2, x2, y2, x, y, result=[];
		while (result.length < 6){
			x = fRound(x1 + hexWidth * Math.sin((result.length + 4)*pi/3), 3);
			y = fRound(y1 - hexHeight * Math.cos((result.length + 4)*pi/3), 3);
			for (var i=0; i < arrHexagons.length; i++){
				hexagon2 = arrHexagons[i];
				x2 = fRound(parseFloat(hexagon2.style.marginLeft), 3);
				y2 = fRound(parseFloat(hexagon2.style.marginTop), 3);
				// alert('4.4 i: ' + i + '\nx1: '+ x1 +'\ny1:'+ y1 + '\nx2:' + x2 + '\ny2:' + y2 + '\nx:' + x + '\ny:' + y);
				if (x == x2 && y == y2){
					result.push(i);
					break;
				}
			}
			if (i >= arrHexagons.length) result.push(null);
		}
		return result;
	}
	function defHexNeighbors (){
		for (var i=0; i < arrHexagons.length; i++){
			arrHexNeighbors.push(findNeighbors(arrHexagons[i]));
		}
		return arrHexNeighbors;
	}
	function setConnectLines (){
		for (var i=0; i < arrHexagons.length; i++){
			for (var j=0, elem, style1; j < arrHexNeighbors.length; j++){
				if (typeof(arrHexNeighbors[i][j]) != 'number') continue;
				elem = document.createElement('div');
				elem.className = 'connectLine connectLine' + j;
				elem.style.width = hexWidth + 'px';
				elem.style.marginLeft = (hexWidth / 2) + 'px';
				elem.style.marginTop = (hexHeight / 2) + 'px';
				style1 = 'rotate(' + (j*60+150) + 'deg)';
				elem.style.MsTransform = style1;
				elem.style.MozTransform = style1;
				elem.style.WebkitTransform = style1;
				elem.style.transform = style1;
				
				arrHexagons[i].appendChild(elem);
			}
		}
	}
	toPosHexagons();
	defHexNeighbors();
	setConnectLines();
	
	function insertStartHexagons (){
		for (var j=0; j < hexCount; j++){
			if (~startHexs.indexOf(j)){
				var startAspName = startAspNames[startHexs.indexOf(j)],
					startHexagon = document.createElement('div');
				var startAspNum = aspectNames.indexOf(startAspName);
				startHexagon.className = 'startHexagon ' + startAspName;
				
				var hexagon = arrHexagons[j];
				hexagon.appendChild(startHexagon);
				fPlaceAspInHex(startAspNum, j, true);
			}
		}
	}
	insertStartHexagons();
}
fInterfaceInit(interface1);



function prompt1 (){
	var a = +prompt('Aspect number: ', '6'),
		b = +prompt('Hexagon number: ', '19');
	fPlaceAspInHex(a, b, false);
}




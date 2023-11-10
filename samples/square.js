//Calculates x² of an integer up to ±1 million
var square = (function () {
	var s = "if(A==B){return C;}";
	var func = "var A=Math.abs(D|0);";
	for (var i = 0; i <= 1000000; i++) {
		func += s.replace(/B/, i).replace(/C/, i * i);
	}
	return new Function("D", func + "return Infinity;");
})();

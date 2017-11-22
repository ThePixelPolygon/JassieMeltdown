(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"JassieMeltdown_atlas_", frames: [[2884,1026,1028,526],[551,5815,492,240],[0,5124,885,377],[551,5629,760,184],[3465,5759,432,302],[2884,4711,675,514],[3505,3594,585,501],[887,5124,623,503],[2884,2589,875,494],[3658,4097,427,502],[3228,5245,465,512],[3561,4711,492,532],[2884,3594,619,619],[2884,1554,846,558],[3914,1181,128,128],[2884,0,1024,1024],[0,5916,246,370],[3658,4601,360,70],[2644,5682,374,66],[551,5503,288,68],[3899,5863,115,117],[3899,5737,121,124],[3914,1051,128,128],[1045,6052,217,244],[3429,6063,274,63],[3705,6063,295,56],[3679,3461,338,99],[2046,5979,522,152],[3705,6121,254,58],[2884,2114,930,473],[2644,5759,819,164],[3816,2019,266,473],[2927,5925,500,165],[1442,0,1440,2560],[0,0,1440,2560],[3761,2969,280,72],[3914,921,128,128],[3695,5245,326,286],[3910,287,165,133],[1313,5629,195,145],[3910,680,167,123],[3910,422,163,130],[3910,554,167,124],[2884,3085,793,507],[2884,4215,772,494],[2679,5227,547,453],[2093,5124,584,440],[1512,5124,579,463],[248,5916,286,305],[0,5503,549,411],[2644,5925,281,309],[3679,3085,354,374],[1264,6052,209,178],[3910,805,145,114],[3505,4097,114,112],[1475,6052,203,144],[3910,149,180,136],[3695,5533,342,202],[536,6057,270,65],[1684,5889,360,255],[1512,5589,552,298],[3732,1554,332,463],[3816,2494,266,473],[1045,5889,637,161],[1442,2562,1440,2560],[0,2562,1440,2560],[3914,1311,128,128],[808,6057,218,55],[1045,5815,353,68],[2927,6092,269,58],[3910,0,170,147],[2093,5566,549,411]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._10 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._12 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._13 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._8ec64a84e88d4e2fa37f00b41fb17342 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.AstralHecker = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bitsandheck = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.brandy = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.cammy1 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.cammy2 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.cammy3 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.FDD1 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.heck = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.HeckGS = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hecky = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.inky1 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.inky2 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.inky3 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.jelle1 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.jelle2 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.liar1pngcopy4 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.liar2 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.mario1 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.misc1 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.misc2 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.misc3 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.misc4 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.misc5 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.neb1 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.neb10 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.neb11 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.neb12 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.neb13 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.neb14 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.neb15 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.neb16 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.neb17 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.neb18 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.neb19 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.neb2 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.neb20 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.neb3 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.neb4 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.neb5 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.neb6 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.neb7 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.neb8 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.neb9 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.o1 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.o2 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.o3 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.o4 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.o5 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.o6 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.o7 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.sdt1 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.sdt2 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.vic1 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.vic2 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.vic3 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.vic4 = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.wildrylan = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.yeee = function() {
	this.spriteSheet = ss["JassieMeltdown_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ViewOriginal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhDBYQgdgfAAgzIAAgGQAAghANgbQAOgbAWgPQAYgPAaAAQAsAAAZAeQAZAdgBA2IAAAPIiZAAQABAiATAVQATAUAcAAQAVAAAOgIQAOgJAKgNIAYASQgcAsg5AAQguAAgdgegAgjhDQgRARgEAeIBxAAIAAgDQgCgdgOgQQgOgRgYAAQgWAAgQASg");
	this.shape.setTransform(203.6,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwCWQgXgKgNgTIAVgXQAZAeAkABQAcAAAPgQQAQgQAAgdIAAgTQgXAagnAAQgoAAgZggQgZggAAg2QAAg1AZggQAYggApABQAoAAAXAdIACgZIAkAAIAADdQAAArgaAaQgaAZgsAAQgYAAgYgKgAgohoQgQAVAAAsQAAAmAQAWQAQAVAbAAQAlAAARghIAAhnQgSghgjAAQgcAAgQAXg");
	this.shape_1.setTransform(179.6,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhHBjQgWgTAAgdQAAgkAbgSQAbgUAwAAIAmAAIAAgSQAAgUgMgMQgNgMgWAAQgVAAgOAKQgOALAAAPIgnAAQAAgRAMgQQAMgQAVgJQAUgKAYAAQAnAAAXAUQAWAUABAiIAABoQAAAfAIASIAAAEIgpAAQgDgHgDgRQgbAcgkAAQgiAAgVgTgAg2AtQAAATAMAKQAMAKATAAQASAAAQgJQAQgKAIgPIAAguIgfAAQhGAAAAApg");
	this.shape_2.setTransform(156.2,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhfCfIAAk5IAjAAIACAZQAYgdApAAQApAAAYAeQAYAfAAA4IAAADQAAAzgYAfQgXAggpAAQgpAAgYgaIAABtgAg5heIAABsQASAeAkAAQAbABAQgWQARgXAAgqQAAgngRgWQgQgWgcgBQgiAAgTAgg");
	this.shape_3.setTransform(133.1,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag6CFIgBAaIgkAAIAAlBIAmAAIAAB4QAYgdAoAAQAqAAAYAfQAXAfAAA2IAAADQAAA0gXAgQgYAfgpAAQgqAAgYgegAg5gCIAABhQATAjAlAAQAcAAAPgVQAQgWAAgrQAAgogQgVQgPgVgcAAQgnAAgRAkg");
	this.shape_4.setTransform(109,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhDBYQgdgfAAgzIAAgGQAAghANgbQAOgbAWgPQAYgPAaAAQAsAAAZAeQAZAdgBA2IAAAPIiZAAQABAiATAVQATAUAcAAQAVAAAOgIQAOgJAKgNIAYASQgcAsg5AAQguAAgdgegAgjhDQgRARgEAeIBxAAIAAgDQgCgdgOgQQgOgRgYAAQgWAAgQASg");
	this.shape_5.setTransform(85.3,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA3ByIg3irIg1CrIggAAIhCjiIAmAAIAtCpIA1ipIAfAAIA2CsIArisIAnAAIhCDig");
	this.shape_6.setTransform(57.5,3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSChIAAlBIAlAAIAAFBg");
	this.shape_7.setTransform(25.5,-0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhHBjQgWgTAAgdQAAgkAbgSQAbgUAwAAIAmAAIAAgSQAAgUgMgMQgNgMgWAAQgVAAgOAKQgOALAAAPIgnAAQAAgRAMgQQAMgQAVgJQAUgKAYAAQAnAAAXAUQAWAUABAiIAABoQAAAfAIASIAAAEIgpAAQgDgHgDgRQgbAcgkAAQgiAAgVgTgAg2AtQAAATAMAKQAMAKATAAQASAAAQgJQAQgKAIgPIAAguIgfAAQhGAAAAApg");
	this.shape_8.setTransform(8.5,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAyB0IAAiWQAAgYgLgMQgLgMgXAAQgSAAgOAKQgPAKgIARIAAChIgmAAIAAjiIAkAAIACAcQAaghApAAQBIAAAABSIAACVg");
	this.shape_9.setTransform(-15,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSCbIAAjiIAlAAIAADigAgQh0QgGgGAAgKQAAgJAGgGQAFgHALAAQAMAAAFAHQAGAGAAAJQAAAKgGAGQgFAHgMAAQgLAAgFgHg");
	this.shape_10.setTransform(-32.1,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgvCWQgYgKgMgTIAUgXQAZAeAkABQAbAAARgQQAPgQAAgdIAAgTQgYAagnAAQgoAAgYggQgZggAAg2QAAg1AYggQAZggApABQAoAAAYAdIACgZIAjAAIAADdQAAArgaAaQgaAZgsAAQgYAAgXgKgAgohoQgQAVAAAsQAAAmAQAWQAPAVAcAAQAlAAARghIAAhnQgSghgjAAQgcAAgQAXg");
	this.shape_11.setTransform(-49.8,8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTCbIAAjiIAmAAIAADigAgQh0QgGgGAAgKQAAgJAGgGQAGgHAKAAQALAAAGAHQAGAGAAAJQAAAKgGAGQgGAHgLAAQgKAAgGgHg");
	this.shape_12.setTransform(-66.6,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag2B0IAAjiIAmAAIABAaQASgfAjAAQALAAAGADIAAAkQgJgBgKAAQglAAgOAhIAACgg");
	this.shape_13.setTransform(-78,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhJBWQgdgggBg1IAAgCQAAghAOgbQANgbAXgOQAYgPAdAAQAuAAAdAgQAcAhAAA0IAAADQAAAhgMAaQgNAbgYAOQgXAPgfAAQgtAAgcgggAgtg+QgTAXABAqQgBAlATAXQAQAXAdAAQAeAAARgXQARgXAAgpQAAglgRgXQgSgYgdAAQgcAAgRAXg");
	this.shape_14.setTransform(-98.6,3.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AA3ByIg3irIg2CrIgfAAIhCjiIAnAAIAtCpIA1ipIAdAAIA2CsIAsisIAnAAIhCDig");
	this.shape_15.setTransform(-137.7,3.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhCBYQgdgfgBgzIAAgGQAAghAOgbQAMgbAYgPQAXgPAaAAQAsAAAYAeQAaAdAAA2IAAAPIiZAAQAAAiATAVQATAUAcAAQAUAAAOgIQAPgJALgNIAYASQgdAsg6AAQgsAAgdgegAgkhDQgQARgDAeIBxAAIAAgDQgDgdgNgQQgPgRgYAAQgXAAgQASg");
	this.shape_16.setTransform(-165,3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTCbIAAjiIAmAAIAADigAgQh0QgGgGAAgKQAAgJAGgGQAGgHAKAAQALAAAGAHQAGAGAAAJQAAAKgGAGQgGAHgLAAQgKAAgGgHg");
	this.shape_17.setTransform(-181.8,-0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRCZIhxkxIAsAAIBWD7IBXj7IAsAAIhyExg");
	this.shape_18.setTransform(-200.7,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("EgkMAHOIAAubMBIZAAAIAAObg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.7,-46.1,463.4,92.4);


(lib.StopDoingThat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGB8QgNgPAAgcIAAiJIgoAAIAAgdIAoAAIAAg2IAlAAIAAA2IApAAIAAAdIgpAAIAACJQAAANAFAHQAGAHANAAQAHAAALgDIAAAfQgPAEgOAAQgZAAgMgQg");
	this.shape.setTransform(142.4,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhGBgQgUgSAAgcQgBgjAbgTQAagSAvAAIAlAAIAAgSQAAgUgMgMQgMgLgWgBQgVAAgNALQgOAKAAAOIgmAAQAAgQAMgQQALgPAVgJQAUgJAXAAQAnAAAVAUQAWASAAAiIAABlQABAfAHARIAAAEIgnAAQgEgHgCgRQgaAcgkAAQghAAgVgTgAg1AsQAAASAMAKQAMAKATAAQAQAAARgJQAPgJAIgPIAAgtIgeAAQhFAAAAAog");
	this.shape_1.setTransform(124.8,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAyCdIAAiSQgBgYgKgLQgLgLgXAAQgRgBgOALQgOAKgIAPIAACdIgmAAIAAk6IAmAAIAAB5QAZggAoAAQBGABAABOIAACSg");
	this.shape_2.setTransform(101.8,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTCVIAAkJIhfAAIAAggIDlAAIAAAgIhfAAIAAEJg");
	this.shape_3.setTransform(77.8,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguCSQgXgKgMgSIATgWQAZAeAjAAQAbAAAPgQQAQgQAAgcIAAgTQgXAagmAAQgnAAgYgfQgZgfAAg2QAAgzAYgfQAYgfAoAAQAoAAAWAdIACgZIAjAAIAADYQAAArgaAZQgZAZgrAAQgXAAgXgLgAgnhmQgPAWAAAqQAAAlAPAVQAPAVAbAAQAkAAARggIAAhlQgSgggjAAQgaAAgQAWg");
	this.shape_4.setTransform(42.6,7.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAyBxIAAiSQgBgYgKgLQgLgMgXAAQgRAAgOAKQgOAKgIAQIAACdIgmAAIAAjdIAkAAIABAcQAaggAoAAQBGAAAABQIAACRg");
	this.shape_5.setTransform(19.7,3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTCXIAAjdIAlAAIAADdgAgQhxQgFgGAAgKQAAgJAFgGQAFgGALAAQALAAAFAGQAHAGAAAJQAAAKgHAGQgFAGgLAAQgLAAgFgGg");
	this.shape_6.setTransform(3.1,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHBUQgdggAAgzIAAgCQAAghANgZQANgaAXgPQAWgOAdAAQAtAAAcAfQAcAgAAAzIAAADQAAAggMAaQgNAagWAOQgYAOgdAAQgtAAgbgfgAgsg8QgRAWAAApQAAAlARAWQARAWAcAAQAcAAARgXQARgWAAgoQAAgkgRgXQgSgXgcAAQgbAAgRAXg");
	this.shape_7.setTransform(-14.1,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhrCVIAAkpIBVAAQAmAAAdARQAfARAPAgQARAgAAApIAAASQAAAqgQAgQgQAggfARQgeARgnAAgAhDB1IApAAQAsAAAagcQAZgdAAg0IAAgQQAAgzgYgcQgXgdgrAAIguAAg");
	this.shape_8.setTransform(-39.3,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhdCcIAAkzIAjAAIACAZQAXgdAoAAQAoAAAYAeQAXAfAAA1IAAAEQAAAxgXAfQgXAfgoAAQgnAAgYgZIAABrgAg3hcIAABpQARAeAjAAQAbAAAQgVQAQgWAAgqQAAglgQgWQgQgWgbAAQgiAAgSAfg");
	this.shape_9.setTransform(-75.3,7.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhIBUQgcggAAgzIAAgCQAAghANgZQANgaAXgPQAXgOAcAAQAtAAAdAfQAbAgAAAzIAAADQAAAggMAaQgMAagYAOQgXAOgeAAQgsAAgcgfgAgtg8QgRAWAAApQAAAlARAWQASAWAbAAQAdAAARgXQARgWAAgoQAAgkgRgXQgRgXgdAAQgbAAgSAXg");
	this.shape_10.setTransform(-99.5,3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGB8QgNgPAAgcIAAiJIgoAAIAAgdIAoAAIAAg2IAlAAIAAA2IApAAIAAAdIgpAAIAACJQAAANAFAHQAGAHANAAQAHAAALgDIAAAfQgPAEgOAAQgZAAgMgQg");
	this.shape_11.setTransform(-119,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0COQgbgMgOgVQgPgUAAgaIAoAAQAAAbAUAQQAUAPAhAAQAeAAARgNQARgMAAgWQAAgWgQgMQgPgMgngMQgzgOgXgVQgXgVAAgfQAAgjAcgXQAcgXAsAAQAfAAAZALQAXAMAOAVQANAVAAAZIgoAAQAAgbgRgQQgRgPggAAQgcAAgQANQgQAMAAAXQAAATAPAMQAPANAlAKQAlALAVALQAVANAKARQALARgBAWQABAlgdAWQgcAVgvAAQgfAAgagLg");
	this.shape_12.setTransform(-137.5,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("A3kDpIAAnRMAvJAAAIAAHRg");
	this.shape_13.setTransform(1.2,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-27.2,304.2,54.4);


(lib.SecretMessage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBBVQgcgdAAgyIAAgGQAAghANgZQAMgbAXgOQAWgPAaAAQArAAAYAdQAYAcAAA1IAAAPIiVAAQABAhASAUQASAUAcAAQAUAAAOgIQAOgIAKgOIAXASQgcArg3AAQgtAAgcgegAgjhCQgPARgEAeIBuAAIAAgDQgBgdgOgQQgOgQgYAAQgWAAgQARg");
	this.shape.setTransform(139.2,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguCSQgXgKgMgSIATgWQAZAeAjAAQAbAAAPgQQAQgQAAgcIAAgTQgXAagmAAQgnAAgYgfQgZgfAAg2QAAgzAYgfQAYgfAoAAQAoAAAWAdIACgZIAjAAIAADYQAAArgaAZQgZAZgrAAQgXAAgXgLgAgnhmQgPAWAAAqQAAAlAPAVQAPAVAbAAQAkAAARggIAAhlQgSgggjAAQgaAAgQAWg");
	this.shape_1.setTransform(115.6,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBgQgWgSABgcQAAgjAagTQAagSAvAAIAlAAIAAgSQAAgUgMgMQgMgLgWgBQgUAAgOALQgOAKAAAOIgmAAQAAgQAMgQQAMgPAUgJQAUgJAXAAQAmAAAWAUQAWASAAAiIAABlQAAAfAJARIAAAEIgpAAQgDgHgBgRQgbAcgkAAQghAAgUgTgAg0AsQAAASALAKQAMAKASAAQASAAAPgJQARgJAHgPIAAgtIgeAAQhEAAAAAog");
	this.shape_2.setTransform(92.9,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsBpQgUgJgMgRQgLgQAAgVIAmAAQABAUAOALQAOALAXAAQAVAAANgIQANgKAAgOQAAgPgLgIQgMgKgcgGQgdgFgQgIQgRgJgIgMQgJgLAAgRQAAgbAXgTQAXgTAjAAQAmAAAYAUQAXATAAAeIgmAAQAAgQgNgLQgOgLgUAAQgTAAgMAJQgMAJAAAPQAAAOALAGQALAIAcAGQAcAGARAJQASAIAJANQAIAMAAASQAAAdgYASQgXASgmAAQgaAAgVgKg");
	this.shape_3.setTransform(70.7,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsBpQgUgJgMgRQgLgQAAgVIAmAAQABAUAOALQAOALAXAAQAVAAANgIQANgKAAgOQAAgPgLgIQgMgKgcgGQgdgFgQgIQgRgJgIgMQgJgLAAgRQAAgbAXgTQAXgTAjAAQAmAAAYAUQAXATAAAeIgmAAQAAgQgNgLQgOgLgUAAQgTAAgMAJQgMAJAAAPQAAAOALAGQALAIAcAGQAcAGARAJQASAIAJANQAIAMAAASQAAAdgYASQgXASgmAAQgaAAgVgKg");
	this.shape_4.setTransform(49.1,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhBBVQgcgdAAgyIAAgGQAAghANgZQAMgbAXgOQAWgPAaAAQArAAAYAdQAYAcAAA1IAAAPIiVAAQABAhASAUQASAUAcAAQAUAAAOgIQAOgIAKgOIAXASQgcArg3AAQgtAAgcgegAgjhCQgPARgEAeIBuAAIAAgDQgBgdgOgQQgOgQgYAAQgWAAgQARg");
	this.shape_5.setTransform(27.4,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABtCVIAAh0IAEh9IhiDxIgdAAIhijwIAEB8IAAB0IgoAAIAAkpIAzAAIBhDyIBijyIAzAAIAAEpg");
	this.shape_6.setTransform(-2.3,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGB8QgNgPAAgcIAAiJIgoAAIAAgdIAoAAIAAg2IAlAAIAAA2IApAAIAAAdIgpAAIAACJQAAANAFAHQAGAHANAAQAHAAALgDIAAAfQgPAEgOAAQgZAAgMgQg");
	this.shape_7.setTransform(-38.5,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBBVQgcgdAAgyIAAgGQAAghANgZQAMgbAXgOQAWgPAaAAQArAAAYAdQAYAcAAA1IAAAPIiVAAQABAhASAUQASAUAcAAQAUAAAOgIQAOgIAKgOIAXASQgcArg3AAQgtAAgcgegAgjhCQgPARgEAeIBuAAIAAgDQgBgdgOgQQgOgQgYAAQgWAAgQARg");
	this.shape_8.setTransform(-55.6,3.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BxIAAjdIAlAAIABAZQASgdAiAAQALAAAGADIAAAjQgJgCgKABQgkAAgOAfIAACdg");
	this.shape_9.setTransform(-72.9,3.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhCBVQgbgfAAg0IAAgGQAAgfAMgaQAMgZAWgOQAXgOAdAAQAmAAAYAWQAZAXACAkIgkAAQgCgWgPgOQgOgOgWAAQgcAAgQAVQgPAVgBAnIAAAGQAAAnAQAVQAQAUAcAAQAVAAAPgMQAPgNACgSIAkAAQgBATgNARQgMARgUALQgUAKgXAAQgsAAgbgeg");
	this.shape_10.setTransform(-91.9,3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhBBVQgcgdAAgyIAAgGQAAghANgZQAMgbAXgOQAWgPAaAAQArAAAYAdQAYAcAAA1IAAAPIiVAAQABAhASAUQASAUAcAAQAUAAAOgIQAOgIAKgOIAXASQgcArg3AAQgtAAgcgegAgjhCQgPARgEAeIBuAAIAAgDQgBgdgOgQQgOgQgYAAQgWAAgQARg");
	this.shape_11.setTransform(-114.1,3.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0COQgagMgPgVQgOgUAAgaIAnAAQAAAbAUAQQAUAPAgAAQAgAAAQgNQARgMAAgWQAAgWgPgMQgQgMgngMQgzgOgXgVQgXgVAAgfQAAgjAcgXQAcgXAsAAQAfAAAYALQAYAMANAVQAOAVAAAZIgoAAQAAgbgRgQQgRgPggAAQgcAAgQANQgRAMAAAXQAAATAQAMQAQANAkAKQAlALAVALQAVANALARQAKARgBAWQAAAlgcAWQgcAVgwAAQgdAAgbgLg");
	this.shape_12.setTransform(-137.7,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("A3yEQIAAofMAvlAAAIAAIfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.2,-27.2,304.6,54.4);


(lib.PostMortem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB1BxIAAiRQAAgYgKgMQgLgMgaAAQgVAAgOANQgNAMgDAWIAACSIglAAIAAiQQAAgxgvAAQgmAAgOAgIAAChIgmAAIAAjdIAlAAIAAAZQAZgdApAAQAvAAAPAkQALgRATgJQARgKAYAAQBJAAACBNIAACUg");
	this.shape.setTransform(259.5,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBVQgcgdAAgyIAAgGQAAghANgZQAMgbAXgOQAWgPAaAAQArAAAYAdQAYAcAAA1IAAAPIiVAAQABAhASAUQASAUAcAAQAUAAAOgIQAOgIAKgOIAXASQgcArg3AAQgtAAgcgegAgjhCQgPARgEAeIBuAAIAAgDQgBgdgOgQQgOgQgYAAQgWAAgQARg");
	this.shape_1.setTransform(230.1,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGB8QgNgPAAgcIAAiJIgoAAIAAgdIAoAAIAAg2IAlAAIAAA2IApAAIAAAdIgpAAIAACJQAAANAFAHQAGAHANAAQAHAAALgDIAAAfQgPAEgOAAQgZAAgMgQg");
	this.shape_2.setTransform(211.3,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BxIAAjdIAlAAIABAZQASgdAiAAQALAAAGADIAAAjQgJgCgKABQgkAAgOAfIAACdg");
	this.shape_3.setTransform(199.1,3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIBUQgcggAAgzIAAgCQAAghANgZQANgaAXgPQAXgOAcAAQAtAAAcAfQAcAgAAAzIAAADQAAAggMAaQgMAagYAOQgXAOgeAAQgsAAgcgfgAgtg8QgRAWAAApQAAAlARAWQARAWAcAAQAdAAARgXQARgWAAgoQAAgkgRgXQgRgXgdAAQgbAAgSAXg");
	this.shape_4.setTransform(178.9,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABtCVIAAh0IAEh9IhiDxIgdAAIhijwIAEB8IAAB0IgoAAIAAkpIAzAAIBhDyIBijyIAzAAIAAEpg");
	this.shape_5.setTransform(148.6,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxAPIAAgeIBjAAIAAAeg");
	this.shape_6.setTransform(124.5,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGB8QgNgPAAgcIAAiJIgoAAIAAgdIAoAAIAAg2IAlAAIAAA2IApAAIAAAdIgpAAIAACJQAAANAFAHQAGAHANAAQAHAAALgDIAAAfQgPAEgOAAQgZAAgMgQg");
	this.shape_7.setTransform(111.2,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsBpQgUgJgMgRQgLgQAAgVIAmAAQABAUAOALQAOALAXAAQAVAAANgIQANgKAAgOQAAgPgLgIQgMgKgcgGQgdgFgQgIQgRgJgIgMQgJgLAAgRQAAgbAXgTQAXgTAjAAQAmAAAYAUQAXATAAAeIgmAAQAAgQgNgLQgOgLgUAAQgTAAgMAJQgMAJAAAPQAAAOALAGQALAIAcAGQAcAGARAJQASAIAJANQAIAMAAASQAAAdgYASQgXASgmAAQgaAAgVgKg");
	this.shape_8.setTransform(94.2,3.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhHBUQgdggAAgzIAAgCQAAghANgZQANgaAXgPQAWgOAdAAQAtAAAcAfQAcAgAAAzIAAADQAAAggMAaQgNAagWAOQgYAOgdAAQgtAAgbgfgAgsg8QgRAWAAApQAAAlARAWQARAWAcAAQAcAAARgXQARgWAAgoQAAgkgRgXQgSgXgcAAQgbAAgRAXg");
	this.shape_9.setTransform(71.4,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhrCVIAAkpIBuAAQAxAAAbAZQAcAZAAApQAAArgbAXQgbAXgyAAIhGAAIAAB1gAhDAAIBGAAQAgAAAQgOQARgPAAgcQAAgbgRgQQgQgQgeAAIhIAAg");
	this.shape_10.setTransform(47.2,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhlCVIAAkpIBiAAQAwAAAYAUQAZAUAAAnQAAAVgMAQQgMAQgVAJQAZAHAOASQAOATAAAaQAAAogaAXQgaAXgwAAgAg9B1IBAAAQAbAAAQgOQAQgOAAgZQAAg2g7AAIhAAAgAg9gVIA7AAQAZAAAQgNQAPgNAAgWQAAgZgOgLQgPgLgcAAIg6AAg");
	this.shape_11.setTransform(10,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhcCCQgbgXAAgmQAAgVANgTQALgSAigXQgUgYgGgPQgHgOAAgPQAAgiAUgTQAUgTAjAAQAdAAAUASQAUARAAAcQAAASgJAPQgJAPgXARIgUAQIBBBPQAOgbAAghIAiAAQAAA1gZAiIArAzIguAAIgUgXQgPANgUAHQgUAHgVAAQgsAAgagXgAguARQgjAZAAAbQAAAYAQAPQAQAOAbAAQAdAAAZgXIhIhXgAguhuQgKALAAASQAAAUAYAdIAYgRQANgKAFgJQAFgJAAgMQAAgOgKgJQgJgJgQAAQgRAAgJALg");
	this.shape_12.setTransform(-15.7,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4CCIgCAZIgjAAIAAk6IAmAAIAAB2QAXgcAogBQAoABAXAeQAXAeAAA1IAAADQAAAzgXAfQgYAegnABQgpgBgXgdgAg3gCIAABeQASAkAlgBQAaAAAPgUQAPgWAAgqQAAgngPgUQgPgWgbABQgmgBgQAkg");
	this.shape_13.setTransform(-41,-0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSCdIAAk6IAlAAIAAE6g");
	this.shape_14.setTransform(-68.7,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhGBgQgUgSgBgcQABgjAagTQAagSAvAAIAlAAIAAgSQAAgUgMgMQgMgLgWgBQgVAAgNALQgOAKAAAOIgmAAQAAgQAMgQQALgPAVgJQAUgJAXAAQAnAAAVAUQAWASABAiIAABlQAAAfAHARIAAAEIgoAAQgCgHgDgRQgaAcgkAAQghAAgVgTgAg1AsQAAASAMAKQAMAKASAAQARAAARgJQAPgJAIgPIAAgtIgeAAQhFAAAAAog");
	this.shape_15.setTransform(-85.2,3.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTCXIAAjdIAmAAIAADdgAgQhxQgFgGgBgKQABgJAFgGQAGgGAKAAQALAAAFAGQAHAGgBAJQABAKgHAGQgFAGgLAAQgKAAgGgGg");
	this.shape_16.setTransform(-101.7,-0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhCBVQgbgfAAg0IAAgGQAAgfANgaQALgZAXgOQAVgOAeAAQAmAAAYAWQAZAXABAkIgkAAQgBgWgPgOQgPgOgVAAQgcAAgQAVQgPAVAAAnIAAAGQAAAnAPAVQAQAUAcAAQAUAAAPgMQAQgNABgSIAkAAQAAATgMARQgNARgUALQgUAKgXAAQgsAAgbgeg");
	this.shape_17.setTransform(-117.6,3.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSCXIAAjdIAlAAIAADdgAgQhxQgFgGgBgKQABgJAFgGQAGgGAKAAQALAAAGAGQAFAGAAAJQAAAKgFAGQgGAGgLAAQgKAAgGgGg");
	this.shape_18.setTransform(-133.9,-0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfCgIAAjAIgjAAIAAgdIAjAAIAAgXQAAgkATgTQASgUAjAAQANAAANAEIgCAeQgKgBgKAAQgTAAgKALQgKAKAAAUIAAAYIAvAAIAAAdIgvAAIAADAg");
	this.shape_19.setTransform(-145.7,-1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgfCgIAAjAIgjAAIAAgdIAjAAIAAgXQAAgkATgTQASgUAjAAQANAAANAEIgCAeQgKgBgLAAQgSAAgKALQgKAKAAAUIAAAYIAvAAIAAAdIgvAAIAADAg");
	this.shape_20.setTransform(-160.3,-1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag9CIQgbgRgPggQgQggAAgrIAAgUQAAgrAPghQAPghAbgSQAcgRAiAAQAkAAAbARQAcARAOAhQAPAhAAAsIAAASQAAArgPAhQgOAhgcARQgbARgkAAQgiAAgbgRgAg6haQgVAcgBAzIAAAVQAAAzAWAeQAVAdAlAAQAmAAAVgcQAVgcABg0IAAgVQAAg1gVgcQgWgdgmAAQgkAAgWAdg");
	this.shape_21.setTransform(-182.7,-0.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhBBVQgcgdAAgyIAAgGQAAghANgZQAMgbAXgOQAWgPAaAAQArAAAYAdQAYAcAAA1IAAAPIiVAAQABAhASAUQASAUAcAAQAUAAAOgIQAOgIAKgOIAXASQgcArg3AAQgtAAgcgegAgjhCQgPARgEAeIBuAAIAAgDQgBgdgOgQQgOgQgYAAQgWAAgQARg");
	this.shape_22.setTransform(-218.5,3.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAyCdIAAiSQgBgYgKgLQgLgLgXAAQgRgBgOALQgOAKgIAPIAACdIgmAAIAAk6IAmAAIAAB5QAZggAoAAQBGABAABOIAACSg");
	this.shape_23.setTransform(-241.4,-1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSCVIAAkJIhhAAIAAggIDnAAIAAAgIhhAAIAAEJg");
	this.shape_24.setTransform(-265.4,-0.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("EgrWADdIAAm4MBWtAAAIAAG4g");
	this.shape_25.setTransform(-2.5,-5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-280,-27.2,560.1,54.4);


(lib.ogate_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBBVQgcgdAAgyIAAgGQAAghANgZQAMgbAXgOQAWgPAaAAQArAAAYAdQAYAcAAA1IAAAPIiVAAQABAhASAUQASAUAcAAQAUAAAOgIQAOgIAKgOIAXASQgcArg3AAQgtAAgcgegAgjhCQgPARgEAeIBuAAIAAgDQgBgdgOgQQgOgQgYAAQgWAAgQARg");
	this.shape.setTransform(44.6,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGB8QgNgPAAgcIAAiJIgoAAIAAgdIAoAAIAAg2IAlAAIAAA2IApAAIAAAdIgpAAIAACJQAAANAFAHQAGAHANAAQAHAAALgDIAAAfQgPAEgOAAQgZAAgMgQg");
	this.shape_1.setTransform(25.8,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBgQgWgSAAgcQAAgjAbgTQAagSAvAAIAlAAIAAgSQAAgUgMgMQgMgLgWgBQgVAAgNALQgOAKAAAOIgmAAQAAgQAMgQQAMgPAUgJQAUgJAXAAQAmAAAWAUQAWASABAiIAABlQgBAfAJARIAAAEIgpAAQgDgHgBgRQgbAcgkAAQghAAgUgTgAg0AsQAAASALAKQAMAKASAAQASAAAPgJQARgJAHgPIAAgtIgeAAQhEAAAAAog");
	this.shape_2.setTransform(8.2,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2CIQgdgRgPgfQgQggAAgqIAAgZQAAhDAfglQAgglA4AAQAvAAAdAYQAcAXAGAsIgoAAQgLg7g7AAQgnAAgTAcQgVAbgBA1IAAAYQAAAyAYAdQAXAeAmAAQAWAAAQgFQARgFALgLIAAhDIhFAAIAAggIBsAAIAABtQgPAWgbALQgcAKgjAAQgkAAgcgRg");
	this.shape_3.setTransform(-17.8,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHBUQgdggAAgzIAAgCQAAghANgZQANgaAXgPQAWgOAdAAQAtAAAcAfQAcAgAAAzIAAADQAAAggMAaQgNAagWAOQgYAOgdAAQgtAAgbgfgAgsg8QgRAWAAApQAAAlARAWQARAWAcAAQAcAAARgXQARgWAAgoQAAgkgRgXQgSgXgcAAQgbAAgRAXg");
	this.shape_4.setTransform(-43.8,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ApBEQIAAofISDAAIAAIfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.7,-27.2,115.5,54.4);


(lib.Misc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAQQgFgGAAgKQAAgIAFgHQAGgHALAAQALAAAHAHQAFAHABAIQgBAKgFAGQgHAHgLAAQgLAAgGgHg");
	this.shape.setTransform(44.9,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCBVQgagfAAg0IAAgGQAAgfALgaQAMgZAXgOQAVgOAeAAQAlAAAZAWQAZAXABAkIgkAAQgBgWgOgOQgPgOgWAAQgcAAgPAVQgRAVABAnIAAAGQAAAnAPAVQAQAUAcAAQAUAAAQgMQAPgNABgSIAkAAQgBATgMARQgMARgUALQgUAKgXAAQgsAAgbgeg");
	this.shape_1.setTransform(28.9,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsBpQgUgJgMgRQgLgQAAgVIAmAAQABAUAOALQAOALAXAAQAVAAANgIQANgKAAgOQAAgPgLgIQgMgKgcgGQgdgFgQgIQgRgJgIgMQgJgLAAgRQAAgbAXgTQAXgTAjAAQAmAAAYAUQAXATAAAeIgmAAQAAgQgNgLQgOgLgUAAQgTAAgMAJQgMAJAAAPQAAAOALAGQALAIAcAGQAcAGARAJQASAIAJANQAIAMAAASQAAAdgYASQgXASgmAAQgaAAgVgKg");
	this.shape_2.setTransform(6.8,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSCXIAAjdIAkAAIAADdgAgQhxQgGgGAAgKQAAgJAGgGQAGgGAKAAQALAAAGAGQAFAGAAAJQAAAKgFAGQgGAGgLAAQgKAAgGgGg");
	this.shape_3.setTransform(-9,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABtCVIAAh0IAEh9IhiDxIgdAAIhijwIAEB8IAAB0IgoAAIAAkpIAzAAIBhDyIBijyIAzAAIAAEpg");
	this.shape_4.setTransform(-32.5,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AoADhIAAnBIQBAAIAAHBg");
	this.shape_5.setTransform(1.5,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.8,-27.2,105.7,54.4);


(lib.MenuButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2.8,0,1).p("AhohUIDRAAAhoAFIDRAAAhoBVIDRAA");
	this.shape.setTransform(0.2,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ah4B4QgygxABhHQgBhGAygyQAzgxBFAAQBGAAAzAxQAyAygBBGQABBHgyAxQgzAyhGAAQhFAAgzgygABqBPIjRAAgABqAAIjRAAgABqhbIjRAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34.1,34.1);


(lib.MeltdownAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUBKQAMgJAIgUQAGgTAAgYIAAgCQAAgQgDgOQgDgOgGgLQgGgLgIgHIADgJQALAGAIANQAJAOAFAQQAFARAAAQQAAASgFAQQgFAQgJANQgIAOgLAFg");
	this.shape.setTransform(447.8,76.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTA6IAAgMIADAAQARgBAKgJQAJgJABgTQgEAFgHADQgGAEgHAAQgJAAgIgFQgHgFgEgJQgEgIAAgKQAAgMAEgJQAFgJAIgFQAIgFAKAAQAQAAAKANQAKANAAAVIAAAFQAAAggNAPQgOAPgZABgAgPglQgGAHAAAMQAAAMAGAGQAFAIAKAAQAGAAAGgFQAGgDADgHIAAgFQAAgPgGgJQgGgJgJAAQgJAAgGAIg");
	this.shape_1.setTransform(440.8,75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAtQgKgMAAgUIAAgGQAAgeAOgRQANgQAZgBIADAAIAAANIgDAAQgRAAgJAKQgKAJgBASQAJgKAOAAQAPAAAJAKQAJAKAAAQQAAASgKAKQgJALgQAAQgQAAgKgNgAgMgBQgGAEgCAGIAAAGQAAAOAGAIQAGAJAJAAQAJAAAGgHQAGgIAAgLQAAgMgGgHQgGgGgJAAQgGAAgHAEg");
	this.shape_2.setTransform(432.1,75.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAuQgIgMgBgYIAAgSQAAgZAJgMQAJgNARAAQASAAAJANQAIALABAZIAAASQAAAZgJAMQgIAMgTAAQgRAAgJgMgAgQglQgEAIAAASIAAAWQgBASAGAJQAFAJAKAAQALAAAFgJQAFgIAAgSIAAgWQABgTgGgIQgFgIgLAAQgKAAgGAIg");
	this.shape_3.setTransform(423,75.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgjA6IAAgLIAmgrQAJgJADgGQADgHAAgGQAAgJgFgGQgFgGgIAAQgLAAgGAGQgGAHAAALIgOAAQAAgQAKgKQAKgKARAAQAPAAAJAJQAJAIAAAOQAAARgVAWIgeAhIA4AAIAAAMg");
	this.shape_4.setTransform(414,75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAA5IAHggIgUAAIgGAgIgLAAIAGggIgSAAIAAgLIAUAAIAFgbIgUAAIAAgKIAXAAIAGghIAKAAIgFAhIATAAIAHghIALAAIgHAhIAQAAIAAAKIgSAAIgFAbIASAAIAAALIgUAAIgGAggAgLAOIAUAAIAFgbIgTAAg");
	this.shape_5.setTransform(404.9,75.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AATArIAAg3QAAgJgEgEQgFgFgIAAQgGAAgGAEQgFAEgDAGIAAA7IgOAAIAAhTIANAAIABAKQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_6.setTransform(395.2,76.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAgQgLgMABgUIAAAAQAAgMAEgKQAGgKAIgFQAJgGAKAAQARAAALAMQAKAMAAATIAAABQABAMgFAKQgFAKgJAFQgJAGgLAAQgQAAgLgMgAgRgWQgGAIAAAPQAAAOAGAJQAHAIAKAAQALAAAGgJQAHgIAAgPQAAgOgHgIQgGgJgLAAQgJAAgIAJg");
	this.shape_7.setTransform(386.2,76.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRA4QgJgEgEgHIAHgJQAJAMAOAAQAJAAAGgGQAGgGAAgLIAAgHQgJAKgOAAQgOAAgKgMQgJgMAAgUQAAgTAJgMQAKgMAPAAQAOAAAJALIAAgJIAOAAIAABRQAAARgKAJQgKAKgQAAQgIAAgJgEgAgOgmQgGAIAAAQQAAAOAGAHQAGAJAJAAQAOAAAGgNIAAglQgHgNgNAAQgJAAgGAJg");
	this.shape_8.setTransform(376.9,78.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZA7IgFgBIAAgMIAEABQAHAAAEgDQAEgDADgIIADgJIgehSIAQAAIAUA+IAUg+IAPAAIgiBgQgHAVgRAAg");
	this.shape_9.setTransform(368.8,78.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_10.setTransform(363.1,74.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbAgQgLgMABgUIAAAAQAAgMAEgKQAGgKAIgFQAJgGAKAAQARAAALAMQALAMgBATIAAABQABAMgFAKQgFAKgJAFQgIAGgMAAQgQAAgLgMgAgRgWQgGAIAAAPQAAAOAGAJQAHAIAKAAQALAAAGgJQAHgIAAgPQAAgOgHgIQgGgJgLAAQgJAAgIAJg");
	this.shape_11.setTransform(356.6,76.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgoA5IAAhxIApAAQATAAALAKQAKAJAAAQQAAAQgKAIQgLAJgTAAIgaAAIAAAtgAgZAAIAaAAQAMAAAHgFQAGgFAAgLQAAgKgGgGQgHgGgLgBIgbAAg");
	this.shape_12.setTransform(347.3,75.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_13.setTransform(336,74.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_14.setTransform(329.9,76.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AATAqIgTgfIgTAfIgRAAIAdgqIgcgpIARAAIASAfIASgfIARAAIgbApIAcAqg");
	this.shape_15.setTransform(321.6,76.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGA6IAAhUIANAAIAABUgAgFgqQgCgDAAgDQAAgEACgCQACgDADAAQAFAAABADQADACAAAEQAAADgDADQgBACgFAAQgDAAgCgCg");
	this.shape_16.setTransform(315.7,75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoA5IAAhxIApAAQATAAAKAKQALAJAAAQQAAAQgLAIQgKAJgTAAIgaAAIAAAtgAgZAAIAaAAQAMAAAGgFQAHgFAAgLQAAgKgHgGQgGgGgLgBIgbAAg");
	this.shape_17.setTransform(309,75.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_18.setTransform(295.5,76.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AATA8IAAg4QAAgIgEgEQgFgFgIAAQgGAAgGAEQgFAEgDAFIAAA8IgOAAIAAh3IAOAAIAAAtQAKgLAOAAQAbAAAAAdIAAA4g");
	this.shape_19.setTransform(286.8,74.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHA5IAAhlIgkAAIAAgMIBXAAIAAAMIglAAIAABlg");
	this.shape_20.setTransform(277.6,75.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgBA/QgTgaAAglQABgRAEgQQAFgQAJgOQAIgNAKgGIAEAKQgMAJgHASQgGASgBAWIAAAGQAAAeAKAWQAGANAKAIIgEAIQgKgFgIgOg");
	this.shape_21.setTransform(270.5,76.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AATArIAAg3QAAgJgEgEQgFgFgIAAQgGAAgGAEQgFAEgDAGIAAA7IgOAAIAAhTIANAAIABAKQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_22.setTransform(259,76.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaAgQgMgMAAgUIAAAAQABgMAEgKQAFgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQgBAMgEAKQgFAKgIAFQgKAGgLAAQgQAAgKgMgAgQgWQgHAIAAAPQAAAOAHAJQAGAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgKAAgGAJg");
	this.shape_23.setTransform(250,76.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRA4QgJgEgEgHIAHgJQAJAMAOAAQAJAAAGgGQAGgGAAgLIAAgHQgJAKgOAAQgOAAgKgMQgJgMAAgUQAAgTAJgMQAKgMAPAAQAOAAAJALIAAgJIAOAAIAABRQAAARgKAJQgKAKgQAAQgIAAgJgEgAgOgmQgGAIAAAQQAAAOAGAHQAGAJAJAAQAOAAAGgNIAAglQgHgNgNAAQgJAAgGAJg");
	this.shape_24.setTransform(240.7,78.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZA7IgFgBIAAgMIAEABQAHAAAEgDQAEgDADgIIADgJIgehSIAQAAIAUA+IAUg+IAPAAIgiBgQgHAVgRAAg");
	this.shape_25.setTransform(232.6,78.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_26.setTransform(226.9,74.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgaAgQgLgMAAgUIAAAAQAAgMAEgKQAFgKAJgFQAJgGAKAAQARAAALAMQAKAMAAATIAAABQAAAMgEAKQgFAKgJAFQgJAGgLAAQgQAAgKgMgAgQgWQgHAIAAAPQAAAOAHAJQAGAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgJAAgHAJg");
	this.shape_27.setTransform(220.4,76.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgoA5IAAhxIApAAQATAAAKAKQALAJAAAQQAAAQgLAIQgJAJgUAAIgaAAIAAAtgAgZAAIAaAAQAMAAAGgFQAHgFAAgLQAAgKgHgGQgGgGgLgBIgbAAg");
	this.shape_28.setTransform(211.1,75.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_29.setTransform(199.8,74.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_30.setTransform(193.7,76.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AATAqIgTgfIgSAfIgRAAIAcgqIgbgpIARAAIARAfIASgfIASAAIgcApIAdAqg");
	this.shape_31.setTransform(185.4,76.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA6IAAhUIANAAIAABUgAgFgqQgCgDgBgDQABgEACgCQACgDADAAQAEAAACADQACACAAAEQAAADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_32.setTransform(179.5,75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgoA5IAAhxIApAAQATAAALAKQAKAJAAAQQAAAQgKAIQgKAJgUAAIgaAAIAAAtgAgZAAIAaAAQAMAAAHgFQAGgFAAgLQAAgKgGgGQgHgGgLgBIgbAAg");
	this.shape_33.setTransform(172.8,75.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_34.setTransform(159.3,76.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AATA8IAAg4QAAgIgEgEQgFgFgIAAQgGAAgGAEQgFAEgDAFIAAA8IgOAAIAAh3IAOAAIAAAtQAKgLAOAAQAbAAAAAdIAAA4g");
	this.shape_35.setTransform(150.6,74.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGA5IAAhlIglAAIAAgMIBXAAIAAAMIglAAIAABlg");
	this.shape_36.setTransform(141.4,75.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgZA7IgFgBIAAgMIAEABQAHAAAEgDQAEgDADgIIADgJIgehSIAQAAIAUA+IAUg+IAPAAIgiBgQgHAVgRAAg");
	this.shape_37.setTransform(128.9,78.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgVAxIgBAKIgNAAIAAh3IAPAAIAAAtQAIgLAPAAQAPAAAJAMQAJALAAAUIAAABQAAATgJAMQgJAMgPAAQgPAAgJgMgAgUAAIAAAjQAGAOAOAAQAKAAAGgIQAFgJAAgQQAAgOgFgIQgGgIgKAAQgOAAgGAOg");
	this.shape_38.setTransform(120.8,74.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgGA5IAAhxIAOAAIAABxg");
	this.shape_39.setTransform(110,75.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAAA5QgSAAgLgKQgLgJAAgSIAAhMIAPAAIAABLQAAANAGAGQAHAIAMgBQAMABAHgIQAHgGAAgNIAAhLIAPAAIAABLQAAAQgKALQgKAKgRABg");
	this.shape_40.setTransform(102.6,75.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_41.setTransform(89.3,76.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFAqIgehTIAPAAIAUBAIAVhAIAPAAIgeBTg");
	this.shape_42.setTransform(81.1,76.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgGA6IAAhUIANAAIAABUgAgFgqQgCgDAAgDQAAgEACgCQACgDADAAQAEAAACADQACACABAEQgBADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_43.setTransform(75.3,75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgCAvQgEgFAAgLIAAg0IgQAAIAAgLIAQAAIAAgUIANAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQACADAGAAIAGgBIAAAMIgLABQgJAAgFgGg");
	this.shape_44.setTransform(70.4,75.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAgQgLgLAAgUIAAgCQAAgMAFgKQAFgJAIgGQAIgFALAAQAOAAAKAJQAJAIABAOIgOAAQgBgIgFgGQgGgFgIAAQgKAAgGAIQgGAIAAAPIAAACQAAAOAGAIQAGAIAKAAQAIAAAGgFQAFgEABgHIAOAAQgBAHgEAGQgFAHgIAEQgHAEgJAAQgQAAgKgMg");
	this.shape_45.setTransform(63.9,76.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHARAAIAPAAIAAgHQgBgHgEgFQgEgEgJAAQgHAAgGAEQgEAEAAAFIgQAAQAAgGAGgGQAEgGAHgDQAIgEAIAAQAPAAAIAIQAJAHAAANIAAAlQAAAMADAHIAAABIgQAAIgBgJQgLALgNAAQgMAAgIgHgAgTARQgBAHAFADQAFAEAGAAQAGAAAHgDQAFgEAEgFIAAgSIgMAAQgZAAAAAQg");
	this.shape_46.setTransform(55.3,76.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgUArIAAhTIAPAAIAAAJQAGgLANAAIAHABIAAANIgIAAQgNAAgFAMIAAA7g");
	this.shape_47.setTransform(48.7,76.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_48.setTransform(41.4,76.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgBAvQgGgFAAgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAFAAIAGgBIAAAMIgLABQgKAAgDgGg");
	this.shape_49.setTransform(34.2,75.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AATArIAAg3QAAgJgEgEQgFgFgIAAQgGAAgGAEQgFAEgDAGIAAA7IgOAAIAAhTIANAAIABAKQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_50.setTransform(27.4,76.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_51.setTransform(20.8,75.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgGAGQgCgCAAgEQAAgDACgCQACgDAEAAQAEAAADADQACACAAADQAAAEgCACQgDADgEAAQgEAAgCgDg");
	this.shape_52.setTransform(12.5,80);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUBKQAMgJAIgUQAGgTAAgYIAAgCQAAgQgDgOQgDgOgGgLQgGgLgIgHIADgJQALAGAIANQAJAOAFAQQAFARAAAQQAAASgFAQQgFAQgJANQgIAOgLAFg");
	this.shape_53.setTransform(7.3,76.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgaAuQgJgMAAgYIAAgSQAAgZAJgMQAJgNARAAQASAAAJANQAIALABAZIAAASQAAAZgJAMQgIAMgTAAQgRAAgJgMgAgQglQgEAIAAASIAAAWQgBASAGAJQAFAJAKAAQALAAAFgJQAFgIAAgSIAAgWQABgTgGgIQgFgIgLAAQgKAAgGAIg");
	this.shape_54.setTransform(0.4,75.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgTA6IAAgMIADAAQARgBAKgJQAJgJABgTQgEAFgHADQgGAEgHAAQgJAAgIgFQgHgFgEgJQgEgIAAgKQAAgMAEgJQAFgJAIgFQAIgFAKAAQAQAAAKANQAKANAAAVIAAAFQAAAggNAPQgOAPgZABgAgPglQgGAHAAAMQAAAMAGAGQAFAIAKAAQAGAAAGgFQAGgDADgHIAAgFQAAgPgGgJQgGgJgJAAQgJAAgGAIg");
	this.shape_55.setTransform(-8.7,75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgjA6IAAgLIAmgrQAJgJADgGQADgHAAgGQAAgJgFgGQgFgGgIAAQgLAAgGAGQgGAHAAALIgOAAQAAgQAKgKQAKgKARAAQAPAAAJAJQAJAIAAAOQAAARgVAWIgeAhIA4AAIAAAMg");
	this.shape_56.setTransform(-17.5,75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgZAyQgKgJAAgOIAPAAQAAAJAFAGQAGAFAJAAQALAAAFgFQAGgGAAgKQgBgLgGgFQgGgFgKAAIgLAAIAAgLIALAAQAJAAAGgFQAGgGAAgJQAAgTgUAAQgIgBgGAGQgFAFgBAJIgOAAQAAgOAKgJQAKgIAOgBQAQAAAJAJQAJAIAAAQQAAAHgEAIQgGAGgIAEQAKABAFAIQAFAGAAALQAAAPgKAIQgKAJgQAAQgPABgKgJg");
	this.shape_57.setTransform(-26.7,75.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAAA5IAHggIgUAAIgGAgIgLAAIAGggIgSAAIAAgLIAUAAIAFgbIgUAAIAAgKIAXAAIAGghIAKAAIgFAhIATAAIAHghIALAAIgHAhIAQAAIAAAKIgSAAIgFAbIASAAIAAALIgUAAIgGAggAgLAOIAUAAIAFgbIgTAAg");
	this.shape_58.setTransform(-35.6,75.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_59.setTransform(-45.1,76.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgaAxQgJgMAAgUIAAgBQAAgSAJgMQAKgMAPAAQANAAAJAKIAAgsIAPAAIAAB3IgOAAIAAgJQgJALgPAAQgOAAgKgMgAgOgFQgGAHAAAQQAAAOAGAIQAGAJAJAAQAOAAAGgNIAAgmQgGgMgOAAQgJAAgGAJg");
	this.shape_60.setTransform(-54.1,74.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgGA6IAAhUIANAAIAABUgAgFgqQgCgDgBgDQABgEACgCQACgDADAAQAEAAACADQACACAAAEQAAADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_61.setTransform(-60.4,75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgUArIAAhTIAOAAIAAAJQAHgLANAAIAGABIAAANIgHAAQgNAAgFAMIAAA7g");
	this.shape_62.setTransform(-64.6,76.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgaAgQgMgMAAgUIAAAAQABgMAFgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQgBAMgEAKQgFAKgIAFQgKAGgLAAQgQAAgKgMgAgQgWQgHAIAAAPQAAAOAHAJQAGAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgKAAgGAJg");
	this.shape_63.setTransform(-72.3,76.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgZAjQgHgHAAgQIAAg2IAOAAIAAA1QAAAUAQAAQAQAAAFgNIAAg8IAOAAIAABUIgNAAIgBgJQgIAKgPAAQgOAAgHgIg");
	this.shape_64.setTransform(-81.3,76.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_65.setTransform(-87.7,74.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgiA5IAAhxIBFAAIAAAMIg2AAIAAAnIAvAAIAAAMIgvAAIAAAyg");
	this.shape_66.setTransform(-93.6,75.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAtArIAAg3QAAgJgEgEQgFgFgJAAQgIAAgGAFQgFAFgBAIIAAA3IgNAAIAAg3QAAgSgSAAQgPAAgFAMIAAA9IgOAAIAAhTIANAAIABAJQAJgLAQAAQARAAAGANQAEgGAHgEQAHgDAJAAQAcAAAAAeIAAA3g");
	this.shape_67.setTransform(-109.4,76.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgZAjQgHgHAAgQIAAg2IAOAAIAAA1QAAAUAQAAQAQAAAFgNIAAg8IAOAAIAABUIgNAAIgBgJQgIAKgPAAQgOAAgHgIg");
	this.shape_68.setTransform(-120.8,76.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgGA6IAAhUIANAAIAABUgAgGgqQgBgDAAgDQAAgEABgCQADgDADAAQAFAAABADQADACAAAEQAAADgDADQgBACgFAAQgDAAgDgCg");
	this.shape_69.setTransform(-127.1,75);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AATArIAAg3QAAgJgEgEQgFgFgIAAQgGAAgGAEQgFAEgDAGIAAA7IgOAAIAAhTIANAAIABAKQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_70.setTransform(-133.5,76.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgZAjQgHgHAAgQIAAg2IAOAAIAAA1QAAAUAQAAQAQAAAFgNIAAg8IAOAAIAABUIgNAAIgBgJQgIAKgPAAQgOAAgHgIg");
	this.shape_71.setTransform(-142.4,76.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgCAvQgEgFAAgLIAAg0IgQAAIAAgLIAQAAIAAgUIANAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQACADAGAAIAGgBIAAAMIgLABQgJAAgFgGg");
	this.shape_72.setTransform(-149.6,75.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgjA7IAAh0IANAAIABAKQAJgLAPAAQAPAAAJALQAJAMAAAUIAAABQAAATgJAMQgJALgPAAQgPAAgIgJIAAAogAgUgiIAAAnQAGAMANAAQAKAAAGgJQAGgIAAgPQAAgPgGgIQgGgIgKAAQgNAAgGAMg");
	this.shape_73.setTransform(-156.3,78.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_74.setTransform(-165.2,76.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAdA5Ig4hXIAABXIgQAAIAAhxIAQAAIA4BXIAAhXIAPAAIAABxg");
	this.shape_75.setTransform(-175.2,75.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgBA/QgTgaAAglQABgRAEgQQAFgQAJgOQAJgNAJgGIAEAKQgMAJgHASQgGASgBAWIAAAGQAAAeAKAWQAHANAJAIIgEAIQgJgFgJgOg");
	this.shape_76.setTransform(-183.2,76.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATArIAAg3QAAgJgEgEQgFgFgIAAQgGAAgGAEQgFAEgDAGIAAA7IgOAAIAAhTIANAAIABAKQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_77.setTransform(-194.7,76.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgaAgQgMgMAAgUIAAAAQABgMAFgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQgBAMgEAKQgFAKgIAFQgKAGgLAAQgQAAgKgMgAgQgWQgHAIAAAPQAAAOAHAJQAGAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgKAAgGAJg");
	this.shape_78.setTransform(-203.7,76.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgTArIAAhTIANAAIAAAJQAHgLANAAIAGABIAAANIgHAAQgNAAgFAMIAAA7g");
	this.shape_79.setTransform(-210.5,76.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgYAhQgLgMAAgTIAAgCQAAgMAFgKQAFgKAIgFQAJgGAJAAQAQAAAKALQAJALAAAUIAAAFIg5AAQABANAHAHQAHAIAKAAQAHAAAGgDQAFgDAEgFIAJAGQgLARgVAAQgQAAgLgLgAgNgZQgGAHgBALIApAAIAAgBQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_80.setTransform(-217.9,76.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAtArIAAg3QAAgJgEgEQgFgFgJAAQgIAAgGAFQgFAFgBAIIAAA3IgNAAIAAg3QAAgSgSAAQgPAAgFAMIAAA9IgOAAIAAhTIANAAIABAJQAJgLAQAAQARAAAGANQAEgGAHgEQAHgDAJAAQAcAAAAAeIAAA3g");
	this.shape_81.setTransform(-229.2,76.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHARAAIAPAAIAAgHQAAgHgFgFQgFgEgIAAQgHAAgGAEQgEAEAAAFIgQAAQAAgGAGgGQADgGAJgDQAHgEAJAAQAOAAAIAIQAIAHABANIAAAlQAAAMADAHIAAABIgPAAIgCgJQgLALgNAAQgMAAgIgHgAgUARQAAAHAFADQAFAEAGAAQAGAAAHgDQAFgEAEgFIAAgSIgMAAQgaAAAAAQg");
	this.shape_82.setTransform(-240.5,76.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgfAsQgMgPAAgXIAAgLQAAgQAGgMQAFgMALgGQAKgHANAAQASAAALALQALAKACASIgPAAQgCgOgHgGQgGgGgMAAQgOAAgIAKQgIALAAAUIAAAKQAAASAIAMQAIALANgBQAMABAHgHQAGgFADgOIAPAAQgCASgMAKQgLAKgSgBQgUAAgMgOg");
	this.shape_83.setTransform(-250,75.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgZA7IgFgBIAAgMIAEABQAHAAAEgDQAEgDADgIIADgJIgehSIAQAAIAUA+IAUg+IAPAAIgiBgQgHAVgRAAg");
	this.shape_84.setTransform(-263,78.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgVAxIgBAKIgNAAIAAh3IAPAAIAAAtQAIgLAPAAQAPAAAJAMQAJALAAAUIAAABQAAATgJAMQgJAMgPAAQgPAAgJgMgAgUAAIAAAjQAGAOAOAAQAKAAAGgIQAFgJAAgQQAAgOgFgIQgGgIgKAAQgOAAgGAOg");
	this.shape_85.setTransform(-271.1,74.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgQAoQgHgDgFgHQgFgGAAgIIAPAAQAAAIAGAEQAFAEAIAAQAIAAAFgDQAFgEAAgFQAAgGgEgDQgEgEgLgCQgLgCgGgDQgHgDgDgEQgCgFAAgGQAAgKAIgIQAJgHAMAAQAPAAAJAIQAJAHAAAMIgPAAQAAgGgEgFQgGgEgIAAQgGAAgFADQgEAEAAAFQAAAGAEACQAEADAKACQALADAGADQAHADADAEQAEAFAAAHQgBALgIAHQgKAHgOAAQgJAAgIgEg");
	this.shape_86.setTransform(-283.9,76.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgbAgQgKgMgBgUIAAAAQAAgMAGgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQAAAMgFAKQgFAKgIAFQgJAGgMAAQgQAAgLgMgAgRgWQgGAIAAAPQAAAOAGAJQAHAIAKAAQALAAAGgJQAHgIAAgPQAAgOgHgIQgGgJgLAAQgJAAgIAJg");
	this.shape_87.setTransform(-292.6,76.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgCAvQgEgFAAgLIAAg0IgQAAIAAgLIAQAAIAAgUIANAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQACADAFAAIAHgBIAAAMIgLABQgJAAgFgGg");
	this.shape_88.setTransform(-300,75.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgbAgQgKgMgBgUIAAAAQAAgMAGgKQAEgKAJgFQAJgGAKAAQARAAALAMQALAMAAATIAAABQAAAMgFAKQgFAKgIAFQgJAGgMAAQgQAAgLgMgAgRgWQgGAIAAAPQAAAOAGAJQAHAIAKAAQALAAAGgJQAHgIAAgPQAAgOgHgIQgGgJgLAAQgKAAgHAJg");
	this.shape_89.setTransform(-307,76.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AATA8IAAg4QAAgIgEgEQgFgFgIAAQgGAAgGAEQgFAEgDAFIAAA8IgOAAIAAh3IAOAAIAAAtQAKgLAOAAQAbAAAAAdIAAA4g");
	this.shape_90.setTransform(-315.9,74.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgjA7IAAh0IANAAIABAKQAJgLAPAAQAPAAAJALQAJAMAAAUIAAABQAAATgJAMQgJALgPAAQgPAAgIgJIAAAogAgUgiIAAAnQAGAMANAAQAKAAAGgJQAGgIAAgPQAAgPgGgIQgGgIgKAAQgNAAgGAMg");
	this.shape_91.setTransform(-324.7,78.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgGA8IAAh3IANAAIAAB3g");
	this.shape_92.setTransform(-335.3,74.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgaAlQgIgHAAgLQAAgNAKgHQAKgHASAAIANAAIAAgHQABgHgFgFQgEgEgJAAQgIAAgFAEQgEAEgBAFIgOAAQAAgGAEgGQAFgGAIgDQAHgEAJAAQAOAAAIAIQAIAHABANIAAAlQAAAMADAHIAAABIgPAAIgDgJQgJALgNAAQgNAAgIgHgAgUARQABAHAEADQAFAEAGAAQAHAAAFgDQAHgEACgFIAAgSIgLAAQgZAAgBAQg");
	this.shape_93.setTransform(-341.5,76.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AATArIAAg3QAAgJgEgEQgFgFgIAAQgGAAgGAEQgFAEgDAGIAAA7IgOAAIAAhTIANAAIABAKQAKgMAOAAQAbAAAAAeIAAA3g");
	this.shape_94.setTransform(-350.3,76.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgHA6IAAhUIAOAAIAABUgAgGgqQgCgDAAgDQAAgEACgCQADgDADAAQAFAAACADQABACAAAEQAAADgBADQgCACgFAAQgDAAgDgCg");
	this.shape_95.setTransform(-356.7,75);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgRA4QgJgEgEgHIAHgJQAJAMAOAAQAJAAAGgGQAGgGAAgLIAAgHQgJAKgOAAQgOAAgKgMQgJgMAAgUQAAgTAJgMQAKgMAPAAQAOAAAJALIAAgJIAOAAIAABRQAAARgKAJQgKAKgQAAQgIAAgJgEgAgOgmQgGAIAAAQQAAAOAGAHQAGAJAJAAQAOAAAGgNIAAglQgHgNgNAAQgJAAgGAJg");
	this.shape_96.setTransform(-363.3,78.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgHA6IAAhUIAOAAIAABUgAgGgqQgBgDAAgDQAAgEABgCQADgDADAAQAEAAADADQACACAAAEQAAADgCADQgDACgEAAQgDAAgDgCg");
	this.shape_97.setTransform(-369.6,75);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgTArIAAhTIANAAIAAAJQAHgLANAAIAGABIAAANIgHAAQgNAAgFAMIAAA7g");
	this.shape_98.setTransform(-373.8,76.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgWA0QgLgGgGgNQgFgMgBgQIAAgHQAAgRAGgNQAGgMAKgHQALgGAMgBQAOABAKAGQALAHAFAMQAGANAAARIAAAGQAAAQgGANQgFANgLAGQgKAHgOgBQgMABgKgHgAgVgiQgIALgBATIAAAIQAAATAJAMQAIALANAAQAPAAAIgKQAIgMAAgTIAAgHQAAgVgIgLQgIgLgPABQgNgBgIALg");
	this.shape_99.setTransform(-382.5,75.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AhkDyQgwgWgagnQgbgnAAgsIBXAAQADArAgAaQAhAZA0AAQAyAAAdgTQAegUAAgiQAAgjgagUQgbgThBgOQhBgOgngTQgngTgTgcQgSgbAAgmQAAg+A1grQA1grBQAAQBXAAA2AtQA1AsAABFIhXAAQAAgjgegaQgegagvAAQguAAgbAVQgbAUAAAiQABAfAZAQQAZAQBAAOQBAAPAoAUQApATATAdQAUAcgBApQAABEg2ApQg2AphXAAQg7AAgvgVg");
	this.shape_100.setTransform(428.3,14.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("ABxECIAAlOQAAg3gZgaQgZgbg0AAQgpAAggAXQggAWgSAlIAAFoIhXAAIAAn6IBTAAIADBAQA5hJBeAAQCgAAACC1IAAFOg");
	this.shape_101.setTransform(377.2,13.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AB5D9Ih6l/Ih4F/IhGAAIiUn5IBXAAIBkF6IB2l6IBFAAIB4GCIBimCIBXAAIiUH5g");
	this.shape_102.setTransform(314.5,14.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AilC/QhBhIAAh2IAAgFQAAhLAeg7QAdg8A1ggQA0ggBCAAQBnAABABIQBABHAAB3IAAAFQAABLgcA6QgdA7g0AhQg1AhhFAAQhmAAg/hIgAhoiMQgmAzgBBeQABBVAmAzQAnAzBBAAQBDAAAng0QAmgzAAhdQAAhTgng0Qgog0hBAAQhAAAgoAzg");
	this.shape_103.setTransform(251.2,14.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AidEkQg4hIAAh0IAAgHQAAhzA3hHQA3hHBaAAQBYAAA1A9IAAkJIBWAAIAALPIhPAAIgFg2Qg0BAhcAAQhYAAg3hJgAhaglQgkAwAABgQAABXAkAwQAjAxA+AAQBSAAAnhKIAAjoQgohIhQAAQg/AAgjAyg");
	this.shape_104.setTransform(195.5,4.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgPEcQgegjAAhAIAAk6IhcAAIAAhDIBcAAIAAh7IBWAAIAAB7IBfAAIAABDIhfAAIAAE6QAAAfANAPQAMAPAfAAQAPAAAagGIAABGQgiAKggAAQg7AAgcgkg");
	this.shape_105.setTransform(152.5,8.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgqFoIAArPIBWAAIAALPg");
	this.shape_106.setTransform(126.7,3.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AiVDEQhBhFAAhxIAAgPQAAhLAdg7QAdg8A0giQAzghA8AAQBiAAA3BBQA3BCAAB5IAAAjIlWAAQABBLArAuQApAuBAAAQAuAAAggTQAggSAYgfIA1ApQhABiiAAAQhmAAhAhDgAhRiYQgjAmgJBFID9AAIAAgHQgDhCgggkQggglg2AAQg0AAgkAng");
	this.shape_107.setTransform(90,14.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AD6FVIAAkKIAIkdIjgInIhEAAIjfomIAIEcIAAEKIhaAAIAAqpIB1AAIDeIsIDfosIB1AAIAAKpg");
	this.shape_108.setTransform(22.2,5.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AhlDyQgugWgbgnQgbgnAAgsIBYAAQABArAiAaQAgAZA0AAQAxAAAegTQAegUAAgiQAAgjgbgUQgagThBgOQhCgOgmgTQgngTgTgcQgSgbAAgmQAAg+A1grQA0grBRAAQBWAAA3AtQA1AsAABFIhXAAQAAgjgegaQgfgaguAAQguAAgaAVQgbAUAAAiQAAAfAZAQQAYAQBBAOQBAAPAoAUQApATAUAdQASAcAAApQAABEg2ApQg2AphXAAQg8AAgvgVg");
	this.shape_109.setTransform(-68.3,14.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgiBwIAAjfIBFAAIAAA0IgJCrg");
	this.shape_110.setTransform(-101.3,-21.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AiVDEQhBhFAAhxIAAgPQAAhLAdg7QAdg8A0giQAzghA8AAQBiAAA3BBQA3BCAAB5IAAAjIlWAAQABBLArAuQApAuBAAAQAuAAAggTQAggSAYgfIA1ApQhABiiAAAQhmAAhAhDgAhRiYQgjAmgJBFID9AAIAAgHQgDhCgggkQggglg2AAQg0AAgkAng");
	this.shape_111.setTransform(-134.6,14.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgrFaIAAn6IBWAAIAAH6gAglkEQgNgNgBgWQABgVANgPQANgOAYAAQAZAAANAOQAOAPAAAVQAAAWgOANQgNAPgZAAQgYAAgNgPg");
	this.shape_112.setTransform(-172,5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AhlDyQgugWgbgnQgbgnAAgsIBYAAQABArAiAaQAgAZA0AAQAxAAAegTQAegUAAgiQAAgjgbgUQgagThBgOQhCgOgmgTQgngTgTgcQgSgbAAgmQAAg+A1grQA0grBRAAQBWAAA3AtQA1AsAABFIhXAAQAAgjgegaQgfgaguAAQguAAgaAVQgbAUAAAiQAAAfAZAQQAYAQBBAOQBAAPAoAUQApATAUAdQASAcAAApQAABEg2ApQg2AphXAAQg8AAgvgVg");
	this.shape_113.setTransform(-208.7,14.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AhlDyQgugWgbgnQgbgnAAgsIBYAAQABArAiAaQAgAZA0AAQAxAAAegTQAegUAAgiQAAgjgbgUQgagThBgOQhCgOgmgTQgngTgTgcQgSgbAAgmQAAg+A1grQA0grBRAAQBWAAA3AtQA1AsAABFIhXAAQAAgjgegaQgfgaguAAQguAAgaAVQgbAUAAAiQAAAfAZAQQAYAQBBAOQBAAPAoAUQApATAUAdQASAcAAApQAABEg2ApQg2AphXAAQg8AAgvgVg");
	this.shape_114.setTransform(-258.2,14.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AigDcQgwgqAAhBQAAhQA8gqQA8gsBtAAIBUAAIAAgoQAAgtgbgbQgbgbg0AAQgvAAgfAXQggAXAAAiIhXAAQAAgmAbgjQAbgkAugUQAugVA3AAQBXAAAyAsQAyArACBOIAADoQAABGARApIAAAHIhaAAQgIgPgFgmQg8A/hTAAQhLAAgwgrgAh5BkQAAApAbAXQAbAYArAAQAnAAAlgWQAlgVAQgiIAAhnIhEAAQieAAAABcg");
	this.shape_115.setTransform(-309,14.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AieEmQg4g0AAheIBaAAQAAA7AgAgQAgAiA8AAQA4AAAigkQAigjABhAIAAnjIBaAAIAAHjQAABhg6A4Qg7A3hiAAQhlAAg5g0g");
	this.shape_116.setTransform(-363.9,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MeltdownAnimation, new cjs.Rectangle(-389.9,-53.6,845.3,140.4), null);


(lib.Mariogate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBBVQgcgdAAgyIAAgGQAAghANgZQAMgbAXgOQAWgPAaAAQArAAAYAdQAYAcAAA1IAAAPIiVAAQABAhASAUQASAUAcAAQAUAAAOgIQAOgIAKgOIAXASQgcArg3AAQgtAAgcgegAgjhCQgPARgEAeIBuAAIAAgDQgBgdgOgQQgOgQgYAAQgWAAgQARg");
	this.shape.setTransform(84,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGB8QgNgPAAgcIAAiJIgoAAIAAgdIAoAAIAAg2IAlAAIAAA2IApAAIAAAdIgpAAIAACJQAAANAFAHQAGAHANAAQAHAAALgDIAAAfQgPAEgOAAQgZAAgMgQg");
	this.shape_1.setTransform(65.2,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBgQgWgSAAgcQABgjAagTQAagSAvAAIAlAAIAAgSQAAgUgMgMQgMgLgWgBQgVAAgNALQgOAKAAAOIgmAAQAAgQAMgQQALgPAVgJQAUgJAXAAQAmAAAWAUQAWASABAiIAABlQAAAfAIARIAAAEIgpAAQgCgHgCgRQgbAcgkAAQggAAgVgTgAg1AsQAAASAMAKQAMAKASAAQARAAARgJQAPgJAIgPIAAgtIgeAAQhEAAgBAog");
	this.shape_2.setTransform(47.6,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguCSQgXgKgMgSIATgWQAZAeAjAAQAbAAAPgQQAQgQAAgcIAAgTQgXAagmAAQgnAAgYgfQgZgfAAg2QAAgzAYgfQAYgfAoAAQAoAAAWAdIACgZIAjAAIAADYQAAArgaAZQgZAZgrAAQgXAAgXgLgAgnhmQgPAWAAAqQAAAlAPAVQAPAVAbAAQAkAAARggIAAhlQgSgggjAAQgaAAgQAWg");
	this.shape_3.setTransform(24,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHBUQgdggAAgzIAAgCQAAghANgZQANgaAXgPQAXgOAcAAQAtAAAdAfQAbAgAAAzIAAADQAAAggMAaQgNAagWAOQgYAOgdAAQgtAAgbgfgAgsg8QgSAWABApQgBAlASAWQARAWAcAAQAcAAARgXQARgWAAgoQAAgkgRgXQgSgXgcAAQgbAAgRAXg");
	this.shape_4.setTransform(0.7,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSCXIAAjdIAlAAIAADdgAgQhxQgGgGAAgKQAAgJAGgGQAFgGALAAQALAAAGAGQAFAGAAAJQAAAKgFAGQgGAGgLAAQgLAAgFgGg");
	this.shape_5.setTransform(-16.3,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1BxIAAjdIAlAAIABAZQASgdAiAAQALAAAGADIAAAjQgJgCgKABQgkAAgOAfIAACdg");
	this.shape_6.setTransform(-27.5,3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhGBgQgUgSgBgcQAAgjAbgTQAagSAvAAIAlAAIAAgSQAAgUgMgMQgMgLgWgBQgVAAgNALQgOAKAAAOIgmAAQAAgQAMgQQALgPAVgJQAUgJAXAAQAnAAAVAUQAWASAAAiIAABlQABAfAHARIAAAEIgnAAQgEgHgCgRQgaAcgkAAQghAAgVgTgAg1AsQAAASAMAKQAMAKATAAQAQAAARgJQAPgJAIgPIAAgtIgeAAQhFAAAAAog");
	this.shape_7.setTransform(-47.1,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABtCVIAAh0IAEh9IhiDxIgdAAIhijwIAEB8IAAB0IgoAAIAAkpIAzAAIBhDyIBijyIAzAAIAAEpg");
	this.shape_8.setTransform(-76.8,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AvEDdIAAm5IeIAAIAAG5g");
	this.shape_9.setTransform(0.7,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.1,-27.2,194.3,54.4);


(lib.LiarButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BxIAAjdIAlAAIABAZQASgdAiAAQALAAAGADIAAAjQgJgCgKABQgkAAgOAfIAACdg");
	this.shape.setTransform(68.9,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhGBgQgUgSgBgcQABgjAagTQAagSAvAAIAlAAIAAgSQAAgUgMgMQgMgLgWgBQgVAAgNALQgOAKAAAOIgmAAQAAgQAMgQQALgPAVgJQAUgJAXAAQAnAAAVAUQAWASABAiIAABlQAAAfAHARIAAAEIgnAAQgDgHgDgRQgaAcgkAAQghAAgVgTgAg1AsQAAASAMAKQAMAKASAAQASAAAQgJQAPgJAIgPIAAgtIgeAAQhFAAAAAog");
	this.shape_1.setTransform(49.3,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTCXIAAjdIAmAAIAADdgAgQhxQgFgGAAgKQAAgJAFgGQAGgGAKAAQALAAAFAGQAHAGgBAJQABAKgHAGQgFAGgLAAQgKAAgGgGg");
	this.shape_2.setTransform(32.9,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhZCVIAAkpIAnAAIAAEJICMAAIAAAgg");
	this.shape_3.setTransform(17.6,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1BxIAAjdIAlAAIABAZQASgdAiAAQALAAAGADIAAAjQgJgCgKABQgkAAgOAfIAACdg");
	this.shape_4.setTransform(-11.3,3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGBgQgUgSgBgcQAAgjAbgTQAagSAvAAIAlAAIAAgSQAAgUgMgMQgMgLgWgBQgVAAgNALQgOAKAAAOIgmAAQAAgQAMgQQALgPAVgJQAUgJAXAAQAnAAAVAUQAWASAAAiIAABlQABAfAHARIAAAEIgnAAQgEgHgCgRQgaAcgkAAQghAAgVgTgAg1AsQAAASAMAKQAMAKATAAQAQAAARgJQAPgJAIgPIAAgtIgeAAQhFAAAAAog");
	this.shape_5.setTransform(-30.9,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTCXIAAjdIAlAAIAADdgAgQhxQgFgGAAgKQAAgJAFgGQAFgGALAAQALAAAFAGQAHAGAAAJQAAAKgHAGQgFAGgLAAQgLAAgFgGg");
	this.shape_6.setTransform(-47.3,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhZCVIAAkpIAnAAIAAEJICMAAIAAAgg");
	this.shape_7.setTransform(-62.6,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ArmCgIAAk/IXMAAIAAE/g");
	this.shape_8.setTransform(1,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.1,-27.2,154.2,54.4);


(lib.JassiesCurrentAvatar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._8ec64a84e88d4e2fa37f00b41fb17342();
	this.instance.parent = this;
	this.instance.setTransform(-417,-417,1.346,1.346);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.JassiesCurrentAvatar, new cjs.Rectangle(-417,-417,833,833), null);


(lib.Instruction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAdQgLgLAAgRQAAgRALgMQAKgMAVAAQAVAAALAMQALAMAAARQAAARgLALQgLAMgVAAQgVAAgKgMg");
	this.shape.setTransform(947.4,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhQC/QglgRgUgeQgWgfAAgkIBFAAQACAjAZAUQAbAUApAAQAnAAAYgPQAWgQAAgbQAAgcgUgPQgVgPgzgMQg1gLgegOQgegQgPgVQgPgWAAgeQAAgxAqgiQAqgiA/AAQBEAAAsAjQApAjAAA3IhEAAQgBgcgXgUQgYgVglAAQgkAAgVARQgVAQAAAaQgBAZAVANQATAMAzAMQAzALAgAQQAfAPAQAXQAQAWAAAgQgBA2grAhQgqAghFAAQgwAAglgRg");
	this.shape_1.setTransform(918.2,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMDhQgXgbAAg0IAAj4IhJAAIAAg1IBJAAIAAhhIBDAAIAABhIBLAAIAAA1IhLAAIAAD5QAAAXAKANQAKALAZABQALgBAVgEIAAA4QgbAHgaAAQguAAgWgcg");
	this.shape_2.setTransform(885.1,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABZDNIAAkJQAAgsgUgUQgTgVgpAAQghAAgZASQgZASgOAdIAAEdIhFAAIAAmRIBBAAIACAzQAug7BKAAQB/AAABCQIAAEJg");
	this.shape_3.setTransform(852.9,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ah2CbQgzg2AAhaIAAgLQAAg8AXgvQAWgvAqgaQAogbAvAAQBPAAArAzQArA0AABgIAAAcIkPAAQACA7AhAlQAhAkAzAAQAkAAAZgPQAZgPATgYIAqAhQgyBNhlAAQhRAAgzg1gAg/h4QgdAegGA2IDIAAIAAgFQgDg0gZgdQgagdgrAAQgoAAgcAfg");
	this.shape_4.setTransform(812.1,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMDhQgXgbAAg0IAAj4IhJAAIAAg1IBJAAIAAhhIBDAAIAABhIBLAAIAAA1IhLAAIAAD5QAAAXAKANQAKALAZABQALgBAVgEIAAA4QgbAHgaAAQguAAgWgcg");
	this.shape_5.setTransform(778,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABZDNIAAkJQgBgsgSgUQgUgVgqAAQggAAgZASQgaASgOAdIAAEdIhEAAIAAmRIBBAAIACAzQAug7BJAAQCAAAABCQIAAEJg");
	this.shape_6.setTransform(745.8,6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiDCXQgzg4AAheIAAgEQAAg7AXgvQAXgvAqgaQApgZA1AAQBRAAAzA5QAzA4AABeIAAAEQAAA7gXAvQgWAugqAaQgqAag2AAQhRAAgyg5gAhShuQgfAoAABKQAABDAfApQAfAoAzAAQA0AAAfgpQAfgpAAhJQAAhCgfgpQgggpgzAAQgzAAgfApg");
	this.shape_7.setTransform(703.1,6.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah3CaQgxg3AAhfIAAgLQAAg6AVguQAWguAogZQAogZA2AAQBEAAAtAoQAsApADBAIhBAAQgDgngagZQgbgZgnAAQgzAAgdAmQgcAmAABHIAAAMQAABFAcAmQAdAlA0AAQAkAAAcgWQAbgWADgiIBBAAQgCAjgVAfQgWAfglATQgkASgpAAQhRAAgwg2g");
	this.shape_8.setTransform(662,6.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ah2CbQgzg2AAhaIAAgLQAAg8AXgvQAWgvAqgaQAogbAvAAQBPAAArAzQArA0AABgIAAAcIkPAAQACA7AhAlQAhAkAzAAQAkAAAZgPQAZgPATgYIAqAhQgyBNhlAAQhRAAgzg1gAg/h4QgdAegGA2IDIAAIAAgFQgDg0gZgdQgagdgrAAQgoAAgcAfg");
	this.shape_9.setTransform(603.1,6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABZEdIAAkJQAAgrgUgVQgTgVgpAAQghAAgZASQgZASgOAdIAAEdIhFAAIAAo5IBFAAIAADZQAug4BIAAQB+AAACCPIAAEJg");
	this.shape_10.setTransform(561.8,-1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMDhQgXgbAAg0IAAj4IhJAAIAAg1IBJAAIAAhhIBDAAIAABhIBLAAIAAA1IhLAAIAAD5QAAAXAKANQAKALAZABQALgBAVgEIAAA4QgbAHgaAAQguAAgWgcg");
	this.shape_11.setTransform(527.2,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ah2CbQgzg2AAhaIAAgLQAAg8AXgvQAWgvAqgaQAogbAvAAQBPAAArAzQArA0AABgIAAAcIkPAAQACA7AhAlQAhAkAzAAQAkAAAZgPQAZgPATgYIAqAhQgyBNhlAAQhRAAgzg1gAg/h4QgdAegGA2IDIAAIAAgFQgDg0gZgdQgagdgrAAQgoAAgcAfg");
	this.shape_12.setTransform(477.4,6.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ah2CbQgzg2AAhaIAAgLQAAg8AXgvQAWgvAqgaQAogbAvAAQBPAAArAzQArA0AABgIAAAcIkPAAQACA7AhAlQAhAkAzAAQAkAAAZgPQAZgPATgYIAqAhQgyBNhlAAQhRAAgzg1gAg/h4QgdAegGA2IDIAAIAAgFQgDg0gZgdQgagdgrAAQgoAAgcAfg");
	this.shape_13.setTransform(437.1,6.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhPC/QgmgRgVgeQgUgfAAgkIBEAAQACAjAaAUQAZAUApAAQAnAAAYgPQAYgQAAgbQgBgcgUgPQgVgPgzgMQg0gLgfgOQgfgQgOgVQgPgWAAgeQAAgxAqgiQAqgiBAAAQBEAAAqAjQAqAjABA3IhGAAQABgcgYgUQgYgVgkAAQglAAgVARQgWAQAAAaQABAZATANQAUAMAyAMQA0ALAfAQQAhAPAPAXQAPAWAAAgQAAA2gqAhQgsAghFAAQgvAAgkgRg");
	this.shape_14.setTransform(397,6.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AiDCXQgzg4AAheIAAgEQAAg7AXgvQAXgvAqgaQApgZA1AAQBRAAAzA5QAzA4AABeIAAAEQAAA7gXAvQgWAugqAaQgqAag2AAQhRAAgyg5gAhShuQgfAoAABKQAABDAfApQAfAoAzAAQA0AAAfgpQAfgpAAhJQAAhCgfgpQgggpgzAAQgzAAgfApg");
	this.shape_15.setTransform(337,6.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMDhQgXgbAAg0IAAj4IhJAAIAAg1IBJAAIAAhhIBDAAIAABhIBLAAIAAA1IhLAAIAAD5QAAAXAKANQAKALAZABQALgBAVgEIAAA4QgbAHgaAAQguAAgWgcg");
	this.shape_16.setTransform(301.8,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhgDNIAAmRIBDAAIABAuQAgg2A/AAQATABALAFIAABAQgPgDgTAAQhDAAgYA6IAAEcg");
	this.shape_17.setTransform(260.9,6.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ah2CbQgzg2AAhaIAAgLQAAg8AXgvQAWgvAqgaQAogbAvAAQBPAAArAzQArA0AABgIAAAcIkPAAQACA7AhAlQAhAkAzAAQAkAAAZgPQAZgPATgYIAqAhQgyBNhlAAQhRAAgzg1gAg/h4QgdAegGA2IDIAAIAAgFQgDg0gZgdQgagdgrAAQgoAAgcAfg");
	this.shape_18.setTransform(226.2,6.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABZDNIAAkJQgBgsgSgUQgUgVgpAAQghAAgZASQgZASgOAdIAAEdIhFAAIAAmRIBBAAIACAzQAug7BJAAQCAAAABCQIAAEJg");
	this.shape_19.setTransform(184.8,6.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhgDNIAAmRIBDAAIABAuQAgg2A/AAQATABALAFIAABAQgPgDgSAAQhDAAgZA6IAAEcg");
	this.shape_20.setTransform(153,6.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AiDCXQgzg4AAheIAAgEQAAg7AXgvQAXgvAqgaQApgZA1AAQBRAAAzA5QAzA4AABeIAAAEQAAA7gXAvQgWAugqAaQgqAag2AAQhRAAgyg5gAhShuQgfAoAABKQAABDAfApQAfAoAzAAQA0AAAfgpQAfgpAAhJQAAhCgfgpQgggpgzAAQgzAAgfApg");
	this.shape_21.setTransform(116.4,6.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ah3CaQgxg3AAhfIAAgLQAAg6AVguQAWguAogZQAogZA2AAQBEAAAtAoQAsApADBAIhBAAQgDgngagZQgbgZgnAAQgzAAgdAmQgcAmAABHIAAAMQAABFAcAmQAdAlA0AAQAkAAAcgWQAbgWADgiIBBAAQgCAjgVAfQgWAfglATQgkASgpAAQhRAAgwg2g");
	this.shape_22.setTransform(75.3,6.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgMDhQgXgbAAg0IAAj4IhJAAIAAg1IBJAAIAAhhIBDAAIAABhIBLAAIAAA1IhLAAIAAD5QAAAXAKANQAKALAZABQALgBAVgEIAAA4QgbAHgaAAQguAAgWgcg");
	this.shape_23.setTransform(22.6,2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag5EhIAAlcIg/AAIAAg1IA/AAIAAgoQAAhCAigiQAigkA/AAQAYAAAXAHIgDA3QgSgEgUAAQghABgSATQgSAUAAAkIAAAqIBVAAIAAA1IhVAAIAAFcg");
	this.shape_24.setTransform(-0.7,-2.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ah2CbQgzg2AAhaIAAgLQAAg8AXgvQAWgvAqgaQAogbAvAAQBPAAArAzQArA0AABgIAAAcIkPAAQACA7AhAlQAhAkAzAAQAkAAAZgPQAZgPATgYIAqAhQgyBNhlAAQhRAAgzg1gAg/h4QgdAegGA2IDIAAIAAgFQgDg0gZgdQgagdgrAAQgoAAgcAfg");
	this.shape_25.setTransform(-34.9,6.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghEdIAAo5IBDAAIAAI5g");
	this.shape_26.setTransform(-64.6,-1.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhaAcIAAg3IC1AAIAAA3g");
	this.shape_27.setTransform(-84.3,3.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AipEaIAAorIA/AAIADAsQArg0BJAAQBIAAAqA3QAqA2ABBiIAAAGQgBBbgqA4QgpA4hIAAQhIAAgqgvIAADCgAhkinIAAC/QAfA3A/AAQAxAAAdgnQAdgoAAhMQAAhEgdgnQgdgngyAAQg9AAggA3g");
	this.shape_28.setTransform(-115.2,13.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AiDCXQgzg4AAheIAAgEQAAg7AXgvQAXgvAqgaQApgZA1AAQBRAAAzA5QAzA4AABeIAAAEQAAA7gXAvQgWAugqAaQgqAag2AAQhRAAgyg5gAhShuQgfAoAABKQAABDAfApQAfAoAzAAQA0AAAfgpQAfgpAAhJQAAhCgfgpQgggpgzAAQgzAAgfApg");
	this.shape_29.setTransform(-159.1,6.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgMDhQgXgbAAg0IAAj4IhJAAIAAg1IBJAAIAAhhIBDAAIAABhIBLAAIAAA1IhLAAIAAD5QAAAXAKANQAKALAZABQALgBAVgEIAAA4QgbAHgaAAQguAAgWgcg");
	this.shape_30.setTransform(-194.3,2.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ah2CbQgzg2AAhaIAAgLQAAg8AXgvQAWgvAqgaQAogbAvAAQBPAAArAzQArA0AABgIAAAcIkPAAQACA7AhAlQAhAkAzAAQAkAAAZgPQAZgPATgYIAqAhQgyBNhlAAQhRAAgzg1gAg/h4QgdAegGA2IDIAAIAAgFQgDg0gZgdQgagdgrAAQgoAAgcAfg");
	this.shape_31.setTransform(-244.2,6.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("ABZEdIAAkJQgBgrgSgVQgUgVgpAAQghAAgZASQgZASgOAdIAAEdIhFAAIAAo5IBFAAIAADZQAtg4BIAAQCAAAABCPIAAEJg");
	this.shape_32.setTransform(-285.4,-1.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgMDhQgXgbAAg0IAAj4IhJAAIAAg1IBJAAIAAhhIBDAAIAABhIBLAAIAAA1IhLAAIAAD5QAAAXAKANQAKALAZABQALgBAVgEIAAA4QgbAHgaAAQguAAgWgcg");
	this.shape_33.setTransform(-320,2.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("ABZDNIAAkJQAAgsgUgUQgTgVgpAAQghAAgZASQgZASgOAdIAAEdIhFAAIAAmRIBBAAIACAzQAug7BJAAQB/AAACCQIAAEJg");
	this.shape_34.setTransform(-371,6.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgiESIAAmRIBDAAIAAGRgAgejNQgJgMgBgQQABgRAJgLQALgMATAAQAUAAAKAMQAKALAAARQAAAQgKAMQgKALgUAAQgTAAgLgLg");
	this.shape_35.setTransform(-401.2,-0.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("ABZDNIAAkJQAAgsgUgUQgTgVgpAAQghAAgZASQgZASgOAdIAAEdIhFAAIAAmRIBBAAIACAzQAug7BJAAQB/AAACCQIAAEJg");
	this.shape_36.setTransform(-450.2,6.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AiDCXQgzg4AAheIAAgEQAAg7AXgvQAXgvAqgaQApgZA1AAQBRAAAzA5QAzA4AABeIAAAEQAAA7gXAvQgWAugqAaQgqAag2AAQhRAAgyg5gAhShuQgfAoAABKQAABDAfApQAfAoAzAAQA0AAAfgpQAfgpAAhJQAAhCgfgpQgggpgzAAQgzAAgfApg");
	this.shape_37.setTransform(-492.9,6.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgMDhQgXgbAAg0IAAj4IhJAAIAAg1IBJAAIAAhhIBDAAIAABhIBLAAIAAA1IhLAAIAAD5QAAAXAKANQAKALAZABQALgBAVgEIAAA4QgbAHgaAAQguAAgWgcg");
	this.shape_38.setTransform(-528.2,2.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgMDhQgXgbAAg0IAAj4IhJAAIAAg1IBJAAIAAhhIBDAAIAABhIBLAAIAAA1IhLAAIAAD5QAAAXAKANQAKALAZABQALgBAVgEIAAA4QgbAHgaAAQguAAgWgcg");
	this.shape_39.setTransform(-553,2.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ah7CoQghgmgBhKIAAkEIBFAAIAAEDQAABbBKAAQBOAAAag6IAAkkIBEAAIAAGRIhBAAIgBgnQgpAuhMABQhAAAgiglg");
	this.shape_40.setTransform(-585.3,6.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhnDrIgDAuIg/AAIAAo5IBEAAIAADVQAqg0BIAAQBKAAApA4QAqA3AABfIAAAGQAABcgqA4QgrA4hHAAQhLAAgqg2gAhlgFIAACsQAgA/BDAAQAxAAAbgmQAbgmAAhNQAAhGgbglQgbgmgyAAQhDAAgfA/g");
	this.shape_41.setTransform(-626.6,-1.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ah2CbQgzg2AAhaIAAgLQAAg8AXgvQAWgvAqgaQAogbAvAAQBPAAArAzQArA0AABgIAAAcIkPAAQACA7AhAlQAhAkAzAAQAkAAAZgPQAZgPATgYIAqAhQgyBNhlAAQhRAAgzg1gAg/h4QgdAegGA2IDIAAIAAgFQgDg0gZgdQgagdgrAAQgoAAgcAfg");
	this.shape_42.setTransform(-687.4,6.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("ABZEdIAAkJQgBgrgSgVQgUgVgpAAQghAAgZASQgaASgNAdIAAEdIhFAAIAAo5IBFAAIAADZQAtg4BIAAQCAAAABCPIAAEJg");
	this.shape_43.setTransform(-728.7,-1.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgMDhQgXgbAAg0IAAj4IhJAAIAAg1IBJAAIAAhhIBDAAIAABhIBLAAIAAA1IhLAAIAAD5QAAAXAKANQAKALAZABQALgBAVgEIAAA4QgbAHgaAAQguAAgWgcg");
	this.shape_44.setTransform(-763.3,2.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("ABWEdIiMi6IgrAtIAACNIhEAAIAAo5IBEAAIAAFXIAlgsIB8iDIBUAAIicCnICuDqg");
	this.shape_45.setTransform(-809.9,-1.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ah3CaQgxg3AAhfIAAgLQAAg6AVguQAWguAogZQAogZA2AAQBEAAAtAoQAsApADBAIhBAAQgDgngagZQgbgZgnAAQgzAAgdAmQgcAmAABHIAAAMQAABFAcAmQAdAlA0AAQAkAAAcgWQAbgWADgiIBBAAQgCAjgVAfQgWAfglATQgkASgpAAQhRAAgwg2g");
	this.shape_46.setTransform(-851.3,6.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgiESIAAmRIBDAAIAAGRgAgejNQgKgMABgQQgBgRAKgLQAKgMAUAAQAUAAAKAMQALALAAARQAAAQgLAMQgKALgUAAQgUAAgKgLg");
	this.shape_47.setTransform(-880.7,-0.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AghEdIAAo5IBDAAIAAI5g");
	this.shape_48.setTransform(-899.3,-1.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AiVDRQg6hFAAhzIAAgzQAAhLAcg6QAag5AxgeQAygeBAgBQBVAAA0AxQA1AvAIBVIhHAAQgJhAgggdQgegdg4AAQhDAAgnAyQgnAzAABcIAAA0QAABZAlAzQAkA0BBAAQA7AAAggbQAggbALhDIBHAAQgKBWg1AvQg1AvhZAAQheAAg6hFg");
	this.shape_49.setTransform(-932.7,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Instruction, new cjs.Rectangle(-959.9,-47.6,1920,95.2), null);


(lib.DMsof17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+CVIB7kKIihAAIAAgfIDJAAIAAAVIh7EUg");
	this.shape.setTransform(184.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATCWIAAj8IhLAcIAAgiIBrgpIAGAAIAAErg");
	this.shape_1.setTransform(158.2,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAxIABhhIAeAAIAAAXIgFBKg");
	this.shape_2.setTransform(145.3,-11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfCgIAAjAIgjAAIAAgdIAjAAIAAgXQAAgkATgTQASgUAjAAQANAAANAEIgCAeQgKgBgKAAQgTAAgKALQgKAKAAAUIAAAYIAvAAIAAAdIgvAAIAADAg");
	this.shape_3.setTransform(124.6,-1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIBUQgcggAAgzIAAgCQAAghANgZQANgaAXgPQAXgOAcAAQAtAAAcAfQAcAgAAAzIAAADQAAAggMAaQgMAagYAOQgXAOgeAAQgsAAgcgfgAgtg8QgRAWAAApQAAAlARAWQARAWAcAAQAdAAARgXQARgWAAgoQAAgkgRgXQgRgXgdAAQgbAAgSAXg");
	this.shape_4.setTransform(104.7,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsBpQgUgJgMgRQgLgQAAgVIAmAAQABAUAOALQAOALAXAAQAVAAANgIQANgKAAgOQAAgPgLgIQgMgKgcgGQgdgFgQgIQgRgJgIgMQgJgLAAgRQAAgbAXgTQAXgTAjAAQAmAAAYAUQAXATAAAeIgmAAQAAgQgNgLQgOgLgUAAQgTAAgMAJQgMAJAAAPQAAAOALAGQALAIAcAGQAcAGARAJQASAIAJANQAIAMAAASQAAAdgYASQgXASgmAAQgaAAgVgKg");
	this.shape_5.setTransform(71.5,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABtCVIAAh0IAEh9IhiDxIgdAAIhijwIAEB8IAAB0IgoAAIAAkpIAzAAIBhDyIBijyIAzAAIAAEpg");
	this.shape_6.setTransform(42.4,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhrCVIAAkpIBUAAQAnAAAeARQAdARAQAgQARAgAAApIAAASQAAAqgQAgQgRAggdARQgfARgnAAgAhEB1IAqAAQAtAAAZgcQAZgdAAg0IAAgQQAAgzgXgcQgYgdgsAAIguAAg");
	this.shape_7.setTransform(10.8,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGB8QgNgPAAgcIAAiJIgoAAIAAgdIAoAAIAAg2IAlAAIAAA2IApAAIAAAdIgpAAIAACJQAAANAFAHQAGAHANAAQAHAAALgDIAAAfQgPAEgOAAQgZAAgMgQg");
	this.shape_8.setTransform(-21.4,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhGBgQgUgSgBgcQAAgjAbgTQAagSAvAAIAlAAIAAgSQAAgUgMgMQgMgLgWgBQgVAAgNALQgOAKAAAOIgmAAQAAgQAMgQQALgPAVgJQAUgJAXAAQAnAAAVAUQAWASAAAiIAABlQABAfAHARIAAAEIgnAAQgEgHgCgRQgaAcgkAAQghAAgVgTgAg1AsQAAASAMAKQAMAKATAAQAQAAARgJQAPgJAIgPIAAgtIgeAAQhFAAAAAog");
	this.shape_9.setTransform(-39,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhBBVQgcgdAAgyIAAgGQAAghANgZQAMgbAXgOQAWgPAaAAQArAAAYAdQAYAcAAA1IAAAPIiVAAQABAhASAUQASAUAcAAQAUAAAOgIQAOgIAKgOIAXASQgcArg3AAQgtAAgcgegAgjhCQgPARgEAeIBuAAIAAgDQgBgdgOgQQgOgQgYAAQgWAAgQARg");
	this.shape_10.setTransform(-61.3,3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1BxIAAjdIAlAAIABAZQASgdAiAAQALAAAGADIAAAjQgJgCgKABQgkAAgOAfIAACdg");
	this.shape_11.setTransform(-78.6,3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag3CIQgcgRgPgfQgPgggBgqIAAgZQAAhDAfglQAgglA4AAQAvAAAcAYQAdAXAGAsIgnAAQgLg7g8AAQgmAAgVAcQgUAbAAA1IAAAYQAAAyAWAdQAXAeAmAAQAXAAARgFQAQgFALgLIAAhDIhFAAIAAggIBsAAIAABtQgPAWgbALQgbAKglAAQgjAAgdgRg");
	this.shape_12.setTransform(-101.4,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhBBVQgcgdAAgyIAAgGQAAghANgZQAMgbAXgOQAWgPAaAAQArAAAYAdQAYAcAAA1IAAAPIiVAAQABAhASAUQASAUAcAAQAUAAAOgIQAOgIAKgOIAXASQgcArg3AAQgtAAgcgegAgjhCQgPARgEAeIBuAAIAAgDQgBgdgOgQQgOgQgYAAQgWAAgQARg");
	this.shape_13.setTransform(-136.8,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAyCdIAAiSQgBgYgKgLQgLgLgXAAQgRgBgOALQgOAKgIAPIAACdIgmAAIAAk6IAmAAIAAB5QAZggAoAAQBGABAABOIAACSg");
	this.shape_14.setTransform(-159.7,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSCVIAAkJIhhAAIAAggIDnAAIAAAgIhhAAIAAEJg");
	this.shape_15.setTransform(-183.7,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("A+/DeIAAm7MA+AAAAIAAG7g");
	this.shape_16.setTransform(-0.1,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.3,-27.2,396.7,54.4);


(lib.Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB7DjIAAkdIAAgRQAAg5gWgUQgWgUg/AAQiJAAAACDIAAEMIhCAAIAAm/IA/AAIgCA9IACABQAehEB2AAQBgAAAjAhQAhAiAABgIAAEig");
	this.shape.setTransform(98,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggFAIAAm/IBBAAIAAG/gAggj1IAAhKIBBAAIAABKg");
	this.shape_1.setTransform(64.5,-6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiLEoQgkgeAAhWIA/AAQAAA6AVASQAWARBHAAQBLAAAagXQAZgWAAhCIAAhaIgBgBQgZA/h4AAQhkAAglgwQgmgyAAiBQAAiHAngwQAmgyBnAAQBtAAAiBEIACgBIgEg8IBCAAIAAHcQAABhgqAlQgqAkhwAAQhkAAglgfgAhljvQgXAgAABvQAABuAXAhQAXAhBNgBQBOABAZglQAYgkAAhyQAAhlgYggQgZgghOAAQhNAAgXAhg");
	this.shape_2.setTransform(30.3,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AicC6QgnguAAiPQAAiHAngtQAngvBxABQB7AAAmAnQAnAoAACAIAAAiIlCAAQAABqAXAdQAXAdBSAAQBPAAAYgOQAYgOAAgtIAAgPIBDAAIAAARQAABGgqAcQgrAbhqABQh7gBgmgsgAhliWQgYAaAABWID+AAIgBgVQAAhIgYgXQgYgWhPABQhPAAgXAZg");
	this.shape_3.setTransform(-17.8,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Aj2FAIAAp/IEbAAQB1AAAlAhQAkAgAABpQAABqhSAcIAAACQBmAXgBB+QABBmgoApQgpAphjAAgAiuEDICaAAIBAgBQBSAAAbgUQAZgWAAhFQAAhWgagTQgagUhzAAIi5AAgAiugmIC+AAQBaABAagWQAagVAAhLQAAhBgWgSQgYgUhNAAIjRAAg");
	this.shape_4.setTransform(-70.3,-6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#0000FF","#0062FF"],[0,1],0,69,0,-68.9).s().p("EgzGALBQjIAAAAjIIAAvxQAAjIDIAAMBmNAAAQDIAAAADIIAAPxQAADIjIAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#002EFF","#008CFF"],[0,1],0,69,0,-68.9).s().p("EgzGALBQjIAAAAjIIAAvxQAAjIDIAAMBmNAAAQDIAAAADIIAAPxQAADIjIAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000064","#0000FF"],[0,1],0,69,0,-68.9).s().p("EgzGALBQjIAAAAjIIAAvxQAAjIDIAAMBmNAAAQDIAAAADIIAAPxQAADIjIAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-347.1,-70.5,694.2,141.1);


(lib.BonusFeatures = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQCQQgFgGAAgJQAAgJAFgHQAGgGAKAAQALAAAGAGQAFAHAAAJQAAAJgFAGQgGAGgLAAQgKAAgGgGgAgRA/IgDjUIAnAAIgDDUg");
	this.shape.setTransform(145.8,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsBpQgUgJgMgRQgLgQAAgVIAmAAQABAUAOALQAOALAXAAQAVAAANgIQANgKAAgOQAAgPgLgIQgMgKgcgGQgdgFgQgIQgRgJgIgMQgJgLAAgRQAAgbAXgTQAXgTAjAAQAmAAAYAUQAXATAAAeIgmAAQAAgQgNgLQgOgLgUAAQgTAAgMAJQgMAJAAAPQAAAOALAGQALAIAcAGQAcAGARAJQASAIAJANQAIAMAAASQAAAdgYASQgXASgmAAQgaAAgVgKg");
	this.shape_1.setTransform(129.5,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBVQgcgdAAgyIAAgGQAAghANgZQAMgbAXgOQAWgPAaAAQArAAAYAdQAYAcAAA1IAAAPIiVAAQABAhASAUQASAUAcAAQAUAAAOgIQAOgIAKgOIAXASQgcArg3AAQgtAAgcgegAgjhCQgPARgEAeIBuAAIAAgDQgBgdgOgQQgOgQgYAAQgWAAgQARg");
	this.shape_2.setTransform(107.8,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BxIAAjdIAlAAIABAZQASgdAiAAQALAAAGADIAAAjQgJgCgKABQgkAAgOAfIAACdg");
	this.shape_3.setTransform(90.5,3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDBdQgTgVAAgpIAAiPIAmAAIAACOQAAAzApAAQAqAAAOghIAAigIAmAAIAADdIgkAAIgBgWQgWAagqAAQgjAAgSgUg");
	this.shape_4.setTransform(70.6,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGB8QgNgPAAgcIAAiJIgoAAIAAgdIAoAAIAAg2IAlAAIAAA2IApAAIAAAdIgpAAIAACJQAAANAFAHQAGAHANAAQAHAAALgDIAAAfQgPAEgOAAQgZAAgMgQg");
	this.shape_5.setTransform(51.6,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGBgQgUgSgBgcQABgjAagTQAagSAvAAIAlAAIAAgSQAAgUgMgMQgMgLgWgBQgVAAgNALQgOAKAAAOIgmAAQAAgQAMgQQALgPAVgJQAUgJAXAAQAnAAAVAUQAWASABAiIAABlQAAAfAHARIAAAEIgoAAQgCgHgDgRQgaAcgkAAQghAAgVgTgAg1AsQAAASAMAKQAMAKASAAQARAAARgJQAPgJAIgPIAAgtIgeAAQhFAAAAAog");
	this.shape_6.setTransform(34,3.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhBBVQgcgdAAgyIAAgGQAAghANgZQAMgbAXgOQAWgPAaAAQArAAAYAdQAYAcAAA1IAAAPIiVAAQABAhASAUQASAUAcAAQAUAAAOgIQAOgIAKgOIAXASQgcArg3AAQgtAAgcgegAgjhCQgPARgEAeIBuAAIAAgDQgBgdgOgQQgOgQgYAAQgWAAgQARg");
	this.shape_7.setTransform(11.7,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhcCVIAAkpIC4AAIAAAgIiQAAIAABmIB9AAIAAAfIh9AAIAACEg");
	this.shape_8.setTransform(-10.1,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsBpQgUgJgMgRQgLgQAAgVIAmAAQABAUAOALQAOALAXAAQAVAAANgIQANgKAAgOQAAgPgLgIQgMgKgcgGQgdgFgQgIQgRgJgIgMQgJgLAAgRQAAgbAXgTQAXgTAjAAQAmAAAYAUQAXATAAAeIgmAAQAAgQgNgLQgOgLgUAAQgTAAgMAJQgMAJAAAPQAAAOALAGQALAIAcAGQAcAGARAJQASAIAJANQAIAMAAASQAAAdgYASQgXASgmAAQgaAAgVgKg");
	this.shape_9.setTransform(-44.1,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhDBdQgTgVAAgpIAAiPIAmAAIAACOQAAAzApAAQAqAAAOghIAAigIAmAAIAADdIgkAAIgBgWQgWAagqAAQgjAAgSgUg");
	this.shape_10.setTransform(-66.5,3.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAyBxIAAiSQgBgYgKgLQgLgMgXAAQgRAAgOAKQgOAKgIAQIAACdIgmAAIAAjdIAkAAIABAcQAaggAoAAQBGAAAABQIAACRg");
	this.shape_11.setTransform(-89.6,3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhIBUQgcggAAgzIAAgCQAAghANgZQANgaAXgPQAXgOAcAAQAtAAAcAfQAcAgAAAzIAAADQAAAggMAaQgMAagYAOQgXAOgeAAQgsAAgcgfgAgtg8QgRAWAAApQAAAlARAWQARAWAcAAQAdAAARgXQARgWAAgoQAAgkgRgXQgRgXgdAAQgbAAgSAXg");
	this.shape_12.setTransform(-113.1,3.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhlCVIAAkpIBiAAQAwAAAYAUQAZAUAAAnQAAAVgMAQQgMAQgVAJQAZAHAOASQAOATAAAaQAAAogaAXQgaAXgwAAgAg9B1IBAAAQAbAAAQgOQAQgOAAgZQAAg2g7AAIhAAAgAg9gVIA7AAQAZAAAQgNQAPgNAAgWQAAgZgOgLQgPgLgcAAIg6AAg");
	this.shape_13.setTransform(-137.6,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("A3pDaIAAmzMAvSAAAIAAGzg");
	this.shape_14.setTransform(2,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.2,-27.2,306.6,54.4);


(lib.ArrowButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,1).p("Ah2hOIAACdIDthXg");
	this.shape.setTransform(1.2,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ah4B4QgygxABhHQgBhGAygyQAzgxBFAAQBGAAAzAxQAyAygBBGQABBHgyAxQgzAyhGAAQhFAAgzgygAhqBYIDthWIjthFIDtBFIjtBWIAAibg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34.1,34.1);


(lib.PopoutMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bonus = new lib.BonusFeatures();
	this.bonus.parent = this;
	this.bonus.setTransform(-121.3,155.8);
	new cjs.ButtonHelper(this.bonus, 0, 1, 2, false, new lib.BonusFeatures(), 3);

	this.misc = new lib.Misc();
	this.misc.parent = this;
	this.misc.setTransform(-221.7,101.4);
	new cjs.ButtonHelper(this.misc, 0, 1, 2, false, new lib.Misc(), 3);

	this.postmortem = new lib.PostMortem();
	this.postmortem.parent = this;
	this.postmortem.setTransform(5.4,47);
	new cjs.ButtonHelper(this.postmortem, 0, 1, 2, false, new lib.PostMortem(), 3);

	this.dms = new lib.DMsof17();
	this.dms.parent = this;
	this.dms.setTransform(-76.3,-7.4);
	new cjs.ButtonHelper(this.dms, 0, 1, 2, false, new lib.DMsof17(), 3);

	this.stopd = new lib.StopDoingThat();
	this.stopd.parent = this;
	this.stopd.setTransform(-122.5,-61.8);
	new cjs.ButtonHelper(this.stopd, 0, 1, 2, false, new lib.StopDoingThat(), 3);

	this.secret = new lib.SecretMessage();
	this.secret.parent = this;
	this.secret.setTransform(-122.3,-116.2);
	new cjs.ButtonHelper(this.secret, 0, 1, 2, false, new lib.SecretMessage(), 3);

	this.ogate = new lib.ogate_btn();
	this.ogate.parent = this;
	this.ogate.setTransform(-216.8,-170.6);
	new cjs.ButtonHelper(this.ogate, 0, 1, 2, false, new lib.ogate_btn(), 3);

	this.mgate = new lib.Mariogate();
	this.mgate.parent = this;
	this.mgate.setTransform(-177.4,-225);
	new cjs.ButtonHelper(this.mgate, 0, 1, 2, false, new lib.Mariogate(), 3);

	this.liar = new lib.LiarButton();
	this.liar.parent = this;
	this.liar.setTransform(-197.5,-279.4);
	new cjs.ButtonHelper(this.liar, 0, 1, 2, false, new lib.LiarButton(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhkDyQgwgWgZgmQgbgoAAgsIBWAAQACArAhAaQAhAZA0AAQAxAAAfgTQAdgVAAghQAAgjgagTQgbgUhAgOQhDgOgmgTQgngUgSgbQgTgbAAgmQAAg+A1grQA0grBRAAQBXAAA1AsQA2AtAABFIhXAAQAAgjgegaQgegagvAAQguAAgbAVQgbAUAAAiQAAAfAaAQQAYAQBBAOQBAAPApAUQAoATATAdQAUAcgBApQAABEg2ApQg2AphXAAQg7AAgvgVg");
	this.shape.setTransform(258.4,-379.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPEcQgegjAAhAIAAk6IhcAAIAAhDIBcAAIAAh7IBWAAIAAB7IBfAAIAABDIhfAAIAAE6QAAAfANAPQAMAPAfAAQAPAAAagGIAABGQgiAKggAAQg7AAgcgkg");
	this.shape_1.setTransform(216.6,-384.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABxECIAAlOQAAg3gZgaQgZgbg0AAQgpAAggAXQggAWgSAlIAAFoIhXAAIAAn6IBSAAIAEBAQA6hJBdAAQCgAAACC1IAAFOg");
	this.shape_2.setTransform(176,-379.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiVDDQhBhEAAhxIAAgPQAAhMAdg6QAdg8A0giQAzghA8AAQBiAAA3BBQA3BBAAB5IAAAkIlWAAQABBLArAuQApAuBAAAQAuAAAggTQAggSAYggIA1AqQhABiiAAAQhmAAhAhEgAhRiYQgjAlgJBGID9AAIAAgHQgDhCgggkQggglg2AAQg0AAgkAng");
	this.shape_3.setTransform(124.5,-379.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPEcQgegjAAhAIAAk6IhcAAIAAhDIBcAAIAAh7IBWAAIAAB7IBfAAIAABDIhfAAIAAE6QAAAfANAPQAMAPAfAAQAPAAAagGIAABGQgiAKggAAQg7AAgcgkg");
	this.shape_4.setTransform(81.5,-384.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABxECIAAlOQAAg3gZgaQgZgbg0AAQgpAAggAXQggAWgSAlIAAFoIhWAAIAAn6IBSAAIACBAQA6hJBdAAQChAAACC1IAAFOg");
	this.shape_5.setTransform(40.8,-379.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AimC/QhAhHAAh2IAAgGQAAhLAeg7QAdg8A1ggQA0ggBCAAQBnAABABHQBABJAAB2IAAAFQAABLgcA6QgdA7g1AhQg0AhhFAAQhmAAhAhIgAhoiMQgnAzAABeQAABVAnAzQAnAzBBAAQBDAAAng0QAmg0AAhcQAAhTgng0Qgog0hBAAQhAAAgoAzg");
	this.shape_6.setTransform(-13.1,-379.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai9EIQhJhXAAiRIAAhBQAAhfAihIQAihIA+gnQA/gnBRAAQBsAABCA9QBCA9ALBrIhbAAQgMhSgngkQgnglhGAAQhWAAgwBAQgxA/AAB2IAABCQAABvAuBBQAuBCBTAAQBLAAAogiQAogiANhUIBbAAQgNBshDA7QhEA7hvAAQh4AAhJhXg");
	this.shape_7.setTransform(-71.1,-387.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.537)").s().p("EguhBJcMAAAiS3MBdDAAAMAAACS3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.liar},{t:this.mgate},{t:this.ogate},{t:this.secret},{t:this.stopd},{t:this.dms},{t:this.postmortem},{t:this.misc},{t:this.bonus}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PopoutMenu, new cjs.Rectangle(-297.8,-470,595.7,940), null);


(lib.Menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.menubutton.addEventListener("click", menureveal);
		var root = this;
		function menureveal() {
			root.gotoAndPlay(1);
			root.menubutton.removeEventListener("click", menureveal);
		}
	}
	this.frame_29 = function() {
		this.stop();
		this.menubutton.addEventListener("click", menuhide);
		var root = this;
		function menuhide() {
			root.gotoAndPlay(30);
			root.menubutton.removeEventListener("click", menuhide);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(32));

	// Layer 2
	this.menubutton = new lib.MenuButton();
	this.menubutton.parent = this;
	this.menubutton.setTransform(-213.8,-385.6,2.614,2.614,0,0,0,0.3,0.1);
	new cjs.ButtonHelper(this.menubutton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.menubutton).wait(61));

	// Layer 1
	this.menupanel = new lib.PopoutMenu();
	this.menupanel.parent = this;
	this.menupanel.setTransform(-594.7,0);

	this.timeline.addTween(cjs.Tween.get(this.menupanel).to({x:0.1},29,cjs.Ease.get(1)).wait(1).to({x:-596.6},30,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-892.5,-470,722.5,940);


// stage content:
(lib.JassieMeltdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_118 = function() {
		console.log(this);
	}
	this.frame_119 = function() {
		this.stop();
		this.begin_button.addEventListener("click",begin);
		var root = this;
		function begin()
		{
			root.gotoAndPlay(120);
		}
	}
	this.frame_179 = function() {
		this.stop();
		
		this.menubar.menubutton.addEventListener("click", hinthide);
		
		var root = this;
		
		function hinthide() {
			root.gotoAndPlay(180);
			root.menubar.menubutton.removeEventListener("click", hinthide);
		}
	}
	this.frame_180 = function() {
		this.nxt.addEventListener("click", NextFrame);
		this.prev.addEventListener("click", PrevFrame);
		
		var root = this;
		
		
		
		
		function NextFrame(){
			var next = root.currentFrame + 1
			root.gotoAndStop(next);
			this.nxt.removeEventListener("click", NextFrame);
			//root.nxt.addEventListener("click", NextFrame);
		}
		
		function PrevFrame(){
			var prev = root.currentFrame - 1
			root.gotoAndStop(prev);
			this.prev.removeEventListener("click", PrevFrame);
			//root.prev.addEventListener("click", PrevFrame);
		}
		this.menubar.menupanel.liar.addEventListener("click", liarliar);
		this.menubar.menupanel.addEventListener("click", panelhide);
		this.menubar.menupanel.mgate.addEventListener("click", mariogate);
		this.menubar.menupanel.ogate.addEventListener("click", ogate);
		this.menubar.menupanel.secret.addEventListener("click", message);
		this.menubar.menupanel.stopd.addEventListener("click", stopdoingthat);
		this.menubar.menupanel.dms.addEventListener("click", dms17);
		this.menubar.menupanel.postmortem.addEventListener("click", pmort);
		this.menubar.menupanel.misc.addEventListener("click", miscjas);
		this.menubar.menupanel.bonus.addEventListener("click", bonusf);
		
		var tm = this;
		
		function panelhide() {
			tm.menubar.gotoAndPlay(30);
		}
		
		function liarliar() {
			tm.gotoAndStop(210);
		}
		function mariogate() {
			tm.gotoAndStop(212);
		}
		function ogate() {
			tm.gotoAndStop(213);
		}
		
		function message(){
			tm.gotoAndStop(220);
		}
		function stopdoingthat(){
			tm.gotoAndStop(221);
		}
		function dms17(){
			tm.gotoAndStop(224);
		}
		function pmort(){
			window.open("https://thepixelpolygon.github.io/bnbpstm.pdf", "_blank");
		}
		function miscjas(){
			tm.gotoAndStop(236);
		}
		function bonusf(){
			tm.gotoAndStop(241);
		}
	}
	this.frame_209 = function() {
		this.stop();
	}
	this.frame_210 = function() {
		this.vieworiginal.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://thepixelpolygon.github.io/secret.html", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(118).call(this.frame_118).wait(1).call(this.frame_119).wait(60).call(this.frame_179).wait(1).call(this.frame_180).wait(29).call(this.frame_209).wait(1).call(this.frame_210).wait(72));

	// Nav Headers
	this.menubar = new lib.Menu();
	this.menubar.parent = this;
	this.menubar.setTransform(297.8,506.4);
	this.menubar.alpha = 0;
	this.menubar._off = true;

	this.timeline.addTween(cjs.Tween.get(this.menubar).wait(150).to({_off:false},0).to({y:470.1,alpha:1},29,cjs.Ease.get(0.61)).wait(103));

	// Photos
	this.instance = new lib.liar1pngcopy4();
	this.instance.parent = this;
	this.instance.setTransform(270,119,1.485,1.485);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgDNIAAmRIBDAAIABAuQAhg2A9AAQAVABAKAFIAABAQgQgDgSAAQhCAAgYA5IAAEdg");
	this.shape.setTransform(1085,67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah/CvQgmgiAAg0QAAg+AwgiQAwgjBVAAIBDAAIAAgfQAAgkgWgVQgVgWgpAAQglAAgZATQgZASAAAbIhFAAQAAgfAWgbQAVgdAlgQQAkgQArAAQBFAAAoAjQAnAiABA9IAAC4QAAA3APAhIAAAGIhIAAQgGgMgEgfQgwAyhBAAQg8AAgmghgAhgBQQAAAgAVASQAWASAiAAQAfAAAdgQQAdgRANgbIAAhSIg2AAQh9AAAABKg");
	this.shape_1.setTransform(1049.4,67.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiESIAAmRIBDAAIAAGRgAgejNQgKgMABgQQgBgRAKgLQAKgMAUAAQAUAAAKAMQALALAAARQAAAQgLAMQgKALgUAAQgUAAgKgLg");
	this.shape_2.setTransform(1019.6,60.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AijEOIAAobIBIAAIAAHhID/AAIAAA6g");
	this.shape_3.setTransform(992.1,60.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhgDNIAAmRIBDAAIABAuQAgg2A+AAQAVABAKAFIAABAQgQgDgRAAQhEAAgXA5IAAEdg");
	this.shape_4.setTransform(939.8,67.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah/CvQgmgiAAg0QAAg+AwgiQAwgjBVAAIBDAAIAAgfQAAgkgWgVQgVgWgpAAQglAAgZATQgZASAAAbIhFAAQAAgfAWgbQAVgdAlgQQAkgQArAAQBFAAAoAjQAnAiABA9IAAC4QAAA3APAhIAAAGIhIAAQgGgMgEgfQgwAyhBAAQg8AAgmghgAhgBQQAAAgAVASQAWASAiAAQAfAAAdgQQAdgRANgbIAAhSIg2AAQh9AAAABKg");
	this.shape_5.setTransform(904.2,67.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiESIAAmRIBEAAIAAGRgAgdjNQgKgMAAgQQAAgRAKgLQAJgMAUAAQAUAAAKAMQALALAAARQAAAQgLAMQgKALgUAAQgUAAgJgLg");
	this.shape_6.setTransform(874.4,60.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AijEOIAAobIBIAAIAAHhID/AAIAAA6g");
	this.shape_7.setTransform(846.9,60.9);

	this.instance_1 = new lib.liar2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(161,310,1.953,1.953);

	this.instance_2 = new lib.mario1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(755,106,1.54,1.54);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah2CbQgzg2AAhaIAAgLQAAg8AXgvQAWgvAqgaQAogbAvAAQBPAAArAzQArA0AABgIAAAcIkPAAQACA7AhAlQAhAkAzAAQAkAAAZgPQAZgPATgYIAqAhQgyBNhlAAQhRAAgzg1gAg/h4QgdAegGA2IDIAAIAAgFQgDg0gZgdQgagdgrAAQgoAAgcAfg");
	this.shape_8.setTransform(1112.4,67.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMDhQgXgbAAg0IAAj4IhJAAIAAg1IBJAAIAAhhIBDAAIAABhIBLAAIAAA1IhLAAIAAD5QAAAXAKANQAKAMAZgBQALAAAVgEIAAA4QgbAHgaAAQguAAgWgcg");
	this.shape_9.setTransform(1078.3,63.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhVEJQgpgTgWggIAjgpQAtA2A/AAQAxABAdgcQAcgdAAgzIAAgjQgqAwhGAAQhGAAgsg5Qgsg5AAhgQAAhfAsg3QArg3BIgBQBIAAAqA1IADgtIA/AAIAAGHQAABOguAsQgvAuhNgBQgrAAgqgSgAhHi5QgdAmAABNQAABEAcAmQAcAmAxAAQBBABAfg8IAAi2Qggg5g/AAQgxAAgcAng");
	this.shape_10.setTransform(1003.6,75.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiDCXQgzg4AAheIAAgEQAAg7AXgvQAXgvAqgaQApgZA1AAQBRAAAzA5QAzA4AABeIAAAEQAAA7gXAvQgWAugqAaQgqAag2AAQhRAAgyg5gAhShuQgfAoAABKQAABDAfApQAfAoAzAAQA0AAAfgpQAfgpAAhJQAAhCgfgpQgggpgzAAQgzAAgfApg");
	this.shape_11.setTransform(961.4,67.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiESIAAmRIBEAAIAAGRgAgdjNQgLgMAAgQQAAgRALgLQAJgMAUAAQAUAAAKAMQALALgBARQABAQgLAMQgKALgUAAQgUAAgJgLg");
	this.shape_12.setTransform(930.6,60.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhgDNIAAmRIBDAAIABAuQAgg2A+AAQAUABALAFIAABAQgPgDgSAAQhDAAgZA5IAAEdg");
	this.shape_13.setTransform(910.5,67.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ADGEOIAAjSIAGjiIixG0Ig1AAIiymzIAIDhIAADSIhIAAIAAobIBcAAICwG4ICwm4IBdAAIAAIbg");
	this.shape_14.setTransform(821,60.9);

	this.instance_3 = new lib.o1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(534,219,2.49,2.49);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhjD3Qgzgggcg4Qgdg6AAhLIAAguQAAh6A5hDQA4hEBnAAQBUAAA0ArQAzArAMBQIhHAAQgUhshsABQhGgBglAzQglAygBBgIAAArQAABbAqA2QAqA1BFAAQAoAAAegIQAegKAVgVIAAh5Ih+AAIAAg6IDEAAIAADGQgbAogyATQgxAUhBAAQhBgBgzgeg");
	this.shape_15.setTransform(927.9,60.9);

	this.instance_4 = new lib.o2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(392,334,4.206,4.206);

	this.instance_5 = new lib.o3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(530,166,2.39,2.39);

	this.instance_6 = new lib.o4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(362,147,2.168,2.168);

	this.instance_7 = new lib.o5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(719,134,1.454,1.454);

	this.instance_8 = new lib.o6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(752,109,1.54,1.54);

	this.instance_9 = new lib.o7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(496,353,1.458,1.458);

	this.vieworiginal = new lib.ViewOriginal();
	this.vieworiginal.parent = this;
	this.vieworiginal.setTransform(410.3,882.2);
	new cjs.ButtonHelper(this.vieworiginal, 0, 1, 1);

	this.text = new cjs.Text("\"It has come to my attention that people are lying about me, AGAIN. I'm not gonna be naming people, but there are some fuckers out there that like to say I \"manipulate\" people and \"lie\", without giving concrete proof of course. \nHow the hell do you think I manipulate someone without even being aware of it? I never planned to, so do you seriously think I subconciously manipulate people without knowing it? No. Get real. \nI cannot emphasize how much I HATE liars, so shit like this is incredibly furiating. \nI don't understand these people. I will admit to something I've actually done, but I will not take shit like this when I haven't even done what they claim. It's fucking bullshit, and if they're just going to blindly believe whatever someone sticks up their ass, then I don't want anything to do with them anyway. Idiots. \n\n--------------------------------------------------------------- \n\nSo, you found it. Well, honestly, I'm not sure where to begin. \nIf you're not someone I knew from Discord, then you might as well click away from this page. \n\nI've quit Discord for reasons I will not disclose, but that doesn't matter. If you're a friend (or well, used to be) of mine, then I apologize if I didn't let you know beforehand, but this is how it is. \nWell, a new chapter of my life is starting, and it's time to move on from Discord amongst other things, but more especially, that community. In a couple of days or weeks, I won't have ever existed on here. \n\nI'm not Michael, I'm not gonna try to become someone else or make a new identity. I'll just disappear. \nI mean, to most people, I'm probably just a ghost of the past anyway, not worth the attention (no, I'm not looking for pity), but if you're still reading, thanks. And again, if you were a friend of mine, I'm sorry, maybe we'll meet in a better place. \n\nWho knows what the future has enstored for me, I just want to start over, and forget all this bullshit. I'm tired of people misunderstanding me all the time, but oh well. \nHate me all you want if you do, it doesn't matter to me. Nothing does. If I do something, I can admit to it perfectly fine, but when you say that I've done things that are NOT true, I will not tolerate it. \nMoving on... I'm not sure why I made this little hidden message, I guess I just really don't have anything better to do. It's not like anyone will ever find it. Well anyways, it was nice of you to read this entire thing. So long.\"", "18px 'Roboto'");
	this.text.lineHeight = 24;
	this.text.lineWidth = 1839;
	this.text.parent = this;
	this.text.setTransform(33.5,186.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhPC/QgmgRgVgeQgVgfAAgkIBFAAQACAjAaAUQAZAUApAAQAoAAAXgPQAXgQAAgbQABgcgVgPQgVgPgzgMQg1gLgegOQgegQgPgVQgPgWAAgeQAAgxAqgiQApgiBAAAQBEAAAsAjQAqAjgBA3IhFAAQAAgcgXgUQgYgVglAAQgkAAgVARQgVAQgBAaQAAAZAVANQATAMAyAMQA0ALAgAQQAfAPAQAXQAPAWABAgQAAA2grAhQgsAghFAAQguAAglgRg");
	this.shape_16.setTransform(1088.1,67.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhQC/QglgRgUgeQgWgfAAgkIBFAAQACAjAaAUQAZAUApAAQAoAAAXgPQAXgQAAgbQABgcgVgPQgVgPgzgMQg1gLgegOQgegQgPgVQgPgWAAgeQAAgxAqgiQApgiBAAAQBEAAAsAjQApAjAAA3IhEAAQAAgcgYgUQgYgVglAAQgkAAgVARQgVAQgBAaQAAAZAVANQATAMAyAMQA0ALAgAQQAfAPAQAXQAQAWAAAgQgBA2gqAhQgsAghFAAQguAAgmgRg");
	this.shape_17.setTransform(1048.9,67.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ah2CbQgzg2AAhaIAAgLQAAg8AXgvQAWgvAqgaQAogbAvAAQBPAAArAzQArA0AABgIAAAcIkPAAQACA7AhAlQAhAkAzAAQAkAAAZgPQAZgPATgYIAqAhQgyBNhlAAQhRAAgzg1gAg/h4QgdAegGA2IDIAAIAAgFQgDg0gZgdQgagdgrAAQgoAAgcAfg");
	this.shape_18.setTransform(1009.6,67.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ADFEOIAAjSIAIjiIiyG0Ig2AAIixmzIAHDhIAADSIhHAAIAAobIBcAAICwG4ICxm4IBcAAIAAIbg");
	this.shape_19.setTransform(956,60.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ah2CbQgzg2AAhaIAAgLQAAg8AXgvQAWgvAqgaQAogbAvAAQBPAAArAzQArA0AABgIAAAcIkPAAQACA7AhAlQAhAkAzAAQAkAAAZgPQAZgPATgYIAqAhQgyBNhlAAQhRAAgzg1gAg/h4QgdAegGA2IDIAAIAAgFQgDg0gZgdQgagdgrAAQgoAAgcAfg");
	this.shape_20.setTransform(859.4,67.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhgDNIAAmRIBDAAIABAuQAgg2A/AAQATABALAFIAABAQgPgDgSAAQhDAAgZA5IAAEdg");
	this.shape_21.setTransform(828.1,67.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ah3CaQgxg3AAhfIAAgLQAAg6AVguQAWguAogZQAogZA2AAQBEAAAtAoQAsApADBAIhBAAQgDgngagZQgbgZgnAAQgzAAgdAmQgcAmAABHIAAAMQAABFAcAmQAdAlA0AAQAkAAAcgWQAbgWADgiIBBAAQgCAjgVAfQgWAfglATQgkASgpAAQhRAAgwg2g");
	this.shape_22.setTransform(793.7,67.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ah2CbQgzg2AAhaIAAgLQAAg8AXgvQAWgvAqgaQAogbAvAAQBPAAArAzQArA0AABgIAAAcIkPAAQACA7AhAlQAhAkAzAAQAkAAAZgPQAZgPATgYIAqAhQgyBNhlAAQhRAAgzg1gAg/h4QgdAegGA2IDIAAIAAgFQgDg0gZgdQgagdgrAAQgoAAgcAfg");
	this.shape_23.setTransform(753.6,67.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhfEBQgwgWgagmQgbglABguIBIAAQgBAwAlAdQAjAcA8AAQA4AAAegXQAegXAAgoQAAgogbgVQgcgWhIgVQhcgagqgmQgpgmAAg4QAAhAAzgqQAzgqBQAAQA4ABAsAVQArAWAZAlQAXAmAAAtIhIAAQAAgxgegcQgggcg5AAQgzgBgeAYQgdAXAAApQAAAiAcAWQAcAXBCATQBDATAmAWQAnAWASAfQASAfAAApQAABCgzAnQgzAnhWABQg2gBgxgUg");
	this.shape_24.setTransform(710.7,60.9);

	this.instance_10 = new lib.sdt1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(767,128,0.267,0.267);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABZEdIAAkJQAAgrgUgVQgTgVgpAAQghAAgZASQgZASgOAdIAAEdIhFAAIAAo5IBFAAIAADZQAug4BIAAQB+AAACCPIAAEJg");
	this.shape_25.setTransform(1144.6,59.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgjEOIAAnhIitAAIAAg6IGhAAIAAA6IiuAAIAAHhg");
	this.shape_26.setTransform(1101,60.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ABZDNIAAkJQAAgsgUgVQgTgUgqAAQggAAgZASQgaASgNAdIAAEdIhFAAIAAmRIBBAAIACAzQAug7BKAAQB+AAACCQIAAEJg");
	this.shape_27.setTransform(995.9,67.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgiESIAAmRIBDAAIAAGRgAgejNQgKgMAAgQQAAgRAKgLQAKgMAUAAQAUAAAKAMQAKALAAARQAAAQgKAMQgKALgUAAQgUAAgKgLg");
	this.shape_28.setTransform(965.7,60.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AjCEOIAAobICYAAQBFAAA3AfQA2AfAeA6QAdA5AABLIAAAhQAABNgdA5QgdA6g3AfQg3AfhIAAgAh7DUIBLAAQBSAAAtgzQAugzAAhfIAAgfQAAhcgrgzQgrgzhPgBIhTAAg");
	this.shape_29.setTransform(889,60.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AipEaIAAorIA/AAIADAsQArg0BJAAQBIAAAqA3QAqA2ABBiIAAAGQgBBbgqA4QgpA4hIAAQhIAAgqgvIAADCgAhkinIAAC/QAfA3A/AAQAxAAAdgnQAdgoAAhMQAAhEgdgnQgdgngyAAQg+AAgfA3g");
	this.shape_30.setTransform(823.9,75.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AiDCXQgzg4AAheIAAgEQAAg7AXgvQAXgvAqgaQApgZA1AAQBRAAAzA5QAzA4AABeIAAAEQAAA7gXAvQgWAugqAaQgqAag2AAQhRAAgyg5gAhShuQgfAoAABKQAABDAfApQAfAoAzAAQA0AAAfgpQAfgpAAhJQAAhCgfgpQgggpgzAAQgzAAgfApg");
	this.shape_31.setTransform(780.1,67.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgMDhQgXgbAAg0IAAj4IhJAAIAAg1IBJAAIAAhhIBDAAIAABhIBLAAIAAA1IhLAAIAAD5QAAAXAKANQAKAMAZgBQALAAAVgEIAAA4QgbAHgaAAQguAAgWgcg");
	this.shape_32.setTransform(744.8,63.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhfEBQgwgWgagmQgbglAAguIBIAAQABAwAjAdQAlAcA7AAQA5AAAegXQAegXAAgoQgBgogbgVQgcgWhIgVQhcgagpgmQgqgmAAg4QAAhAAzgqQAzgqBRAAQA3ABAsAVQArAWAYAlQAYAmAAAtIhHAAQAAgxgggcQgfgcg4AAQg0gBgeAYQgdAXAAApQAAAiAcAWQAcAXBDATQBDATAmAWQAlAWATAfQATAfAAApQgBBCgzAnQgzAnhWABQg3gBgwgUg");
	this.shape_33.setTransform(711.1,60.9);

	this.instance_11 = new lib.sdt2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(779,147,0.252,0.252);

	this.instance_12 = new lib._1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(274,119,1.335,1.335);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhwEOIDenjIkkAAIAAg4IFtAAIAAAnIjfH0g");
	this.shape_34.setTransform(1293.5,60.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAjEQIAAnJIiKAzIAAg+IDEhLIALAAIAAIfg");
	this.shape_35.setTransform(1246.4,60.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgbBZIAAixIA3AAIAAApIgICIg");
	this.shape_36.setTransform(1223.1,39.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag5EhIAAlcIg/AAIAAg0IA/AAIAAgqQAAhBAigiQAigkA/AAQAYAAAXAHIgDA3QgSgEgUAAQghABgSATQgSAUAAAkIAAArIBVAAIAAA0IhVAAIAAFcg");
	this.shape_37.setTransform(1185.7,59);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhQC/QglgRgUgeQgWgfAAgkIBFAAQACAjAaAUQAZAUApAAQAnAAAZgPQAWgQAAgbQABgcgVgPQgVgPgzgMQg1gLgegOQgegQgPgVQgPgWAAgeQAAgxAqgiQApgiBAAAQBEAAAsAjQApAjAAA3IhEAAQgBgcgXgUQgYgVglAAQgkAAgVARQgVAQgBAaQAAAZAVANQATAMAyAMQA0ALAgAQQAfAPAQAXQAQAWAAAgQgBA2gqAhQgrAghGAAQguAAgmgRg");
	this.shape_38.setTransform(1089.5,67.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("ADFEOIAAjSIAHjiIixG0Ig2AAIiwmzIAHDhIAADSIhIAAIAAobIBcAAICwG4ICwm4IBdAAIAAIbg");
	this.shape_39.setTransform(1036.8,60.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AjDEOIAAobICZAAQBGAAA2AfQA2AfAeA6QAdA5ABBLIAAAhQAABNgeA5QgdA6g3AfQg3AfhHAAgAh7DUIBLAAQBRAAAvgzQAtgzAAhfIAAgfQAAhcgrgzQgsgzhOgBIhTAAg");
	this.shape_40.setTransform(979.6,60.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhjD3Qg0gggbg4Qgcg6gBhLIAAguQAAh6A5hDQA5hEBmAAQBUAAA0ArQAzArAMBQIhHAAQgUhshsABQhGgBglAzQglAyAABgIAAArQAABbApA2QApA1BHAAQAoAAAdgIQAegKAVgVIAAh5Ih+AAIAAg6IDEAAIAADGQgcAogxATQgwAUhCAAQhBgBgzgeg");
	this.shape_41.setTransform(776.5,60.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("ABZEdIAAkJQgBgrgSgVQgUgVgpAAQghAAgZASQgZASgOAdIAAEdIhFAAIAAo5IBFAAIAADZQAtg4BIAAQCAAAABCPIAAEJg");
	this.shape_42.setTransform(671.3,59.4);

	this.instance_13 = new lib._2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(482,105,1.419,1.419);

	this.instance_14 = new lib._3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(547,116,1.415,1.415);

	this.instance_15 = new lib._4();
	this.instance_15.parent = this;
	this.instance_15.setTransform(509,106,1.448,1.448);

	this.instance_16 = new lib._5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(337,118,1.425,1.425);

	this.instance_17 = new lib._6();
	this.instance_17.parent = this;
	this.instance_17.setTransform(674,133,1.343,1.343);

	this.instance_18 = new lib._7();
	this.instance_18.parent = this;
	this.instance_18.setTransform(643,120,1.367,1.367);

	this.instance_19 = new lib._8();
	this.instance_19.parent = this;
	this.instance_19.setTransform(636,120,1.317,1.317);

	this.instance_20 = new lib._9();
	this.instance_20.parent = this;
	this.instance_20.setTransform(421,115,1.273,1.273);

	this.instance_21 = new lib._10();
	this.instance_21.parent = this;
	this.instance_21.setTransform(387,190,2.33,2.33);

	this.instance_22 = new lib._11();
	this.instance_22.parent = this;
	this.instance_22.setTransform(159,129,1.81,1.81);

	this.instance_23 = new lib._12();
	this.instance_23.parent = this;
	this.instance_23.setTransform(116,266,2.222,2.222);

	this.instance_24 = new lib._13();
	this.instance_24.parent = this;
	this.instance_24.setTransform(492,143,2.168,2.168);

	this.instance_25 = new lib.misc1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(332,263,2.513,2.513);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgfAdQgLgLAAgRQAAgRALgMQAKgMAVAAQAVAAALAMQALAMAAARQAAARgLALQgLAMgVAAQgVAAgKgMg");
	this.shape_43.setTransform(1041.5,84.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhQC/QglgRgUgeQgWgfAAgkIBFAAQACAjAaAUQAZAUApAAQAoAAAXgPQAXgQABgbQAAgcgVgPQgVgPgzgMQg1gLgegOQgegQgPgVQgPgWAAgeQAAgxAqgiQApgiBAAAQBEAAAsAjQAqAjgBA3IhEAAQAAgcgYgUQgYgVglAAQgkAAgVARQgVAQgBAaQAAAZAVANQATAMAyAMQA0ALAgAQQAfAPAQAXQAQAWAAAgQAAA2grAhQgrAghGAAQguAAgmgRg");
	this.shape_44.setTransform(972.4,67.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgiESIAAmRIBDAAIAAGRgAgejNQgKgMAAgQQAAgRAKgLQALgMATAAQAUAAAKAMQAKALAAARQAAAQgKAMQgKALgUAAQgTAAgLgLg");
	this.shape_45.setTransform(943.8,60.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("ADFEOIAAjSIAHjiIixG0Ig2AAIiwmzIAGDhIAADSIhHAAIAAobIBcAAICwG4ICwm4IBdAAIAAIbg");
	this.shape_46.setTransform(901.3,60.9);

	this.instance_26 = new lib.misc2();
	this.instance_26.parent = this;
	this.instance_26.setTransform(766,125,0.269,0.269);

	this.instance_27 = new lib.misc3();
	this.instance_27.parent = this;
	this.instance_27.setTransform(762,119,0.274,0.274);

	this.instance_28 = new lib.misc4();
	this.instance_28.parent = this;
	this.instance_28.setTransform(498,351,3.304,3.304);

	this.instance_29 = new lib.misc5();
	this.instance_29.parent = this;
	this.instance_29.setTransform(720,230,3.752,3.752);

	this.instance_30 = new lib.AstralHecker();
	this.instance_30.parent = this;
	this.instance_30.setTransform(703,213,4.023,4.023);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ag0C9QAfgYATgxQASgyAAg9IAAgFQAAgqgJgkQgIglgQgcQgQgdgTgQIAIgXQAaAPAXAjQAYAhAMAqQAMApAAAuQAAAtgMApQgLAogZAkQgXAigaAOg");
	this.shape_47.setTransform(1052.5,136.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAuCaIhKhlIgXAZIAABMIgmAAIAAkzIAmAAIAAC5IATgYIBDhGIAtAAIhTBaIBdB+g");
	this.shape_48.setTransform(1037.4,132.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhABTQgageAAgzIAAgFQAAggALgZQAMgYAWgOQAVgNAdAAQAkAAAZAVQAYAWABAjIgjAAQgBgVgPgNQgOgOgVAAQgbAAgQAUQgPAVAAAmIAAAGQAAAmAPAUQAQAUAbAAQAUAAAPgMQAPgMABgSIAjAAQgBATgMAQQgLARgUAKQgUAKgWAAQgrAAgagdg");
	this.shape_49.setTransform(1015.2,137);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhABTQgbgdAAgwIAAgGQAAggANgZQALgaAXgOQAWgOAZAAQAqAAAXAbQAYAcAAA0IAAAPIiSAAQABAgASATQASAUAbAAQATAAANgIQAOgIALgNIAWARQgbAqg3AAQgrAAgcgdgAgihBQgPARgDAdIBrAAIAAgDQgBgcgOgPQgOgQgXAAQgVAAgQAQg");
	this.shape_50.setTransform(993.6,137);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("ABJCSIAAiHIiRAAIAACHIgnAAIAAkjIAnAAIAAB+ICRAAIAAh+IAnAAIAAEjg");
	this.shape_51.setTransform(967.9,133.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAwBuIAAiOQAAgYgLgLQgKgLgWAAQgRAAgOAKQgOAJgHAQIAACZIglAAIAAjXIAjAAIABAbQAZgfAnAAQBFAAAABNIAACOg");
	this.shape_52.setTransform(931.9,136.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag/BTQgcgdAAgwIAAgGQAAggAMgZQAMgaAXgOQAWgOAZAAQAqAAAYAbQAXAcAAA0IAAAPIiSAAQABAgASATQASAUAaAAQAUAAAOgIQAOgIAJgNIAXARQgbAqg2AAQgrAAgcgdgAgihBQgPARgEAdIBsAAIAAgDQgCgcgOgPQgNgQgXAAQgWAAgPAQg");
	this.shape_53.setTransform(910,137);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AhiCSIAAkjIBfAAQAvAAAYAUQAXAUAAAmQAAAUgLAQQgMAQgUAIQAYAHAOASQANASAAAaQAAAngZAWQgaAXguAAgAg8ByIA+AAQAbAAAQgNQAQgPAAgYQAAg1g5AAIhAAAgAg8gUIA7AAQAYAAAPgNQAPgNAAgVQAAgYgOgLQgOgLgcAAIg5AAg");
	this.shape_54.setTransform(886.7,133.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgECiQgwhEAAheQAAgtANgqQAMgqAYghQAWgjAagOIAIAZQgeAWgSAvQgSAugCA5IAAAQQAABNAcA5QARAiAXATIgIAWQgbgOgWgjg");
	this.shape_55.setTransform(867.3,136.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgdEFQgLgLAAgRQAAgQALgMQAKgLATAAQAUAAALALQAKAMgBAQQABARgKALQgLALgUAAQgTAAgKgLgAggBzIgFmCIBHAAIgFGCg");
	this.shape_56.setTransform(1224.1,61.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhQC/QglgRgUgeQgWgfAAgkIBFAAQACAjAZAUQAaAUAqAAQAnAAAYgPQAWgQAAgbQAAgcgUgPQgVgPgzgMQg1gLgegOQgegQgPgVQgPgWAAgeQAAgxAqgiQAqgiA/AAQBFAAArAjQApAjAAA3IhEAAQgBgcgXgUQgYgVglAAQgkAAgVARQgWAQAAAaQAAAZAVANQATAMAzAMQAzALAgAQQAfAPAQAXQAQAWAAAgQgBA2grAhQgqAghFAAQgwAAglgRg");
	this.shape_57.setTransform(1194.5,67.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhgDNIAAmRIBDAAIABAuQAgg2A/AAQAUABAKAFIAABAQgPgDgTAAQhDAAgYA5IAAEdg");
	this.shape_58.setTransform(1123.9,67.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ah7CoQgigmAAhJIAAkEIBFAAIAAECQgBBbBLAAQBNAAAbg7IAAkiIBEAAIAAGQIhBAAIgCgnQgnAuhNABQhBAAghglg");
	this.shape_59.setTransform(1088,68.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AinEOIAAobIFOAAIAAA6IkGAAIAAC5IDhAAIAAA6IjhAAIAADug");
	this.shape_60.setTransform(941.7,60.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhQC/QglgRgUgeQgWgfAAgkIBFAAQACAjAZAUQAaAUAqAAQAmAAAZgPQAWgQAAgbQABgcgVgPQgVgPgzgMQg1gLgegOQgegQgPgVQgPgWAAgeQAAgxAqgiQAqgiA/AAQBEAAAsAjQApAjAAA3IhEAAQgBgcgXgUQgYgVglAAQgkAAgVARQgVAQgBAaQAAAZAVANQATAMAzAMQAzALAgAQQAfAPAQAXQAQAWAAAgQgBA2grAhQgqAghFAAQgvAAgmgRg");
	this.shape_61.setTransform(880.3,67.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Ah7CoQgigmAAhJIAAkEIBFAAIAAECQAABbBKAAQBOAAAZg7IAAkiIBFAAIAAGQIhBAAIgBgnQgpAuhMABQhAAAgiglg");
	this.shape_62.setTransform(839.7,68.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("ABZDNIAAkJQgBgsgSgVQgUgUgqAAQggAAgZASQgaASgOAdIAAEdIhEAAIAAmRIBBAAIACAzQAug7BJAAQCAAAABCQIAAEJg");
	this.shape_63.setTransform(797.9,67.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("Ai3EOIAAobICxAAQBXAAAtAkQArAlABBHQgBAmgVAdQgVAdglAQQArAMAaAiQAZAiAAAvQAABJgvAqQgvAphXAAgAhwDUIB1AAQAyAAAdgaQAcgaAAgtQAAhhhqAAIh2AAgAhwgnIBsAAQAuAAAcgXQAcgXAAgoQAAgtgagUQgagVg0AAIhqAAg");
	this.shape_64.setTransform(711,60.9);

	this.instance_31 = new lib.bitsandheck();
	this.instance_31.parent = this;
	this.instance_31.setTransform(698,208,0.512,0.512);

	this.instance_32 = new lib.heck();
	this.instance_32.parent = this;
	this.instance_32.setTransform(687,189,4.527,4.527);

	this.instance_33 = new lib.HeckGS();
	this.instance_33.parent = this;
	this.instance_33.setTransform(695,205,4.146,4.146);

	this.instance_34 = new lib.hecky();
	this.instance_34.parent = this;
	this.instance_34.setTransform(702,180,2.38,2.38);

	this.instance_35 = new lib.brandy();
	this.instance_35.parent = this;
	this.instance_35.setTransform(775,192,1.502,1.502);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Ag0C9QAfgYATgxQARgyABg9IAAgFQAAgqgJgkQgIglgQgcQgQgdgTgQIAIgXQAaAPAYAjQAXAhAMAqQAMApAAAuQAAAtgLApQgNAogXAkQgYAigaAOg");
	this.shape_65.setTransform(1042.6,136.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AhGBSQgcgfAAgyIAAgCQAAggANgZQAMgaAXgOQAWgNAcAAQAsAAAbAeQAcAfAAAyIAAACQAAAggMAZQgNAZgWAOQgXAOgdAAQgrAAgbgegAgrg7QgRAWAAAnQAAAkARAWQAQAWAbAAQAcAAARgWQARgWAAgnQAAgkgRgWQgRgWgcAAQgbAAgQAWg");
	this.shape_66.setTransform(1002.2,137);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AhDB9QgYgfABgyIAAgCQAAgxAXgeQAYgfAmAAQAlAAAXAaIAAhxIAlAAIAAEzIgjAAIgBgXQgXAbgnAAQglAAgYgfgAgmgPQgPAUAAApQAAAlAPAVQAPAUAaAAQAjAAARgfIAAhjQgSgegiAAQgaAAgPAVg");
	this.shape_67.setTransform(978.5,132.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAwBuIAAiOQAAgYgLgLQgKgLgWAAQgRAAgOAKQgOAJgHAQIAACZIglAAIAAjXIAjAAIABAbQAZgfAnAAQBFAAAABNIAACOg");
	this.shape_68.setTransform(956.2,136.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AhEBeQgUgSAAgcQAAgiAZgRQAagTAuAAIAkAAIAAgRQAAgUgMgLQgMgMgVAAQgUAAgNAKQgOAKAAAPIglAAQAAgRAMgPQALgPAUgJQATgIAXAAQAlAAAWASQAVATABAhIAABjQAAAdAHASIAAADIgmAAQgEgGgCgRQgaAbgiAAQggAAgVgSgAgzArQAAARALAKQAMAKASAAQAQAAAQgJQAQgJAHgOIAAgtIgdAAQhDAAAAAog");
	this.shape_69.setTransform(933.7,137);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgzBuIAAjXIAkAAIAAAZQASgdAhAAQALAAAFACIAAAjQgIgCgKAAQgjAAgNAgIAACYg");
	this.shape_70.setTransform(916.7,136.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AhiCSIAAkjIBfAAQAvAAAYAUQAXAUAAAmQAAAUgLAQQgMAQgUAIQAYAHAOASQANASAAAaQAAAngZAWQgaAXguAAgAg8ByIA+AAQAbAAAQgNQAQgPAAgYQAAg1g6AAIg/AAgAg8gUIA7AAQAYAAAPgNQAPgNAAgVQAAgYgOgLQgOgLgcAAIg5AAg");
	this.shape_71.setTransform(896.5,133.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgFCiQgvhEAAheQAAgtANgqQALgqAZghQAWgjAagOIAIAZQgeAWgSAvQgSAugCA5IAAAQQAABNAbA5QASAiAXATIgIAWQgagOgYgjg");
	this.shape_72.setTransform(877.1,136.1);

	this.instance_36 = new lib.cammy1();
	this.instance_36.parent = this;
	this.instance_36.setTransform(274,337,3.814,3.814);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("Ag0C9QAfgYATgxQASgyAAg9IAAgFQAAgqgJgkQgIglgQgcQgQgdgTgQIAIgXQAbAPAXAjQAXAhAMAqQAMApAAAuQAAAtgLApQgNAogXAkQgXAigbAOg");
	this.shape_73.setTransform(1036.1,136.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AhBCXIgOgCIAAgeIAKABQATgBALgHQAKgHAHgVIAIgWIhNjVIAoAAIA1ChIAzihIAnAAIhXD5QgTA2gsAAg");
	this.shape_74.setTransform(1020.3,141.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("ABzBuIAAiOQAAgXgLgLQgKgMgaAAQgUAAgOAMQgNANgDAVIAACOIgkAAIAAiNQAAgvguAAQgkAAgOAfIAACdIglAAIAAjXIAjAAIABAYQAYgcAoAAQAuAAAPAiQALgPARgKQASgJAXAAQBIAAABBLIAACQg");
	this.shape_75.setTransform(992.6,136.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("ABzBuIAAiOQAAgXgLgLQgKgMgaAAQgUAAgOAMQgNANgDAVIAACOIgkAAIAAiNQAAgvguAAQgkAAgOAfIAACdIglAAIAAjXIAjAAIABAYQAYgcAoAAQAuAAAPAiQALgPARgKQASgJAXAAQBIAAABBLIAACQg");
	this.shape_76.setTransform(956.7,136.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AhQBxQgfglAAg+IAAgbQAAgpAOgfQAPgfAbgQQAagRAiAAQAvAAAcAaQAcAaAEAuIgnAAQgEgjgRgQQgRgPgeAAQgkAAgVAbQgUAbAAAyIAAAcQAAAvATAcQAUAcAiAAQAhAAARgOQARgPAFgkIAnAAQgFAvgdAZQgcAZgxAAQgyAAgfglg");
	this.shape_77.setTransform(903.3,133.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgFCiQgvhEAAheQAAgtAMgqQANgqAXghQAXgjAagOIAIAZQgeAWgSAvQgSAugCA5IAAAQQAABNAbA5QARAiAYATIgIAWQgbgOgXgjg");
	this.shape_78.setTransform(883.7,136.1);

	this.instance_37 = new lib.cammy2();
	this.instance_37.parent = this;
	this.instance_37.setTransform(304,354,3.507,3.507);

	this.instance_38 = new lib.cammy3();
	this.instance_38.parent = this;
	this.instance_38.setTransform(420,342,3.753,3.753);

	this.instance_39 = new lib.FDD1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(677,182,4.935,4.935);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("Ag0C9QAfgYATgxQASgyAAg9IAAgFQAAgqgJgkQgIglgQgcQgQgdgTgQIAIgXQAbAPAXAjQAXAhAMAqQAMApAAAuQAAAtgLApQgMAogYAkQgXAigbAOg");
	this.shape_79.setTransform(1112.1,136.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AhABTQgbgdAAgwIAAgGQAAggAMgZQAMgaAXgOQAWgOAZAAQAqAAAYAbQAXAcAAA0IAAAPIiSAAQABAgASATQASAUAaAAQAUAAAOgIQAOgIAJgNIAXARQgbAqg3AAQgqAAgdgdgAgihBQgPARgEAdIBsAAIAAgDQgBgcgOgPQgOgQgXAAQgWAAgPAQg");
	this.shape_80.setTransform(1095.5,137);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgNBsIhOjXIAmAAIA2ClIA1ilIAmAAIhNDXg");
	this.shape_81.setTransform(1074.4,137);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgSCUIAAjYIAlAAIAADYgAgPhuQgGgGAAgJQAAgJAGgHQAFgGAKAAQALAAAGAGQAFAHAAAJQAAAJgFAGQgGAGgLAAQgKAAgFgGg");
	this.shape_82.setTransform(1059.6,133.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AhoCSIAAkjIBSAAQAlAAAdARQAdARAQAfQAQAfAAAoIAAASQAAApgPAfQgQAfgeARQgdAQgnABgAhCByIAoAAQAsAAAZgbQAYgcAAgzIAAgQQAAgygXgbQgXgcgqAAIgtAAg");
	this.shape_83.setTransform(1027.8,133.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgrBnQgTgJgLgRQgMgQAAgTIAlAAQABASAOALQAOALAVAAQAWAAAMgIQANgJAAgOQAAgPgLgIQgLgJgbgGQgcgGgRgHQgRgJgIgLQgHgMgBgQQABgbAWgSQAXgSAhAAQAlAAAYATQAWATAAAdIglAAQAAgPgNgLQgNgLgUAAQgSAAgMAJQgMAJAAAOQAAANALAHQALAHAbAGQAbAGASAJQARAIAIAMQAIAMAAARQAAAdgXASQgXARgmAAQgYAAgVgJg");
	this.shape_84.setTransform(982.4,137);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgSCUIAAjYIAkAAIAADYgAgPhuQgGgGAAgJQAAgJAGgHQAFgGAKAAQALAAAFAGQAGAHAAAJQAAAJgGAGQgFAGgLAAQgKAAgFgGg");
	this.shape_85.setTransform(967,133.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AhoCSIAAkjIBSAAQAlAAAdARQAdARAQAfQAQAfAAAoIAAASQAAApgPAfQgQAfgeARQgdAQgnABgAhCByIAoAAQAsAAAZgbQAYgcAAgzIAAgQQAAgygXgbQgXgcgqAAIgtAAg");
	this.shape_86.setTransform(949,133.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AhbCYIAAkrIAiAAIACAYQAXgcAnAAQAnAAAXAeQAWAcABA1IAAADQgBAxgWAfQgXAdgnAAQgmAAgWgZIAABpgAg1haIAABnQAQAeAiAAQAagBAQgUQAQgWAAgoQAAglgQgWQgQgUgaAAQgigBgQAeg");
	this.shape_87.setTransform(904.6,141);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AhaCYIAAkrIAiAAIABAYQAXgcAnAAQAnAAAXAeQAWAcAAA1IAAADQAAAxgWAfQgWAdgnAAQgnAAgXgZIAABpgAg2haIAABnQARAeAjAAQAZgBAQgUQAPgWAAgoQAAglgPgWQgQgUgaAAQghgBgSAeg");
	this.shape_88.setTransform(881.6,141);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgSCaIAAkzIAlAAIAAEzg");
	this.shape_89.setTransform(841.3,132.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AhZCSIAAkjICzAAIAAAgIiNAAIAABkIB5AAIAAAeIh5AAIAACBg");
	this.shape_90.setTransform(826.1,133.3);

	this.instance_40 = new lib.inky1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(400,342,4.089,4.089);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("Ag0C9QAfgYATgxQARgyABg9IAAgFQAAgqgJgkQgIglgPgcQgQgdgUgQIAIgXQAbAPAWAjQAYAhAMAqQAMApAAAuQAAAtgMApQgLAogZAkQgWAigbAOg");
	this.shape_91.setTransform(1002.9,136.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgSCSIAAkjIAlAAIAAEjg");
	this.shape_92.setTransform(928.5,133.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgFCiQgvhEAAheQAAgtAMgqQAMgqAYghQAXgjAagOIAIAZQgeAWgSAvQgSAugCA5IAAAQQAABNAbA5QARAiAYATIgIAWQgbgOgXgjg");
	this.shape_93.setTransform(916.9,136.1);

	this.instance_41 = new lib.inky2();
	this.instance_41.parent = this;
	this.instance_41.setTransform(322,349,4.327,4.327);

	this.instance_42 = new lib.inky3();
	this.instance_42.parent = this;
	this.instance_42.setTransform(384,302,3.411,3.411);

	this.instance_43 = new lib.jelle1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(312,281,2.483,2.483);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgSCaIAAkzIAlAAIAAEzg");
	this.shape_94.setTransform(965.3,132.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AhABTQgbgdAAgwIAAgGQAAggAMgZQAMgaAXgOQAWgOAZAAQAqAAAYAbQAXAcAAA0IAAAPIiSAAQABAgASATQASAUAaAAQAUAAAOgIQANgIALgNIAWARQgbAqg3AAQgqAAgdgdgAgihBQgPARgEAdIBsAAIAAgDQgBgcgOgPQgOgQgXAAQgWAAgPAQg");
	this.shape_95.setTransform(949.8,137);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AhCB+QgZgXAAgoIAmAAQAAAZAPAOQANAOAZAAQAYAAAPgPQAPgPgBgbIAAjOIAnAAIAADOQAAAqgZAXQgZAYgqAAQgqAAgYgWg");
	this.shape_96.setTransform(926.4,133.5);

	this.instance_44 = new lib.jelle2();
	this.instance_44.parent = this;
	this.instance_44.setTransform(322,324,5.026,5.026);

	this.instance_45 = new lib.neb1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(659,206,1.847,1.847);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("Ag0C9QAfgYATgxQASgyAAg9IAAgFQAAgqgJgkQgIglgQgcQgQgdgTgQIAIgXQAaAPAYAjQAXAhAMAqQAMApAAAuQAAAtgLApQgMAogYAkQgYAigaAOg");
	this.shape_97.setTransform(1002.9,136.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("Ag3B/IgCAZIgiAAIAAkzIAlAAIAABzQAXgcAmAAQAoAAAWAeQAXAeAAAzIAAADQAAAxgXAfQgXAegmAAQgoAAgXgdgAg2gCIAABcQARAiAkAAQAaAAAPgUQAPgVAAgpQAAgmgPgUQgPgUgaAAQglAAgQAig");
	this.shape_98.setTransform(985.8,132.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("Ag/BTQgcgdAAgwIAAgGQAAggANgZQAMgaAWgOQAWgOAZAAQAqAAAXAbQAYAcAAA0IAAAPIiSAAQABAgASATQASAUAbAAQATAAANgIQAOgIAKgNIAXARQgbAqg2AAQgsAAgbgdgAgihBQgPARgDAdIBrAAIAAgDQgCgcgOgPQgNgQgXAAQgWAAgPAQg");
	this.shape_99.setTransform(963.2,137);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("ABJCSIiSjgIAADgIgmAAIAAkjIAmAAICSDhIAAjhIAnAAIAAEjg");
	this.shape_100.setTransform(937.5,133.3);

	this.instance_46 = new lib.neb2();
	this.instance_46.parent = this;
	this.instance_46.setTransform(675,167,1.99,1.99);

	this.instance_47 = new lib.neb3();
	this.instance_47.parent = this;
	this.instance_47.setTransform(698,182,1.865,1.865);

	this.instance_48 = new lib.neb4();
	this.instance_48.parent = this;
	this.instance_48.setTransform(688,182,1.538,1.538);

	this.instance_49 = new lib.neb5();
	this.instance_49.parent = this;
	this.instance_49.setTransform(620,180,3.262,3.262);

	this.instance_50 = new lib.neb6();
	this.instance_50.parent = this;
	this.instance_50.setTransform(582,172,5.222,5.222);

	this.instance_51 = new lib.neb7();
	this.instance_51.parent = this;
	this.instance_51.setTransform(672,188,5.046,5.046);

	this.instance_52 = new lib.neb8();
	this.instance_52.parent = this;
	this.instance_52.setTransform(557,184,3.972,3.972);

	this.instance_53 = new lib.neb9();
	this.instance_53.parent = this;
	this.instance_53.setTransform(597,196,4.031,4.031);

	this.instance_54 = new lib.neb10();
	this.instance_54.parent = this;
	this.instance_54.setTransform(620,196,4.123,4.123);

	this.instance_55 = new lib.neb11();
	this.instance_55.parent = this;
	this.instance_55.setTransform(601,203,3.691,3.691);

	this.instance_56 = new lib.neb12();
	this.instance_56.parent = this;
	this.instance_56.setTransform(567,181,4.711,4.711);

	this.instance_57 = new lib.neb13();
	this.instance_57.parent = this;
	this.instance_57.setTransform(593,177,4.509,4.509);

	this.instance_58 = new lib.neb14();
	this.instance_58.parent = this;
	this.instance_58.setTransform(573,183,4.637,4.637);

	this.instance_59 = new lib.neb15();
	this.instance_59.parent = this;
	this.instance_59.setTransform(487,168,1.194,1.194);

	this.instance_60 = new lib.neb16();
	this.instance_60.parent = this;
	this.instance_60.setTransform(498,174,1.197,1.197);

	this.instance_61 = new lib.neb17();
	this.instance_61.parent = this;
	this.instance_61.setTransform(599,171,1.322,1.322);

	this.instance_62 = new lib.neb18();
	this.instance_62.parent = this;
	this.instance_62.setTransform(566,173,1.35,1.35);

	this.instance_63 = new lib.neb19();
	this.instance_63.parent = this;
	this.instance_63.setTransform(588,173,1.285,1.285);

	this.instance_64 = new lib.neb20();
	this.instance_64.parent = this;
	this.instance_64.setTransform(554,166,1.481,1.481);

	this.instance_65 = new lib.yeee();
	this.instance_65.parent = this;
	this.instance_65.setTransform(571,179,1.421,1.421);

	this.instance_66 = new lib.wildrylan();
	this.instance_66.parent = this;
	this.instance_66.setTransform(642,196,3.739,3.739);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("Ag0C9QAfgYATgxQASgyAAg9IAAgFQAAgqgJgkQgIglgPgcQgRgdgTgQIAIgXQAaAPAXAjQAYAhAMAqQAMApAAAuQAAAtgMApQgLAogZAkQgXAigaAOg");
	this.shape_101.setTransform(1015.7,136.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("ABBCSIhAh2IhDAAIAAB2IgnAAIAAkjIBhAAQAwAAAbAXQAaAWAAArQAAAbgOAUQgPAUgaAKIBEB7IAAADgAhCgDIA7AAQAcAAARgOQARgPAAgZQAAgbgQgPQgRgOgdAAIg7AAg");
	this.shape_102.setTransform(924,133.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgECiQgwhEAAheQAAgtANgqQALgqAYghQAYgjAZgOIAIAZQgdAWgTAvQgSAugBA5IgBAQQAABNAcA5QAQAiAYATIgIAWQgagOgXgjg");
	this.shape_103.setTransform(904.1,136.1);

	this.instance_67 = new lib.vic1();
	this.instance_67.parent = this;
	this.instance_67.setTransform(688,198,4.245,4.245);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgSCSIAAkDIheAAIAAggIDgAAIAAAgIhdAAIAAEDg");
	this.shape_104.setTransform(989.7,133.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgzBuIAAjXIAkAAIAAAZQASgdAhAAQALAAAFACIAAAjQgIgCgKAAQgjAAgNAgIAACYg");
	this.shape_105.setTransform(961.4,136.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgGB6QgNgQAAgbIAAiFIgnAAIAAgdIAnAAIAAg0IAlAAIAAA0IAoAAIAAAdIgoAAIAACFQAAANAFAGQAFAHANAAQAHAAALgDIAAAfQgPADgNAAQgZABgMgPg");
	this.shape_106.setTransform(922.7,134.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgQCSIhskjIAqAAIBSDwIBTjwIAqAAIhsEjg");
	this.shape_107.setTransform(872.2,133.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgECiQgwhEAAheQAAgtANgqQAMgqAYghQAXgjAZgOIAIAZQgdAWgTAvQgSAugBA5IgBAQQAABNAcA5QAQAiAYATIgIAWQgagOgXgjg");
	this.shape_108.setTransform(853.1,136.1);

	this.instance_68 = new lib.vic2();
	this.instance_68.parent = this;
	this.instance_68.setTransform(444,340,4.738,4.738);

	this.instance_69 = new lib.vic3();
	this.instance_69.parent = this;
	this.instance_69.setTransform(485,378,2.693,2.693);

	this.instance_70 = new lib.vic4();
	this.instance_70.parent = this;
	this.instance_70.setTransform(469,364,3.655,3.655);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:904.2}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:1049.4}},{t:this.shape},{t:this.instance}]},210).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:904.2}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:1049.4}},{t:this.shape},{t:this.instance_1}]},1).to({state:[{t:this.shape_14},{t:this.shape_5,p:{x:874.8}},{t:this.shape_13,p:{x:910.5}},{t:this.shape_12},{t:this.shape_11,p:{x:961.4}},{t:this.shape_10,p:{x:1003.6}},{t:this.shape_1,p:{x:1046.3}},{t:this.shape_9,p:{x:1078.3}},{t:this.shape_8,p:{x:1112.4}},{t:this.instance_2}]},1).to({state:[{t:this.shape_11,p:{x:880.9}},{t:this.shape_15},{t:this.shape_1,p:{x:974.9}},{t:this.shape_9,p:{x:1006.9}},{t:this.shape_8,p:{x:1041}},{t:this.instance_3}]},1).to({state:[{t:this.shape_11,p:{x:880.9}},{t:this.shape_15},{t:this.shape_1,p:{x:974.9}},{t:this.shape_9,p:{x:1006.9}},{t:this.shape_8,p:{x:1041}},{t:this.instance_4}]},1).to({state:[{t:this.shape_11,p:{x:880.9}},{t:this.shape_15},{t:this.shape_1,p:{x:974.9}},{t:this.shape_9,p:{x:1006.9}},{t:this.shape_8,p:{x:1041}},{t:this.instance_5}]},1).to({state:[{t:this.shape_11,p:{x:880.9}},{t:this.shape_15},{t:this.shape_1,p:{x:974.9}},{t:this.shape_9,p:{x:1006.9}},{t:this.shape_8,p:{x:1041}},{t:this.instance_6}]},1).to({state:[{t:this.shape_11,p:{x:880.9}},{t:this.shape_15},{t:this.shape_1,p:{x:974.9}},{t:this.shape_9,p:{x:1006.9}},{t:this.shape_8,p:{x:1041}},{t:this.instance_7}]},1).to({state:[{t:this.shape_11,p:{x:880.9}},{t:this.shape_15},{t:this.shape_1,p:{x:974.9}},{t:this.shape_9,p:{x:1006.9}},{t:this.shape_8,p:{x:1041}},{t:this.instance_8}]},1).to({state:[{t:this.shape_11,p:{x:880.9}},{t:this.shape_15},{t:this.shape_1,p:{x:974.9}},{t:this.shape_9,p:{x:1006.9}},{t:this.shape_8,p:{x:1041}},{t:this.instance_9}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:793.7}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_9,p:{x:890.4}},{t:this.shape_19},{t:this.shape_18,p:{x:1009.6}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_1,p:{x:1128.3}},{t:this.shape_10,p:{x:1169.6}},{t:this.shape_8,p:{x:1212.2}},{t:this.text},{t:this.vieworiginal}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_11,p:{x:934.7}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_10,p:{x:1037.3}},{t:this.shape_26,p:{x:1101}},{t:this.shape_25},{t:this.shape_1,p:{x:1186}},{t:this.shape_9,p:{x:1218}},{t:this.instance_10}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_11,p:{x:934.7}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_10,p:{x:1037.3}},{t:this.shape_26,p:{x:1101}},{t:this.shape_25},{t:this.shape_1,p:{x:1186}},{t:this.shape_9,p:{x:1218}},{t:this.instance_11}]},1).to({state:[{t:this.shape_26,p:{x:627.7}},{t:this.shape_42},{t:this.shape_18,p:{x:712.5}},{t:this.shape_41},{t:this.shape_13,p:{x:817.8}},{t:this.shape_8,p:{x:849}},{t:this.shape_1,p:{x:889.4}},{t:this.shape_9,p:{x:921.4}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:1149.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_12}]},1).to({state:[{t:this.shape_26,p:{x:627.7}},{t:this.shape_42},{t:this.shape_18,p:{x:712.5}},{t:this.shape_41},{t:this.shape_13,p:{x:817.8}},{t:this.shape_8,p:{x:849}},{t:this.shape_1,p:{x:889.4}},{t:this.shape_9,p:{x:921.4}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:1149.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_13}]},1).to({state:[{t:this.shape_26,p:{x:627.7}},{t:this.shape_42},{t:this.shape_18,p:{x:712.5}},{t:this.shape_41},{t:this.shape_13,p:{x:817.8}},{t:this.shape_8,p:{x:849}},{t:this.shape_1,p:{x:889.4}},{t:this.shape_9,p:{x:921.4}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:1149.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_14}]},1).to({state:[{t:this.shape_26,p:{x:627.7}},{t:this.shape_42},{t:this.shape_18,p:{x:712.5}},{t:this.shape_41},{t:this.shape_13,p:{x:817.8}},{t:this.shape_8,p:{x:849}},{t:this.shape_1,p:{x:889.4}},{t:this.shape_9,p:{x:921.4}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:1149.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_15}]},1).to({state:[{t:this.shape_26,p:{x:627.7}},{t:this.shape_42},{t:this.shape_18,p:{x:712.5}},{t:this.shape_41},{t:this.shape_13,p:{x:817.8}},{t:this.shape_8,p:{x:849}},{t:this.shape_1,p:{x:889.4}},{t:this.shape_9,p:{x:921.4}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:1149.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_16}]},1).to({state:[{t:this.shape_26,p:{x:627.7}},{t:this.shape_42},{t:this.shape_18,p:{x:712.5}},{t:this.shape_41},{t:this.shape_13,p:{x:817.8}},{t:this.shape_8,p:{x:849}},{t:this.shape_1,p:{x:889.4}},{t:this.shape_9,p:{x:921.4}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:1149.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_17}]},1).to({state:[{t:this.shape_26,p:{x:627.7}},{t:this.shape_42},{t:this.shape_18,p:{x:712.5}},{t:this.shape_41},{t:this.shape_13,p:{x:817.8}},{t:this.shape_8,p:{x:849}},{t:this.shape_1,p:{x:889.4}},{t:this.shape_9,p:{x:921.4}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:1149.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_18}]},1).to({state:[{t:this.shape_26,p:{x:627.7}},{t:this.shape_42},{t:this.shape_18,p:{x:712.5}},{t:this.shape_41},{t:this.shape_13,p:{x:817.8}},{t:this.shape_8,p:{x:849}},{t:this.shape_1,p:{x:889.4}},{t:this.shape_9,p:{x:921.4}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:1149.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_19}]},1).to({state:[{t:this.shape_26,p:{x:627.7}},{t:this.shape_42},{t:this.shape_18,p:{x:712.5}},{t:this.shape_41},{t:this.shape_13,p:{x:817.8}},{t:this.shape_8,p:{x:849}},{t:this.shape_1,p:{x:889.4}},{t:this.shape_9,p:{x:921.4}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:1149.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_20}]},1).to({state:[{t:this.shape_26,p:{x:627.7}},{t:this.shape_42},{t:this.shape_18,p:{x:712.5}},{t:this.shape_41},{t:this.shape_13,p:{x:817.8}},{t:this.shape_8,p:{x:849}},{t:this.shape_1,p:{x:889.4}},{t:this.shape_9,p:{x:921.4}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:1149.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_21}]},1).to({state:[{t:this.shape_26,p:{x:627.7}},{t:this.shape_42},{t:this.shape_18,p:{x:712.5}},{t:this.shape_41},{t:this.shape_13,p:{x:817.8}},{t:this.shape_8,p:{x:849}},{t:this.shape_1,p:{x:889.4}},{t:this.shape_9,p:{x:921.4}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:1149.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_22}]},1).to({state:[{t:this.shape_26,p:{x:627.7}},{t:this.shape_42},{t:this.shape_18,p:{x:712.5}},{t:this.shape_41},{t:this.shape_13,p:{x:817.8}},{t:this.shape_8,p:{x:849}},{t:this.shape_1,p:{x:889.4}},{t:this.shape_9,p:{x:921.4}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:1149.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_23}]},1).to({state:[{t:this.shape_26,p:{x:627.7}},{t:this.shape_42},{t:this.shape_18,p:{x:712.5}},{t:this.shape_41},{t:this.shape_13,p:{x:817.8}},{t:this.shape_8,p:{x:849}},{t:this.shape_1,p:{x:889.4}},{t:this.shape_9,p:{x:921.4}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:1149.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_24}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_22,p:{x:1012.4}},{t:this.shape_43},{t:this.instance_25}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_22,p:{x:1012.4}},{t:this.shape_43},{t:this.instance_26}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_22,p:{x:1012.4}},{t:this.shape_43},{t:this.instance_27}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_22,p:{x:1012.4}},{t:this.shape_43},{t:this.instance_28}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_22,p:{x:1012.4}},{t:this.shape_43},{t:this.instance_29}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:867.3}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:931.9}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:1015.2}},{t:this.shape_48,p:{x:1037.4}},{t:this.shape_47,p:{x:1052.5}},{t:this.instance_30}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:867.3}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:931.9}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:1015.2}},{t:this.shape_48,p:{x:1037.4}},{t:this.shape_47,p:{x:1052.5}},{t:this.instance_31}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:867.3}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:931.9}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:1015.2}},{t:this.shape_48,p:{x:1037.4}},{t:this.shape_47,p:{x:1052.5}},{t:this.instance_32}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:867.3}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:931.9}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:1015.2}},{t:this.shape_48,p:{x:1037.4}},{t:this.shape_47,p:{x:1052.5}},{t:this.instance_33}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:867.3}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:931.9}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:1015.2}},{t:this.shape_48,p:{x:1037.4}},{t:this.shape_47,p:{x:1052.5}},{t:this.instance_34}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70,p:{x:916.7}},{t:this.shape_69,p:{x:933.7}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66,p:{x:1002.2}},{t:this.shape_52,p:{x:1025.3}},{t:this.shape_65},{t:this.instance_35}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_78,p:{x:883.7}},{t:this.shape_77},{t:this.shape_69,p:{x:927.5}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74,p:{x:1020.3}},{t:this.shape_73},{t:this.instance_36}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_78,p:{x:883.7}},{t:this.shape_77},{t:this.shape_69,p:{x:927.5}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74,p:{x:1020.3}},{t:this.shape_73},{t:this.instance_37}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_78,p:{x:883.7}},{t:this.shape_77},{t:this.shape_69,p:{x:927.5}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74,p:{x:1020.3}},{t:this.shape_73},{t:this.instance_38}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_78,p:{x:807.6}},{t:this.shape_90},{t:this.shape_89,p:{x:841.3}},{t:this.shape_66,p:{x:857.9}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_74,p:{x:925.3}},{t:this.shape_86},{t:this.shape_85,p:{x:967}},{t:this.shape_84},{t:this.shape_48,p:{x:1004.8}},{t:this.shape_83},{t:this.shape_70,p:{x:1048.8}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79,p:{x:1112.1}},{t:this.instance_39}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_92},{t:this.shape_52,p:{x:945.4}},{t:this.shape_48,p:{x:968.4}},{t:this.shape_74,p:{x:987.1}},{t:this.shape_91},{t:this.instance_40}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_92},{t:this.shape_52,p:{x:945.4}},{t:this.shape_48,p:{x:968.4}},{t:this.shape_74,p:{x:987.1}},{t:this.shape_91},{t:this.instance_41}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_92},{t:this.shape_52,p:{x:945.4}},{t:this.shape_48,p:{x:968.4}},{t:this.shape_74,p:{x:987.1}},{t:this.shape_91},{t:this.instance_42}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:910.1}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_89,p:{x:975.3}},{t:this.shape_66,p:{x:991.9}},{t:this.shape_47,p:{x:1009.7}},{t:this.instance_43}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:910.1}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_89,p:{x:975.3}},{t:this.shape_66,p:{x:991.9}},{t:this.shape_47,p:{x:1009.7}},{t:this.instance_44}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_45}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_46}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_47}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_48}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_49}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_50}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_51}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_52}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_53}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_54}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_55}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_56}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_57}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_58}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_59}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_60}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_62}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_63}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_64}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_93},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_65}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_103},{t:this.shape_102},{t:this.shape_74,p:{x:945}},{t:this.shape_89,p:{x:959.7}},{t:this.shape_69,p:{x:975.8}},{t:this.shape_52,p:{x:998.3}},{t:this.shape_101},{t:this.instance_66}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_108},{t:this.shape_107},{t:this.shape_85,p:{x:890.3}},{t:this.shape_49,p:{x:906.2}},{t:this.shape_106},{t:this.shape_66,p:{x:941.7}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_70,p:{x:1009.9}},{t:this.shape_69,p:{x:1026.8}},{t:this.shape_52,p:{x:1049.3}},{t:this.shape_79,p:{x:1066.7}},{t:this.instance_67}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_108},{t:this.shape_107},{t:this.shape_85,p:{x:890.3}},{t:this.shape_49,p:{x:906.2}},{t:this.shape_106},{t:this.shape_66,p:{x:941.7}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_70,p:{x:1009.9}},{t:this.shape_69,p:{x:1026.8}},{t:this.shape_52,p:{x:1049.3}},{t:this.shape_79,p:{x:1066.7}},{t:this.instance_68}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_108},{t:this.shape_107},{t:this.shape_85,p:{x:890.3}},{t:this.shape_49,p:{x:906.2}},{t:this.shape_106},{t:this.shape_66,p:{x:941.7}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_70,p:{x:1009.9}},{t:this.shape_69,p:{x:1026.8}},{t:this.shape_52,p:{x:1049.3}},{t:this.shape_79,p:{x:1066.7}},{t:this.instance_69}]},1).to({state:[{t:this.shape_64},{t:this.shape_11,p:{x:755.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18,p:{x:981.1}},{t:this.shape_1,p:{x:1021.5}},{t:this.shape_9,p:{x:1053.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_8,p:{x:1155.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_108},{t:this.shape_107},{t:this.shape_85,p:{x:890.3}},{t:this.shape_49,p:{x:906.2}},{t:this.shape_106},{t:this.shape_66,p:{x:941.7}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_70,p:{x:1009.9}},{t:this.shape_69,p:{x:1026.8}},{t:this.shape_52,p:{x:1049.3}},{t:this.shape_79,p:{x:1066.7}},{t:this.instance_70}]},1).wait(1));

	// Back and Forward Buttons
	this.prev = new lib.ArrowButton();
	this.prev.parent = this;
	this.prev.setTransform(797.2,879.5,2.613,2.613,180,0,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.prev, 0, 1, 1);

	this.nxt = new lib.ArrowButton();
	this.nxt.parent = this;
	this.nxt.setTransform(1122.8,879.8,2.613,2.613,0,0,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.nxt, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.nxt},{t:this.prev}]},210).to({state:[{t:this.prev}]},71).wait(1));

	// Layer 5
	this.begin_button = new lib.Button();
	this.begin_button.parent = this;
	this.begin_button.setTransform(1420.6,592.4);
	this.begin_button.alpha = 0;
	this.begin_button._off = true;
	new cjs.ButtonHelper(this.begin_button, 0, 1, 2);

	this.instance_71 = new lib.Instruction();
	this.instance_71.parent = this;
	this.instance_71.setTransform(960,490.4);
	this.instance_71.alpha = 0;
	this.instance_71._off = true;

	this.timeline.addTween(cjs.Tween.get(this.begin_button).wait(59).to({_off:false},0).to({alpha:1},60).wait(1).to({alpha:0},29).to({_off:true},1).wait(132));
	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(150).to({_off:false},0).to({alpha:1},29).wait(1).to({alpha:0},29).to({_off:true},1).wait(72));

	// Layer 6
	this.instance_72 = new lib.MeltdownAnimation();
	this.instance_72.parent = this;
	this.instance_72.setTransform(1419.1,285.1);
	this.instance_72.alpha = 0;
	this.instance_72._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(59).to({_off:false},0).to({alpha:1},60).wait(2).to({regX:31.4,regY:26,scaleX:1,scaleY:1,x:1450.9,y:310.6},0).wait(1).to({scaleX:1,scaleY:1,x:1452.2,y:309.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1454.4,y:306.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1457.6,y:303.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1461.9,y:298.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1467.4,y:292.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1474.1,y:285.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1482.2,y:276.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1491.7,y:265.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1502.5,y:253.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1514.8,y:240.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:1528.2,y:225.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:1542.5,y:210},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:1557.6,y:193.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:1573,y:176.7},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:1588.1,y:160},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:1602.8,y:144},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:1616.5,y:128.9},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:1629,y:115.2},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:1640.2,y:102.9},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:1650,y:92.1},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:1658.4,y:82.9},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:1665.4,y:75.2},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:1671.1,y:69},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:1675.6,y:64.1},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:1678.9,y:60.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:1681.2,y:57.9},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:1682.6,y:56.4},0).wait(1).to({regX:0,regY:0.1,x:1666.3,y:42.2},0).wait(133));

	// Layer 7
	this.instance_73 = new lib.JassiesCurrentAvatar();
	this.instance_73.parent = this;
	this.instance_73.setTransform(470.5,471,0.001,0.001);

	this.timeline.addTween(cjs.Tween.get(this.instance_73).to({scaleX:1,scaleY:1,y:470.5},59,cjs.Ease.get(1)).wait(61).to({alpha:0},29).to({_off:true},1).wait(132));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1430,940.5,1,1);
// library properties:
lib.properties = {
	width: 1920,
	height: 940,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/JassieMeltdown_atlas_.png", id:"JassieMeltdown_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;

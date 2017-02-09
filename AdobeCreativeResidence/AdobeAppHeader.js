(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FEFEFE").ss(1,1,1).p("Ag0iOIAAB7IhcAAICQCiICRiiIhcAAIAAh7g");
	this.shape.setTransform(14.5,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,31.1,30.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEiBAQgGAAgFgCQgEgDgEgDQgDgEgDgEQgCgFAAgFIAAgpQAAgFACgFQADgEADgEQAEgDAEgCQAFgDAGAAIACAAQAGAAAGADQAFACAEAEIAAgrIALAAIAAB9IgEAAIgGgJQgEAFgFADQgGADgHAAgAEbgRIgEADIgDAFIgCAGIAAApIACAGIADAFIAEAEIAHABIAHAAIAGgBIAFgEIAEgFIABgGIAAgpIgBgGIgEgFIgFgDIgGgBIgHAAIgHABgACdBAQgGAAgFgCQgEgDgEgDQgDgEgCgEQgCgFgBgFIAAgpQABgFACgFQACgEADgEQAEgDAEgCQAFgDAGAAIAHAAQAFAAAFADQAFACADADQAFAEACAEQABAFAAAFIAAApQAAAFgBAFQgCAEgFAEQgDADgFADQgFACgFAAgACXgRIgGADIgCAFIgCAGIAAApIACAGIACAFIAGAEIAGABIAHAAIAGgBIAFgEIAEgFIABgGIAAgpIgBgGIgEgFIgFgDIgGgBIgHAAIgGABgAgrBAQgFAAgFgCQgEgDgEgDQgEgEgDgEQgCgFAAgFIAAgFIALgBIAAAGIABAGIAEAFIAFAEIAGABIAIAAIAGgBIAFgDIAEgEQABgDABgEQAAgEgCgDIgGgFIgIgEIgJgDIgKgCIgHgFQgEgDgCgFQgCgEAAgFQAAgGACgEIAGgIQAEgDAEgCQAFgCAFAAIAHAAQAFAAAFADQAFACAEADQADAEADAEQACAFAAAFIAAABIgLACIAAgDIgBgGIgEgFIgFgDIgGgBIgHAAIgFABIgGACIgDAEIgBAGQAAAFACACQACADADACIAIAEIAJACIAJAEQAFABADADQAEADACAFQACADAAAHQAAAFgCAFQgCAEgEAEIgJAFQgEACgGAAgAh9BAQgFAAgFgCQgFgDgEgDQgDgEgDgEQgCgFAAgFIAAgFIAKgBIAAAGIACAGIAEAFIAFAEIAGABIAIAAIAFgBIAGgDIADgEQACgDAAgEQAAgEgCgDIgFgFIgIgEIgJgDIgKgCIgIgFQgDgDgDgFQgCgEAAgFQAAgGACgEIAGgIQAEgDAFgCQAFgCAFAAIAHAAQAFAAAFADQAEACAEADQAEAEACAEQACAFAAAFIAAABIgLACIAAgDIgBgGIgDgFIgGgDIgFgBIgHAAIgGABIgFACIgEAEIgBAGQAAAFADACQABADAEACIAIAEIAJACIAJAEQAEABAEADQADADADAFQACADAAAHQAAAFgCAFQgDAEgDAEIgJAFQgFACgFAAgAjPBAQgFAAgFgCQgGgDgDgDQgEgEgCgEQgBgFAAgFIAAgBQAAgGABgFQACgEAEgEQADgEAGgCQAFgCAFAAIAWAAIAAgNIgBgGIgDgFIgFgDIgGgBIgGAAIgHABIgEADIgEAFIgBAGIAAADIgLgCIAAgBQAAgFACgFQACgEAEgEQAEgDAFgCQAEgDAGAAIAGAAQAGAAAFADQAEACAEADQADAEACAEQACAFABAFIAABBIgEAAIgGgJQgEAFgGADQgFADgHAAgAjWAUIgEADIgEAFIgBAGIAAAEIABAGIAEAFIAEAEIAHABIAHAAIAGgBIAFgEIADgFIABgGIAAgTIgWAAIgHABgADUA+IAAhZIAEAAIAGAJQADgFAGgDQAFgDAHAAIAGAAIAAANIgLAAIgGABIgFADIgDAFQgBADAAADIAAA/gABRA+IgUhDIgBgEIAAAEIgVBDIgGAAIgehZIAKAAIAWBDIABAFIAAgFIAVhDIAHAAIAUBDIABAFIAAgFIAWhDIAKAAIgdBZgAlDA+IAAh9IAoAAQAGAAAHADQAFACAFAEQADAEADAGQACAGABAGIAAAQQgBAGgCAFQgDAGgDADQgFAFgFACQgHADgGgBIgcAAIAAAxgAk3ADIAcAAQAEAAADgCQAFgBACgCQADgDABgDQACgEAAgEIAAgQIgCgIQgBgEgDgCQgCgDgFgCQgDgBgEAAIgcAAg");
	this.shape.setTransform(32.4,25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,19.5,64.7,12.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(14.5,14.3,1,1,0,0,0,14.5,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:13},4,cjs.Ease.get(-1)).to({y:11.3},5,cjs.Ease.get(1)).to({y:12.8},5,cjs.Ease.get(-1)).to({y:14.3},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,30.1,29.5);


// stage content:
(lib.AdobeAppHeader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(511.1,161.1,1,1,0,0,0,14.6,14.5);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(329.2,161.1,1,1,0,0,0,14.7,14.5);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(420.1,118.3,1,1,0,0,0,32.4,16.1);

	this.text = new cjs.Text("derekodell", "35px 'Abel'", "#FFFFFF");
	this.text.lineHeight = 47;
	this.text.parent = this;
	this.text.setTransform(351.6,136.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FEFEFE").ss(1,1,1).p("EgjfAAAMBG/AAA");
	this.shape.setTransform(414.7,108.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBwIAAgYIAXAAIAAAYgAgEAsIgJibIAbAAIgICbg");
	this.shape_1.setTransform(621.1,91.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BwIAAjfIB9AAIAAATIhoAAIAABTIBUAAIAAASIhUAAIAABUIBoAAIAAATg");
	this.shape_2.setTransform(610.2,91.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHBzQgMAAgJgEQgKgFgIgHQgIgIgEgKQgEgJAAgMIAAh3QAAgMAEgKQAEgKAIgHQAIgHAKgFQAKgEALAAIAPAAQAMAAAJAEQAKAFAIAHQAHAHAFAKQAEAKAAAMIAAAJIgUADIAAgMQAAgHgDgHQgDgHgEgEQgGgFgGgDQgHgDgHAAIgNAAQgHAAgHADQgGADgGAFQgFAEgCAHQgDAHAAAHIAAB3QAAAIADAGQACAGAFAGQAGAEAGAEQAHACAHAAIANAAQAHAAAHgCQAGgEAGgEQAEgGADgGQADgGAAgIIAAgMIAUADIAAAJQAAAMgEAJQgFAKgHAIQgIAHgKAFQgJAEgMAAg");
	this.shape_3.setTransform(593.2,91.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA1BwIhdiiIgCgKIAACsIgUAAIAAjfIAKAAIBdCiIACAKIAAisIAUAAIAADfg");
	this.shape_4.setTransform(575.7,91.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+BwIAAjfIB9AAIAAATIhoAAIAABTIBUAAIAAASIhUAAIAABUIBoAAIAAATg");
	this.shape_5.setTransform(559.3,91.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag+BwIAAjfIBGAAQAMAAAJAEQAKAFAIAHQAHAIAFAKQAEAKAAALIAABxQAAALgEAKQgFALgHAHQgIAHgKAFQgJAEgMAAgAgqBdIAxAAQAHAAAHgDQAGgDAGgFQAEgFAEgGQACgGAAgIIAAhxQAAgIgCgGQgEgHgEgEQgGgFgGgDQgHgDgHAAIgxAAg");
	this.shape_6.setTransform(541.9,91.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJBwIAAjfIATAAIAADfg");
	this.shape_7.setTransform(529.4,91.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHBzQgLAAgLgEQgKgFgHgHQgIgIgFgKQgFgJAAgMIAAgJIAVgDIAAAMQAAAIADAGQADAGAFAGQAFAEAHAEQAHACAHAAIANAAQAIAAAGgCQAHgEAFgEQAFgGAEgGQADgGAAgIIAAgHQAAgLgFgIQgFgHgHgGQgIgFgJgEIgSgHQgKgEgKgEQgJgEgIgHQgHgHgFgJQgEgKAAgPIAAgEQAAgMAEgKQAEgKAIgHQAHgHAKgFQAKgEAMAAIANAAQAMAAAKAEQAKAFAHAHQAIAHAEAKQAEAKAAAMIAAAFIgUAEIAAgJQAAgHgDgHQgDgHgEgEQgFgFgHgDQgGgDgIAAIgLAAQgIAAgGADQgHADgFAFQgFAEgCAHQgDAHAAAHIAAAEQAAALAEAHQAFAIAHAFQAIAFAJAEIATAHIATAIQAKAFAHAHQAIAHAEAKQAFAKAAAOIAAAHQAAAMgFAJQgFAKgHAIQgIAHgKAFQgKAEgMAAg");
	this.shape_8.setTransform(517.6,91.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag+BwIAAjfIB9AAIAAATIhoAAIAABTIBUAAIAAASIhUAAIAABUIBoAAIAAATg");
	this.shape_9.setTransform(501.7,91.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArBwIg8hgIgcAAIAABgIgUAAIAAjfIBGAAQAMAAAKAEQAKAFAHAHQAIAIAEAKQAEAKAAALIAAASQAAALgEALQgEAKgIAGQgHAIgKAEQgKAEgMAAIA9BggAgtgCIAxAAQAIAAAGgCQAHgEAFgEQAEgGADgFQADgIAAgHIAAgSQAAgIgDgGQgDgHgEgEQgFgFgHgDQgGgDgIAAIgxAAg");
	this.shape_10.setTransform(484.9,91.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag+BwIAAjfIB9AAIAAATIhoAAIAABTIBUAAIAAASIhUAAIAABUIBoAAIAAATg");
	this.shape_11.setTransform(461.2,91.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEBwIhCjfIAVAAIAxCuIAAAIIABgIIAxiuIAVAAIhCDfg");
	this.shape_12.setTransform(444.9,91.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJBwIAAjfIATAAIAADfg");
	this.shape_13.setTransform(433.9,91.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJBwIAAjMIg1AAIAAgTIB+AAIAAATIg2AAIAADMg");
	this.shape_14.setTransform(423.3,91.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAyBwIgPg0IhFAAIgPA0IgVAAIBCjfIAJAAIBCDfgAAAg+IgdBnIA7AAIgdhnIgBgIg");
	this.shape_15.setTransform(408.9,91.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag+BwIAAjfIB9AAIAAATIhoAAIAABTIBUAAIAAASIhUAAIAABUIBoAAIAAATg");
	this.shape_16.setTransform(393.9,91.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AArBwIg8hgIgcAAIAABgIgUAAIAAjfIBGAAQAMAAAKAEQAKAFAHAHQAIAIAEAKQAEAKAAALIAAASQAAALgEALQgEAKgIAGQgHAIgKAEQgKAEgMAAIA9BggAgtgCIAxAAQAIAAAGgCQAHgEAFgEQAEgGADgFQADgIAAgHIAAgSQAAgIgDgGQgDgHgEgEQgFgFgHgDQgGgDgIAAIgxAAg");
	this.shape_17.setTransform(377.1,91.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHBzQgMAAgKgEQgJgFgIgHQgIgIgEgKQgEgJAAgMIAAh3QAAgMAEgKQAEgKAIgHQAIgHAJgFQAKgEAMAAIAPAAQALAAALAEQAKAFAHAHQAIAHADAKQAFAKAAAMIAAAJIgUADIAAgMQAAgHgDgHQgDgHgFgEQgEgFgHgDQgHgDgHAAIgNAAQgHAAgHADQgHADgEAFQgFAEgDAHQgDAHAAAHIAAB3QAAAIADAGQADAGAFAGQAEAEAHAEQAHACAHAAIANAAQAHAAAHgCQAHgEAEgEQAFgGADgGQADgGAAgIIAAgMIAUADIAAAJQAAAMgFAJQgDAKgIAIQgHAHgKAFQgLAEgLAAg");
	this.shape_18.setTransform(360.1,91.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag+BwIAAjfIB9AAIAAATIhoAAIAABTIBUAAIAAASIhUAAIAABUIBoAAIAAATg");
	this.shape_19.setTransform(336.6,91.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag+BwIAAjfIBGAAQALAAALAEQAKAFAHAHQAHAIAFAKQAEAKAAALIAAACQAAAIgCAIQgCAHgEAGQgEAGgFAGQgGAFgGADQAGADAGAFQAFAFAEAGQAEAGACAHQACAHAAAJIAAAOQAAALgEAKQgFALgHAHQgHAHgKAFQgLAEgLAAgAgqBdIAxAAQAIAAAGgDQAGgDAFgFQAGgFACgGQADgGAAgIIAAgRQAAgIgDgHQgCgGgGgFQgFgFgGgDQgGgCgIAAIgxAAgAgqgOIAxAAQAIgBAGgDQAGgDAFgEQAGgFACgHQADgGAAgHIAAgGQAAgIgDgGQgCgHgGgEQgFgFgGgDQgGgDgIAAIgxAAg");
	this.shape_20.setTransform(320.2,91.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHBzQgLAAgLgEQgKgFgHgHQgHgIgFgKQgEgJAAgMIAAh3QAAgMAEgKQAFgKAHgHQAHgHAKgFQALgEALAAIAPAAQAMAAAKAEQAJAFAIAHQAIAHAEAKQAEAKAAAMIAAB3QAAAMgEAJQgEAKgIAIQgIAHgJAFQgKAEgMAAgAgUhcQgHADgEAFQgFAEgDAHQgDAHAAAHIAAB3QAAAIADAGQADAGAFAGQAEAEAHAEQAHACAHAAIANAAQAIAAAGgCQAHgEAFgEQAEgGADgGQADgGAAgIIAAh3QAAgHgDgHQgDgHgEgEQgFgFgHgDQgGgDgIAAIgNAAQgHAAgHADg");
	this.shape_21.setTransform(302.8,91.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag+BwIAAjfIBGAAQAMAAAKAEQAJAFAIAHQAIAIAEAKQAEAKAAALIAABxQAAALgEAKQgEALgIAHQgIAHgJAFQgKAEgMAAgAgpBdIAwAAQAHAAAHgDQAHgDAEgFQAFgFAEgGQACgGAAgIIAAhxQAAgIgCgGQgEgHgFgEQgEgFgHgDQgHgDgHAAIgwAAg");
	this.shape_22.setTransform(285.7,91.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAyBwIgPg0IhFAAIgPA0IgVAAIBCjfIAJAAIBCDfgAAAg+IgdBnIA7AAIgdhnIgBgIg");
	this.shape_23.setTransform(269.4,91.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AArBwIg8hgIgcAAIAABgIgUAAIAAjfIBGAAQAMAAAKAEQAKAFAHAHQAIAIAEAKQAEAKAAALIAAASQAAALgEALQgEAKgIAGQgHAIgKAEQgKAEgMAAIA9BggAgtgCIAxAAQAIAAAGgCQAHgEAFgEQAEgGADgFQADgIAAgHIAAgSQAAgIgDgGQgDgHgEgEQgFgFgHgDQgGgDgIAAIgxAAg");
	this.shape_24.setTransform(246.7,91.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHBzQgLAAgKgEQgKgFgIgHQgHgIgFgKQgEgJAAgMIAAh3QAAgMAEgKQAFgKAHgHQAIgHAKgFQAKgEALAAIAPAAQALAAAKAEQALAFAHAHQAHAHAEAKQAFAKAAAMIAAB3QAAAMgFAJQgEAKgHAIQgHAHgLAFQgKAEgLAAgAgUhcQgGADgGAFQgEAEgDAHQgDAHAAAHIAAB3QAAAIADAGQADAGAEAGQAGAEAGAEQAGACAIAAIANAAQAIAAAGgCQAGgEAFgEQAFgGADgGQADgGAAgIIAAh3QAAgHgDgHQgDgHgFgEQgFgFgGgDQgGgDgIAAIgNAAQgIAAgGADg");
	this.shape_25.setTransform(229.4,91.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag+BwIAAjfIB9AAIAAATIhoAAIAABTIBUAAIAAASIhUAAIAABng");
	this.shape_26.setTransform(213.9,91.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRDSIAAmjIAjAAIAAGjg");
	this.shape_27.setTransform(551.2,39.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRDSIAAmjIAjAAIAAGjg");
	this.shape_28.setTransform(538,39.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgLCcQgSAAgQgHQgQgHgMgMQgMgMgHgQQgHgQAAgTIAAiGQAAgSAHgQQAHgQAMgMQAMgMAQgHQAQgHASAAIAXAAQASAAAQAHQAQAHAMAMQAMAMAHAQQAHAQAAASIAABGIijAAIAABDQAAAKAEAKQAEAJAHAIQAHAGAKAFQAJAEALAAIAXAAQALAAAKgEQAJgFAHgGQAHgIAEgJQAEgKAAgKIAAgUIAkAFIAAAMQAAATgHAQQgHAQgMAMQgMAMgQAHQgQAHgSAAgAgfh1QgKAFgHAGQgHAIgEAJQgEAJAAALIAAAtIB/AAIAAgtQAAgLgEgJQgEgJgHgIQgHgGgJgFQgKgEgLAAIgXAAQgLAAgJAEg");
	this.shape_29.setTransform(517.7,45.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ah1DSIAAmjICEAAQAVAAATAIQATAIAOAOQAOAOAIATQAIATAAAVIAADVQAAAWgIASQgIATgOAOQgOAOgTAIQgTAIgVAAgAhPCuIBcAAQAOAAAMgFQAMgFAKgKQAJgIAFgNQAFgMAAgOIAAjVQAAgOgFgMQgFgMgJgJQgKgKgMgFQgMgFgOAAIhcAAg");
	this.shape_30.setTransform(488.1,39.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVBBIAAiBIAsAAIgeCBg");
	this.shape_31.setTransform(466.3,25.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgODYQgVAAgTgIQgTgJgOgNQgOgOgIgTQgIgTAAgVIAAjhQAAgVAIgTQAIgTAOgOQAOgOATgIQATgIAVAAIAdAAQAVAAATAIQATAIAOAOQAOAOAIATQAIATAAAVIAADhQAAAVgIATQgIATgOAOQgOANgTAJQgTAIgVAAgAgmitQgNAFgJAIQgJAKgFAMQgGAMAAAOIAADhQAAAOAGAMQAFAMAJAJQAJAKANAFQAMAFAOAAIAZAAQAOAAANgFQAMgFAJgKQAJgJAFgMQAFgMAAgOIAAjhQAAgOgFgMQgFgMgJgKQgJgIgMgFQgNgGgOAAIgZAAQgOAAgMAGg");
	this.shape_32.setTransform(443.8,39.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA7DSIh5iWIB5iVIAvAAIh8CVIB8CWgAhpDSIAAmjIAkAAIAAGjg");
	this.shape_33.setTransform(402.1,39.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgLCcQgSAAgQgHQgQgHgMgMQgMgMgHgQQgHgQAAgTIAAiGQAAgSAHgQQAHgQAMgMQAMgMAQgHQAQgHASAAIAXAAQASAAAQAHQAQAHAMAMQAMAMAHAQQAHAQAAASIAABGIijAAIAABDQAAAKAEAKQAEAJAHAIQAHAGAKAFQAJAEALAAIAXAAQALAAAKgEQAJgFAHgGQAHgIAEgJQAEgKAAgKIAAgUIAkAFIAAAMQAAATgHAQQgHAQgMAMQgMAMgQAHQgQAHgSAAgAgfh1QgKAFgHAGQgHAIgEAJQgEAJAAALIAAAtIB/AAIAAgtQAAgLgEgJQgEgJgHgIQgHgGgJgFQgKgEgLAAIgXAAQgLAAgJAEg");
	this.shape_34.setTransform(373.1,45.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag9CZIAAkrIAMAAIATAfQANgRARgKQATgKAWAAIAVAAIAAApIgkAAQgLgBgJAEQgJAFgHAHQgHAGgEAKQgEAKAAALIAADUg");
	this.shape_35.setTransform(352,45.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgLCcQgSAAgQgHQgQgHgMgMQgMgMgHgQQgHgQAAgTIAAiGQAAgSAHgQQAHgQAMgMQAMgMAQgHQAQgHASAAIAXAAQASAAAQAHQAQAHAMAMQAMAMAHAQQAHAQAAASIAABGIijAAIAABDQAAAKAEAKQAEAJAHAIQAHAGAKAFQAJAEALAAIAXAAQALAAAKgEQAJgFAHgGQAHgIAEgJQAEgKAAgKIAAgUIAkAFIAAAMQAAATgHAQQgHAQgMAMQgMAMgQAHQgQAHgSAAgAgfh1QgKAFgHAGQgHAIgEAJQgEAJAAALIAAAtIB/AAIAAgtQAAgLgEgJQgEgJgHgIQgHgGgJgFQgKgEgLAAIgXAAQgLAAgJAEg");
	this.shape_36.setTransform(328.6,45.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ah1DSIAAmjICEAAQAVAAATAIQATAIAOAOQAOAOAIATQAIATAAAVIAADVQAAAWgIASQgIATgOAOQgOAOgTAIQgTAIgVAAgAhPCuIBcAAQAOAAAMgFQAMgFAKgKQAJgIAFgNQAFgMAAgOIAAjVQAAgOgFgMQgFgMgJgJQgKgKgMgFQgMgFgOAAIhcAAg");
	this.shape_37.setTransform(298.9,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(596.6,88.5,487,183.4);
// library properties:
lib.properties = {
	width: 840,
	height: 177,
	fps: 24,
	color: "#100806",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
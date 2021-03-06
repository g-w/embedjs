// This test group tests style methods.

	// TODO: dojo.style could use some more testing,
	//	as we heavily modified dojo's style method.

tests.register("html-style",
	[
		function _start(t){
			doh.showBox('class+style.html');
		},
		
		/* No position/coords etc in API
		"doh.is(100, dojo.marginBox('sq100').w);",
		"doh.is(100, dojo.marginBox('sq100').h);",

		"doh.is(120, dojo.marginBox('sq100margin10').w);",
		"doh.is(120, dojo.marginBox('sq100margin10').h);",
		"doh.is(100, dojo.contentBox('sq100margin10').w);",
		"doh.is(100, dojo.contentBox('sq100margin10').h);",

		"doh.is(140, dojo.marginBox('sq100margin10pad10').w);",
		"doh.is(140, dojo.marginBox('sq100margin10pad10').h);",

		"doh.is(120, dojo.marginBox('sq100pad10').w);",
		"doh.is(120, dojo.marginBox('sq100pad10').h);",

		"doh.is(110, dojo.marginBox('sq100ltpad10').w);",
		"doh.is(110, dojo.marginBox('sq100ltpad10').h);",
		"doh.is(100, dojo.contentBox('sq100ltpad10').w);",
		"doh.is(100, dojo.contentBox('sq100ltpad10').h);",

		"doh.is(120, dojo.marginBox('sq100ltpad10rbmargin10').w);",
		"doh.is(120, dojo.marginBox('sq100ltpad10rbmargin10').h);",

		"doh.is(120, dojo.marginBox('sq100border10').w);",
		"doh.is(120, dojo.marginBox('sq100border10').h);",
		"doh.is(100, dojo.contentBox('sq100border10').w);",
		"doh.is(100, dojo.contentBox('sq100border10').h);",

		"doh.is(140, dojo.marginBox('sq100border10margin10').w);",
		"doh.is(140, dojo.marginBox('sq100border10margin10').h);",
		"doh.is(100, dojo.contentBox('sq100border10margin10').w);",
		"doh.is(100, dojo.contentBox('sq100border10margin10').h);",

		"doh.is(160, dojo.marginBox('sq100border10margin10pad10').w);",
		"doh.is(160, dojo.marginBox('sq100border10margin10pad10').h);",
		"doh.is(100, dojo.contentBox('sq100border10margin10pad10').w);",
		"doh.is(100, dojo.contentBox('sq100border10margin10pad10').h);",

		// FIXME: the 'correct' w is not 100 on Safari WebKit (2.0.4 [419.3]), the right-margin extends to the document edge
		// "doh.is(100, dojo.marginBox('sq100nopos').w);",
		"doh.is(100, dojo.marginBox('sq100nopos').h);",

		"doh.is(10, dojo._getPadExtents(dojo.byId('sq100ltpad10rbmargin10')).l);",
		"doh.is(10, dojo._getPadExtents(dojo.byId('sq100ltpad10rbmargin10')).t);",
		"doh.is(10, dojo._getPadExtents(dojo.byId('sq100ltpad10rbmargin10')).w);",
		"doh.is(10, dojo._getPadExtents(dojo.byId('sq100ltpad10rbmargin10')).h);",

		"doh.is(0, dojo._getMarginExtents(dojo.byId('sq100ltpad10rbmargin10')).l);",
		"doh.is(0, dojo._getMarginExtents(dojo.byId('sq100ltpad10rbmargin10')).t);",
		"doh.is(10, dojo._getMarginExtents(dojo.byId('sq100ltpad10rbmargin10')).w);",
		"doh.is(10, dojo._getMarginExtents(dojo.byId('sq100ltpad10rbmargin10')).h);",

		"doh.is(10, dojo._getBorderExtents(dojo.byId('sq100border10margin10pad10')).l);",
		"doh.is(10, dojo._getBorderExtents(dojo.byId('sq100border10margin10pad10')).t);",
		"doh.is(20, dojo._getBorderExtents(dojo.byId('sq100border10margin10pad10')).w);",
		"doh.is(20, dojo._getBorderExtents(dojo.byId('sq100border10margin10pad10')).h);",

		"doh.is(20, dojo._getPadBorderExtents(dojo.byId('sq100border10margin10pad10')).l);",
		"doh.is(20, dojo._getPadBorderExtents(dojo.byId('sq100border10margin10pad10')).t);",
		"doh.is(40, dojo._getPadBorderExtents(dojo.byId('sq100border10margin10pad10')).w);",
		"doh.is(40, dojo._getPadBorderExtents(dojo.byId('sq100border10margin10pad10')).h);",

		function scrollUp(){
			dojo.doc.documentElement.scrollTop = 0;
		},

		function coordsBasic(t){
			var pos = dojo.position("sq100", false);
			// console.debug(pos);
			doh.is(100, pos.x);
			doh.is(100, pos.y);
			doh.is(100, pos.w);
			doh.is(100, pos.h);
		},
		function coordsMargin(t){
			// position() is getting us the border-box location
			var pos = dojo.position("sq100margin10", false);
			doh.is(260, pos.x);
			doh.is(110, pos.y);
			doh.is(100, pos.w);
			doh.is(100, pos.h);
			pos = dojo.marginBox("sq100margin10");
			doh.is(120, pos.w);
			doh.is(120, pos.h);
			// Though coords shouldn't be used, test it for backward compatibility.
			// coords returns the border-box location and margin-box size
			pos = dojo.coords("sq100margin10", false);
			doh.is(260, pos.x);
			doh.is(110, pos.y);
			doh.is(120, pos.w);
			doh.is(120, pos.h);
		},
		function coordsBorder(t){
			var pos = dojo.position("sq100border10", false);
			doh.is(100, pos.x);
			doh.is(400, pos.y);
		},
		function sq100nopos(t){
			var pos = dojo.position("sq100nopos", false);
			// console.debug(pos);
			doh.is(0, pos.x);
			doh.t(pos.y > 0);
			// FIXME: the 'correct' w is not 100 on Safari WebKit (2.0.4 [419.3]), the right-margin extends to the document edge
			// doh.is(100, pos.w);
			doh.is(100, pos.h);
		},
		function coordsScrolled(t) {
			var s = document.createElement('div');
			var c = document.createElement('div');
			document.body.appendChild(s);
			s.appendChild(c);
			var x=257, y= 285;
			with (s.style) {
				position = 'absolute';
				overflow = 'scroll';
				border = "10px solid black";
			}
			dojo._setMarginBox(s, x, y, 100, 100);
			dojo._setMarginBox(c, 0, 0, 500, 500);
			s.scrollTop = 200;
			var pos = dojo.position(s, true);
			doh.is(x, pos.x);
			doh.is(y, pos.y);
		},
		*/
		/*
		{
			name: "coordsIframe",
			timeout: 2000,
			runTest: function(){
				var def = new doh.Deferred();
				setTimeout(function(){ try{
					var oldLtr = dojo._isBodyLtr();
					var oldQuirks = dojo.isQuirks;
					dojo.withGlobal(dojo.byId('iframe_quirks').win, function(){
						doh.t(dojo.isQuirks, "isQuirks == true in quirks/iframe");
						doh.f(dojo._isBodyLtr(), "isBodyLtr == false in RTL/iframe");
					        var pos = dojo.position('iframe_00_quirks');
						doh.t(pos.x===0, "quirks iframe element x == 0 (x,y,w,h="+pos.x+","+pos.y+","+pos.w+","+pos.h+")");
						doh.t(pos.y===0, "quirks iframe element y == 0 (x,y,w,h="+pos.x+","+pos.y+","+pos.w+","+pos.h+")");
						doh.t(pos.w>0, "quirks iframe element w > 0 (x,y,w,h="+pos.x+","+pos.y+","+pos.w+","+pos.h+")");
						doh.t(pos.h>0, "quirks iframe element h > 0 (x,y,w,h="+pos.x+","+pos.y+","+pos.w+","+pos.h+")");
					});
					dojo.withGlobal(dojo.byId('iframe_strict').win, function(){
						doh.f(dojo.isQuirks, "isQuirks == false in strict/ifraee");
						doh.f(dojo._isBodyLtr(), "isBodyLtr == false in RTL/iframe");
					        var pos = dojo.position('iframe_00_strict');
						doh.t(pos.x===0, "strict iframe element x == 0 (x,y,w,h="+pos.x+","+pos.y+","+pos.w+","+pos.h+")");
						doh.t(pos.y===0, "strict iframe element y == 0 (x,y,w,h="+pos.x+","+pos.y+","+pos.w+","+pos.h+")");
						doh.t(pos.w>0, "strict iframe element w > 0 (x,y,w,h="+pos.x+","+pos.y+","+pos.w+","+pos.h+")");
						doh.t(pos.h>0, "strict iframe element h > 0 (x,y,w,h="+pos.x+","+pos.y+","+pos.w+","+pos.h+")");
					});
					doh.t(!oldLtr == !dojo._isBodyLtr(), "isBodyLtr restored after withGlobal");
					doh.t(!oldQuirks == !dojo.isQuirks, "isQuirks restored after withGlobal");
					def.callback(true);
				}catch(e){ def.errback(e); } }, 1000);
				return def;
			}
		},
		*/
		function basicStyle(){
			doh.is(1, dojo.style('sq100nopos', 'opacity'));
			doh.is(0.1, dojo.style('sq100nopos', 'opacity', 0.1));
			doh.is(0.8, dojo.style('sq100nopos', 'opacity', 0.8));
		},
		function styleObject(){
			dojo.style('sq100nopos', { 'opacity': 0.1 });
			doh.is(0.1, dojo.style('sq100nopos', 'opacity'));
			dojo.style('sq100nopos', { 'opacity': 0.8 });
			doh.is(0.8, dojo.style('sq100nopos', 'opacity'));
		},
		function defaultPosition(){
			doh.is('static', dojo.style('sq100nopos', 'position'));
		},
		function getBgcolor(t){
			var bgc = dojo.style('sq100nopos', 'backgroundColor');
			doh.t((bgc == "rgb(0, 0, 0)")||(bgc == "black")||(bgc == "#000000"));
		},
		/* No isDescendant in API
		function isDescendant(t){
			doh.t(dojo.isDescendant("sq100", dojo.body()));
			doh.t(dojo.isDescendant("sq100", dojo.doc));
			doh.t(dojo.isDescendant("sq100", "sq100"));
			doh.t(dojo.isDescendant(dojo.byId("sq100"), "sq100"));
			doh.f(dojo.isDescendant("sq100", dojo.byId("sq100").firstChild));
			doh.t(dojo.isDescendant(dojo.byId("sq100").firstChild, "sq100"));
		},
		function isDescendantIframe(t){
			var bif = dojo.byId("blah");
			// this test barely makes sense. disabling it for now.
			// doh.t(dojo.isDescendant(bif.contentDocument.getElementById("subDiv"), bif.parentNode));
			var subDiv = getIframeDocument(bif).getElementById("subDiv");
			doh.t(dojo.isDescendant(subDiv, subDiv));
			doh.t(dojo.isDescendant(subDiv, subDiv.parentNode));
			doh.f(dojo.isDescendant(subDiv.parentNode, subDiv));

		},
		*/
		/* No attr / hasAttr in API
		function getTypeInput(t){
			doh.f(dojo.hasAttr(dojo.byId("input-no-type"), "type"));
			doh.is(null, dojo.attr(dojo.byId("input-no-type"), "type"));
			doh.t(dojo.hasAttr(dojo.byId("input-with-type"), "type"));
			doh.is("checkbox", dojo.attr(dojo.byId("input-with-type"), "type"));
		},
		function getWithString(t){
			doh.f(dojo.hasAttr("input-no-type", "type"));
			doh.is(null, dojo.attr("input-no-type", "type"));
			doh.t(dojo.hasAttr("input-with-type", "type"));
			doh.is("checkbox", dojo.attr("input-with-type", "type"));
		},
		function attrId(t){
			doh.t(dojo.hasAttr("div-no-tabindex", "id"));
			doh.is("div-no-tabindex", dojo.attr("div-no-tabindex", "id"));
			var div = document.createElement("div");
			doh.f(dojo.hasAttr(div, "id"));
			doh.is(null, dojo.attr(div, "id"));
			dojo.attr(div, "id", "attrId1");
			doh.t(dojo.hasAttr(div, "id"));
			doh.is("attrId1", dojo.attr(div, "id"));
			dojo.removeAttr(div, "id");
			doh.f(dojo.hasAttr(div, "id"));
			doh.is(null, dojo.attr(div, "id"));
		},
		function getTabindexDiv(t){
			doh.f(dojo.hasAttr("div-no-tabindex", "tabIndex"));
			doh.t(dojo.attr("div-no-tabindex", "tabIndex") <= 0);
			doh.t(dojo.hasAttr("div-tabindex-minus-1", "tabIndex"));
			if(!dojo.isOpera){
				// Opera (at least <= 9) does not support tabIndex="-1"
				doh.is(-1, dojo.attr("div-tabindex-minus-1", "tabIndex"));
			}
			doh.t(dojo.hasAttr("div-tabindex-0", "tabIndex"));
			doh.is(0, dojo.attr("div-tabindex-0", "tabIndex"));
			doh.is(1, dojo.attr("div-tabindex-1", "tabIndex"));
		},
		function getTabindexInput(t){
			if(!dojo.isIE || dojo.isIE >= 8){
				// IE6/7 always reports tabIndex as defined
				doh.f(dojo.hasAttr("input-no-tabindex", "tabIndex"));
				doh.f(dojo.attr("input-no-tabindex", "tabIndex"));
			}
			doh.t(dojo.hasAttr("input-tabindex-minus-1", "tabIndex"));
			if(!dojo.isOpera){
				// Opera (at least <= 9) does not support tabIndex="-1"
				doh.is(-1, dojo.attr("input-tabindex-minus-1", "tabIndex"));
			}
			doh.t(dojo.hasAttr("input-tabindex-0", "tabIndex"));
			doh.is(0, dojo.attr("input-tabindex-0", "tabIndex"));
			doh.is(1, dojo.attr("input-tabindex-1", "tabIndex"));
		},
		function setTabindexDiv(t){
			var div = document.createElement("div");
			doh.is(null, dojo.attr(div, "tabIndex"));
			dojo.attr(div, "tabIndex", -1);
			if(!dojo.isOpera){
				// Opera (at least <= 9) does not support tabIndex="-1"
				doh.is(-1, dojo.attr(div, "tabIndex"));
			}
			dojo.attr(div, "tabIndex", 0);
			doh.is(0, dojo.attr(div, "tabIndex"));
			dojo.attr(div, "tabIndex", 1);
			doh.is(1, dojo.attr(div, "tabIndex"));
		},
		function setTabindexInput(t){
			var input = document.createElement("input");
			doh.t(dojo.attr(input, "tabIndex") <= 0);
			dojo.attr(input, "tabIndex", -1);
			if(!dojo.isOpera){
				// Opera (at least <= 9) does not support tabIndex="-1"
				doh.is(-1, dojo.attr(input, "tabIndex"));
			}
			dojo.attr(input, "tabIndex", 0);
			doh.is(0, dojo.attr(input, "tabIndex"));
			dojo.attr(input, "tabIndex", 1);
			doh.is(1, dojo.attr(input, "tabIndex"));
		},
		function removeTabindexFromDiv(t){
			var div = document.createElement("div");
			dojo.attr(div, "tabIndex", 1);
			doh.is(1, dojo.attr(div, "tabIndex"));
			dojo.removeAttr(div, "tabIndex");
			doh.is(null, dojo.attr(div, "tabIndex"));
		},
		function removeDisabledFromInput(t){
			var input = document.createElement("input");
			dojo.attr(input, "disabled", true);
			doh.t(dojo.attr(input, "disabled"));
			dojo.removeAttr(input, "disabled");
			doh.f(dojo.attr(input, "disabled"));
		},
		function removeTabindexFromInput(t){
			var input = document.createElement("input");
			dojo.attr(input, "tabIndex", 1);
			doh.is(1, dojo.attr(input, "tabIndex"));
			dojo.removeAttr(input, "tabIndex");
			doh.is(null, dojo.attr(input, "tabIndex"));
		},
		function setReadonlyInput(t){
			var input = document.createElement("input");
			doh.f(dojo.attr(input, "readonly"));
			dojo.attr(input, "readonly", true);
			doh.is(true, dojo.attr(input, "readonly"));
			dojo.attr(input, "readonly", false);
			doh.is(false, dojo.attr(input, "readonly"));
		},
		function attr_map(t){
			var input = document.createElement("input");
			var ctr= 0;
			dojo.attr(input, {
				"class": "thinger blah",
				"tabIndex": 1,
				"type": "text",
				"onfocus": function(e){
					ctr++;
				}
			});
			dojo.body().appendChild(input);
			doh.is(1, dojo.attr(input, "tabIndex"), "tabIndex");
			if(!dojo.isIE || dojo.isIE > 7){
				// IE6/7 treats type="text" as missing, even if it was
				// explicitly specified
				doh.is("text", dojo.attr(input, "type"), "type");
			}
			doh.is(0, ctr, "onfocus ctr == 0");
			doh.t(dojo.hasClass(input, "thinger"), "hasClass of thinger");
			doh.t(dojo.hasClass(input, "blah"), "hasClass of blah");
			var def = new doh.Deferred();
			input.focus();
			setTimeout(function(){
				doh.is(1, ctr, "onfocus ctr == 1");
				input.blur();
				input.focus();
				setTimeout(function(){
					doh.is(2, ctr, "onfocus ctr == 2");
					def.callback(true);
				}, 10);
			}, 10);
			return def;
		},
		function attr_reconnect(t){
			var input = document.createElement("input");
			var ctr = 0;
			dojo.attr(input, "type", "text");
			dojo.attr(input, "onfocus", function(e){ ctr++; });
			dojo.attr(input, "onfocus", function(e){ ctr++; });
			dojo.attr(input, "onfocus", function(e){ ctr++; });
			dojo.body().appendChild(input);
			if(!dojo.isIE || dojo.isIE > 7){
				// IE6/7 treats type="text" as missing, even if it was
				// explicitly specified
				doh.is("text", dojo.attr(input, "type"));
			}
			doh.is(0, ctr);
			var def = new doh.Deferred();
			input.focus();
			setTimeout(function(){
				doh.is(1, ctr);
				input.blur();
				input.focus();
				setTimeout(function(){
					doh.is(2, ctr);
					def.callback(true);
				}, 10);
			}, 10);
			return def;
		},
		function attrSpecials(){
			var node = document.createElement("div");
			dojo.body().appendChild(node);
			dojo.attr(node, {
				style: {
					opacity: 0.5,
					width: "30px",
					border: "1px solid black"
				}
			});
			doh.is(0.5, dojo.style(node, "opacity"));
			doh.is(30, dojo.style(node, "width"));
			doh.is(1, dojo.style(node, "borderWidth"));
			dojo.attr(node, {
				innerHTML: "howdy!"
			});
			doh.is("howdy!", node.innerHTML);
			doh.is("howdy!", dojo.attr(node, "innerHTML"));
			dojo.attr(node, "innerHTML", "<span>howdy!</span>");
			doh.is(1, node.firstChild.nodeType);
			doh.is("span", node.firstChild.nodeName.toLowerCase());
			doh.is("<span>howdy!</span>", node.innerHTML.toLowerCase());
			doh.is("<span>howdy!</span>", dojo.attr(node, "innerHTML").toLowerCase());
		},
		function testLabelForAttr(t){
			// create label with no for attribute make sure requesting
			// it as for and html for returns null
			var label = document.createElement("label");
			if(!dojo.isIE){
				// IE always assumes that "for" is present
				doh.f(dojo.attr(label, "for"));
				doh.f(dojo.attr(label, "htmlFor"));
			}
			// add a for attribute and test that can get by requesting for
			dojo.attr(label, "for", "testId");
			doh.is("testId", dojo.attr(label, "for"));
			// add as htmlFor and make sure it is returned when requested as htmlFor
			var label2 = document.createElement("label");
			dojo.attr(label2, "htmlFor", "testId2");
			doh.is("testId2", dojo.attr(label2, "htmlFor"));
			// check than when requested as for or htmlFor attribute is found
			doh.t(dojo.hasAttr(label, "for"));
			doh.t(dojo.hasAttr(label2, "htmlfor"));
			// test from markup
			var labelNoFor = dojo.byId("label-no-for");
			// make sure testing if has attribute using for or htmlFor 
			// both return null when no value set
			if(!dojo.isIE){
				// IE always assumes that "for" is present
				doh.f(dojo.hasAttr(labelNoFor, "for"));
				doh.f(dojo.hasAttr(labelNoFor, "htmlFor"));
			}
			var labelWithFor = dojo.byId("label-with-for");
			// when markup includes for make certain testing if has attribute
			// using for or htmlFor returns true
			doh.t(dojo.hasAttr(labelWithFor, "for"));
			doh.t(dojo.hasAttr(labelWithFor, "htmlFor"));
			// when markup include for attrib make sure can retrieve using for or htmlFor
			doh.is("input-with-label", dojo.attr(labelWithFor, "for"));
			doh.is("input-with-label", dojo.attr(labelWithFor, "htmlFor"));
		},
		function attrInnerHtmlDiv(t){
			var n = dojo.create("div", {
					innerHTML: "1<em>2</em>3"
				}, dojo.body());
			doh.is("1<em>2</em>3", n.innerHTML.toLowerCase());
			dojo.destroy(n);
		},
		function attrInnerHtmlTable(t){
			var n = dojo.create("table", {
					innerHTML: "<thead><tr><th>1st!</th></tr></thead><tbody></tbody>"
				}, dojo.body());
			doh.is("<thead><tr><th>1st!</th></tr></thead><tbody></tbody>",
				n.innerHTML.toLowerCase().replace(/\s+/g, ""));
			dojo.destroy(n);
		},
		function attrInputTextValue(t){
			doh.is("123", dojo.byId("input-text-value").value);
			doh.is("123", dojo.attr("input-text-value", "value"));
			dojo.attr("input-text-value", "value", "abc");
			doh.is("abc", dojo.byId("input-text-value").value);
			doh.is("abc", dojo.attr("input-text-value", "value"));
			dojo.byId("input-text-value").value = "xyz";
			doh.is("xyz", dojo.byId("input-text-value").value);
			doh.is("xyz", dojo.attr("input-text-value", "value"));
			dojo.byId("input-text-value").value = "123"; // fixes initialization problem when the test is reloaded
		},
		function testInputDisabled(t){
			doh.f(dojo.attr("input-no-disabled", "disabled"));
			doh.t(dojo.attr("input-with-disabled", "disabled"));
			doh.t(dojo.attr("input-with-disabled-true", "disabled"));
		}
		*/
		/*
		,
		function testIframeDestroy10095(t){
			var iframeWin = dojo.byId('10095_iframe').win;
			doh.t(!iframeWin.document.getElementById('10095_textbox'), "reloaded iframe element destroyed");
		}
		*/
	]
);

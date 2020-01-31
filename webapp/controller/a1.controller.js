sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("PageNext.Route.controller.a1", {
		onInit: function () {

		},
		onclick : function(){
			var rout = sap.ui.core.UIComponent.getRouterFor(this);
			rout.navTo("a2",{amount:1000});
		}
	});
});
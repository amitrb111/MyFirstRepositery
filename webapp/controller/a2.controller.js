sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller) {
	"use strict";

	return Controller.extend("PageNext.Route.controller.a2", {

	onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("a2").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
		var amt = oEvent.getParameter("arguments").amount;
		console.log(amt);
			 
		}
	});
});
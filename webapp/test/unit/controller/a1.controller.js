/*global QUnit*/

sap.ui.define([
	"PageNext/Route/controller/a1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("a1 Controller");

	QUnit.test("I should test the a1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
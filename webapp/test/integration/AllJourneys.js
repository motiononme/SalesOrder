// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 A_SalesOrder in the list
// * All 3 A_SalesOrder have at least one to_Item

sap.ui.define([
	"sap/ui/test/Opa5",
	"salesoreder/SalesOrder/test/integration/arrangements/Arrangement","salesoreder/SalesOrder/test/integration/MasterJourney",
	"salesoreder/SalesOrder/test/integration/NavigationJourney",
	"salesoreder/SalesOrder/test/integration/NotFoundJourney",
	"salesoreder/SalesOrder/test/integration/BusyJourney"
], function (Opa5, Arrangement) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "salesoreder.SalesOrder.view.",
		autoWait: true
	});
});

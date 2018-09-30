sap.ui.define([
	"sap/ui/test/Opa5",
	"salesoreder/SalesOrder/test/integration/arrangements/Arrangement",
	"salesoreder/SalesOrder/test/integration/NavigationJourneyPhone",
	"salesoreder/SalesOrder/test/integration/NotFoundJourneyPhone",
	"salesoreder/SalesOrder/test/integration/BusyJourneyPhone"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "salesoreder.SalesOrder.view.",
		autoWait: true
	});
});

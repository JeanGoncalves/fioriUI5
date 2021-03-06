sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";

   return UIComponent.extend("sap.ui.fiori.Component", {
            metadata : {
		rootView: "sap.ui.fiori.view.App"
	},
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel('model/jeangoncalves.experiences.json');
         this.setModel(oModel);

         // set i18n model
         var i18nModel = new ResourceModel({
            bundleName : "sap.ui.fiori.i18n.i18n"
         });
         this.setModel(i18nModel, "i18n");
      }
   });
});
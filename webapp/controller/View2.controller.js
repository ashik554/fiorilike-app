sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';

  return Controller.extend('emc.hr.payroll.controller.View2', {
    onInit: function () {
      // step1: Get the router
      //   this.oRouter = this.getOwnerComponent().getRouter();
      //   this.oRouter.getRoute('detail').attachPatternMatched(this.herculics);
    },
    // herculics:function(oEvent){
    //     debugger;

    // }

    onBack: function () {
      this.getView().getParent().to('idView1');
    },
  });
});

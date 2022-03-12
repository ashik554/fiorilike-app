sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';

  return Controller.extend('emc.hr.payroll.controller.View1', {
    onInit: function () {},
    onNext: function () {
      // step 1: get the parent control object- Container for our view
      var oAppCon = this.getView().getParent();

      // step 2: ask parent to nav to next view
      oAppCon.to('idView2');
    },
    onItemClick: function () {
      // this - is current class object -which is our controller
      // calling one function using another function
      this.onNext();
    },
  });
});

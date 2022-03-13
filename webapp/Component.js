sap.ui.define(['sap/ui/core/UIComponent'], function (UIComponent) {
  'use strict';

  return UIComponent.extend('emc.hr.payroll.Component', {
    metadata: {
      manifest: 'json',
    },
    init: function () {
      //base constructor
      UIComponent.prototype.init.apply(this);
    },
    createContent: function () {
      var oView = sap.ui.view({
        viewName: 'emc.hr.payroll.view.App',
        id: 'idAppView',
        type: 'XML',
      });
      // step 1 create view1 object
      var oView1 = sap.ui.view({
        viewName: 'emc.hr.payroll.view.View1',
        id: 'idView1',
        type: 'XML',
      });
      //create view2
      var oView2 = sap.ui.view({
        viewName: 'emc.hr.payroll.view.View2',
        id: 'idView2',
        type: 'XML',
      });
      ///get app container controll object
      var oAppCon = oView.byId('appCon');
      ///inject view1 view inside container
      oAppCon.addMasterPage(oView1).addDetailPage(oView2);
      return oView;
    },
  });
});

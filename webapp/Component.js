sap.ui.define(['sap/ui/core/UIComponent'], function (UIComponent) {
  'use strict';

  return UIComponent.extend('emc.hr.payroll.Component', {
    metadata: {},
    init: function () {
      // this line will call the base constructor(Here base class is UIComponet)
      UIComponent.prototype.init.apply(this);
    },
    createContent: function () {
      var oView = sap.ui.view({
        viewName: 'emc.hr.payroll.view.App',
        id: 'idAppView',
        type: 'XML',
      });

      // step:1 Create View1 Object
      var oView1 = sap.ui.view({
        viewName: 'emc.hr.payroll.view.View1',
        id: 'idView1',
        type: 'XML',
      });
      // step:2 Create View2 Object
      var oView2 = sap.ui.view({
        viewName: 'emc.hr.payroll.view.View2',
        id: 'idView2',
        type: 'XML',
      });
      //step:3 Get the App Container Control Object from APP.view.xml
      var oAppCon = oView.byId('appCon');
      // step:4 Inject the view1 and view2 inside the container
      oAppCon.addPage(oView1).addPage(oView2);

      return oView;
    },
  });
});

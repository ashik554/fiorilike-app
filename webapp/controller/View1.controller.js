sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
  ],
  function (Controller, Filter, FilterOperator) {
    'use strict';

    return Controller.extend('emc.hr.payroll.controller.View1', {
      onInit: function () {},
      onNext: function () {
        // step 1: get the parent control object- Container for our view
        var oAppCon = this.getView().getParent();

        // step 2: ask parent to nav to next view
        oAppCon.to('idView2');
      },
      onNavNext: function (oEvent) {
        this.onNext();
      },
      onDelete: function (oEvent) {
        // step1: find out which item was selected for deletion
        var oSelected = oEvent.getParameter('listItem');
        // step:2 get the list object
        var oList = oEvent.getSource();
        // step:3 Remove the item from the list
        oList.removeItem(oSelected);
      },
      onSearch: function (oEvent) {
        // step:1 what is that user type on the search field
        var sSearch = oEvent.getParameter('query');
        if (sSearch === '' || sSearch === undefined) {
          sSearch = oEvent.getParameter('newValue');
        }
        // step2: construct the filter object with the operrand and operator
        var oFilter = new Filter('name', FilterOperator.Contains, sSearch);
        var oFilter2 = new Filter('taste', FilterOperator.Contains, sSearch);

        var aFilter = [oFilter, oFilter2];
        var oMaster = new Filter({
          filters: aFilter,
          and: false,
        });
        // step 3 : get the list object
        var oList = this.getView().byId('idLST');

        // step 4: inject the filter to the list
        oList.getBinding('items').filter(oMaster);
      },

      onItemClick: function () {
        // this - is current class object -which is our controller
        // calling one function using another function
        this.onNext();
      },
    });
  }
);

﻿(function () {
  'use strict';

  // Configuring the Articles Admin module
  angular
    .module('tickets.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addSubMenuItem('topbar', 'admin', {
      title: 'MENU_ADMIN_TICKETS',
      state: 'admin.tickets.support',
      roles: ['admin'],
      faIcon: 'fa-volume-control-phone',
      faClass: 'text-mt',
      position: 70,
      divider: true
    });
  }
}());

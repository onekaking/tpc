'use strict';
TPC.module = TPC.module || {};
TPC.module.liststaff = function() {
  var listData = [{
    id: 1,
    name: 'Tô Thiện',
    birthday: '21/10/1992',
    position: 'Quản lý' 
  },{
    id: 2,
    name: 'Tô Thiện',
    birthday: '21/10/1992',
    position: 'Nhân viên' 
  },{
    id: 3,
    name: 'Tô Thiện',
    birthday: '21/10/1992',
    position: 'Quản lý' 
  },{
    id: 4,
    name: 'Tô Thiện',
    birthday: '21/10/1992',
    position: 'Quản lý' 
  },{
    id: 5,
    name: 'Tô Thiện',
    birthday: '21/10/1992',
    position: 'Quản lý' 
  }];

  var fillData = function(json) {
    $.ajax({
      url: 'template/staff.html',
      success: function(data) {
        var content = $('.table-staff');
        var template = _.template(data, {
          data: json
        });
        content.html(template);
      }
    });
  };

  fillData(listData);
};
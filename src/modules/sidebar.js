(function() {
  'use strict';

  angular.module('uiAngular')
    .service('sidebarService', sidebarService)
    .directive('uiSidebarEvent', sidebarEventDirective)
    .directive('uiSidebar', sidebarDirective);

  function sidebarDirective($timeout) {
    return {
      restrict: 'A',
      scope: {
        sidebarData: '=uiSidebarData',
        sidebarObj: '=?uiSidebar',
        sidebarEvent: '=uiSidebarEventId',
      },
      link: link,
    };

    function link(s, e) {
      s.sidebarObj = e;
      $timeout(function() {
        updatesidebar(s.sidebarEvent, s.sidebarData, e);
      });
      s.$watchCollection(function() {
        return [s.sidebarEvent, s.sidebarData];
      }, function() {
        updatesidebar(s.sidebarEvent, s.sidebarData, e);
      });
    }

    function updatesidebar(Event, data, el) {

      if (angular.isDefined(data)) {
        el.sidebar(data);
      }
      $timeout(function() {
        if (angular.isDefined(Event)) {
          el.sidebar('attach events', Event);
        } else {
          el.sidebar();
        }
      });
    }
  }

  function sidebarEventDirective(sidebarService) {
    return {
      restrict: 'A',
      scope: {
        sidebarEvent: '=uiSidebarEvent',
      },
      link: link,
    };

    function link(s, e) {
      var classId = sidebarService.getId();
      s.sidebarEvent = '.' + classId;
      e.addClass(classId);
    }
  }

  function sidebarService() {
    var s = this;
    s.getId = getId;
    s.index = 0;

    function getId() {
      return 'sidebar' + s.index++;
    }
  }
})();

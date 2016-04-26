(function() {
  'use strict';

  angular.module('uiAngular')
    .service('stickyService', stickyService)
    .directive('uiStickyContext', stickyContextDirective)
    .directive('uiSticky', stickyDirective);

  function stickyDirective($timeout) {
    return {
      restrict: 'A',
      scope: {
        stickyData: '=uiStickyData',
        stickyObj: '=?uiSticky',
        stickyContext: '=uiStickyContextId',
      },
      link: link,
    };

    function link(s, e) {
      s.stickyObj = e;
      $timeout(function() {
        updateSticky(s.stickyContext, s.stickyData, e);
      });
      s.$watchCollection(function() {
        return [s.stickyContext, s.stickyData];
      }, function() {
        updateSticky(s.stickyContext, s.stickyData, e);
      });
    }

    function updateSticky(context, data, el) {
      if (angular.isDefined(context)) {
        if (angular.isDefined(data)) {
          data.context = context;
        } else {
          data = {
            context: context,
          };
        }
      }
      if (angular.isDefined(data)) {
        el.sticky(data);
      } else {
        el.sticky();
      }
      $timeout(function() {
        el.sticky('refresh');
      });
    }
  }

  function stickyContextDirective(stickyService) {
    return {
      restrict: 'A',
      scope: {
        stickyContext: '=uiStickyContext',
      },
      link: link,
    };

    function link(s, e) {
      var classId = stickyService.getId();
      s.stickyContext = '.' + classId;
      e.addClass(classId);
    }
  }

  function stickyService() {
    var s = this;
    s.getId = getId;
    s.index = 0;

    function getId() {
      return 'sticky' + s.index++;
    }
  }
})();

/**
 * ui-angular - v0.1.2
 * My KISS - semantic-ui/angularJS library  
 * http://pd75.github.io/#/ui-angular
 * MIT License
 **/
angular.module('uiAngular', []);

(function() {
  'use strict';

  stickyContextDirective.$inject = ["stickyService"];
  stickyDirective.$inject = ["$timeout"];
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

(function() {
  'use strict';

  sidebarEventDirective.$inject = ["sidebarService"];
  sidebarDirective.$inject = ["$timeout"];
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

angular.module('uiAngular')
  .directive('uiPopup', function() {
    'use strict';
    return {
      restrict: 'A',
      scope: {
        popupData: '=uiPopup',
        popupObj: '=?uiPopupObj',
      },
      link: link,
    };

    function link(s, e) {
      if (angular.isObject(s.popupData)) {
        e.popup(s.popupData);
        s.$watchCollection('popupData', function() {
          e.popup('destroy');
          e.popup(s.popupData);
        });
      } else {
        e.popup();
      }
      s.popupObj = e;
      s.$on('$destroy', function() {
        e.popup('destroy');
      });
    }
  });

/* eslint angular/no-services: 0*/

angular.module('uiAngular')
  .directive('uiModal', ["$timeout", "$http", "$compile", function($timeout, $http, $compile) {
    'use strict';

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        'modalShow': '=?uiModalShow',
        'modalData': '=?uiModalData',
        'modalUrlObj': '=?uiModalUrl',
        'modalUrl': '@?uiModalUrl',
        'modalObj': '=?uiModalObj',
      },
      template: '<div class="ui modal" ng-transclude></div>',
      link: link,
    };

    function link(scope, element) {
      scope.modalObj = element;

      scope.$watch('modalData', function() {
        setData(scope, element);
      });

      scope.$watch('modalShow', function(modalShow) {
        element.modal(modalShow ? 'show' : 'hide');
      });
      scope.$on('$destroy', function() {
        element.modal('hide');
        element.remove();
      });
    }
    // Support Functions
    function useUrlForContent(s, e) {
      if (angular.isString(s.modalUrlObj)) {
        getContentFromUrl(s, e, s.modalUrlObj);
      } else {
        getContentFromUrl(s, e, s.modalUrl);
      }
    }

    function getContentFromUrl(s, e, Url) {
      $http.get(Url)
        .then(function(data) {
          e.html(data.data);
          $compile(e.contents())(s);
          $timeout(function() {
            e.modal('refresh');
          });
        });
    }

    function setData(s, e) {
      var modalData = {};
      if (angular.isObject(s.modalData)) {
        angular.copy(s.modalData, modalData);
      }
      modalData.onHide = function() {
        s.modalShow = false;
        $timeout(function() {
          s.$apply();
        });
        if (angular.isDefined(s.modalData) && angular.isFunction(s.modalData.onHide)) {
          s.modalData.onHide();
        }
      };
      modalData.onShow = function() {
        if (angular.isDefined(s.modalUrl)) {
          useUrlForContent(s, e);
        }
        s.modalShow = true;
        $timeout(function() {
          s.$apply();
        });
        if (angular.isDefined(s.modalData) && angular.isFunction(s.modalData.onShow)) {
          s.modalData.onShow();
        }
      };
      e.modal(modalData);
    }
  }]);

angular.module('uiAngular')
  .directive('uiDropdown', ["$timeout", function($timeout) {
    'use strict';
    return {
      restrict: 'A',
      scope: {
        dropdownData: '=uiDropdownData',
        dropdownObj: '=?uiDropdown',
      },
      link: link,
    };

    function link(s, e) {
      if (angular.isObject(s.dropdownData)) {
        e.dropdown(s.dropdownData);
        s.$watchCollection('dropdownData', function() {
          e.dropdown(s.dropdownData);
          $timeout(function() {
            e.dropdown('refresh');
          });
        });
      } else {
        $timeout(function() {
          e.dropdown();
        });
      }
      s.dropdownObj = e;
    }
  }]);

(function() {
  'use strict';

  visibilityDirective.$inject = ["$timeout"];
  angular.module('uiAngular')
    .directive('uiVisibility', visibilityDirective);

  function visibilityDirective($timeout) {
    return {
      restrict: 'A',
      scope: {
        visibilityData: '=uiVisibilityData',
        visibilityObj: '=?uiVisibility',
      },
      link: link,
    };

    function link(s, e) {
      if (angular.isObject(s.visibilityData)) {
        e.visibility(s.visibilityData);
        s.$watchCollection('visibilityData', function() {
          e.visibility(s.visibilityData);
          $timeout(function() {
            e.visibility('refresh');
          });
        });
      } else {
        $timeout(function() {
          e.visibility();
        });
      }
      s.visibilityObj = e;
    }
  }

})();

angular.module('uiAngular')
  .config(["$compileProvider", function($compileProvider) {
    'use strict';
    $compileProvider.debugInfoEnabled(false);
  }]);

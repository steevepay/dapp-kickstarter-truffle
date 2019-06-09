'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // in the browser and the user has injected Metamask
  var getProvider = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return window.web3.currentProvider.enable();

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function getProvider() {
      return _ref.apply(this, arguments);
    };
  }();
  getProvider();
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // we are on the server OR the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider(process.env.INFURA_URL);
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJnZXRQcm92aWRlciIsImN1cnJlbnRQcm92aWRlciIsImVuYWJsZSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwicHJvY2VzcyIsImVudiIsIklORlVSQV9VUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7OztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUE1RCxhQUF5RSxBQUN4RTtBQUNDO01BQU0sMEJBQUE7d0ZBQWMsbUJBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7cUJBQ1osT0FBTyxBQUFQLEtBQVksQUFBWixnQkFBNEIsQUFBNUIsQUFEWTs7aUJBQUE7aUJBQUE7OEJBQUE7O0FBQUE7a0JBQUE7QUFBZDs7a0NBQUE7OEJBQUE7QUFBQTtBQUFOLEFBR0E7QUFDQTtTQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0Q7QUFQRCxPQU9PLEFBQ0w7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUFnQyxRQUFRLEFBQVIsSUFBWSxBQUE1QyxBQUFqQixBQUNBO1NBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNEO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvcHJpdmF0ZS90bXAva2lja3N0YXJ0LXRydWZmbGUifQ==
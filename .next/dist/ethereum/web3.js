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
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/aa7a461490244b65a54e2f67b959fa8a');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJnZXRQcm92aWRlciIsImN1cnJlbnRQcm92aWRlciIsImVuYWJsZSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBNUQsYUFBeUUsQUFDeEU7QUFDQztNQUFNLDBCQUFBO3dGQUFjLG1CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBO3FCQUNaLE9BQU8sQUFBUCxLQUFZLEFBQVosZ0JBQTRCLEFBQTVCLEFBRFk7O2lCQUFBO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0FBQWQ7O2tDQUFBOzhCQUFBO0FBQUE7QUFBTixBQUdBO0FBQ0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNEO0FBUEQsT0FPTyxBQUNMO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFBZ0MsQUFBaEMsQUFBakIsQUFDQTtTQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDRDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL3ByaXZhdGUvdG1wL2tpY2tzdGFydC10cnVmZmxlIn0=
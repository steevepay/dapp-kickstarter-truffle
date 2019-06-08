"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/private/tmp/kickstart-truffle/components/requestrow.js";


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(_this.props.address);
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 4;
              return _web2.default.eth.getAccounts();

            case 4:
              accounts = _context.sent;
              _context.prev = 5;
              _context.next = 8;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              }).on('receipt', function (receipt) {
                _routes.Router.replace('/campaigns/' + _this.props.address + '/requests');
              });

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](5);

              console.log(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[5, 10]]);
    })), _this.finalyse = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(_this.props.address);
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.next = 4;
              return _web2.default.eth.getAccounts();

            case 4:
              accounts = _context2.sent;
              _context2.prev = 5;
              _context2.next = 8;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              }).on('receipt', function (receipt) {
                _routes.Router.replace('/campaigns/' + _this.props.address + '/requests');
              });

            case 8:
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](5);

              console.log(_context2.t0);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[5, 10]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: "render",
    value: function render() {

      var readyToFinalize = this.props.request.approvalCount > this.props.approversCount / 2;
      return _react2.default.createElement(_semanticUiReact.Table.Row, { disabled: !!this.props.request.complete, positive: readyToFinalize && !this.props.request.complete, color: "green", __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, this.props.id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, this.props.request.description), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _web2.default.utils.fromWei(this.props.request.value, 'ether') + 'ETH'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, this.props.request.recipient), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.props.request.approvalCount + '/' + this.props.approversCount), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, this.props.request.complete || readyToFinalize ? null : _react2.default.createElement(_semanticUiReact.Button, { color: "green", basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Approve")), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: "teal", basic: true, onClick: this.finalyse, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Finalyse")));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVxdWVzdHJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib24iLCJyZWNlaXB0IiwicmVwbGFjZSIsImZpbmFseXNlIiwiZmluYWxpemVSZXF1ZXN0IiwicmVhZHlUb0ZpbmFsaXplIiwicmVxdWVzdCIsImFwcHJvdmFsQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU87O0FBQ2hCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0lBRUYsQTs7Ozs7Ozs7Ozs7Ozs7O29OLEFBQ25CLHFGQUFZLG1CQUFBO29CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUNWO3NCQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDakI7QUFGSSx5QkFFTyx3QkFBUyxNQUFBLEFBQUssTUFGckIsQUFFTyxBQUFvQjs4QkFGM0I7cUJBR2EsY0FBQSxBQUFLLElBSGxCLEFBR2EsQUFBUzs7aUJBQTFCO0FBSEksa0NBQUE7OEJBQUE7OEJBQUE7OEJBTUYsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDO3NCQUM3QyxTQURGLEFBQW9ELEFBQ2xELEFBQVM7QUFEeUMsQUFDeEQsZUFESSxFQUFBLEFBRUgsR0FGRyxBQUVBLFdBQVcsVUFBQSxBQUFDLFNBQVksQUFDNUI7K0JBQUEsQUFBTyxRQUFRLGdCQUFnQixNQUFBLEFBQUssTUFBckIsQUFBMkIsVUFBMUMsQUFBb0QsQUFDckQ7QUFWTyxBQU1GOztpQkFORTs4QkFBQTtBQUFBOztpQkFBQTs4QkFBQTs4Q0FZUjs7c0JBQUEsQUFBUSxhQVpBOztpQkFBQTtpQkFBQTs4QkFBQTs7QUFBQTsrQkFBQTtBLGUsQUFnQlosb0ZBQVcsb0JBQUE7b0JBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQ1Q7c0JBQUEsQUFBUSxJQUFJLE1BQUEsQUFBSyxNQUFqQixBQUF1QixBQUNqQjtBQUZHLHlCQUVRLHdCQUFTLE1BQUEsQUFBSyxNQUZ0QixBQUVRLEFBQW9COytCQUY1QjtxQkFHYyxjQUFBLEFBQUssSUFIbkIsQUFHYyxBQUFTOztpQkFBMUI7QUFIRyxtQ0FBQTsrQkFBQTsrQkFBQTs4QkFNRCxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUFnRDtzQkFDOUMsU0FERixBQUFxRCxBQUNuRCxBQUFTO0FBRDBDLEFBQ3pELGVBREksRUFBQSxBQUVILEdBRkcsQUFFQSxXQUFXLFVBQUEsQUFBQyxTQUFZLEFBQzVCOytCQUFBLEFBQU8sUUFBUSxnQkFBZ0IsTUFBQSxBQUFLLE1BQXJCLEFBQTJCLFVBQTFDLEFBQW9ELEFBQ3JEO0FBVk0sQUFNRDs7aUJBTkM7K0JBQUE7QUFBQTs7aUJBQUE7K0JBQUE7Z0RBWVA7O3NCQUFBLEFBQVEsY0FaRDs7aUJBQUE7aUJBQUE7K0JBQUE7O0FBQUE7Z0NBQUE7QTs7Ozs7NkJBZ0JGLEFBRVA7O1VBQU0sa0JBQWtCLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixnQkFBZ0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFBdEUsQUFBdUYsQUFDdkY7NkJBQ0csY0FBRCx1QkFBQSxBQUFPLE9BQUksVUFBVSxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFsQyxBQUEwQyxVQUFVLFVBQVUsbUJBQW1CLENBQUMsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUE3RixBQUFxRyxVQUFVLE9BQS9HLEFBQXFIO29CQUFySDtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQUZWLEFBQ0UsQUFDYyxBQUVkLHFCQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BQUwsQUFBVyxRQUxoQixBQUlFLEFBQ3NCLEFBRXRCLDhCQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFDRztBQURIO0FBQUEsdUJBQ0csQUFBSyxNQUFMLEFBQVcsUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQTlCLEFBQXNDLE9BQXRDLEFBQTZDLFdBUmxELEFBT0UsQUFDMkQsQUFFM0Qsd0JBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssTUFBTCxBQUFXLFFBWGhCLEFBVUUsQUFDc0IsQUFFdEIsNEJBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsZ0JBQW5CLEFBQWlDLE1BQUksS0FBQSxBQUFLLE1BZC9DLEFBYUUsQUFDbUQsQUFFbkQsaUNBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNJO0FBREo7QUFBQSxjQUNJLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsWUFBbkIsQUFBK0Isa0JBQS9CLEFBQWlELHVCQUMvQyxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7b0JBQTFDO3NCQUFBO0FBQUE7T0FBQSxFQWxCUixBQWdCRSxBQUVNLEFBSU4sNkJBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSxjQUNFLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsV0FBbkIsQUFBOEIsdUJBQzVCLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsU0FBUyxLQUFwQyxBQUF5QztvQkFBekM7c0JBQUE7QUFBQTtPQUFBLEVBekJSLEFBQ0UsQUFzQkUsQUFFSSxBQU1UOzs7OztBQW5FcUMsQTs7a0JBQW5CLEEiLCJmaWxlIjoicmVxdWVzdHJvdy5qcyIsInNvdXJjZVJvb3QiOiIvcHJpdmF0ZS90bXAva2lja3N0YXJ0LXRydWZmbGUifQ==
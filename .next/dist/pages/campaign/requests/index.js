"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _layout = require("../../../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _requestrow = require("../../../components/requestrow");

var _requestrow2 = _interopRequireDefault(_requestrow);

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/private/tmp/kickstart-truffle/pages/campaign/requests/index.js?entry";


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: "renderRows",
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_requestrow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement("h3", { style: { marginBottom: -30 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Pending Requests"), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: "right", style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "Add request"))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "ID"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Description"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Amount"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Recipient"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Approval"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Approve"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "Finalize"))), _react2.default.createElement(_semanticUiReact.Table.Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, this.renderRows())), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Found ", this.props.requestCount, " requests."));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var query = _ref.query;
        var address, campaign, requestCount, approversCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.getRequestsCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return campaign.methods.approversCount().call();

              case 7:
                approversCount = _context.sent;
                _context.next = 10;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt("return", { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWduL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiUmVxdWVzdFJvdyIsIkNhbXBhaWduIiwid2ViMyIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJSb3dzIiwicmVxdWVzdENvdW50IiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVE7O0FBQ2pCLEFBQVMsQUFBWTs7Ozs7OztJQUVBLEE7Ozs7Ozs7Ozs7O2lDQVlOO21CQUNYOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2pEOytCQUFPLEFBQUM7ZUFBRCxBQUNBLEFBQ0w7Y0FGSyxBQUVELEFBQ0o7bUJBSEssQUFHSSxBQUNUO21CQUFTLE9BQUEsQUFBSyxNQUpULEFBSWUsQUFDcEI7MEJBQWdCLE9BQUEsQUFBSyxNQUxoQixBQUtzQjs7c0JBTHRCO3dCQUFQLEFBQU8sQUFPUjtBQVBRO0FBQ0wsU0FESztBQURULEFBQU8sQUFTUixPQVRROzs7OzZCQVdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLFFBQUksT0FBTyxFQUFDLGNBQWMsQ0FBMUIsQUFBVyxBQUFnQjtvQkFBM0I7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSxxQ0FBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUF3QixTQUFRLE9BQU8sRUFBQyxjQUF4QyxBQUF1QyxBQUFlO29CQUF0RDtzQkFBQTtBQUFBO1NBSk4sQUFFRSxBQUNFLEFBQ0UsQUFHSixrQ0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUJBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsZ0NBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQTtBQUFBO0FBQUEsU0FIRixBQUdFLEFBQ0EsMkJBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQTtBQUFBO0FBQUEsU0FKRixBQUlFLEFBQ0EsOEJBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQTtBQUFBO0FBQUEsU0FMRixBQUtFLEFBQ0EsNkJBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQTtBQUFBO0FBQUEsU0FORixBQU1FLEFBQ0EsNEJBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQTtBQUFBO0FBQUEsU0FUTixBQUNFLEFBQ0UsQUFPRSxBQUdKLCtCQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FuQkosQUFPRSxBQVlFLEFBQ0csQUFBSyxBQUdWLGdDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFhLGVBQUEsQUFBSyxNQUFsQixBQUF3QixjQXhCNUIsQUFDRSxBQXVCRSxBQUdMOzs7Ozs7WSxBQW5ENkIsYSxBQUFBOzs7OzttQkFDcEI7QSwwQkFBWSxBLE1BQVosQUFDRixBO0EsMkJBQVcsd0JBQUEsQSxBQUFTOzt1QkFDQyxTQUFBLEFBQVMsUUFBVCxBQUFpQixtQkFBakIsQUFBb0MsQTs7bUJBQXpEO0E7O3VCQUN1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQkFBakIsQUFBa0MsQTs7bUJBQXpEO0E7O3lDQUNpQixBQUFRLFVBQVUsU0FBTixBQUFNLEFBQVMsZUFBZixBQUE4QixPQUE5QixBQUFxQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUM5Rjt5QkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQ3pDO0FBRnNCLEFBQVksQSxpQkFBQSxDQUFaOzttQkFBakI7QTtpREFHQyxFQUFFLFNBQUYsU0FBVyxVQUFYLFVBQXFCLGNBQXJCLGNBQW1DLGdCQUFuQyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVCtCLEE7O2tCQUFyQixBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9wcml2YXRlL3RtcC9raWNrc3RhcnQtdHJ1ZmZsZSJ9
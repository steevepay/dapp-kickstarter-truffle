'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/private/tmp/kickstart-truffle/pages/campaign/new.js?entry';


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: '',
      errorMessage: '',
      loading: false
    }, _this.getAccounts = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _web2.default.eth.getAccounts();

            case 2:
              return _context.abrupt('return', _context.sent);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onSubmit = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
        var accounts, err;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                accounts = void 0;
                err = false;
                _context2.prev = 3;
                _context2.next = 6;
                return _this.getAccounts();

              case 6:
                accounts = _context2.sent;
                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2['catch'](3);

                _this.setState({ errorMessage: _context2.t0.message });
                _context2.t0 = true;

              case 13:
                if (!(err === false)) {
                  _context2.next = 24;
                  break;
                }

                _this.setState({ loading: true, errorMessage: '' });
                _context2.prev = 15;
                _context2.next = 18;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                  from: accounts[0]
                }).on('receipt', function (receipt) {
                  // console.log(receipt);
                  _routes.Router.pushRoute('/');
                });

              case 18:
                _context2.next = 23;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t1 = _context2['catch'](15);

                _this.setState({ errorMessage: _context2.t1.message });

              case 23:

                _this.setState({ loading: false });

              case 24:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[3, 9], [15, 20]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'New Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'wei',
        labelPosition: 'right',
        value: this.state.minumumContribution,
        onChange: function onChange(event) {
          return _this3.setState({ minimumContribution: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Oops!',
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, disabled: this.state.loading, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Create!'))));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWduL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIk1lc3NhZ2UiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJmYWN0b3J5Iiwid2ViMyIsIlJvdXRlciIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsImdldEFjY291bnRzIiwiZXRoIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhY2NvdW50cyIsImVyciIsInNldFN0YXRlIiwibWVzc2FnZSIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwib24iLCJyZWNlaXB0IiwicHVzaFJvdXRlIiwibWludW11bUNvbnRyaWJ1dGlvbiIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBUyxBQUFNLEFBQVE7O0FBQy9CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7Ozs7OztzTixBQUNKOzJCQUFRLEFBQ2UsQUFDckI7b0JBRk0sQUFFUSxBQUNkO2VBQVMsQSxBQUhIO0FBQUEsQUFDTixhQUtGLEEsdUZBQWMsbUJBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7cUJBQ0MsY0FBQSxBQUFLLElBRE4sQUFDQyxBQUFTOztpQkFEVjt3REFBQTs7aUJBQUE7aUJBQUE7OEJBQUE7O0FBQUE7a0JBQUE7QSxlQUlkLEE7MkZBQVcsa0JBQUEsQUFBTyxHQUFQO3NCQUFBO3dFQUFBO29CQUFBOytDQUFBO21CQUNUO2tCQUFBLEFBQUUsQUFDRTtBQUZLLGdDQUdMO0FBSEssc0JBQUEsQUFHQztpQ0FIRDtpQ0FBQTt1QkFNVSxNQU5WLEFBTVUsQUFBSzs7bUJBQXRCO0FBTk8scUNBQUE7aUNBQUE7QUFBQTs7bUJBQUE7aUNBQUE7a0RBUVA7O3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsYUFBOUIsQUFBYyxBQUFvQixBQUNsQzsrQkFUTyxBQVNQLEFBQU07O21CQVRDO3NCQVlMLFFBWkssQUFZRyxRQVpIO21DQUFBO0FBQUE7QUFhUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sY0FidkIsQUFhUCxBQUFjLEFBQThCO2lDQWJyQztpQ0FBQTt5Q0FlQyxBQUFRLFFBQVIsQUFDRCxlQUFlLE1BQUEsQUFBSyxNQURuQixBQUN5QixxQkFEekIsQUFFRDt3QkFDTyxTQUhOLEFBRUksQUFDRSxBQUFTO0FBRFgsQUFDSixpQkFIQSxFQUFBLEFBSUMsR0FKRCxBQUlJLFdBQVcsVUFBQSxBQUFDLFNBQVksQUFDNUI7QUFDQTtpQ0FBQSxBQUFPLFVBQVAsQUFBaUIsQUFDbEI7QUF0QkEsQUFlQzs7bUJBZkQ7aUNBQUE7QUFBQTs7bUJBQUE7aUNBQUE7a0RBeUJMOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLGFBekJ6QixBQXlCTCxBQUFjLEFBQW9COzttQkFHcEM7O3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBNUJSLEFBNEJQLEFBQWMsQUFBVTs7bUJBNUJqQjttQkFBQTtpQ0FBQTs7QUFBQTsyQ0FBQTtBOzs7Ozs7Ozs7OzZCQWlDRDttQkFDUjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsaUNBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EseUNBQUEsQUFBQztlQUFELEFBQ1EsQUFDTjt1QkFGRixBQUVnQixBQUNkO2VBQU8sS0FBQSxBQUFLLE1BSGQsQUFHb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVEsT0FBQSxBQUFLLFNBQVMsRUFBQyxxQkFBb0IsTUFBQSxBQUFNLE9BQWpELEFBQVEsQUFBYyxBQUFrQztBQUpwRTtvQkFBQTtzQkFISixBQUNFLEFBRUUsQUFNRjtBQU5FO0FBQ0UsMkJBS0osQUFBQztlQUFELEFBRUU7Z0JBRkYsQUFFUyxBQUNQO2lCQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQjs7b0JBSHRCO3NCQVRGLEFBU0UsQUFLQTtBQUxBO0FBQ0UsMEJBSUYsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFVBQVUsS0FBQSxBQUFLLE1BQS9CLEFBQXFDLFNBQVMsU0FBUyxLQUFBLEFBQUssTUFBNUQsQUFBa0U7b0JBQWxFO3NCQUFBO0FBQUE7U0FsQlIsQUFDRSxBQUNFLEFBRUUsQUFjRSxBQU9UOzs7OztBQXRFdUIsQSxBQXlFMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9wcml2YXRlL3RtcC9raWNrc3RhcnQtdHJ1ZmZsZSJ9
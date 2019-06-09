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

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/private/tmp/kickstart-truffle/components/contribueform.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, err, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: '' });
                campaign = (0, _campaign2.default)(_this.props.address);
                err = false;
                accounts = void 0;
                _context.prev = 5;
                _context.next = 8;
                return _web2.default.eth.getAccounts();

              case 8:
                accounts = _context.sent;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](5);

                // this.setState({ errorMessage: err.message });
                _context.t0 = true;

              case 14:
                console.log(accounts[0]);

                if (!(err === false)) {
                  _context.next = 26;
                  break;
                }

                _context.prev = 16;
                _context.next = 19;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                }).on('receipt', function (receipt) {
                  console.log(receipt);
                  _routes.Router.replace('/campaigns/' + _this.props.address);
                });

              case 19:
                _context.next = 25;
                break;

              case 21:
                _context.prev = 21;
                _context.t1 = _context['catch'](16);

                console.log(_context.t1);
                _this.setState({ errorMessage: _context.t1.message });

              case 25:
                _this.setState({ loading: false, value: '' });

              case 26:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 11], [16, 21]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Amount to contribute'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'ether',
        labelPosition: 'right',
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Ooops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, disabled: this.state.loading, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Contribute!')));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udHJpYnVlZm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJCdXR0b24iLCJDYW1wYWlnbiIsIndlYjMiLCJSb3V0ZXIiLCJDb250cmlidXRlRm9ybSIsInN0YXRlIiwidmFsdWUiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImVyciIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJvbiIsInJlY2VpcHQiLCJyZXBsYWNlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTSxBQUFPLEFBQVM7O0FBQzlCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0lBR0YsQTs7Ozs7Ozs7Ozs7Ozs7OzROQUNuQixBO2FBQVEsQUFDQyxBQUNQO2VBRk0sQUFFRyxBQUNUO29CQUhNLEFBR1EsQTtBQUhSLEFBQ04sYSxBQUlGOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDsyQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBQ047c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sY0FBOUIsQUFBYyxBQUE4QixBQUN0QztBQUhHLDJCQUdRLHdCQUFTLE1BQUEsQUFBSyxNQUh0QixBQUdRLEFBQW9CLEFBQ2pDO0FBSkssc0JBQUEsQUFJQyxBQUNOO0FBTEssZ0NBQUE7Z0NBQUE7Z0NBQUE7dUJBUVUsY0FBQSxBQUFLLElBUmYsQUFRVSxBQUFTOzttQkFBMUI7QUFSTyxvQ0FBQTtnQ0FBQTtBQUFBOzttQkFBQTtnQ0FBQTtnREFVUDs7QUFDQTs4QkFYTyxBQVdQLEFBQU07O21CQUVSO3dCQUFBLEFBQVEsSUFBSSxTQWJILEFBYVQsQUFBWSxBQUFTOztzQkFFakIsUUFmSyxBQWVHLFFBZkg7a0NBQUE7QUFBQTtBQUFBOztnQ0FBQTtnQ0FBQTtnQ0FpQkMsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCO3dCQUM1QixTQURpQyxBQUNqQyxBQUFTLEFBQ2Y7eUJBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQUYvQixBQUFtQyxBQUVoQyxBQUFtQztBQUZILEFBQ3ZDLGlCQURJLEVBQUEsQUFHSCxHQUhHLEFBR0EsV0FBVyxVQUFBLEFBQUMsU0FBWSxBQUM1QjswQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO2lDQUFBLEFBQU8sUUFBUSxnQkFBZ0IsTUFBQSxBQUFLLE1BQXBDLEFBQTBDLEFBQzNDO0FBdkJJLEFBaUJDOzttQkFqQkQ7Z0NBQUE7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBeUJMOzt3QkFBQSxBQUFRLGFBQ1I7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxZQTFCeEIsQUEwQkwsQUFBYyxBQUFtQjs7bUJBRW5DO3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxPQUFPLE9BNUJ4QixBQTRCUCxBQUFjLEFBQXdCOzttQkE1Qi9CO21CQUFBO2dDQUFBOztBQUFBOzJDQUFBO0E7Ozs7Ozs7Ozs7NkJBK0JGO21CQUNQOzs2QkFDRSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlDQUFBLEFBQUM7ZUFBRCxBQUNRLEFBQ047dUJBRkYsQUFFZ0IsQUFDZDtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxNQUFBLEFBQU0sT0FBckMsQUFBUyxBQUFjLEFBQXFCO0FBSnhEOztvQkFBQTtzQkFGRixBQUVFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsVUFBUyxTQUFTLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBUkYsQUFRRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFVBQVUsS0FBQSxBQUFLLE1BQS9CLEFBQXFDLFNBQVMsU0FBUyxLQUFBLEFBQUssTUFBNUQsQUFBa0U7b0JBQWxFO3NCQUFBO0FBQUE7U0FYTixBQUNFLEFBQ0UsQUFTRSxBQUlQOzs7OztBQXJEeUMsQTs7a0JBQXZCLEE7O0FBc0RwQiIsImZpbGUiOiJjb250cmlidWVmb3JtLmpzIiwic291cmNlUm9vdCI6Ii9wcml2YXRlL3RtcC9raWNrc3RhcnQtdHJ1ZmZsZSJ9
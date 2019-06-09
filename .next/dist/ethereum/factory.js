"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require("../build/contracts/CampaignFactory.json");

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _web2.default.eth.Contract(_CampaignFactory2.default.abi, process.env.FACTORY_CONTRACT_ADDRESS);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImV0aCIsIkNvbnRyYWN0IiwiYWJpIiwicHJvY2VzcyIsImVudiIsIkZBQ1RPUllfQ09OVFJBQ1RfQUREUkVTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTRCLEFBQTVCLEFBRUE7Ozs7OztrQkFBZSxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDYiwwQkFBZ0IsQUFESCxLQUViLFFBQVEsQUFBUixJQUFZLEFBRkMsQUFBZiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9wcml2YXRlL3RtcC9raWNrc3RhcnQtdHJ1ZmZsZSJ9
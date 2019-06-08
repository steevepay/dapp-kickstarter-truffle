'use strict';

var routes = require('next-routes');

module.exports = routes().add('/campaigns/new', '/campaign/new').add('/campaigns/:address', '/campaign/show').add('/campaigns/:address/requests', '/campaign/requests/index').add('/campaigns/:address/requests/new', '/campaign/requests/new');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBVCxBQUFOOztBQUVBLE9BQU8sQUFBUCxVQUFpQixTQUNoQixBQURnQixJQUNaLEFBRFksa0JBQ00sQUFETixpQkFFaEIsQUFGZ0IsSUFFWixBQUZZLHVCQUVXLEFBRlgsa0JBR2hCLEFBSGdCLElBR1osQUFIWSxnQ0FHb0IsQUFIcEIsNEJBSWhCLEFBSmdCLElBSVosQUFKWSxvQ0FJd0IsQUFKeEIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9wcml2YXRlL3RtcC9raWNrc3RhcnQtdHJ1ZmZsZSJ9
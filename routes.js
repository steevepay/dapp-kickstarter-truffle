const routes = require('next-routes')

module.exports = routes()
.add('/campaigns/new', '/campaign/new')
.add('/campaigns/:address', '/campaign/show')
.add('/campaigns/:address/requests', '/campaign/requests/index')
.add('/campaigns/:address/requests/new', '/campaign/requests/new');
                  
                  
                  
                  
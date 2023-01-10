// This initializes stuff
import 'dotenv/config'
import './server.js'

// Helpers
import loadApis from './modules/loadApis.js'

// Import js files under api/
loadApis()
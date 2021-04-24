'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./moment.min.js');
} else {
    module.exports = require('./moment.js');
}

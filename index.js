'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./disable_inputAutocomplete/disableAutocomplete.min.js');
} else {
    module.exports = require('./disable_inputAutocomplete/disableAutocomplete.js');
}

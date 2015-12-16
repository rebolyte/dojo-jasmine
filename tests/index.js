// Configuration Object for Dojo Loader:
dojoConfig = {
    // baseUrl: 'src/', // Where we will put our packages
    async: 1, // We want to make sure we are using the 'modern' loader
    hasCache: {
        'host-node': 1, // Ensure we 'force' the loader into Node.js mode
        'dom': 0 // Ensure that none of the code assumes we have a DOM
    },
    packages: [
    {
        name: 'dojo',
        location: '../../lib/dojo-sdk/dojo'
    },{
        name: 'mylib',
        location: '../src'
    },
    {
        name: 'tests',
        location: '.'
    },
    {
        name: 'spec',
        location: 'spec'
    }],
    deps: [ 'tests/runner' ]
};

// Now load the Dojo loader
require('../../lib/dojo-sdk/dojo/dojo.js');

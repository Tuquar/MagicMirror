requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        tests : '../../tests'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['tests/testRunner']);

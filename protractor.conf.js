const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/spec.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--window-size=1200,900'] // THIS!
        }
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000,
        print: function() {}
    },
    onPrepare() {

        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
};
//usar npm i
//webdriver-manager update
//webdriver-manager start
//PARA CORRER USAR protractor protractor.conf.js
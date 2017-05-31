const Cucumber = require('cucumber');
const os = require('os');
import { browser } from 'protractor';
import * as fs from 'fs';
import { defineSupportCode } from 'cucumber';
import * as reporter from 'cucumber-html-reporter';
import { mkdirp } from 'mkdirp';

const baseUrl = 'http://localhost:4200/';
const platform = process.platform;
const appName = process.env.npm_package_name;
const appVersion = process.env.npm_package_version;
const hostname = os.hostname();

defineSupportCode(function ({ registerHandler, registerListener, After, setDefaultTimeout }) {
    setDefaultTimeout(10 * 1000);
    const jsonReports = process.cwd() + '/e2e/reports/json';
    const htmlReports = process.cwd() + '/e2e/reports/html';
    const targetJson = jsonReports + '/feature_test_report.json';

    registerHandler('BeforeFeature', function (event, callback) {
        browser.get(baseUrl);
        setTimeout(callback, 5000);
    });

    const cucumberReporterOptions = {
        theme: 'bootstrap',
        jsonFile: targetJson,
        output: htmlReports + '/feature_test_report.html',
        reportSuiteAsScenarios: true,
        metadata: {
          'App': appName,
          'Version': appVersion,
          'Hostname': hostname,
          'Platform': platform
        }
    };

    const logFn = string => {
        if (!fs.existsSync(jsonReports)) {
            mkdirp.sync(jsonReports);
        }
        try {
            fs.writeFileSync(targetJson, string);
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        } catch (err) {
            if (err) {
                console.log(`Failed to save cucumber test results to json file.
                             Failed to create html report.
                             `);
                console.log(err);
            }
        }
    };
    const jsonformatter = new Cucumber.JsonFormatter({
        log: logFn
    });
    registerListener(jsonformatter);
});

/**
 * Tadpole.js is a simple library for injecting views on demand.
 * It should work with any templating system currently available.
 *
 * @Author William Betts <william @ pwnc0re.com>
 * @class
 * @param {Object} opts - General options for Tadpole.js
 * @license
 */
function Tadpole(opts) {

    /**
     * This is the url path to your js views directory minus the last /.
     * There is currently no checking if a slash is added or not, but it's
     * expected there will no be one added.
     *
     * @type {string}
     */
    this.viewPath = 'js/Views';

    /**
     * @param {Object} viewMap - This is a hashmap that correlates views their file paths for injection and rendering.
     * @param {String} viewMap[key] - They key is the common name used to call the view.
     * @param {String} viewMap[key].fileName - The name of the javascript file to be injected (for example MenuView.js).
     * @type HashMap
     */
    this.viewMap = {};

    // setup the object
    this.initialize(opts);
}

/**
 * Initializes the Tadpole library. All settings can be set via this function and
 * not all settings are required to be present. It will only set the ones that are
 * present.
 *
 * @constructor
 * @param {Object} opts - General options for Tadpole.js
 */
Tadpole.prototype.initialize = function (opts) {
    if (opts.hasOwnProperty('viewPath')) {
        this.viewPath = opts.viewPath;
    }

    if (opts.hasOwnProperty('viewMap')) {
        this.viewMap = opts.viewMap;
    }
}

/**
 * Injects javascript file that contains the view processing logic for the view
 * you want to be rendered.
 */
Tadpole.prototype.injectView = function (name) {

    $.getScript(this.viewPath + '/' + this.viewMap[name].fileName, function (data, status) {
        view.render();
    });
}

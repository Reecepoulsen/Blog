var DefaultExample = Class.create();
DefaultExample.prototype = {
    staticVar: "Hello world",

    staticMethod: function (param1) {
        // I can be called without initializing the class
    },

    initialize: function (createdBy) {
        // Set some initial states
        this.createdBy = createdBy;
        this.createdOn = new GlideDateTime();
    },

    /**
     * This method does something and takes a string as a param
     * @param {string} param1 Some string
     */
    doSomething: function (param1) {
        // This method does something
    },

    doSomethingElse: function (param1, param2, param3) {
        // This method does something else...use your imagination
    },

    type: 'DefaultExample'
};
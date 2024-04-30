class ES6Example {
    static staticVar = "Hello world";

    // Hello World!
    // Making another change!
    // Making a change
    static staticMethod(param1) {
        // I can be called without initializing the class
    }

    constructor(createdBy) {
        // Set some initial states
        this.createdBy = createdBy;
        this.createdOn = new GlideDateTime();
        this.createdOn.addSeconds(2);
    }

    /**
     * This method does something and takes a string as a param
     * @param {string} param1 Some string
     */
    doSomething(param1) {
        // This method does something
    }

    doSomethingElse(param1, param2, param3) {
        // This method does something else...use your imagination
    }

    type = `ES6Example`;
}
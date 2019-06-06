'use strict'
// 3rd libraries
const expect = require('chai').expect;

// const 
const DEFAULT_URL = '';
const DEFAULT_CODE = 200;
const DEFAULT_CONTENT = {};
const SIMPLE_PROPERTY = ['number', 'string', 'boolean'];

module.exports = class Response {

    constructor(url = DEFAULT_URL, code = DEFAULT_CODE, content = DEFAULT_CONTENT) {
        this.url = url;
        this.code = code;
        this.content = content;
    }

    /**
     * this is a common function to check the simple properties of a response content 
     * it will check the value of a property is number/string/boolen, like sku
     * won't check array/object/function/Symbol, like images
     * @method
     * @param {object} source: the content object from server api
     */
    simpleCheck(source = {}) {
        Object.keys(this.content).forEach(property => {
            if (property && SIMPLE_PROPERTY.includes(typeof property)) {
                //exists check
                expect(source).to.have.property(property);
                //null check
                expect(source[property]).to.not.equal(null);
                //value check
                expect(source[property]).equal(this.content[property]);
            }
        });
    }
}
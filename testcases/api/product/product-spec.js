'use strict'
// 3rd libraries
const expect = require('chai').expect;
const using = require('mocha-data-driven');

// my libraries or object
const HttpClient = require('../../shared/HttpClient');
const Product = require('./Product');
const {URL} = require('./data/basic');

// import test cases data
const invalidResponseCase = require('./data/case-invalid-response');
const normalRequestCase = require('./data/case-normal-request');

describe('API for Product',()=>{

    describe('Normal Product Info',()=>{
        using(normalRequestCase, ()=>{
            it('{description}',(tc,done)=>{
                let product = new Product(URL+tc.url,tc.code,tc.content);
                HttpClient.sendRequestThenSimpleCheck(product,done);
            });
        });
    });
    
    describe('Invalid Product Info',()=>{
        using(invalidResponseCase, ()=>{
            it('{description}',(tc,done)=>{
                let product = new Product(URL+tc.url,tc.code,tc.content);
                HttpClient.sendRequestThenSimpleCheck(product,done);
            });
        });
    });
    
})
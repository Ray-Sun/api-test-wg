'use strict'
// 3rd libraries
const supertest = require('supertest');

// my libraries or object
const Response = require('./Response');

// const 
const BASE_URL = 'https://www.appliancesonline.com.au/api/v2';
const API = supertest(BASE_URL);
const HEAD_ACCEPT_TYPE = 'application/json';

module.exports = class HttpClient{

    static sendRequestThenSimpleCheck(testObj,done){
        API.get(testObj.url)
        .set('Accept', HEAD_ACCEPT_TYPE)
        .expect(testObj.code)
        .end((err,res)=>{
            if(err) return done(err);
            testObj.simpleCheck(res.body);
            done();
        });
    }

    // for other complex testing
    static sendRequestThenCheck(testObj,checkFunc,done){
        API.get(testObj.url)
        .set('Accept', HEAD_ACCEPT_TYPE)
        .expect(testObj.code)
        .end((err,res)=>{
            if(err) return done(err);
            checkFunc(res.body);
            done();
        });
    }

    // TODO add some functions like manageCooike,checkRequestHead...

}
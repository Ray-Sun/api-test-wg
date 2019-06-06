
# Before

Make sure you have npm

# Run Test

1. cd the-project-dir

2. install dependencies

``` shell

npm install

```
 

3. run test cases

``` shell

npm test

```  
if you want get a html report, please run:
``` shell

npm run test-r

``` 
You will find the test report in the reports folder.(report.html)

  
# Project Info

All important things are in the testcases folder:

* common classes in the shared folder.
  * HttpClient for sending request and do common checking like status code
  * Response is super class for public function like check property in the resoponse.
  * StatusCode with the code and code description 

* api folder included all api test cases. Here is the Product.js. You can add other api like User later

* 3 parts in a page test case:

  * Product.js inherited from Response Class. You can add other functions to design own testcase.

  * basic.js in data folder provides the common information like url; file started with "case-" provides the test cases data. You can add a new case in these files.

  * product-spec.js use Product class and data to run api test and use "mocha-data-driven" library to do test-data-driven.

  

# Report Demo

[Report](https://drive.google.com/open?id=1kOz34P81o0Cx3jeDpC0Gu9s5GzHfDtxH)


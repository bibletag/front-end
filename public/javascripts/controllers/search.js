"use strict";

app.controller('searchCtrl', ["$http", function($http){

  // store all keys and methods on self
  const self = this;

  //initialize user-searched tag
  self.searchTag = "";

  // get search data from api
  self.outputTags = (searchInput) => {
    console.log("inside click function");
    console.log(searchInput);
  };

}]);

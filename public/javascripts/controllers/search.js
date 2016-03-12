"use strict";

app.controller('searchCtrl', ["$http", function($http){

  // store all keys and methods on self
  const self = this;

  //initialize user-searched tag
  self.searchTag = "";
  // searched by default
  self.userSearched = false;

  self.queryApi = () => {
    self.userSearched = true;
  }

  // get search data from api
  self.outputTags = (searchInput) => {
    console.log("inside click function");
    console.log(searchInput);
    self.queryApi();
  };

  self.outputTagsKeypress = (event, searchInput) => {
    // check if enter key was pressed
    if(event.keyCode === 13){
      console.log(searchInput);
      self.queryApi();
    }
  };

}]);

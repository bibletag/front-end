"use strict";

app.controller('searchCtrl', ["$http", function($http){

  // store all keys and methods on self
  const self = this;

  //initialize user-searched tag
  self.searchTag = "";
  //init self.userSearched
  self.userSearched = false;

  self.outputTagsKeypress = (event, searchInput) => {
    // check if enter key was pressed
    if(event.keyCode === 13){
      self.searchedText = searchInput;
      // query api
      $http.get(`http://45.55.144.141:8080/tag/${searchInput}`)
      .then((data) => {
        self.userSearched = true;
        console.log(data);

      });
    }
  };

}]);

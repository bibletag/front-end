"use strict";

app.controller('searchCtrl', ["$http", function($http){

  // store all keys and methods on self
  const self = this;

  // api reference
  const apiUrl = "http://45.55.144.141:8080";

  //initialize user-searched tag
  self.searchTag = "";
  //init self.userSearched
  self.userSearched = false;

  self.outputTagsKeypress = (event, searchInput) => {
    // check if enter key was pressed
    if(event.keyCode === 13 && searchInput !== ""){
      self.searchedText = searchInput;
      // query api
      $http.get(`${apiUrl}/tag/${searchInput}`)
      .then(function successCallback(response) {
            self.error = false;
            self.userSearched = true;
            self.tagData = response;
      }, function errorCallback(response) {
          self.error = true;
          self.userSearched = true;
          self.message = `Nothing found for ${searchInput}, please try again or tag ${searchInput}!`;
      });
    }
  };

  self.addTag = (tag,book,chapter,verseOne,verseTwo) => {
    // validate for post
    let tagInput = tag;
    let bookInput = book;
    let chapterInput = chapter;
    let verseInputOne = parseInt(verseOne);
    let verseInputTwo = parseInt(verseTwo);

    // post
    if(tagInput && bookInput && verseInputOne && verseInputTwo){
      // construct request data object
      const reqData = {
        "tag": tagInput,
        "book": bookInput,
        "chapter": chapterInput,
        "startVerse":verseInputOne,
        "endVerse":verseInputTwo
      };

      $http.post(`${apiUrl}/tag`, reqData)
      .then(function successCallback(response) {
        console.log("sucessful");
        console.log(response);
        }, function errorCallback(response) {
          console.log("sucessful");
          console.log(response);
        });
  }
};

}]);

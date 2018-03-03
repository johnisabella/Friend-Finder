// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendsData = require("../data/friends");
//Check to make sure this does not actually require the .js suffix....

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Request

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
      friendsData.push(req.body);
      res.json(true);
  });
//The section above will contain the logic that calculates the difference in total score for each survey, then identify the most compatable friend.

//For loop that takes every object inside the friend array.
//Calculates the difference between each corresponding responses
//Determines the sum of those differences
//Returns the object.name for the object with the lowest sum.
//appends a button to the survey page?
//Once button is clicked, result of closest friend is displayed...
};

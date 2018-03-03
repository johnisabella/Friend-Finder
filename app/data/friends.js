// ===============================================================================
// DATA
// Below data will hold all of the "friends" who complete the survey with their responses..
// Initially we just set it equal to a "dummy" friend.
// ===============================================================================

var friendsArray = [
  {
    name:"John Isabella",
    scores:[
        "4",
        "3",
        "4",
        "2",
        "3",
        "2",
        "2",
        "2",
        "5",
        "4"
      ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;

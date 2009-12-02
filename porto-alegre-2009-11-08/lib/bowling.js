var Game = function() {
  var rolls = [];
  
  return {
    roll: function(pins) {
      rolls.push(pins);
    },
    
    score: function() {
      var score = 0;
      for (var i = 0; i < rolls.length; i++)
        score += rolls[i];
      return score;
    }
  }
};
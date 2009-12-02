var Game = function() {
  var rolls = [];
  
  function isSpare (index) {
    return rolls[index] + rolls[index - 1] === 10;
  }
  
  function isStrike (index) {
    return rolls[index] === 10;
  }
  
  return {
    roll: function(pins) {
      rolls.push(pins);
    },
    
    score: function() {
      var score = 0;
      for (var i = 0; i < rolls.length; i++) {
        if (isStrike(i))
          score += rolls[i] + rolls[i + 1] + rolls[i + 2];
        else if (isSpare(i))
          score += rolls[i] + rolls[i + 1];
        else
          score += rolls[i];
      }
      return score;
    }
  }
};

var Frame = function () {
  var rolls = [];
  return {
    roll: function(pins) {
      rolls.push(pins);
    },
    
    isSpare: function() {
      var frame_score = 0;
      for (var i = 0; i < rolls.length; i++)
        frame_score += rolls[i];
      return frame_score === 10
    },
    
    isStrike: function() {
      return rolls[0] === 10;
    }
  }
}
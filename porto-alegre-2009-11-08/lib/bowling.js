var Game = function() {
  var rolls = [];
  
  function isSpare (index) {
    return rolls[index] + rolls[index - 1] === 10;
  }
  
  return {
    roll: function(pins) {
      rolls.push(pins);
    },
    
    score: function() {
      var score = 0;
      for (var i = 0; i < rolls.length; i++) {
        if (isSpare(i))
          score += rolls[i] + rolls[i + 1];
        else
          score += rolls[i];
      }
      return score;
    }
  }
};
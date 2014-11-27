//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) 
{
    if(input.trim().length === 0)
    {
        return "Fine. Be that way!";
    }
    else if(input == input.toUpperCase() && (input != input.toLowerCase()))
    {
        return "Whoa, chill out!";
    }
    else if(input.charAt( (input.length) -1 )=='?')
    {
        return "Sure.";
    }   
    else
        return "Whatever.";
};

module.exports = Bob;

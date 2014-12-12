function anagram(word) {
    var wordsort = word.toLowerCase().split("").sort().join("");

    this.matches = function(list){
        var found = [];

        if(typeof list == "string"){
            for(var i = 0; i < arguments.length; i++){
                var strsort = arguments[i].toLowerCase().split("").sort().join("");
                if (strsort === wordsort){
                    found.push(arguments[i]);
                }
            }
        } else {
            for(var i = 0; i < list.length; i++) {
                var arrsorted = list[i].toLowerCase().split("").sort().join("");
                if (list[i].toLowerCase() === word.toLowerCase()) {
                    break;
                }
                if (arrsorted === wordsort) {
                    found.push(list[i]);
                } 
            }
        }

        return found;
    };
    return this;
};

module.exports = anagram;
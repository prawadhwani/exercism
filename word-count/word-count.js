
words = function(input)
{
	//empty object to hold count
	var count = {};
	//splitting the input and counting each word's number
	input.split(/\s+/g).forEach(function(position){
		count[position] = (count[position] || 0) + 1;
	});
	return count;
};

module.exports = words;
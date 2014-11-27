var Hamming = function(){};
Hamming.compute = function(strand1, strand2)
{
	var length = strand1.length;
	var count = 0;
	for(var i =0; i<length; i++)
	{
		if(strand1[i] === strand2[i])
			count++;
	}
	return length-count;
};

module.exports = Hamming;
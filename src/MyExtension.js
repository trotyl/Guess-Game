_.mixin({
	congruence: function(str1, str2) {
		var count = 0;
		for (var i = str1.length; i >= 0; i--) {
    		count += (str1[i] == str2[i]? 1: 0);
		};
		return count;
	}
});
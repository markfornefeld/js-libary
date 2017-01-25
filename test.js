$(document). ready(function() {
	$.ajax({
		datatype: "json"
		url: "http;//swapi.co/api/people"
		success: function(data) {
			console.log(data.results.forEach(function(people){
				console.log(people.name)
			}))
		}
});
});
	$.ajax({
		datatype: "json"
		url: "http;//swapi.co/api/starships"
		success: function(data) {
			console.log(data.results.forEach(function(people){
				console.log(starships.name)
			}))
		}
});
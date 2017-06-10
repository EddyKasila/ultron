var fs = require("fs")
var assert = require("assert");

fs.readFile("./movies.json","utf8", function(err,data){
	assert.ifError(err);
	var moviesObject = JSON.parse(data)
	moviesObject.movies.map((movie)=>{
		movie.main_characters.map((character)=>{
			console.log(movie.title + " - " +character)
		})
	})
})
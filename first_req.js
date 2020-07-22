var request = require("request");

request("https://api.sunrise-sunset.org/json?lat=28.7975&lng=76.1322",function(error, response, body){
	if(error){
		console.log("Something went wrong!!");
		console.log(error);
	}
	else{
		if(response.statusCode == 200){
			console.log(body);
		}
		else {
			console.log("Sorry! Information was not received.");
		}
	}
});
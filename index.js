const request = require('request');
const express = require("express");
const app = express();

app.listen(3000, function () {
 console.log("App listening on port 3000!");
});

function getData(path, res){
	let promise = new Promise((resolve, reject) => {
    var options = {
      url: path,
      headers: {
        'User-Agent': 'request'
      }
    };
 
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve(body);
      } else{
      	reject(err);
      }
    }
 
    request(options, callback);  
  })

	promise.then((message) => {
	  res.send(JSON.parse(message)); 
	})
	.catch((message) => {
		console.log(message);
	})
}

app.get('/name', function (req, res) {
	getData('https://api.github.com/search/users?q=user:tom', res);
})

app.get('/repositries', function (req, res) {
	getData('https://api.github.com/search/repositories?q=user:tom', res);
})

app.get('/commits', function (req, res) {
	getData('https://api.github.com/search/commits?q=repo:octocat/Spoon-Knife+css', res);
})

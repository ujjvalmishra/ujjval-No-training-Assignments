const request = require('request');
const express = require("express");
const app = express();

app.listen(3000, function () {
 console.log("App listening on port 3000!");
});

function getData(path){
	let promise = new Promise((resolve, reject) => {
    request(path, { json: true }, (err, res, body) => {
      if (err) { 
  	    reject(err); 
      } else{
         resolve(body);
      }
    })  
  })

	promise.then((message) => {
	  res.send(message); 
	})
}

app.get('/name', function (req, res) {
	getData('https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000');
})

app.get('/repositries', function (req, res) {
	getData('https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000');
})

app.get('/commits', function (req, res) {
	getData('https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000');
})

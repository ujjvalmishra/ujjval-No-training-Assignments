let obj = {
  checkLogin : function(req, res, next) {
	  let header = req.headers;
	  if(header['username'] === 'ujjval' && header['password'] === 'mishra'){
	    next();
	  }
	  else{
	    console.log("not found");
	  }
	}
};

module.exports = obj;
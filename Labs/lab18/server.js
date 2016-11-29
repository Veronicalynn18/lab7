var myFav = require('./fav');
var http= require ('http');
      http.createServer(function(request, response) {
        response.writeHead(200, { "Content-type": "text/plain" });

        var print = myFav.tvTheme();
        response.write(print);
        response.end()
      }).listen(8888);

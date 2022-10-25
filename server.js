const { response } = require('express')
const http = require('http')

const server = http.createServer((request, response) => {
    console.log(request.url)

    if(request.url === '/'){
        response.write('Welcome')
        reaponse.end();
    }
    else{
        response.statusCode = 404;
        response.write('page not found');
        response.end();
    }
})
server.listen(3000);
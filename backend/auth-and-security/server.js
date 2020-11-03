const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res, error) => {
    if (error) {
        console.log('Sorry...auth and security service NOT WORKING.')
    }
});

server.listen(port, () => {
    console.log(`Auth and Security service running on port ${port}...`)
});
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Đọc file index.html và gửi nó về client
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
        }
        res.end();
    });
});

const port = process.env.PORT || 2004;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

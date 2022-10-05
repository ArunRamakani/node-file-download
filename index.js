const express = require('express');
const app = express();
const port = 9000;

const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');

const file = fs.createWriteStream("/data/file.jpg");
const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
   response.pipe(file);

   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Download Completed");
   });
});

app.get('/', (req, res) => {
    res.send('<h1>Hello World from Docker and Node.js!</h1>');
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
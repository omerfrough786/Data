const express = require("express");
const path = require("path");

const morgan = require("morgan");

const app = express();

const port = 8080;
app.use(morgan("dev"));

const server = app.use((req, res) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  let extName = path.extname(filePath);

  let contentType = "text/html";

  switch (extName) {
    case ".css":
      contentType = "text/css";
      break;

    case ".png":
      contentType = "image/png";
      break;

    case ".js":
      contentType = "text/javascript";
      break;

    case ".json":
      contentType = "application/json";
      break;
  }

  if (contentType == "text/html" && extName == "") filePath += ".html";

  morgan.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, {
              "Content-Type": "text/html",
            });
            res.end(content, "utf8");
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server Error : ${err.code}`);
      }
    } else {
      res.writeHead(200, {
        "Content-Type": contentType,
      });
      res.end(content, "utf8");
    }
  });
});

server.listen(port, () =>
  console.log(`Application is listning to the port ${port}`)
);

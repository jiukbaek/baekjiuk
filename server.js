import express from "express";
import path from "path";
import favicon from "serve-favicon";

const server = express();

server.use(favicon("static/icons/favicon.ico"));
server.use(express.static(path.join(__dirname, "dist")));
server.use("/static", express.static(path.join(__dirname, "static")));

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

server.listen(80, () => console.log(`Start server`));

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send({ Message: "Hello from Bhuvnesh Sanathara" });
});

app.listen(port, () => {
  console.log(`Port is listening on ${port}`);
});

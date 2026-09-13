const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<h1>Hello World! Node.js App Running on AWS CodeBuild & ECS</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

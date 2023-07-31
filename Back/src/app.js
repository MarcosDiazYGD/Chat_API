const express = require('express');
const responses = require('./utils/responses');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  responses.success({
    res,
    status: 200,
    message: "Server initialized successfully",
    data: {
      // ROUTES
    }
  })
})

const PORT = 9000

app.listen( PORT, () => {
  console.log('Server listening on port ' + PORT)
})

const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const db = "jira-clone";

// Middleware
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// Db connection 
require('./config/mongoose.config')(db);

// Routes
require('./routes/task.routes')(app);

// Server
app.listen(port, () => console.log(`Listening on port: ${port} :)`))
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

//middleware
app.use(express.json());
app.use(express.static("./public"));

//routes
app.use("/api/v1/tasks", tasks);

const port = process.env.PORT || 3000;

// connect to the db
const start = async () => {
  try {
    await connectDB();
    //@ts-ignore
    app.listen(port, console.log(`Server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

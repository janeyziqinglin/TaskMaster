const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server Running on port ${PORT}`);
//   });

// // Middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// //create a task
// app.post("/api/tasks", async(req,res) =>{
//     try {
//         const task = await Task.create(req.body);
//         res.status(200).json(task);
//     } catch (error) {
//         res.status(200).json({msg: error.message});
//     }
// });


// Connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
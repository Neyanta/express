const express = require("express");
const path = require("path");
const app = express();
const members = require("./Members");

// 1NORMAL
// app.get('/',function(req,res){

// })
//2ARROW
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// 3SET static folder
// app.use(express.static(path.join(__dirname, "public")));
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`sever running on ${PORT}`);
// });
// 4ROUTING

app.get("/add/:num1/:num2", (req, res) => {
  var number1 = parseInt(req.params.num1);
  var number2 = parseInt(req.params.num2);
  console.log(number1);
  console.log(number2);
  console.log(number1 + number2);
  res.sendStatus(number1 + number2);
});
app.get("/subtract/:num1/:num2", (req, res) => {
  var number1 = req.params.num1;
  var number2 = req.params.num2;
  console.log(number1);
  console.log(number2);
  console.log(number1 - number2);
  var number3 = number1 - number2;
  res.send(number3);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`sever running on ${PORT}`);
});

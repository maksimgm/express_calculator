var express = require('express');
  app = express();

app.set('view engine','ejs');

// var operators = {
//   "add":"+",
//   "subtract":"-",
//   "multiply":"*",
//   "divide":"/"
// };


app.get('/:op/:a/:b',function(req,res){
  if(req.params.op === "add") {
    var c = parseFloat(req.params.a) + parseFloat(req.params.b);
    res.render("calculator",{op:c.toString()});
  }else if(req.params.op === "subtract"){
    var s = parseFloat(req.params.a) - parseFloat(req.params.b);
    res.render("calculator",{op:s.toString()});
  } else if(req.params.op === "multiply") {
    var m = parseFloat(req.params.a) * parseFloat(req.params.b);
    res.render("calculator",{op:m.toString()});
  }else if(req.params.op === "divide"){
    var d = parseFloat(req.params.a) / parseFloat(req.params.b);
    res.render("calculator",{op:d.toString()});
  } 


  // var conversion = operators.replace(/"/g, "");
  // var c = parseFloat(req.params.a) + conversion[req.params.op] + parseFloat(req.params.b);
  // console.log(c);
  // console.log(req.params.op);
  // res.render("calculator",{op:c});
  // console.log("params", req.params);
  // res.send(req.params.op);
});



// app.get('/add/:a/:b',function(req,res){
//   var c = parseFloat(req.params.a) + parseFloat(req.params.b);
//   res.render("calculator",{add:c});

// });


// app.get('/subtract/:a/:b',function(req,res){
//   var c = parseFloat(req.params.a) - parseFloat(req.params.b);
//   res.render("calculator",{subtract:c});
//   // parse float a + b
//   // res.render{};
// });


// app.get('/multiply/:a/:b',function(req,res){
//   var c = parseFloat(req.params.a) * parseFloat(req.params.b);
//   res.render("calculator",{multiply:c});

// });


// app.get('/divide/:a/:b',function(req,res){
//   var c = parseFloat(req.params.a) / parseFloat(req.params.b);
//   res.render("calculator",{divide:c});

// });


app.listen(3000,function(){
  console.log("server is running on port 3000");
});
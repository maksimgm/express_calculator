var express = require('express');
  app = express();

app.get('/add/:a/:b',function(req,res){
  var c = parseFloat(req.params.a) + parseFloat(req.params.b);
  res.render("calculator",{add:c});

});


app.get('/subtract/:a/:b',function(req,res){
  var c = parseFloat(req.params.a) - parseFloat(req.params.b);
  res.render("calculator",{subtract:c});
  // parse float a + b
  // res.render{};
});


app.get('/multiply/:a/:b',function(req,res){
  var c = parseFloat(req.params.a) * parseFloat(req.params.b);
  res.render("calculator",{multiply:c});

});


app.get('/divide/:a/:b',function(req,res){
  var c = parseFloat(req.params.a) / parseFloat(req.params.b);
  res.render("calculator",{divide:c});

});


app.listen(3000,function(){
  console.log("server is running on port 3000");
});
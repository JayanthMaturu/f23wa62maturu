var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var x;
  var random=Math.random().toFixed(2);
  console.log(req.query.x);
  x = req.query.x;

  if (x == undefined) {
    x = random;
  }

  res.render('computation', { 
    title: 'computation',
    value1: `Math.pow() applied to ` + x + ` is ${Math.pow(x,x).toFixed(2)}`,
    value2: `Math.sign() applied to ` + x + ` is ${Math.sign(x)}`,
    value3: `Math.tanh() applied to ` + x + ` is ${Math.tanh(x).toFixed(2)}`,
    value4: `Math.trunc() applied to ` + x + ` is ${Math.trunc(x)}`  
  });
});

module.exports = router;

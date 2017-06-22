var express = require('express');
var router = express.Router();

var URL="mongodb://adhv_45:Anil%4097832@ds131492.mlab.com:31492/adhv45"

const db= require('monk')(URL)

const docs=db.get('anilc')

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });

  docs.find({}, function (err,docs) {
      if(err) console.log(err)
      else {
          res.json(docs[0]);
      }
    })
});

router.get('/Wel', function(req, res, next) {
    //res.send('what is the problem');
    docs.insert({"name":"Amit","class":"M.tech"},function( err, docs) {
        if(err) console.log(err)
        else{
            res.send("successfulll!!");
        }

    })
});

module.exports = router;

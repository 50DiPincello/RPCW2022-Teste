var express = require('express');
var router = express.Router();
var axios = require('axios');

apikey = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTRlY2VhNmI1ZDVjMjQ3NmNmMDhiMSIsImxldmVsIjozLjUsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InJwY3cyMDIyQGdtYWlsLmNvbSIsImlhdCI6MTY1NDAxNDg5NSwiZXhwIjoxNjU0MDQzNjk1fQ.TW3YPIla6gpfrW8xnCnVykbV4pucjvc0EWxySZ0oxi3e2iRULuSlcr7v91oeB1YIgxHsZqRWBNUQk93Y5rRU63LvRxQC0qkx9qLwcTkStXleLNk2oEdN_v_1x4wIPCZ-c96fvQfdyfnBqyY0FIXPNX_kscduHLk_tQQiI3QOWn8kKQYK_gIe4WNH0PLxQPXwAE98dJ2bgNopjx70dprU_X4tMpQYpEQDWAZ0GnRy0EfUG6tqEzFbEJBq1SwzrnMgDUQ8febfjr5bfxG461nCHQAOpuYbeU-zSAQBWMG53kiIKZZbc3YgLNj-MIh8SCJGY6GiFQgImXb21xpUNzW0HQ"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Página Inicial' });
});

router.get('/classes', function(req, res, next) {
  axios.get("http://clav-api.di.uminho.pt/v2/classes?nivel=1&apikey=" + apikey)
    .then(response => {
      var lista = response.data
      //dados -> o nome que passa para o pug
      // lista -> o que se obtem da response
      res.render('nivel1', {dados: lista})
      })
      .catch(function(erro){
        res.render('error', { erro: 'erro' });
      })
});


router.get('/classes/:code', function(req, res, next) {
  al = req.params.code
  axios.get("http://clav-api.di.uminho.pt/v2/classes/c" + al + "?apikey=" + apikey)
    .then(response => {
      var lista = response.data
      //dados -> o nome que passa para o pug
      // lista -> o que se obtem da response
      res.render('classes', {dados: lista})
      })
      .catch(function(erro){
        res.render('error', { erro: 'erro' });
      })
});

router.get('/termos', function(req, res, next) {
  al = req.params.code
  axios.get("http://clav-api.di.uminho.pt/v2/termosIndice?apikey=" + apikey)
    .then(response => {
      var lista = response.data
      //dados -> o nome que passa para o pug
      // lista -> o que se obtem da response
      res.render('indice', {dados: lista})
      })
      .catch(function(erro){
        res.render('error', { erro: 'erro' });
      })
});

module.exports = router;

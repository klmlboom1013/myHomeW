module.exports = function(app)
{
      app.get('/',function(req,res){ res.render('index.html') });
      app.get('/about',function(req,res){ res.render('about.html'); });

      let d_ch2_1 = 'chapters/chapter-02/01-declaring-variables';
      app.get('/ch2-01',function(req,res){ res.render(d_ch2_1 + '/01-const.html'); });
      app.get('/ch2-02',function(req,res){ res.render(d_ch2_1 + '/02-const.html'); });
      
      app.get('/ch2-02',function(req,res){ res.render(d_ch2_1 + '/02-const.html'); });
      app.get('/ch2-02',function(req,res){ res.render(d_ch2_1 + '/02-const.html'); });
      app.get('/ch2-02',function(req,res){ res.render(d_ch2_1 + '/02-const.html'); });
      app.get('/ch2-02',function(req,res){ res.render(d_ch2_1 + '/02-const.html'); });
      
      app.get('/ch2-02',function(req,res){ res.render(d_ch2_1 + '/02-const.html'); });
      app.get('/ch2-02',function(req,res){ res.render(d_ch2_1 + '/02-const.html'); });
      app.get('/ch2-02',function(req,res){ res.render(d_ch2_1 + '/02-const.html'); });
      app.get('/ch2-02',function(req,res){ res.render(d_ch2_1 + '/02-const.html'); });
}
